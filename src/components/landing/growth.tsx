import { BellRing, CheckCircle2, Clock3, ShieldCheck, UserCheck } from "lucide-react";
import { Card, IconBadge, Section } from "./ui";

const BULLETS = [
  {
    title: "Jeden przepływ dla castingu i eventu",
    body:
      "Nabór, wybór klienta, potwierdzenia, obecność, umowy — ten sam proces obsługuje dzień zdjęciowy i akcję promocyjną.",
  },
  {
    title: "Wsparcie wdrożenia w cenie",
    body:
      "Migracja bazy, konfiguracja RODO i eksportu ZUS oraz szkolenie zespołu. Bezpośredni kontakt z zespołem PlanOS.",
  },
  {
    title: "Spokój dla talentów i klientów",
    body:
      "Proste linki bez instalowania czegokolwiek, przejrzyste terminy i pełny wgląd talentu w swoje dane i zgody.",
  },
];

const CARDS = [
  {
    icon: ShieldCheck,
    title: "Dane, którym ufasz",
    body:
      "Każdy dostęp do PESEL jest rejestrowany, a historia komunikacji pokazuje, co system wysłał i czy dotarło. Koniec z „nie dostałem maila”.",
  },
  {
    icon: BellRing,
    title: "Talenty zawsze poinformowane",
    body:
      "Zmiany terminów, odwołania i nowe dni pracy trafiają do wszystkich zainteresowanych automatycznie — mniej pytań, mniej nieobecności.",
  },
  {
    icon: Clock3,
    title: "Biuro odzyskuje czas",
    body:
      "Zgłoszenia lądują kompletne, potwierdzenia dzieją się same, a pliki dla księgowości generujesz z historii pracy — nie z notatek.",
  },
  {
    icon: UserCheck,
    title: "Klient wybiera sam",
    body:
      "Reżyser czy brand manager dostaje jeden link i decyduje w swoim tempie. Ty widzisz jego wybory na żywo, bez maili z załącznikami.",
  },
];

/** Gigpie's "Built for Growth — More time teaching, less time managing". */
export function Growth() {
  return (
    <Section id="wzrost" tone="muted">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-ink">
            Zbudowany na wzrost
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-medium leading-[1.1] tracking-tight text-ink sm:text-4xl md:text-5xl">
            Więcej realizacji, mniej administracji
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-muted">
            Niezależnie od tego, czy obsadzasz statystów do serialu, czy hostessy
            na targi — PlanOS trzyma ludzi, terminy, obecności i rozliczenia w
            jednym systemie.
          </p>

          <ul className="mt-8 space-y-5">
            {BULLETS.map((b) => (
              <li key={b.title} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-ink">{b.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">{b.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
          {CARDS.map(({ icon: Icon, title, body }) => (
            <Card key={title} hover>
              <IconBadge>
                <Icon className="h-5 w-5" aria-hidden="true" />
              </IconBadge>
              <h3 className="mt-4 font-display text-xl font-medium text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{body}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
