import type { Metadata } from "next";
import {
  BellRing,
  CalendarCheck2,
  ClipboardCheck,
  Eye,
  FileText,
  UserRound,
} from "lucide-react";
import { LandingNav } from "@/components/landing/nav";
import { LandingFooter } from "@/components/landing/footer";
import { Card, IconBadge, Section, SectionHeader } from "@/components/landing/ui";
import { SecurityBand, TALENT_PILLARS } from "@/components/landing/security";
import { SharePageLink } from "@/components/landing/share-page-link";

const OG_TITLE =
  "Twoje dane u agencji. Pod Twoją kontrolą. — PlanOS dla statystów";
const OG_DESCRIPTION =
  "Bezpłatne konto dla statystów, epizodystów i hostess w agencji, która korzysta z PlanOS. Własny profil, zgody RODO, szyfrowany PESEL z historią dostępu, potwierdzenia dni pracy z telefonu. Dane widzi tylko Twoja agencja.";

export const metadata: Metadata = {
  title: "PlanOS dla statystów, epizodystów i hostess — Twoje dane pod Twoją kontrolą",
  description: OG_DESCRIPTION,
  keywords: [],
  alternates: { canonical: "/dla-statystow" },
  openGraph: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    type: "website",
    locale: "pl_PL",
    url: "/dla-statystow",
  },
  twitter: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
  },
};

const POSITIVES = [
  "Własny profil, który sam aktualizujesz.",
  "Zgody i umowy, które widzisz w jednym miejscu.",
  "Potwierdzenie dnia pracy jednym kliknięciem.",
];

const STEPS = [
  {
    n: "01",
    title: "Agencja publikuje nabór",
    body:
      "Agencja ogłasza casting lub nabór z formularzem — zdjęcia, wymiary, to, czego akurat potrzebuje.",
  },
  {
    n: "02",
    title: "Wysyłasz zgłoszenie",
    body:
      "Wypełniasz formularz i wysyłasz zgłoszenie. Możesz to zrobić bez zakładania konta.",
  },
  {
    n: "03",
    title: "Możesz założyć konto",
    body:
      "Jeśli chcesz mieć wgląd w swoje zgody, umowy i historię — zakładasz bezpłatne konto powiązane z tą agencją. Bez konta agencja nadal ma Twoje zgłoszenie, ale nie masz dostępu do edycji profilu.",
  },
];

const BENEFITS = [
  {
    icon: ClipboardCheck,
    title: "Zgłoszenie z kompletnymi danymi w kilka sekund",
    body:
      "Gdy Twoja agencja prowadzi nabór, wysyłasz kompletne zgłoszenie — zdjęcia, wymiary — bez przepisywania tych samych danych od nowa.",
  },
  {
    icon: UserRound,
    title: "Bezpłatne konto i własny profil",
    body:
      "Zdjęcia, wymiary, dane kontaktowe — aktualizujesz je sam, w jednym miejscu. Agencja zawsze widzi aktualną wersję, a Ty decydujesz, co w profilu jest.",
  },
  {
    icon: CalendarCheck2,
    title: "Potwierdzenia dni pracy z telefonu",
    body:
      "Nowy dzień zdjęciowy lub event? Potwierdzasz albo odrzucasz jednym kliknięciem z telefonu.",
  },
  {
    icon: BellRing,
    title: "Powiadomienia o zmianach",
    body:
      "Zmiana godziny zbiórki, lokalizacji albo odwołanie dnia — dostajesz powiadomienie od razu. Powiadomienia na telefonie działają po dodaniu PlanOS do ekranu głównego.",
  },
  {
    icon: FileText,
    title: "Umowy i historia pracy",
    body:
      "Widzisz swoje umowy, przepracowane dni, historię rzetelności i swoją statystykę rzetelności. Wiesz, co podpisałeś, na jakich warunkach i jak jesteś rozliczany.",
  },
  {
    icon: Eye,
    title: "Widzi Cię tylko Twoja agencja",
    body:
      "Twoje dane są widoczne wyłącznie dla agencji, z którą współpracujesz — nie trafiają do żadnej wspólnej bazy ani do innych agencji.",
  },
];

