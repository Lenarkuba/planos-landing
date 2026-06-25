"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

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
      <div className="rounded-2xl p-8 md:p-10 border border-[var(--green)]/40 bg-[var(--bg-card)] text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3
          className="text-2xl font-normal mb-2"
          style={{ fontFamily: "var(--serif)" }}
        >
          Jesteś na liście!
        </h3>
        <p className="text-[var(--text-muted)] text-[0.95rem] leading-[1.6]">
          Odezwiemy się, gdy PlanOS będzie dostępny dla Twojej agencji.
          <br />
          Im więcej statystów zgłosi tę samą agencję, tym szybciej ją zaprosimy —
          podeślij link znajomym z planu. 🎬
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-[var(--surface)] border border-[var(--border)] rounded-[10px] px-4 py-3 text-[0.95rem] text-[var(--text)] placeholder:text-[var(--text-dim)] outline-none transition-colors focus:border-[var(--accent)]";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl p-6 md:p-8 border border-[var(--border)] bg-[var(--bg-card)] flex flex-col gap-4"
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="wl-email" className="text-sm font-medium text-[var(--text)]">
          Twój e-mail <span className="text-[var(--accent)]">*</span>
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
        <label htmlFor="wl-agency" className="text-sm font-medium text-[var(--text)]">
          Z którą agencją współpracujesz?
        </label>
        <input
          id="wl-agency"
          type="text"
          placeholder="Nazwa agencji (lub „freelancer / nie wiem”)"
          value={agency}
          onChange={(e) => setAgency(e.target.value)}
          className={inputClass}
        />
        <span className="text-[0.78rem] text-[var(--text-dim)]">
          Zaczynamy od agencji, które statyści zgłaszają najczęściej.
        </span>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="wl-city" className="text-sm font-medium text-[var(--text)]">
          Miasto / region <span className="text-[var(--text-dim)]">(opcjonalnie)</span>
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

      <label className="flex gap-2.5 items-start cursor-pointer text-[0.85rem] text-[var(--text-muted)] leading-[1.5]">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 accent-[var(--accent)] w-4 h-4 shrink-0"
        />
        <span>
          Chcę dostać informację, gdy PlanOS będzie dostępny. Zgadzam się na kontakt
          mailowy w tej sprawie. W każdej chwili mogę się wypisać.
        </span>
      </label>

      {errorMsg && (
        <p className="text-[0.85rem] text-[var(--red)]" role="alert">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 bg-[var(--accent)] text-white py-3 px-8 rounded-[10px] font-semibold text-[0.95rem] border-none cursor-pointer transition-all hover:bg-[var(--accent-soft)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(79,124,255,0.25)] disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none"
      >
        {status === "loading" ? "Zapisuję..." : "Zapisz się na listę →"}
      </button>

      <p className="text-[0.78rem] text-[var(--text-dim)] text-center">
        Zero spamu. Tylko jedna wiadomość, gdy ruszamy.
      </p>
    </form>
  );
}
