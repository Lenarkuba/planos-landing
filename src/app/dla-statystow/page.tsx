import type { Metadata } from "next";
import {
  BellRing,
  CalendarCheck2,
  ClipboardCheck,
  Eye,
  FileText,
  KeyRound,
  ShieldCheck,
  Smartphone,
  UserRound,
} from "lucide-react";
import { LandingNav } from "@/components/landing/nav";
import { LandingFooter } from "@/components/landing/footer";
import { ButtonLink, Card, IconBadge, Section, SectionHeader } from "@/components/landing/ui";
import { WaitlistForm } from "@/components/waitlist-form";
import { createAdminClient } from "@/lib/supabase-admin";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "PlanOS dla statystów, epizodystów i hostess — Twoje dane pod Twoją kontrolą",
  description:
    "Bezpłatne konto dla statystów, epizodystów i hostess w agencji, która korzysta z PlanOS. Własny profil, zgody RODO, które widzisz i cofasz, szyfrowany PESEL z rejestrem dostępu, potwierdzenia dni pracy z telefonu. Dane widzi tylko Twoja agencja.",
  alternates: { canonical: "/dla-statystow" },
  openGraph: {
    title: "Twoje dane u agencji. Pod Twoją kontrolą. — PlanOS dla statystów",
    description:
      "Agencja, z którą współpracujesz, zaprasza Cię do PlanOS. Własny profil, zgody RODO, szyfrowany PESEL, potwierdzenia z telefonu. Twoje dane widzi tylko ta agencja.",
    type: "website",
    locale: "pl_PL",
    url: "/dla-statystow",
  },
};

async function getWaitlistCount(): Promise<number | null> {
  try {
    const supabase = createAdminClient();
    const { count, error } = await supabase
      .from("waitlist")
      .select("*", { count: "exact", head: true });
    if (error) return null;
    return count ?? 0;
  } catch {
    return null;
  }
}

const PAINS = [
  "Twoje zdjęcia i PESEL krążą w mailach i arkuszach, do których nie masz wglądu.",
  "Nie wiesz, kto ma dostęp do Twoich danych i po co.",
  "Zmiana godziny zbiórki przychodzi SMS-em o 22:00.",
  "Nie wiadomo, co podpisałeś i jak jesteś rozliczany.",
];

const STEPS = [
  {
    n: "01",
    title: "Agencja Cię zaprasza",
    body:
      "Agencja, z którą współpracujesz, wysyła Ci link do PlanOS. Tylko ona Cię widzi — nie trafiasz do żadnej wspólnej bazy.",
  },
  {
    n: "02",
    title: "Zakładasz bezpłatne konto i profil",
    body:
      "Uzupełniasz zdjęcia, wymiary i kontakt. Widzisz, jakie zgody wyraziłeś, i możesz je w każdej chwili cofnąć.",
  },
  {
    n: "03",
    title: "Potwierdzasz i masz wgląd",
    body:
      "Dni pracy potwierdzasz jednym kliknięciem z telefonu. Umowy, historia pracy i każdy dostęp do Twojego PESEL-u — wszystko widzisz w swoim koncie.",
  },
];

const BENEFITS = [
  {
    icon: UserRound,
    title: "Bezpłatne konto i własny profil",
    body:
      "Zdjęcia, wymiary, dane kontaktowe — aktualizujesz je sam, w jednym miejscu. Agencja zawsze widzi aktualną wersję, a Ty decydujesz, co w profilu jest.",
  },
  {
    icon: Eye,
    title: "Widzi Cię tylko Twoja agencja",
    body:
      "Do PlanOS zaprasza Cię agencja, z którą współpracujesz. Twoje dane są widoczne wyłącznie dla niej — nie trafiają do żadnej wspólnej bazy ani do innych agencji.",
  },
  {
    icon: ShieldCheck,
    title: "Zgody RODO, które widzisz i cofasz",
    body:
      "Każda zgoda jest zapisana w Twoim koncie. Możesz ją cofnąć jednym kliknięciem i skorzystać z prawa do bycia zapomnianym — system trwale usuwa Twoje dane.",
  },
  {
    icon: KeyRound,
    title: "Szyfrowany PESEL i rejestr dostępu",
    body:
      "Twój PESEL jest szyfrowany (AES-256). Każde odczytanie jest rejestrowane, a Ty dostajesz powiadomienie, kto i kiedy z niego skorzystał.",
  },
  {
    icon: CalendarCheck2,
    title: "Potwierdzenia dni pracy z telefonu",
    body:
      "Nowy dzień zdjęciowy lub event? Potwierdzasz albo odrzucasz jednym kliknięciem — w kilka sekund, bez dzwonienia i odpisywania na SMS-y.",
  },
  {
    icon: ClipboardCheck,
    title: "Zgłoszenie z kompletnymi danymi w kilka sekund",
    body:
      "Gdy Twoja agencja prowadzi nabór, wysyłasz kompletne zgłoszenie — zdjęcia, self-tape, wymiary — bez przepisywania tych samych danych od nowa.",
  },
  {
    icon: BellRing,
    title: "Powiadomienia o zmianach",
    body:
      "Zmiana godziny zbiórki, lokalizacji albo odwołanie dnia — dostajesz powiadomienie od razu, zamiast SMS-a w środku nocy.",
  },
  {
    icon: FileText,
    title: "Umowy i historia pracy",
    body:
      "Widzisz swoje umowy, przepracowane dni i historię rzetelności. Wiesz, co podpisałeś, na jakich warunkach i jak jesteś rozliczany.",
  },
  {
    icon: Smartphone,
    title: "Bez instalowania aplikacji",
    body:
      "Wszystko działa w przeglądarce telefonu przez linki od agencji. Nic nie instalujesz i nic nie musisz aktualizować.",
  },
];

