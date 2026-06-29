import type { Metadata } from "next";
import Link from "next/link";
import { AnimateIn, AnimateInStagger, AnimateInChild } from "@/components/animate-in";
import { Footer } from "@/components/footer";
import { WaitlistForm } from "@/components/waitlist-form";
import { createAdminClient } from "@/lib/supabase-admin";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "PlanOS dla statystów i epizodystów — jeden profil dla wszystkich agencji",
  description:
    "Jeden profil widoczny tylko dla agencji, z którymi współpracujesz, zawsze aktualny. Zgłoszenia na castingi jednym kliknięciem, jasność co do terminów, umów i ZUS. Zapisz się na listę i zgłoś swoją agencję.",
  openGraph: {
    title: "Jeden profil. Wszystkie Twoje agencje. — PlanOS dla statystów",
    description:
      "Tworzysz profil raz — widzą go tylko agencje, z którymi współpracujesz. Koniec z wysyłaniem tych samych danych w kółko. Zapisz się na listę.",
    type: "website",
    locale: "pl_PL",
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

const pains = [
  "Każdej agencji wysyłasz te same dane i zdjęcia od nowa.",
  "Zmieniłeś fryzurę albo numer? Aktualizujesz to w pięciu miejscach.",
  "Dzień zdjęciowy zmienia się SMS-em o 22:00.",
  "Nie wiadomo jak z umową i ZUS-em.",
];

const benefits = [
  {
    title: "Jeden profil dla Twoich agencji",
    desc: "Tworzysz profil raz. Widzą go tylko agencje, z którymi współpracujesz — koniec z wysyłaniem tych samych danych i zdjęć w kółko.",
  },
  {
    title: "Widzą Cię tylko Twoje agencje",
    desc: "Profil widzą wyłącznie agencje, które masz już w swojej współpracy — które dodały Cię do bazy albo do których sam zaaplikowałeś. Nie trafiasz do żadnej wspólnej, otwartej puli.",
  },
  {
    title: "Aktualizujesz raz, widzą Twoje agencje",
    desc: "Nowa fryzura? Zmiana adresu lub numeru? Poprawiasz w jednym miejscu, a każda Twoja agencja od razu ma najnowszą wersję.",
  },
  {
    title: "Zgłoszenie jednym kliknięciem",
    desc: "Otwarte castingi i zaproszenia od agencji — wysyłasz kompletne zgłoszenie (zdjęcie + self-tape + dane) w kilka sekund.",
  },
  {
    title: "Jasność co do terminów",
    desc: "Nowy dzień zdjęciowy lub zmiana? Potwierdzasz albo odrzucasz jednym kliknięciem. Powiadomienia zamiast nocnych SMS-ów.",
  },
  {
    title: "Umowy i ZUS w jednym miejscu",
    desc: "Widzisz co podpisałeś i na jakich warunkach. Koniec z domyślaniem się, jak jesteś rozliczany.",
  },
  {
    title: "Bezpieczeństwo i kontrola (RODO)",
    desc: "Dane wrażliwe jak PESEL są szyfrowane (AES-256), a każdy dostęp jest rejestrowany. Wiesz, kto i kiedy korzystał z Twoich danych — i masz prawo w każdej chwili cofnąć zgodę i poprosić o ich usunięcie.",
  },
  {
    title: "Wszystko w telefonie",
    desc: "Castingi, potwierdzenia, powiadomienia — w jednej aplikacji, której nie musisz odświeżać ręcznie.",
  },
];

const faq = [
  {
    q: "Czy moje dane zobaczą agencje, z którymi nie współpracuję?",
    a: "Nie. Twój profil widzą tylko agencje, które masz już w swojej współpracy — czyli te, które dodały Cię do bazy, albo te, do których sam zaaplikowałeś. Nie trafiasz do żadnej wspólnej, otwartej puli, a aktualizacja danych dociera wyłącznie do tych agencji.",
  },
  {
    q: "Czy moje dane są bezpieczne i czy mam nad nimi kontrolę?",
    a: "Tak. Dane wrażliwe jak PESEL są szyfrowane (AES-256), a każdy dostęp do nich jest rejestrowany. Widzisz, która agencja korzysta z Twoich danych, a w każdej chwili masz prawo cofnąć zgodę i poprosić o ich usunięcie.",
  },
  {
    q: "Czy to dla mnie darmowe?",
    a: "Tak. Jako statysta/epizodysta korzystasz z PlanOS bezpłatnie — za narzędzie płacą agencje.",
  },
  {
    q: "Działa, jeśli moja agencja tego nie używa?",
    a: "Pełnię korzyści masz, gdy Twoja agencja jest na PlanOS. Dlatego przy zapisie podaj jej nazwę — zaczynamy od agencji, które statyści zgłaszają najczęściej, i to Ty możesz przyspieszyć, żeby Twoja trafiła na początek listy.",
  },
  {
    q: "Co zrobicie z moim e-mailem?",
    a: "Użyjemy go tylko po to, żeby dać Ci znać, gdy PlanOS będzie dostępny. Bez spamu, w każdej chwili możesz się wypisać.",
  },
];

export default async function DlaStatystowPage() {
  const count = await getWaitlistCount();
  const showCount = typeof count === "number" && count >= 10;

  return (
    <>
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
                Dla statystów i epizodystów
              </div>
              <h1
                className="text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.1] font-normal mb-6 tracking-tight"
                style={{ fontFamily: "var(--serif)" }}
              >
                Jeden profil. <em className="italic text-[var(--accent)]">Wszystkie Twoje agencje.</em>
              </h1>
              <p className="text-[1.1rem] text-[var(--text-muted)] max-w-[520px] mb-7 leading-[1.7]">
                Tworzysz profil raz — widzą go tylko agencje, z którymi współpracujesz.
                Koniec z wysyłaniem tych samych danych i&nbsp;zdjęć w&nbsp;kółko. Zgłoszenia
                jednym kliknięciem, jasność co do terminów i&nbsp;ZUS-u.
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
                  className="inline-flex items-center gap-2 bg-[var(--accent)] text-white py-3 px-8 rounded-[10px] font-semibold text-[0.95rem] no-underline transition-all hover:bg-[var(--accent-soft)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(79,124,255,0.25)]"
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

        {/* KORZYŚCI */}
        <section className="py-16 md:py-24 px-4 md:px-8 max-w-[1100px] mx-auto">
          <AnimateIn>
            <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent)] mb-4">
              Co masz z tego Ty
            </div>
            <h2
              className="text-[clamp(1.8rem,4vw,2.8rem)] font-normal leading-[1.15] mb-4"
              style={{ fontFamily: "var(--serif)" }}
            >
              Mniej papierologii. <em className="italic text-[var(--accent)]">Więcej grania.</em>
            </h2>
            <p className="text-[var(--text-muted)] text-[1.02rem] max-w-[560px] leading-[1.7] mb-12">
              PlanOS porządkuje to, co dziś dzieje się w mailach, SMS-ach i&nbsp;arkuszach.
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

        {/* ZAPIS (główny formularz na dole) */}
        <section id="zapis" className="py-16 md:py-24 px-4 md:px-8 scroll-mt-24">
          <div className="max-w-[1100px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <AnimateIn>
              <h2
                className="text-[clamp(1.8rem,4vw,2.8rem)] font-normal leading-[1.15] mb-5"
                style={{ fontFamily: "var(--serif)" }}
              >
                Zapisz się i <em className="italic text-[var(--accent)]">zgłoś swoją agencję</em>
              </h2>
              <p className="text-[var(--text-muted)] text-[1.02rem] leading-[1.7] mb-6">
                Zajmie 20 sekund. Im więcej statystów wskaże tę samą agencję, tym szybciej
                ją zaprosimy do PlanOS — a Ty zaczniesz korzystać.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "Bezpłatnie dla statystów i epizodystów",
                  "Bez zobowiązań — tylko zapis na listę",
                  "Damy znać, gdy ruszamy w Twojej agencji",
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
            <h2
              className="text-[clamp(1.6rem,3.5vw,2.4rem)] font-normal leading-[1.15] mb-10 text-center"
              style={{ fontFamily: "var(--serif)" }}
            >
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
    </>
  );
}
