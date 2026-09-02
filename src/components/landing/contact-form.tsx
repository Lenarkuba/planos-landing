"use client";

import { useState } from "react";
import Link from "next/link";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-lg border border-paper-border bg-paper px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20";

export function ContactForm() {
  const [name, setName] = useState("");
  const [agency, setAgency] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
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

    setStatus("loading");
    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, agency, email, phone, message, company }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        if (data?.error === "invalid_email") {
          setErrorMsg("Podaj poprawny adres e-mail.");
        } else if (data?.error === "missing_fields") {
          setErrorMsg("Uzupełnij imię i nazwisko, nazwę agencji oraz wiadomość.");
        } else {
          setErrorMsg("Coś poszło nie tak. Spróbuj ponownie za chwilę lub napisz bezpośrednio na e-mail.");
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
        <h3 className="font-display text-2xl font-semibold text-ink">Dziękujemy za wiadomość</h3>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">
          Odezwiemy się w ciągu 1–2 dni roboczych. Jeśli sprawa jest pilna,
          skorzystaj z telefonu lub umów demo bezpośrednio w kalendarzu.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-2xl border border-paper-border bg-paper-card p-6 shadow-card md:p-8"
      aria-label="Formularz kontaktowy"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-name" className="text-sm font-medium text-ink">
            Imię i nazwisko <span aria-hidden="true" className="text-brand-ink">*</span>
          </label>
          <input
            id="cf-name"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-agency" className="text-sm font-medium text-ink">
            Nazwa agencji <span aria-hidden="true" className="text-brand-ink">*</span>
          </label>
          <input
            id="cf-agency"
            type="text"
            required
            autoComplete="organization"
            value={agency}
            onChange={(e) => setAgency(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-email" className="text-sm font-medium text-ink">
            E-mail <span aria-hidden="true" className="text-brand-ink">*</span>
          </label>
          <input
            id="cf-email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-phone" className="text-sm font-medium text-ink">
            Telefon <span className="font-normal text-ink-faint">(opcjonalnie)</span>
          </label>
          <input
            id="cf-phone"
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-message" className="text-sm font-medium text-ink">
          Wiadomość <span aria-hidden="true" className="text-brand-ink">*</span>
        </label>
        <textarea
          id="cf-message"
          required
          rows={4}
          placeholder="Np. chcę zobaczyć demo / mam pytanie o bezpieczeństwo danych"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClass} resize-y`}
        />
      </div>

      {/* Honeypot — ukryte przed użytkownikami, łapie boty */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="cf-company">Firma</label>
        <input
          id="cf-company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

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
        {status === "loading" ? "Wysyłam…" : "Wyślij wiadomość"}
      </button>

      <p className="text-xs leading-relaxed text-ink-faint">
        Wysyłając formularz, zgadzasz się na kontakt w sprawie PlanOS.
        Szczegóły przetwarzania danych znajdziesz w{" "}
        <Link href="/privacy" className="underline hover:text-ink">
          polityce prywatności
        </Link>
        .
      </p>
    </form>
  );
}