const SECURITY = [
  {
    title: "Szyfrowanie danych wrażliwych",
    body:
      "PESEL i inne dane wrażliwe są szyfrowane algorytmem AES-256. Nie leżą w arkuszu ani w skrzynce mailowej.",
  },
  {
    title: "Rejestr każdego dostępu",
    body:
      "Każde odczytanie Twojego PESEL-u zostaje zapisane: kto, kiedy i w jakim celu. Dostajesz o tym powiadomienie.",
  },
  {
    title: "Zgody i prawo do bycia zapomnianym",
    body:
      "Widzisz wszystkie zgody, które wyraziłeś. Cofasz je jednym kliknięciem, a wniosek o usunięcie danych realizuje system — nie ręcznie ktoś w biurze.",
  },
  {
    title: "Odseparowane dane agencji",
    body:
      "PlanOS to oprogramowanie, z którego korzysta Twoja agencja — nie portal ani giełda statystów. Dane każdej agencji są oddzielone; nikt spoza niej nie widzi Twojego profilu.",
  },
];

const FAQ = [
  {
    q: "Kto widzi mój profil i moje dane?",
    a: "Tylko agencja, która zaprosiła Cię do PlanOS i z którą współpracujesz. Twoje dane nie trafiają do żadnej wspólnej bazy ani do innych agencji. PlanOS to oprogramowanie, z którego korzysta Twoja agencja — nie portal ani giełda statystów.",
  },
  {
    q: "Kto ma dostęp do mojego PESEL-u?",
    a: "Tylko upoważnione osoby w Twojej agencji, i tylko wtedy, gdy jest to potrzebne — np. do umowy lub zgłoszenia do ZUS. PESEL jest szyfrowany (AES-256), a każde odczytanie jest rejestrowane. Dostajesz powiadomienie, kto i kiedy z niego skorzystał.",
  },
  {
    q: "Czy mogę cofnąć zgodę i usunąć swoje dane?",
    a: "Tak. Wszystkie zgody widzisz w swoim koncie i możesz je cofnąć jednym kliknięciem. Masz też prawo do bycia zapomnianym — po Twoim wniosku system trwale usuwa Twoje dane z bazy agencji.",
  },
  {
    q: "Czy to dla mnie darmowe?",
    a: "Tak. Jako statysta, epizodysta lub hostessa korzystasz z PlanOS bezpłatnie — za system płaci agencja.",
  },
  {
    q: "Czy muszę instalować aplikację?",
    a: "Nie. Wszystko działa w przeglądarce telefonu przez linki, które wysyła Ci agencja: potwierdzenia, zgłoszenia, profil, umowy.",
  },
  {
    q: "Moja agencja jeszcze nie korzysta z PlanOS. Co teraz?",
    a: "Zapisz się na listę i podaj nazwę agencji, z którą współpracujesz. Damy Ci znać, gdy uruchomi PlanOS i będziesz mógł założyć bezpłatne konto. O wdrożeniu systemu decyduje wyłącznie agencja.",
  },
  {
    q: "Co zrobicie z moim e-mailem?",
    a: "Użyjemy go tylko po to, żeby dać Ci znać, gdy PlanOS będzie dostępny w Twojej agencji. Bez spamu, w każdej chwili możesz się wypisać.",
  },
];

