import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { AnimateIn, AnimateInStagger, AnimateInChild } from "@/components/animate-in";
import { Footer } from "@/components/footer";
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

/**
 * Talent page keeps the legacy dark theme, but swaps the blue accent for the
 * landing's brand amber and uses Fraunces (`font-display`) for headings.
 * The overrides cascade to <WaitlistForm />, which reads the same CSS vars.
 */
const AMBER_ACCENT = {
  "--accent": "#F59F0A",
  "--accent-soft": "#DB7706",
  "--accent-glow": "rgba(245, 159, 10, 0.16)",
} as CSSProperties;

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

const pains = [
  "Twoje zdjęcia i PESEL krążą w mailach i arkuszach, do których nie masz wglądu.",
  "Nie wiesz, kto ma dostęp do Twoich danych i po co.",
  "Zmiana godziny zbiórki przychodzi SMS-em o 22:00.",
  "Nie wiadomo, co podpisałeś i jak jesteś rozliczany.",
];

const steps = [
  {
    n: "01",
    title: "Agencja Cię zaprasza",
    desc: "Agencja, z którą współpracujesz, wysyła Ci link do PlanOS. Tylko ona Cię widzi — nie trafiasz do żadnej wspólnej bazy.",
  },
  {
    n: "02",
    title: "Zakładasz bezpłatne konto i profil",
    desc: "Uzupełniasz zdjęcia, wymiary i kontakt. Widzisz, jakie zgody wyraziłeś, i możesz je w każdej chwili cofnąć.",
  },
  {
    n: "03",
    title: "Potwierdzasz i masz wgląd",
    desc: "Dni pracy potwierdzasz jednym kliknięciem z telefonu. Umowy, historia pracy i dostęp do Twojego PESEL-u — wszystko widzisz w swoim koncie.",
  },
];

const benefits = [
  {
    title: "Bezpłatne konto i własny profil",
    desc: "Zdjęcia, wymiary, dane kontaktowe — aktualizujesz je sam, w jednym miejscu. Agencja zawsze widzi aktualną wersję, a Ty decydujesz, co w profilu jest.",
  },
  {
    title: "Widzi Cię tylko Twoja agencja",
    desc: "Do PlanOS zaprasza Cię agencja, z którą współpracujesz. Twoje dane są widoczne wyłącznie dla niej — nie trafiają do żadnej wspólnej bazy ani do innych agencji.",
  },
  {
    title: "Zgody RODO, które widzisz i cofasz",
    desc: "Każda zgoda jest zapisana w Twoim koncie. Możesz ją cofnąć jednym kliknięciem i skorzystać z prawa do bycia zapomnianym — system trwale usuwa Twoje dane.",
  },
  {
    title: "Szyfrowany PESEL i rejestr dostępu",
    desc: "Twój PESEL jest szyfrowany (AES-256). Każde odczytanie jest rejestrowane, a Ty dostajesz powiadomienie, kto i kiedy z niego skorzystał.",
  },
  {
    title: "Potwierdzenia dni pracy z telefonu",
    desc: "Nowy dzień zdjęciowy lub event? Potwierdzasz albo odrzucasz jednym kliknięciem — w kilka sekund, bez dzwonienia i odpisywania na SMS-y.",
  },
  {
    title: "Zgłoszenie z kompletnymi danymi w kilka sekund",
    desc: "Gdy Twoja agencja prowadzi nabór, wysyłasz kompletne zgłoszenie — zdjęcia, self-tape, wymiary — bez przepisywania tych samych danych od nowa.",
  },
  {
    title: "Powiadomienia o zmianach",
    desc: "Zmiana godziny zbiórki, lokalizacji albo odwołanie dnia — dostajesz powiadomienie od razu, zamiast SMS-a w środku nocy.",
  },
  {
    title: "Umowy i historia pracy",
    desc: "Widzisz swoje umowy, przepracowane dni i historię rzetelności. Wiesz, co podpisałeś, na jakich warunkach i jak jesteś rozliczany.",
  },
  {
    title: "Bez instalowania aplikacji",
    desc: "Wszystko działa w przeglądarce telefonu przez linki od agencji. Nic nie instalujesz i nic nie musisz aktualizować.",
  },
];

const security = [
  {
    title: "Szyfrowanie danych wrażliwych",
    desc: "PESEL i inne dane wrażliwe są szyfrowane algorytmem AES-256. Nie leżą w arkuszu ani w skrzynce mailowej.",
  },
  {
    title: "Rejestr każdego dostępu",
    desc: "Każde odczytanie Twojego PESEL-u zostaje zapisane: kto, kiedy i w jakim celu. Dostajesz o tym powiadomienie.",
  },
  {
    title: "Zgody i prawo do bycia zapomnianym",
    desc: "Widzisz wszystkie zgody, które wyraziłeś. Cofasz je jednym kliknięciem, a wniosek o usunięcie danych realizuje system — nie ręcznie ktoś w biurze.",
  },
  {
    title: "Odseparowane dane agencji",
    desc: "PlanOS to oprogramowanie, z którego korzysta Twoja agencja — nie portal ani giełda statystów. Dane każdej agencji są oddzielone; nikt spoza niej nie widzi Twojego profilu.",
  },
];

