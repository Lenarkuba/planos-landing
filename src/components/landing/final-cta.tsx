import { Mail, Phone } from "lucide-react";
import { BOOKING_URL, CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/site-config";
import { ButtonLink, Section } from "./ui";

export function FinalCta() {
  return (
    <Section id="kontakt" tone="paper" aria-labelledby="contact-heading" className="overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,hsl(var(--lp-brand-soft))_0%,transparent_65%)]"
      />
      <div className="relative mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-ink">Kontakt</p>
        <h2
          id="contact-heading"
          className="mt-3 text-balance font-display text-3xl font-semibold leading-[1.12] tracking-tight text-ink sm:text-4xl md:text-5xl"
        >
          Od naboru do pliku dla księgowej. Bez trzeciego arkusza.
        </h2>
        <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-muted">
          15 minut na przykładzie Twojej agencji: castingowej, statystów albo
          hostess. Zobaczysz nabór, obecność i plik do rozliczenia. Bez
          zobowiązań.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href={BOOKING_URL} target="_blank" rel="noopener noreferrer" size="lg">
            Umów 15 min demo
          </ButtonLink>
          <ButtonLink href={`mailto:${CONTACT_EMAIL}`} variant="outline" size="lg">
            Napisz do mnie
          </ButtonLink>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-8">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="flex items-center gap-2.5 text-[0.95rem] font-medium text-ink hover:text-brand-ink"
          >
            <Mail aria-hidden="true" className="h-4 w-4 text-brand" />
            {CONTACT_EMAIL}
          </a>
          <a
            href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
            className="flex items-center gap-2.5 text-[0.95rem] font-medium text-ink hover:text-brand-ink"
          >
            <Phone aria-hidden="true" className="h-4 w-4 text-brand" />
            {CONTACT_PHONE}
          </a>
        </div>

        <p className="mt-8 text-sm text-ink-faint">Odpowiadam w ciągu 1–2 dni roboczych.</p>
      </div>
    </Section>
  );
}