const FAQ = [
  {
    q: "Czy muszę mieć konto, żeby się zgłosić?",
    a: "Nie. Możesz wysłać zgłoszenie na casting bez zakładania konta. Konto zakładasz, jeśli chcesz mieć wgląd w swoje zgody, umowy i historię dostępu do PESEL-u. Zgłoszenia bez konta agencja przechowuje przez ograniczony czas zgodnie ze swoją polityką i mogą zostać usunięte, jeśli nie dojdzie do współpracy.",
  },
  {
    q: "Kto widzi mój profil i moje dane?",
    a: "Tylko agencja, która zaprosiła Cię do PlanOS i z którą współpracujesz. Twoje dane nie trafiają do żadnej wspólnej bazy ani do innych agencji. PlanOS to oprogramowanie, z którego korzysta Twoja agencja — nie portal ani giełda statystów.",
  },
  {
    q: "Kto ma dostęp do mojego PESEL-u?",
    a: "Tylko upoważnione osoby w Twojej agencji, i tylko wtedy, gdy jest to potrzebne — np. do umowy lub zgłoszenia do ZUS. PESEL jest szyfrowany, a każde odczytanie jest rejestrowane. Historię dostępu widzisz w swoim koncie.",
  },
  {
    q: "Czy mogę cofnąć zgodę i usunąć swoje dane?",
    a: "Tak. Wszystkie zgody widzisz w swoim koncie i możesz je cofnąć jednym kliknięciem. Masz też prawo do bycia zapomnianym: po Twoim wniosku agencja usuwa Twój profil, zdjęcia i dane w bazie. Dane związane z rozliczeniami i zgłoszeniami do ZUS agencja może zachować przez okres wymagany prawnie.",
  },
  {
    q: "Czy to dla mnie darmowe?",
    a: "Tak. Jako statysta, epizodysta lub hostessa korzystasz z PlanOS bezpłatnie — za system płaci agencja.",
  },
  {
    q: "Czy muszę instalować aplikację?",
    a: "Nie ma aplikacji w sklepie. PlanOS działa w przeglądarce. Jeśli chcesz dostawać powiadomienia o dniach pracy, dodaj go do ekranu głównego — zajmuje to kilka sekund.",
  },
];

export default function DlaStatystowPage() {
  return (
    <div className="lp-root min-h-screen font-sans">
      <LandingNav variant="talent" />

      <main>
        <Section tone="paper" className="overflow-hidden pt-14 md:pt-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,hsl(var(--lp-brand-soft))_0%,transparent_65%)]"
          />
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-paper-border bg-paper-card px-4 py-1.5 text-sm font-medium text-ink-muted">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-tag-green-tx" />
              Dla statystów, epizodystów i hostess
            </p>
            <h1 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl">
              Twoje dane u agencji.{" "}
              <span className="text-brand-ink">Pod Twoją kontrolą.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink-muted">
              Zgłaszasz się do agencji przez PlanOS — konto zawsze zakładasz Ty,
              kiedy chcesz. Twoja agencja wybrała PlanOS, żebyś miał własny
              profil, wgląd w swoje zgody i umowy, i mógł potwierdzać dni pracy
              z telefonu. Twoje dane widzi tylko ona.
            </p>
            <ul className="mx-auto mt-7 w-fit space-y-2.5 text-left">
              {POSITIVES.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-[0.95rem] text-ink">
                  <span aria-hidden="true" className="mt-0.5 shrink-0 text-tag-green-tx">
                    ✓
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section id="jak-to-dziala" tone="muted">
          <SectionHeader
            eyebrow="Jak to działa"
            title="Zgłoszenie do naboru"
            description="Nie dodajesz się do żadnej publicznej bazy danych."
          />
          <ol className="mt-14 grid gap-8 md:grid-cols-3">
            {STEPS.map((s) => (
              <li key={s.n} className="relative">
                <span className="font-display text-5xl font-medium text-brand/60">
                  {s.n}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink md:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-3 text-pretty leading-relaxed text-ink-muted">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="co-masz-z-tego" tone="paper">
          <SectionHeader
            eyebrow="Co masz z tego Ty"
            title="Szybszy przepływ informacji"
            description="Twoja agencja prowadzi wszystko w jednym systemie, a Ty masz w nim własne konto."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map(({ icon: Icon, title, body }) => (
              <Card key={title} hover>
                <IconBadge>
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </IconBadge>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{body}</p>
              </Card>
            ))}
          </div>
        </Section>

        <SecurityBand
          eyebrow="Bezpieczeństwo danych"
          title="Twoje dane. Twoje zasady."
          description="W PlanOS Twoje dane wrażliwe są zaszyfrowane, każdy dostęp zostawia ślad, a swoje zgody widzisz i cofasz sam."
          pillars={TALENT_PILLARS}
        />

        <Section id="faq" tone="muted" width="narrow">
          <SectionHeader eyebrow="FAQ" title="Najczęstsze pytania" />
          <div className="mt-10 divide-y divide-paper-border rounded-2xl border border-paper-border bg-paper-card shadow-card">
            {FAQ.map((item) => (
              <details key={item.q} className="group px-6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-ink-faint transition-transform group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">{item.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-paper-border bg-paper-card px-6 py-8 text-center shadow-card md:px-8">
            <h2 className="font-display text-2xl font-semibold text-ink">
              Twoja agencja jeszcze nie korzysta z PlanOS?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-pretty text-ink-muted">
              Prześlij jej tę stronę. O wdrożeniu decyduje agencja.
            </p>
            <div className="mt-6 flex justify-center">
              <SharePageLink />
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-ink-muted">
            Prowadzisz agencję?{" "}
            <a href="/" className="font-semibold text-brand-ink hover:text-brand">
              Zobacz PlanOS dla agencji →
            </a>
          </p>
        </Section>
      </main>

      <LandingFooter />
    </div>
  );
}