const faq = [
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
    <div style={AMBER_ACCENT}>
      {/* Minimalny header — bez sprzedażowych linków dla agencji */}
      <header className="fixed top-0 left-0 right-0 z-[100] px-4 py-4 md:px-8 backdrop-blur-[20px] bg-[rgba(10,10,12,0.8)] border-b border-[rgba(42,42,53,0.5)]">
        <div className="w-full max-w-[1100px] mx-auto flex justify-between items-center">
          <Link href="/" className="font-bold text-xl text-[var(--text)] no-underline tracking-tight">
            Plan<span className="text-[var(--accent)]">OS</span>
          </Link>
          <Link
            href="/"
            className="text-[var(--text-muted)] no-underline text-sm font-medium hover:text-[var(--text)] transition-colors"
          >
            Jesteś z agencji? →
          </Link>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="min-h-screen flex items-center pt-32 pb-20 px-4 md:px-8 relative overflow-hidden">
          <div
            className="absolute top-[-25%] left-1/2 -translate-x-1/2 w-[760px] h-[760px] pointer-events-none"
            style={{ background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)" }}
          />
          <div className="max-w-[1100px] mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <AnimateIn>
              <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--surface)] border border-[var(--border)] rounded-full text-[0.9rem] text-[var(--text-muted)] mb-6 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] animate-pulse" />
                Dla statystów, epizodystów i hostess
              </div>
              <h1 className="font-display text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.1] font-medium mb-6 tracking-tight">
                Twoje dane u agencji. <em className="italic font-normal text-[var(--accent)]">Pod Twoją kontrolą.</em>
              </h1>
              <p className="text-[1.1rem] text-[var(--text-muted)] max-w-[520px] mb-7 leading-[1.7]">
                Agencja, z&nbsp;którą współpracujesz, zaprasza Cię do PlanOS. Dostajesz
                bezpłatne konto i&nbsp;własny profil — zdjęcia, wymiary, kontakt — widoczny
                wyłącznie dla tej agencji. Widzisz swoje zgody i&nbsp;każdy dostęp do
                PESEL-u, potwierdzasz dni pracy z&nbsp;telefonu.
              </p>
              <ul className="flex flex-col gap-2.5 mb-8">
                {pains.map((p) => (
                  <li key={p} className="flex gap-2.5 items-start text-[0.95rem] text-[var(--text-muted)]">
                    <span className="text-[var(--red)] shrink-0 mt-0.5">✕</span>
                    {p}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4 items-center flex-wrap">
                <a
                  href="#zapis"
                  className="inline-flex items-center gap-2 bg-[var(--accent)] text-[var(--bg)] py-3 px-8 rounded-[10px] font-semibold text-[0.95rem] no-underline transition-all hover:bg-[var(--accent-soft)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_var(--accent-glow)]"
                >
                  Zapisz się na listę →
                </a>
                {showCount && (
                  <span className="text-[0.9rem] text-[var(--text-muted)]">
                    Dołącz do <strong className="text-[var(--text)]">{count}</strong> osób, które już czekają
                  </span>
                )}
              </div>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <div id="zapis-top" className="scroll-mt-28">
                <WaitlistForm />
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* JAK TO DZIAŁA */}
        <section className="py-16 md:py-24 px-4 md:px-8 max-w-[1100px] mx-auto">
          <AnimateIn>
            <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent)] mb-4">
              Jak to działa
            </div>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-medium leading-[1.15] mb-4">
              Zaprasza Cię agencja. <em className="italic font-normal text-[var(--accent)]">Resztą sterujesz Ty.</em>
            </h2>
            <p className="text-[var(--text-muted)] text-[1.02rem] max-w-[560px] leading-[1.7] mb-12">
              Nie zakładasz konta „w internecie” i&nbsp;nie wystawiasz się do żadnej bazy.
              PlanOS to system, z&nbsp;którego korzysta Twoja agencja — a&nbsp;Ty dostajesz
              w&nbsp;nim własne, bezpłatne konto.
            </p>
          </AnimateIn>
          <AnimateInStagger className="grid md:grid-cols-3 gap-6" staggerDelay={0.08}>
            {steps.map((s) => (
              <AnimateInChild key={s.n}>
                <div className="h-full rounded-2xl p-7 border border-[var(--border)] bg-[var(--bg-card)]">
                  <div className="font-display text-4xl font-medium text-[var(--accent)] opacity-70 mb-4">{s.n}</div>
                  <h3 className="text-base font-semibold mb-2 text-[var(--text)]">{s.title}</h3>
                  <p className="text-[0.9rem] text-[var(--text-muted)] leading-[1.6]">{s.desc}</p>
                </div>
              </AnimateInChild>
            ))}
          </AnimateInStagger>
        </section>

        {/* KORZYŚCI */}
        <section className="py-16 md:py-24 px-4 md:px-8 max-w-[1100px] mx-auto">
          <AnimateIn>
            <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent)] mb-4">
              Co masz z tego Ty
            </div>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-medium leading-[1.15] mb-4">
              Mniej papierologii. <em className="italic font-normal text-[var(--accent)]">Więcej grania.</em>
            </h2>
            <p className="text-[var(--text-muted)] text-[1.02rem] max-w-[560px] leading-[1.7] mb-12">
              PlanOS porządkuje to, co dziś dzieje się w&nbsp;mailach, SMS-ach i&nbsp;arkuszach —
              i&nbsp;daje Ci wgląd w&nbsp;to, co dzieje się z&nbsp;Twoimi danymi.
            </p>
          </AnimateIn>
          <AnimateInStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {benefits.map((b) => (
              <AnimateInChild key={b.title}>
                <div className="h-full rounded-2xl p-7 border border-[var(--border)] bg-[var(--bg-card)] transition-all hover:bg-[var(--bg-card-hover)] hover:-translate-y-1">
                  <div className="w-2 h-2 rounded-full bg-[var(--green)] mb-4" />
                  <h3 className="text-base font-semibold mb-2 text-[var(--text)]">{b.title}</h3>
                  <p className="text-[0.9rem] text-[var(--text-muted)] leading-[1.6]">{b.desc}</p>
                </div>
              </AnimateInChild>
            ))}
          </AnimateInStagger>
        </section>

        {/* BEZPIECZEŃSTWO */}
        <section id="bezpieczenstwo" className="py-16 md:py-24 px-4 md:px-8 scroll-mt-24">
          <div className="max-w-[1100px] mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
            <AnimateIn>
              <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent)] mb-4">
                Bezpieczeństwo
              </div>
              <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-medium leading-[1.15] mb-5">
                Twoje dane. <em className="italic font-normal text-[var(--accent)]">Twoje zasady.</em>
              </h2>
              <p className="text-[var(--text-muted)] text-[1.02rem] leading-[1.7]">
                Dziś Twój PESEL i&nbsp;zdjęcia najczęściej leżą w&nbsp;arkuszu albo w&nbsp;czyjejś
                skrzynce mailowej. W&nbsp;PlanOS są zaszyfrowane, każdy dostęp zostawia ślad,
                a&nbsp;Ty masz realne narzędzia, żeby o&nbsp;nich decydować — nie tylko zapis
                w&nbsp;regulaminie.
              </p>
            </AnimateIn>
            <AnimateInStagger className="grid sm:grid-cols-2 gap-5" staggerDelay={0.08}>
              {security.map((s) => (
                <AnimateInChild key={s.title}>
                  <div className="h-full rounded-2xl p-6 border border-[var(--border)] bg-[var(--bg-card)]">
                    <div className="w-2 h-2 rounded-full bg-[var(--accent)] mb-4" />
                    <h3 className="text-[0.98rem] font-semibold mb-2 text-[var(--text)]">{s.title}</h3>
                    <p className="text-[0.88rem] text-[var(--text-muted)] leading-[1.6]">{s.desc}</p>
                  </div>
                </AnimateInChild>
              ))}
            </AnimateInStagger>
          </div>
        </section>

        {/* ZAPIS (główny formularz na dole) */}
        <section id="zapis" className="py-16 md:py-24 px-4 md:px-8 scroll-mt-24">
          <div className="max-w-[1100px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <AnimateIn>
              <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-medium leading-[1.15] mb-5">
                Zapisz się — <em className="italic font-normal text-[var(--accent)]">damy znać, gdy ruszy Twoja agencja</em>
              </h2>
              <p className="text-[var(--text-muted)] text-[1.02rem] leading-[1.7] mb-6">
                Zajmie 20 sekund. Podaj e-mail i&nbsp;nazwę agencji, z&nbsp;którą współpracujesz —
                powiadomimy Cię, gdy uruchomi PlanOS i&nbsp;będziesz mógł założyć bezpłatne konto.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "Bezpłatnie dla statystów, epizodystów i hostess",
                  "Bez zobowiązań — tylko zapis na listę",
                  "Jedna wiadomość, gdy ruszamy w Twojej agencji",
                ].map((t) => (
                  <li key={t} className="flex gap-2.5 items-start text-[0.95rem] text-[var(--text-muted)]">
                    <span className="text-[var(--green)] shrink-0 mt-0.5">✓</span>
                    {t}
                  </li>
                ))}
              </ul>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <WaitlistForm />
            </AnimateIn>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 px-4 md:px-8 max-w-[760px] mx-auto">
          <AnimateIn>
            <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.4rem)] font-medium leading-[1.15] mb-10 text-center">
              Najczęstsze pytania
            </h2>
          </AnimateIn>
          <AnimateInStagger className="flex flex-col gap-4" staggerDelay={0.08}>
            {faq.map((item) => (
              <AnimateInChild key={item.q}>
                <div className="rounded-2xl p-6 border border-[var(--border)] bg-[var(--bg-card)]">
                  <h3 className="text-[1rem] font-semibold mb-2 text-[var(--text)]">{item.q}</h3>
                  <p className="text-[0.92rem] text-[var(--text-muted)] leading-[1.6]">{item.a}</p>
                </div>
              </AnimateInChild>
            ))}
          </AnimateInStagger>
        </section>
      </main>

      <Footer />
    </div>
  );
}
