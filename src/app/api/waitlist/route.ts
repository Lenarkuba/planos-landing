import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";
import { createAdminClient } from "@/lib/supabase-admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, max: number): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim().slice(0, max);
  return trimmed.length > 0 ? trimmed : null;
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const email = (clean(body.email, 254) ?? "").toLowerCase();
  const agency = clean(body.agency, 200);
  const city = clean(body.city, 120);
  const consent = body.consent === true;
  // Honeypot: bots fill hidden fields. Real users leave it empty.
  const honeypot = clean(body.company, 200);

  if (honeypot) {
    // Silently accept to not tip off the bot.
    return NextResponse.json({ ok: true });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }
  if (!consent) {
    return NextResponse.json({ error: "consent_required" }, { status: 400 });
  }

  let isDuplicate = false;
  try {
    const supabase = createAdminClient();
    const userAgent = req.headers.get("user-agent")?.slice(0, 400) ?? null;

    const { error } = await supabase.from("waitlist").insert({
      email,
      agency,
      city,
      consent,
      user_agent: userAgent,
      source: "dla-statystow",
    });

    if (error) {
      // 23505 = unique violation (already signed up). Treat as success.
      if (error.code === "23505") {
        isDuplicate = true;
      } else {
        console.error("[waitlist] insert error", error);
        return NextResponse.json({ error: "server_error" }, { status: 500 });
      }
    }
  } catch (err) {
    console.error("[waitlist] unexpected error", err);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }

  if (!isDuplicate) {
    // Best-effort owner notification — never block the signup on email failure.
    try {
      const resendKey = process.env.RESEND_API_KEY;
      const from = process.env.EMAIL_FROM;
      const to = process.env.WAITLIST_NOTIFY_TO;
      if (resendKey && from && to) {
        const resend = new Resend(resendKey);
        await resend.emails.send({
          from,
          to,
          subject: `Nowy zapis na waitliste statystow${agency ? ` — ${agency}` : ""}`,
          text: [
            "Nowy zapis na liste oczekujacych (strona dla statystow):",
            "",
            `E-mail:  ${email}`,
            `Agencja: ${agency ?? "(nie podano)"}`,
            `Miasto:  ${city ?? "(nie podano)"}`,
            "",
            "— PlanOS",
          ].join("\n"),
        });
      }
    } catch (err) {
      console.error("[waitlist] notify error", err);
    }
  }

  return NextResponse.json({ ok: true, duplicate: isDuplicate });
}
