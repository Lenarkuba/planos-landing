import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";

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

  const name = clean(body.name, 200);
  const agency = clean(body.agency, 200);
  const email = (clean(body.email, 254) ?? "").toLowerCase();
  const phone = clean(body.phone, 40);
  const message = clean(body.message, 4000);
  // Honeypot: bots fill hidden fields. Real users leave it empty.
  const honeypot = clean(body.company, 200);

  if (honeypot) {
    // Silently accept to not tip off the bot.
    return NextResponse.json({ ok: true });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }
  if (!name || !agency || !message) {
    return NextResponse.json({ error: "missing_fields" }, { status: 400 });
  }

  const resendKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  const to = process.env.CONTACT_NOTIFY_TO ?? process.env.WAITLIST_NOTIFY_TO;

  if (!resendKey || !from || !to) {
    console.error("[kontakt] missing email configuration (RESEND_API_KEY / EMAIL_FROM / CONTACT_NOTIFY_TO)");
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }

  try {
    const resend = new Resend(resendKey);
    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Zapytanie o demo PlanOS — ${agency}`,
      text: [
        "Nowe zapytanie z formularza na stronie glownej:",
        "",
        `Imie i nazwisko: ${name}`,
        `Agencja:         ${agency}`,
        `E-mail:          ${email}`,
        `Telefon:         ${phone ?? "(nie podano)"}`,
        "",
        "Wiadomosc:",
        message,
        "",
        "— PlanOS",
      ].join("\n"),
    });
  } catch (err) {
    console.error("[kontakt] send error", err);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
