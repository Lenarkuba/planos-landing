"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-lg border border-paper-border bg-paper px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20";

/**
 * Talent waitlist form (/dla-statystow). Styled with the landing v2 paper/brand
 * tokens. Posts e-mail + agency + city to /api/waitlist (no referral fields).
 */
export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [agency, setAgency] = useState("");
  const [city, setCity] = useState("");
  const [consent, setConsent] = useState(false);
  const [company, setCompany] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrorMsg("Podaj poprawny adres e-mail.");
      return;
    }
    if (!consent) {
      setErrorMsg("Zaznacz zgodę, żebyśmy mogli się odezwać.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, agency, city, consent, company }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        if (data?.error === "invalid_email") {
          setErrorMsg("Podaj poprawny adres e-mail.");
        } else if (data?.error === "consent_required") {
          setErrorMsg("Zaznacz zgodę, żebyśmy mogli się odezwać.");
        } else {
          setErrorMsg("Coś poszło nie tak. Spróbuj ponownie za chwilę.");
        }
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setErrorMsg("Brak połączenia. Sprawdź internet i spróbuj ponownie.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-paper-border bg-paper-card p-8 text-center shadow-card md:p-10">
        <CheckCircle2 aria-hidden="true" className="mx-auto h-10 w-10 text-brand" />
        <h3 className="mt-4 font-display text-2xl font-semibold text-ink">Jesteś na liście!</h3>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">
          Odezwiemy się, gdy PlanOS będzie dostępny w Twojej agencji. Do tego czasu nic nie
          musisz robić — a Twój e-mail wykorzystamy tylko do tej jednej wiadomości.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-2xl border border-paper-border bg-paper-card p-6 shadow-card md:p-8"
      aria-label="Zapis na listę oczekujących"
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="wl-email" className="text-sm font-medium text-ink">
          Twój e-mail <span aria-hidden="true" className="text-brand-ink">*</span>
        </label>
        <input
          id="wl-email"
          type="email"
          required
          autoComplete="email"
          placeholder="np. jan.kowalski@email.pl"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="wl-agency" className="text-sm font-medium text-ink">
          Z którą agencją współpracujesz?
        </label>
        <input
          id="wl-agency"
          type="text"
          placeholder="Nazwa agencji (lub „nie wiem / kilka”)"
          value={agency}
          onChange={(e) => setAgency(e.target.value)}
          className={inputClass}
        />
        <span className="text-xs text-ink-faint">
          Dzięki temu damy Ci znać, gdy właśnie Twoja agencja uruchomi PlanOS.
        </span>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="wl-city" className="text-sm font-medium text-ink">
          Miasto / region <span className="font-normal text-ink-faint">(opcjonalnie)</span>
        </label>
        <input
          id="wl-city"
          type="text"
          placeholder="np. Warszawa"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className={inputClass}
        />
      </div>

      {/* Honeypot — ukryte przed użytkownikami, łapie boty */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="wl-company">Firma</label>
        <input
          id="wl-company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      <label className="flex cursor-pointer items-start gap-2.5 text-sm leading-relaxed text-ink-muted">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 accent-brand"
        />
        <span>
          Chcę dostać informację, gdy PlanOS będzie dostępny. Zgadzam się na kontakt mailowy w tej
          sprawie. W każdej chwili mogę się wypisać.
        </span>
      </label>

      {errorMsg && (
        <p className="text-sm text-tag-red-tx" role="alert">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex h-12 items-center justify-center rounded-xl bg-brand px-8 text-base font-semibold text-brand-foreground shadow-brand transition-all hover:bg-brand-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Zapisujemy…" : "Zapisz się na listę"}
      </button>

      <p className="text-center text-xs leading-relaxed text-ink-faint">
        Zero spamu. Tylko jedna wiadomość, gdy ruszamy. Szczegóły w{" "}
        <Link href="/privacy" className="underline hover:text-ink">
          polityce prywatności
        </Link>
        .
      </p>
    </form>
  );
}
