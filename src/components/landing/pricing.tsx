"use client";

import { useState } from "react";
import { Check, Moon, Rocket } from "lucide-react";
import { BOOKING_URL } from "@/lib/site-config";
import { TrustLine } from "./trust-line";

const PLAN_FEATURES = [
  "Baza talentów z aktualnymi profilami",
  "Castingi, formularze zgłoszeń i grupy castingowe",
  "Panel selekcji dla reżysera",
  "Dni zdjęciowe, potwierdzenia i obecności",
  "Statystyki rzetelności talentów",
  "Eksport ZUS z historii nagrań",
  "Zgody RODO i usuwanie danych",
  "Pełny eksport danych w każdej chwili",
  "Bezpośrednie wsparcie twórcy systemu",
];

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section
      id="cennik"
      className="scroll-mt-20 bg-white py-16 md:py-24"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">
            Cennik
          </p>
          <h2
            id="pricing-heading"
            className="mt-3 text-balance text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
          >
            Przejrzysty cennik, bez ukrytych kosztów
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Stała opłata za całą agencję — nie płacisz od użytkownika.
          </p>

          {/* Billing toggle */}
          <div
            className="mt-8 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 p-1"
            role="group"
            aria-label="Wybór okresu rozliczenia"
          >
            <button
              type="button"
              onClick={() => setAnnual(false)}
              aria-pressed={!annual}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 ${
                !annual ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Miesięcznie
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              aria-pressed={annual}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 ${
                annual ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Rocznie
              <span className="ml-2 rounded-full bg-emerald-100 px-2 py-0.5 text-[0.7rem] font-bold text-emerald-700">
                2 mies. gratis
              </span>
            </button>
          </div>
        </div>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-[1.2fr_1fr]">
          {/* Main plan */}
          <article className="relative rounded-2xl border-2 border-blue-700 bg-white p-8 shadow-[0_30px_70px_-35px_rgba(29,78,216,0.45)]">
            <span className="absolute -top-3.5 left-8 rounded-full bg-gradient-to-r from-blue-700 to-indigo-600 px-3.5 py-1 text-xs font-semibold text-white">
              Pełny system dla Twojej agencji
            </span>
            <h3 className="text-xl font-semibold text-slate-900">PlanOS</h3>
            <p className="mt-1 text-sm text-slate-500">
              Cała agencja, bez limitu użytkowników
            </p>

            <p className="mt-5 flex items-baseline gap-2">
              <span className="text-5xl font-bold tracking-tight text-slate-900">
                {annual ? "416" : "499"} zł
              </span>
              <span className="text-base font-medium text-slate-500">/ mies.</span>
            </p>
            <p className="mt-1.5 min-h-[1.5rem] text-sm text-slate-500">
              {annual
                ? "4 990 zł rozliczane raz w roku — płacisz w dobrym miesiącu, korzystasz cały rok, także w spokojniejszych okresach."
                : "Rozliczenie co miesiąc, bez zobowiązań."}
            </p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {PLAN_FEATURES.map((feature) => (
                <li key={feature} className="flex gap-2.5 text-[0.92rem] leading-snug text-slate-700">
                  <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-700 to-indigo-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-700/20 transition-all hover:shadow-xl hover:shadow-blue-700/30 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            >
              Umów demo
            </a>
          </article>

          {/* Side cards */}
          <div className="flex flex-col gap-6">
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white ring-1 ring-slate-200">
                  <Rocket aria-hidden="true" className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Wdrożenie</h3>
                  <p className="text-sm text-slate-500">jednorazowo</p>
                </div>
              </div>
              <p className="mt-4 text-2xl font-bold tracking-tight text-slate-900">1500 zł</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Migracja Twojej bazy, konfiguracja RODO i eksportu ZUS,
                szkolenie zespołu. Nie musisz być osobą techniczną — wszystko
                przygotowujemy za Ciebie.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white ring-1 ring-slate-200">
                  <Moon aria-hidden="true" className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Tryb uśpienia</h3>
                  <p className="text-sm text-slate-500">na spokojniejsze okresy</p>
                </div>
              </div>
              <p className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
                149 zł <span className="text-sm font-medium text-slate-500">/ mies.</span>
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Mniej projektów? Przełącz konto w tryb tylko-do-odczytu. Twoje
                dane są bezpieczne i gotowe, gdy wracasz do produkcji.
              </p>
            </article>
          </div>
        </div>

        {/* Founders offer */}
        <div className="mt-8 flex flex-col items-start gap-5 rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50/60 p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Oferta dla agencji-założycieli
            </h3>
            <p className="mt-1.5 max-w-2xl text-[0.95rem] leading-relaxed text-slate-700">
              Pierwsze agencje otrzymują stałą, obniżoną stawkę na zawsze.
              Liczba miejsc ograniczona — zgłoszenia do [DATE].
            </p>
          </div>
          <a
            href="#kontakt"
            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          >
            Zapytaj o ofertę założycielską
          </a>
        </div>

        <TrustLine className="mt-8 justify-center" />
      </div>
    </section>
  );
}
