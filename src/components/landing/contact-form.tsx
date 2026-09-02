"use client";

import { useState } from "react";
import Link from "next/link";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-[0.95rem] text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20";

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
      <div className="rounded-xl border border-slate-200 bg-white p-8 text-center md:p-10">
        <h3 className="text-2xl font-bold text-slate-900">Dziękuję za wiadomość</h3>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-slate-600">
          Odezwę się w ciągu 1–2 dni roboczych. Jeśli sprawa jest pilna,
          skorzystaj z telefonu lub umów demo bezpośrednio w kalendarzu.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 md:p-8"
      aria-label="Formularz kontaktowy"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-name" className="text-sm font-medium text-slate-800">
            Imię i nazwisko <span aria-hidden="true" className="text-blue-700">*</span>
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
          <label htmlFor="cf-agency" className="text-sm font-medium text-slate-800">
            Nazwa agencji <span aria-hidden="true" className="text-blue-700">*</span>
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
          <label htmlFor="cf-email" className="text-sm font-medium text-slate-800">
            E-mail <span aria-hidden="true" className="text-blue-700">*</span>
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
          <label htmlFor="cf-phone" className="text-sm font-medium text-slate-800">
            Telefon <span className="font-normal text-slate-400">(opcjonalnie)</span>
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
        <label htmlFor="cf-message" className="text-sm font-medium text-slate-800">
          Wiadomość <span aria-hidden="true" className="text-blue-700">*</span>
        </label>
        <textarea
          id="cf-message"
          required
          rows={4}
          placeholder="Np. chcę zobaczyć demo / pytam o ofertę założycielską / mam pytanie o bezpieczeństwo danych"
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
        <p className="text-sm text-red-600" role="alert">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Wysyłam…" : "Wyślij wiadomość"}
      </button>

      <p className="text-xs leading-relaxed text-slate-500">
        Wysyłając formularz, zgadzasz się na kontakt w sprawie PlanOS.
        Szczegóły przetwarzania danych znajdziesz w{" "}
        <Link href="/privacy" className="underline hover:text-slate-700">
          polityce prywatności
        </Link>
        .
      </p>
    </form>
  );
}
