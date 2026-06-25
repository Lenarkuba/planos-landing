"use client";

import { AnimateIn, AnimateInStagger, AnimateInChild } from "./animate-in";
import { VideoDemo } from "./video-demo";
import { ScreenshotSlideshow, ScreenshotStatic } from "./screenshot-slideshow";

const featureBlocks = [
  {
    num: "01",
    title: "Otwarte i zamknięte castingi",
    desc: "Wyślij publiczny link — każdy może się zgłosić, nawet bez konta. Albo zaproś konkretnych artystów z bazy do zamkniętej grupy. Niezarejestrowani kandydaci mogą zgłosić się i utworzyć profil w jednym kroku. Wszystkie zgłoszenia — także od osób bez konta — lądują w tym samym panelu i przeglądasz je tak samo jak od zarejestrowanych artystów.",
    mock: (
      <VideoDemo youtubeId="Gyiwj6UpaBc" />
    ),
    fullBleed: true,
    centered: true,
  },
  {
    num: "02",
    title: "Panel selekcji dla reżysera",
    desc: "Wysyłasz link — reżyser przegląda preselekcję i wybiera finalnych kandydatów. Bez zakładania konta, bez dostępu do danych wrażliwych. Każdy panel jest zabezpieczony indywidualnym tokenem, po zakończonej selekcji dostajesz powiadomienie.",
    mock: (
      <VideoDemo youtubeId="EXPI617RY40" />
    ),
    fullBleed: true,
    centered: true,
  },
  {
    num: "03",
    title: "Dni zdjęciowe i obecność",
    desc: "Tworzysz dni zdjęciowe dla zaakceptowanych — artyści dostają powiadomienie i potwierdzają obecność. Na planie rejestrujesz obecność w aplikacji lub przez link bez logowania (dla asystentów na planie). Zmiany terminów? Odwołania? Automatyczne powiadomienia do wszystkich zainteresowanych.",
    fullBleed: true,
    centered: false,
    mock: (
      <ScreenshotSlideshow
        slides={[
          { src: "/screenshots/planer.png", alt: "Planer dni zdjęciowych" },
          { src: "/screenshots/kalendarz.png", alt: "Kalendarz dni zdjęciowych" },
          { src: "/screenshots/lista-obecnosci.png", alt: "Lista obecności na planie" },
        ]}
      />
    ),
  },
  {
    num: "04",
    title: "ZUS — pliki eksportowe dla księgowości",
    desc: "Historia współpracy to gotowe dane do rozliczenia. Kto, kiedy, ile godzin, jaki projekt — wszystko zarejestrowane automatycznie. Gotowe pliki eksportowe dla księgowości. Pliki ze zgłoszeniami umów bez ręcznego przepisywania. Koniec z korektami i pomyłkami.",
    fullBleed: true,
    centered: false,
    mock: (
      <ScreenshotStatic src="/screenshots/zus.png" alt="Eksport ZUS" />
    ),
  },
];

function MockRow({
  name,
  detail,
  badge,
  badgeStyle,
  avatarBg,
}: {
  name: string;
  detail: string;
  badge: string;
  badgeStyle: React.CSSProperties;
  avatarBg: string;
}) {
  return (
    <div className="flex items-center gap-3 py-2.5 border-b border-[rgba(42,42,53,0.5)] last:border-0">
      <div className="w-8 h-8 rounded-full shrink-0" style={{ background: avatarBg }} />
      <div className="min-w-0">
        <div className="text-sm font-semibold text-[var(--text)]">{name}</div>
        <div className="text-[0.7rem] text-[var(--text-dim)]">{detail}</div>
      </div>
      <span className="ml-auto text-[0.65rem] py-0.5 px-2 rounded font-semibold" style={badgeStyle}>{badge}</span>
    </div>
  );
}

export function FeaturesDeepSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 max-w-[1200px] mx-auto">
      <AnimateIn>
        <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent)] mb-4">Kluczowe możliwości</div>
        <h2
          className="text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.15] mb-4"
          style={{ fontFamily: "var(--serif)" }}
        >
          Zbudowane dla <em className="italic text-[var(--accent)]">realiów polskiego rynku</em>
        </h2>
        <p className="text-[var(--text-muted)] text-[1.05rem] max-w-[600px] leading-[1.7] mb-12">
          System rozwija się w stałej współpracy z polskimi agencjami — z właścicielami i pracownikami, którzy codziennie mierzą się z problemami, które PlanOS ma rozwiązywać.
        </p>
      </AnimateIn>
      <AnimateInStagger className="flex flex-col gap-6 mt-12" staggerDelay={0.1}>
        {featureBlocks.map((fb) => (
          <AnimateInChild key={fb.num} className="h-full">
          <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] transition-colors" style={{ minHeight: "380px" }}>
            <div className="p-6 md:p-12 flex flex-col justify-center">
              <div className="text-4xl text-[var(--border-light)] italic mb-2 font-serif">{fb.num}</div>
              <h3 className="text-xl md:text-2xl font-normal mb-3" style={{ fontFamily: "var(--serif)" }}>{fb.title}</h3>
              <p className="text-sm text-[var(--text-muted)] leading-[1.7]">{fb.desc}</p>
            </div>
            <div className={`md:border-l border-[var(--border)] ${
              fb.centered
                ? "p-6 md:p-8 flex items-center justify-center"
                : fb.fullBleed
                  ? "overflow-hidden flex flex-col"
                  : "p-6 md:p-12 flex items-center justify-center"
            }`}>
              {fb.mock}
            </div>
          </div>
          </AnimateInChild>
        ))}
      </AnimateInStagger>
    </section>
  );
}