export default async function DlaStatystowPage() {
  const count = await getWaitlistCount();
  const showCount = typeof count === "number" && count >= 10;

  return (
    <div className="lp-root min-h-screen font-sans">
      {/* Same chrome as the homepage (nav links are root-relative, so they lead back to /). */}
      <LandingNav />

      <main>
        {/* HERO */}
        <Section tone="paper" className="overflow-hidden pt-14 md:pt-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,hsl(var(--lp-brand-soft))_0%,transparent_65%)]"
          />
          <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-paper-border bg-paper-card px-4 py-1.5 text-sm font-medium text-ink-muted">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-tag-green-tx" />
                Dla statystów, epizodystów i hostess
              </p>
              <h1 className="mt-6 text-balance font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl">
                Twoje dane u agencji.{" "}
                <em className="font-normal italic text-brand-ink">Pod Twoją kontrolą.</em>
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink-muted">
                Agencja, z&nbsp;którą współpracujesz, zaprasza Cię do PlanOS. Dostajesz
                bezpłatne konto i&nbsp;własny profil — zdjęcia, wymiary, kontakt — widoczny
                wyłącznie dla tej agencji. Widzisz swoje zgody i&nbsp;każdy dostęp do
                PESEL-u, potwierdzasz dni pracy z&nbsp;telefonu.
              </p>
              <ul className="mt-7 space-y-2.5">
                {PAINS.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[0.95rem] text-ink-muted">
                    <span aria-hidden="true" className="mt-0.5 shrink-0 text-tag-red-tx">
                      ✕
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <ButtonLink href="#zapis" size="lg">
                  Zapisz się na listę
                </ButtonLink>
                {showCount && (
                  <span className="text-sm text-ink-muted">
                    Dołącz do <strong className="text-ink">{count}</strong> osób, które już czekają
                  </span>
                )}
              </div>
            </div>

            <div id="zapis-top" className="scroll-mt-28">
              <WaitlistForm />
            </div>
          </div>
        </Section>

        {/* JAK TO DZIAŁA */}
        <Section id="jak-to-dziala" tone="muted">
          <SectionHeader
            eyebrow="Jak to działa"
            title={
              <>
                Zaprasza Cię agencja.{" "}
                <em className="font-normal italic text-brand-ink">Resztą sterujesz Ty.</em>
              </>
            }
            description="Nie zakładasz konta „w internecie” i nie wystawiasz się do żadnej bazy. PlanOS to system, z którego korzysta Twoja agencja — a Ty dostajesz w nim własne, bezpłatne konto."
          />
          <ol className="mt-14 grid gap-8 md:grid-cols-3">
            {STEPS.map((s) => (
              <li key={s.n} className="relative">
                <span className="font-display text-5xl font-medium text-brand/60">{s.n}</span>
                <h3 className="mt-3 font-display text-xl font-medium text-ink md:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-3 text-pretty leading-relaxed text-ink-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* KORZYŚCI */}
        <Section id="korzysci" tone="paper">
          <SectionHeader
            eyebrow="Co masz z tego Ty"
            title={
              <>
                Mniej papierologii.{" "}
                <em className="font-normal italic text-brand-ink">Więcej grania.</em>
              </>
            }
            description="PlanOS porządkuje to, co dziś dzieje się w mailach, SMS-ach i arkuszach — i daje Ci wgląd w to, co dzieje się z Twoimi danymi."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map(({ icon: Icon, title, body }) => (
              <Card key={title} hover>
                <IconBadge>
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </IconBadge>
                <h3 className="mt-4 font-display text-xl font-medium text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{body}</p>
              </Card>
            ))}
          </div>
        </Section>

        {/* BEZPIECZEŃSTWO */}
        <Section id="bezpieczenstwo" tone="muted">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-ink">
                Bezpieczeństwo
              </p>
              <h2 className="mt-3 text-balance font-display text-3xl font-medium leading-[1.1] tracking-tight text-ink sm:text-4xl md:text-5xl">
                Twoje dane. <em className="font-normal italic text-brand-ink">Twoje zasady.</em>
              </h2>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-muted">
                Dziś Twój PESEL i&nbsp;zdjęcia najczęściej leżą w&nbsp;arkuszu albo w&nbsp;czyjejś
                skrzynce mailowej. W&nbsp;PlanOS są zaszyfrowane, każdy dostęp zostawia ślad,
                a&nbsp;Ty masz realne narzędzia, żeby o&nbsp;nich decydować — nie tylko zapis
                w&nbsp;regulaminie.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
              {SECURITY.map((s) => (
                <Card key={s.title}>
                  <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-brand" />
                  <h3 className="mt-4 font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.body}</p>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* ZAPIS (główny formularz na dole) */}
        <Section id="zapis" tone="paper">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-ink">
                Lista oczekujących
              </p>
              <h2 className="mt-3 text-balance font-display text-3xl font-medium leading-[1.1] tracking-tight text-ink sm:text-4xl md:text-5xl">
                Zapisz się —{" "}
                <em className="font-normal italic text-brand-ink">
                  damy znać, gdy ruszy Twoja agencja
                </em>
              </h2>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-muted">
                Zajmie 20 sekund. Podaj e-mail i&nbsp;nazwę agencji, z&nbsp;którą współpracujesz —
                powiadomimy Cię, gdy uruchomi PlanOS i&nbsp;będziesz mógł założyć bezpłatne konto.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Bezpłatnie dla statystów, epizodystów i hostess",
                  "Bez zobowiązań — tylko zapis na listę",
                  "Jedna wiadomość, gdy ruszamy w Twojej agencji",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-[0.95rem] text-ink-muted">
                    <span aria-hidden="true" className="mt-0.5 shrink-0 text-tag-green-tx">
                      ✓
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <WaitlistForm />
          </div>
        </Section>

        {/* FAQ */}
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
