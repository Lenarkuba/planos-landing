import { Layers, KeyRound, Scale, PackageOpen } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BOOKING_URL } from "@/lib/site-config";
import { TrustLine } from "./trust-line";

interface SecurityBlock {
  icon: LucideIcon;
  title: string;
  body: string;
}

const BLOCKS: SecurityBlock[] = [
  {
    icon: Layers,
    title: "Pełne oddzielenie Twojej bazy",
    body: "Twoja baza działa w oddzielonej przestrzeni, niewidocznej dla kogokolwiek spoza Twojej agencji. Żadna inna agencja nie zobaczy Twoich talentów, projektów ani stawek — nigdy.",
  },
  {
    icon: KeyRound,
    title: "Szyfrowanie i kontrola dostępu",
    body: "Dane wrażliwe, w tym numery PESEL, są szyfrowane. Każde ich użycie jest rejestrowane — zawsze wiesz, kto i kiedy z nich korzystał.",
  },
  {
    icon: Scale,
    title: "RODO w praktyce",
    body: "Zarządzanie zgodami i silnik usuwania danych pozwalają realnie wypełnić obowiązki administratora danych. Udostępniamy umowę powierzenia przetwarzania (DPA).",
  },
  {
    icon: PackageOpen,
    title: "Własność danych i brak uzależnienia",
    body: "W każdej chwili pobierzesz wszystkie swoje dane (JSON + CSV w ZIP). Odchodzisz? Zabierasz dane ze sobą. Bez zakładników.",
  },
];

export function Security() {
  return (
    <section
      id="bezpieczenstwo"
      className="relative scroll-mt-20 overflow-hidden bg-[#0D1B2E] py-20 md:py-28"
      aria-labelledby="security-heading"
    >
      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-300">
          Bezpieczeństwo danych
        </p>
        <h2
          id="security-heading"
          className="mt-3 max-w-3xl text-balance text-3xl font-bold tracking-tight text-white md:text-4xl"
        >
          Twoja baza talentów nigdy nie trafi do innej agencji
        </h2>
        <p className="mt-5 max-w-3xl text-pretty text-lg leading-relaxed text-slate-300">
          Wiemy, że baza talentów to najcenniejszy zasób Twojej agencji.
          Dlatego bezpieczeństwo i oddzielenie danych to fundament PlanOS, a
          nie dodatek.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {BLOCKS.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm md:p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-400/10 ring-1 ring-sky-400/20">
                <Icon aria-hidden="true" className="h-5 w-5 text-sky-300" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 max-w-2xl text-[0.95rem] leading-relaxed text-slate-300">
                {body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <p className="text-lg font-semibold text-white">
            Porozmawiajmy o bezpieczeństwie Twoich danych
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-white px-7 py-3 text-base font-semibold text-slate-900 transition-colors hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Umów demo
          </a>
        </div>
        <TrustLine tone="dark" className="mt-6" />
      </div>
    </section>
  );
}
