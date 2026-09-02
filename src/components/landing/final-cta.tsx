import { Mail, Phone } from "lucide-react";
import { BOOKING_URL, CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/site-config";
import { ButtonLink, Section } from "./ui";
import { ContactForm } from "./contact-form";

export function FinalCta() {
  return (
    <Section id="kontakt" tone="paper" aria-labelledby="contact-heading" className="overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,hsl(var(--lp-brand-soft))_0%,transparent_65%)]"
      />
      <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-ink">Kontakt</p>
          <h2
            id="contact-heading"
            className="mt-3 text-balance font-display text-3xl font-medium leading-[1.1] tracking-tight text-ink sm:text-4xl md:text-5xl"
          >
            Prowadź całą agencję w jednym systemie
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-muted">
            Umów krótkie demo na przykładzie swojej agencji — castingowej,
            statystów czy hostess. Pokażemy, jak PlanOS prowadzi projekt od naboru
            do rozliczenia i jak Twoje dane pozostają oddzielone i tylko Twoje.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={BOOKING_URL} target="_blank" rel="noopener noreferrer" size="lg">
              Umów demo
            </ButtonLink>
            <ButtonLink href={`mailto:${CONTACT_EMAIL}`} variant="outline" size="lg">
              Napisz do nas
            </ButtonLink>
          </div>

          <div className="mt-8 space-y-3">
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

          <p className="mt-8 text-sm text-ink-faint">Zespół PlanOS odpowiada w ciągu 1–2 dni roboczych.</p>
        </div>

        <ContactForm />
      </div>
    </Section>
  );
}
