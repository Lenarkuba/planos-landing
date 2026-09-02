"use client";

import { useState } from "react";
import { Building2, Check, Moon, Rocket } from "lucide-react";
import { BOOKING_URL, CONTACT_EMAIL } from "@/lib/site-config";
import { ButtonLink, Card, IconBadge, Section, SectionHeader, cn } from "./ui";

/** Tier limits — defaults until they are fixed. */
const TALENT_LIMIT = "1000";

const INCLUDED = [
  "Wszyscy użytkownicy biura w cenie",
  `Baza do ${TALENT_LIMIT} aktywnych talentów`,
  "Castingi, nabory, formularze zgłoszeń i grupy",
  "Panel wyboru dla klienta (link bez logowania)",
  "Dni pracy, potwierdzenia i listy obecności",
  "Statystyki rzetelności talentów",
  "Pliki dla księgowości i eksport ZUS",
  "Zgody RODO, usuwanie danych i rejestr dostępu",
  "Pełny eksport danych w każdej chwili",
  "Bezpośrednie wsparcie zespołu PlanOS",
];

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <Section id="cennik" tone="paper" aria-labelledby="pricing-heading">
      <SectionHeader
        eyebrow="Cennik"
        title="Jedna opłata za całą agencję. Bez opłat za użytkownika."
        description="Jedna stawka za zespół biura — bez opłaty za osobę. Cena regularna to 998 zł/mies. Pierwsze dziesięć agencji płaci połowę: 499 zł/mies."
      />

      {/* Billing toggle */}
      <div className="mt-8 flex justify-center">
        <div
          className="inline-flex max-w-full flex-wrap items-center justify-center rounded-full border border-paper-border bg-paper-muted p-1"
          role="group"
          aria-label="Wybór okresu rozliczenia"
        >
          <ToggleButton active={!annual} onClick={() => setAnnual(false)}>
            Miesięcznie
          </ToggleButton>
          <ToggleButton active={annual} onClick={() => setAnnual(true)}>
            Rocznie
            <span className="ml-2 rounded-full bg-tag-green-bg px-2 py-0.5 text-[0.7rem] font-bold text-tag-green-tx">
              2 mies. gratis · wdrożenie 0 zł
            </span>
          </ToggleButton>
        </div>
      </div>

      <div
        className={cn(
          "mt-12 grid gap-6 lg:grid-cols-[1.25fr_1fr]",
          annual ? "items-start" : "items-stretch",
        )}
      >
        {/* Main price card */}
        <article
          className={cn(
            "relative flex flex-col rounded-3xl border-2 border-brand bg-paper-card p-8 shadow-card-lg md:p-10",
            !annual && "h-full",
          )}
        >
          <span className="absolute -top-3.5 left-8 rounded-full bg-brand px-3.5 py-1 text-xs font-semibold text-brand-foreground">
            Cena startowa dla pierwszych 10 agencji
          </span>

          <p className="mt-2 flex items-baseline gap-2 text-lg font-medium text-ink-faint">
            <span className="sr-only">Cena regularna:</span>
            <s aria-hidden="true">{annual ? "832" : "998"} zł / mies.</s>
            <span className="rounded-full bg-tag-red-bg px-2 py-0.5 font-sans text-xs font-bold text-tag-red-tx">
              −50%
            </span>
          </p>
          <p className="mt-1 flex items-baseline gap-2">
            <span className="font-display text-6xl font-medium tracking-tight text-ink md:text-7xl">
              {annual ? "416" : "499"} zł
            </span>
            <span className="text-lg font-medium text-ink-muted">/ mies.</span>
          </p>
          <p className="mt-3 text-pretty text-ink-muted">
            Po pierwszych 10 wdrożeniach cena standardowa wzrośnie. Agencje,
            które dołączą wcześniej, zachowują cenę startową.
          </p>
          <p className="mt-3 min-h-[3rem] text-pretty text-ink-muted">
            {annual
              ? "4 990 zł rozliczane raz w roku (cena regularna 9 980 zł) — płacisz w dobrym miesiącu, korzystasz cały rok. Wdrożenie (migracja bazy, RODO, ZUS, szkolenie) w cenie: 0 zł."
              : "Bez liczenia użytkowników. Rozliczenie co miesiąc, bez zobowiązań."}
          </p>

          <div className="mt-8 border-t border-paper-border pt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
              W cenie
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {INCLUDED.map((item) => (
                <li key={item} className="flex gap-2.5 text-[0.92rem] leading-snug text-ink">
                  <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={cn("pt-9", !annual && "mt-auto")}>
            <ButtonLink
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="w-full"
            >
              Umów demo
            </ButtonLink>
            <p className="mt-3 text-center text-sm text-ink-faint">
              Zobaczysz system na przykładzie swojej agencji. Bez zobowiązań.
            </p>
          </div>
        </article>

        {/* Side cards */}
        <div className={cn("flex flex-col gap-5", !annual && "h-full")}>
          <Card className={cn(!annual && "flex flex-1 flex-col")}>
            <div className="flex items-center gap-3">
              <IconBadge>
                <Rocket aria-hidden="true" className="h-5 w-5" />
              </IconBadge>
              <div>
                <h3 className="font-semibold text-ink">Wdrożenie</h3>
                <p className="text-sm text-ink-muted">
                  {annual ? "darmowe przy płatności rocznej" : "jednorazowo"}
                </p>
              </div>
            </div>
            <p className="mt-4 flex items-baseline gap-2 font-display text-3xl font-semibold tracking-tight text-ink">
              {annual ? "0 zł" : "1499 zł"}
              {annual && (
                <span className="rounded-full bg-tag-green-bg px-2 py-0.5 font-sans text-[0.7rem] font-bold text-tag-green-tx">
                  gratis
                </span>
              )}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              Migracja Twojej bazy, konfiguracja RODO i eksportu ZUS, szkolenie
              zespołu. {annual
                ? "Przy rozliczeniu rocznym wdrożenie jest w cenie — 0 zł."
                : "1499 zł przy rozliczeniu miesięcznym. Przy płatności rocznej: 0 zł."}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              Baza zmigrowana i zespół przeszkolony w 10 dni roboczych od
              przekazania danych — albo wdrożenie jest bezpłatne.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              Pierwszy miesiąc abonamentu zwracamy bez pytań, jeśli zrezygnujesz.
            </p>
          </Card>

          {!annual && (
            <Card className={cn(!annual && "flex flex-1 flex-col")}>
              <div className="flex items-center gap-3">
                <IconBadge>
                  <Moon aria-hidden="true" className="h-5 w-5" />
                </IconBadge>
                <div>
                  <h3 className="font-semibold text-ink">Tryb uśpienia</h3>
                  <p className="text-sm text-ink-muted">tylko przy rozliczeniu miesięcznym</p>
                </div>
              </div>
              <p className="mt-4 font-display text-3xl font-medium tracking-tight text-ink">
                149 zł <span className="font-sans text-sm font-medium text-ink-muted">/ mies.</span>
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Mniej projektów poza sezonem? Przełącz konto w tryb tylko-do-odczytu.
                Dane są bezpieczne i gotowe, gdy wracasz do produkcji lub sezonu eventowego.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                Dostępny w planie miesięcznym.
              </p>
            </Card>
          )}

          <Card className={cn("bg-paper-muted", !annual && "flex flex-1 flex-col")}>
            <div className="flex items-center gap-3">
              <IconBadge className="bg-paper-card">
                <Building2 aria-hidden="true" className="h-5 w-5" />
              </IconBadge>
              <h3 className="font-semibold text-ink">Duża agencja lub kilka marek</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              Powyżej {TALENT_LIMIT} aktywnych talentów lub więcej niż jedna
              marka. Napisz, ustalimy zakres.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className={cn(
                "inline-flex text-sm font-semibold text-brand-ink hover:text-brand",
                annual ? "mt-4" : "mt-auto pt-4",
              )}
            >
              Napisz do nas →
            </a>
          </Card>
        </div>
      </div>
    </Section>
  );
}

function ToggleButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
        active ? "bg-paper-card text-ink shadow-sm" : "text-ink-muted hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}
