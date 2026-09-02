import Image from "next/image";
import { CalendarCheck2, ClipboardCheck, Database, FileCheck2, ShieldCheck } from "lucide-react";
import { BOOKING_URL } from "@/lib/site-config";
import { ButtonLink } from "./ui";
import { HeroCollage } from "./hero-collage";
import kalendarzShot from "../../../public/screenshots/kalendarz.png";

/*
 * Headline alternates kept for A/B:
 *  - "Mniej administracji. Więcej realizacji."
 *  - "Centrum dowodzenia Twojej agencji"
 */

const MICRO_PROOFS = [
  { icon: Database, label: "Wdrożenie z migracją bazy" },
  { icon: ShieldCheck, label: "RODO i szyfrowany PESEL" },
  { icon: FileCheck2, label: "Pełny eksport w każdej chwili" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-paper-border">
      {/* Warm radial glow + soft grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-48 left-1/2 h-[640px] w-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,hsl(var(--lp-brand-soft))_0%,transparent_65%)]" />
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "linear-gradient(to right, hsl(40 24% 88% / 0.6) 1px, transparent 1px), linear-gradient(to bottom, hsl(40 24% 88% / 0.6) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent)",
          }}
        />
      </div>

      {/* Hero copy with floating UI-card collage behind it (lg+) */}
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-[800px]">
          <HeroCollage />
          {/* Fade collage under the copy so text stays legible */}
          <div
            aria-hidden="true"
            className="absolute inset-0 hidden bg-[radial-gradient(ellipse_62%_70%_at_50%_45%,hsl(var(--lp-background))_35%,transparent_100%)] lg:block"
          />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-16 sm:px-6 md:pt-24 lg:pb-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="lp-animate inline-flex items-center gap-2.5 rounded-full border border-brand/40 bg-paper-card/90 px-5 py-2 text-sm font-medium text-brand-ink shadow-lg shadow-brand/10 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-bright opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              System dla agencji castingowych, statystów i hostess
            </p>

            <h1 className="lp-animate lp-delay-1 mt-8 text-balance font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Cała agencja w jednym systemie —{" "}
              <span className="lp-gradient-text italic">od zgłoszenia do rozliczenia.</span>
            </h1>

            <p className="lp-animate lp-delay-2 mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-ink-muted sm:text-xl">
              PlanOS łączy bazę talentów, castingi i nabory, potwierdzenia, listy
              obecności i pliki dla księgowości. Przestajesz przepisywać tę samą
              osobę do trzech arkuszy — a Twoja baza zostaje tylko Twoja.
            </p>

            <div className="lp-animate lp-delay-3 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="w-full sm:w-auto"
              >
                Umów demo
              </ButtonLink>
              <ButtonLink href="#platforma" variant="outline" size="lg" className="w-full sm:w-auto">
                Zobacz, jak to działa
              </ButtonLink>
            </div>

            <ul className="lp-animate lp-delay-4 mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink-muted">
              {MICRO_PROOFS.map(({ icon: Icon, label }) => (
                <li key={label} className="inline-flex items-center gap-2">
                  <Icon className="h-4 w-4 text-brand" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Product screenshot */}
          <div className="lp-reveal-scale lp-delay-4 relative mx-auto mt-16 max-w-5xl md:mt-24">
            <div
              aria-hidden="true"
              className="absolute -inset-x-10 -top-10 bottom-0 rounded-[2.5rem] bg-gradient-to-b from-brand/15 to-transparent blur-3xl"
            />
            <div className="relative overflow-hidden rounded-2xl border border-paper-border bg-paper-card shadow-card-lg ring-1 ring-ink/5">
              <div
                className="flex items-center gap-1.5 border-b border-paper-border bg-paper-muted px-4 py-2.5"
                aria-hidden="true"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-paper-border" />
                <span className="h-2.5 w-2.5 rounded-full bg-paper-border" />
                <span className="h-2.5 w-2.5 rounded-full bg-paper-border" />
                <span className="ml-3 hidden rounded-md bg-paper-card px-3 py-0.5 text-[0.7rem] text-ink-faint sm:block">
                  app.planos.pl
                </span>
              </div>
              <Image
                src={kalendarzShot}
                alt="Zrzut ekranu PlanOS: kalendarz projektów i dni pracy agencji"
                priority
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="h-auto w-full"
              />
            </div>

            {/* Two small chips anchored to the screenshot (lg+) */}
            <div
              aria-hidden="true"
              className="lp-float absolute -left-8 top-[30%] hidden items-center gap-3 rounded-2xl border border-paper-border bg-paper-card/95 px-4 py-3 shadow-card-lg backdrop-blur lg:flex"
              style={{ animationDelay: "0.4s" }}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-soft">
                <ClipboardCheck className="h-5 w-5 text-brand-ink" />
              </span>
              <div className="text-xs">
                <p className="font-semibold text-ink">Zgłoszenie kompletne</p>
                <p className="text-ink-muted">zdjęcia · wymiary · self-tape</p>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="lp-float absolute -right-8 bottom-[26%] hidden items-center gap-2 rounded-2xl border border-paper-border bg-paper-card/95 px-4 py-3 text-xs shadow-card-lg backdrop-blur lg:flex"
              style={{ animationDelay: "1.4s" }}
            >
              <CalendarCheck2 className="h-4 w-4 text-brand" />
              <span className="font-semibold text-ink">Nowy dzień pracy</span>
              <span className="text-ink-muted">— 12 potwierdzeń w 20 min</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
