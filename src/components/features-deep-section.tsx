"use client";

import { AnimateIn, AnimateInStagger, AnimateInChild } from "./animate-in";

const featureBlocks = [
  {
    num: "01",
    title: "Otwarte i zamknięte castingi",
    desc: "Wyślij publiczny link — każdy może się zgłosić, nawet bez konta. Albo zaproś konkretnych artystów z bazy do zamkniętej grupy. Niezarejestrowani kandydaci mogą zgłosić się i utworzyć profil w jednym kroku. Wszystkie zgłoszenia — także od osób bez konta — lądują w tym samym panelu i przeglądasz je tak samo jak od zarejestrowanych artystów.",
    mock: (
      <div className="bg-[var(--surface)] rounded-xl p-6 w-full max-w-[320px] border border-[var(--border)]">
        <div className="text-[0.7rem] text-[var(--text-dim)] mb-3 uppercase tracking-wider">Zgłoszenia na casting &quot;Reklama Allegro&quot;</div>
        <MockRow name="Anna Kowalska" detail="Zdjęcie + self-tape ✓" badge="Nowe" badgeStyle={{ background: "var(--accent-glow)", color: "var(--accent)" }} avatarBg="#3a4a6a" />
        <MockRow name="Piotr Wiśniewski" detail="Zdjęcie + self-tape ✓" badge="Preselekcja" badgeStyle={{ background: "var(--green-glow)", color: "var(--green)" }} avatarBg="#4a5a3a" />
        <MockRow name="Maja Nowak" detail="Zdjęcie + self-tape ✓" badge="Do weryfikacji" badgeStyle={{ background: "var(--orange-glow)", color: "var(--orange)" }} avatarBg="#5a3a4a" />
      </div>
    ),
  },
  {
    num: "02",
    title: "Panel selekcji dla reżysera",
    desc: "Wysyłasz link — reżyser przegląda preselekcję i wybiera finalnych kandydatów. Bez zakładania konta, bez dostępu do danych wrażliwych. Każdy panel jest zabezpieczony indywidualnym tokenem, po zakończonej selekcji dostajesz powiadomienie.",
    mock: (
      <div className="bg-[var(--surface)] rounded-xl p-6 w-full max-w-[320px] border border-[var(--border)]">
        <div className="text-[0.7rem] text-[var(--text-dim)] mb-3 uppercase tracking-wider">Panel reżysera — Selekcja finalna</div>
        <MockRow name="Anna K." detail="28 lat · 170cm · Warszawa" badge="✓ Tak" badgeStyle={{ background: "var(--green-glow)", color: "var(--green)" }} avatarBg="#3a4a6a" />
        <MockRow name="Piotr W." detail="35 lat · 182cm · Kraków" badge="✕ Nie" badgeStyle={{ background: "rgba(239,85,85,0.1)", color: "var(--red)" }} avatarBg="#4a5a3a" />
        <MockRow name="Maja N." detail="24 lata · 165cm · Łódź" badge="Może" badgeStyle={{ background: "var(--orange-glow)", color: "var(--orange)" }} avatarBg="#5a3a4a" />
      </div>
    ),
  },
  {
    num: "03",
    title: "Dni zdjęciowe i obecność",
    desc: "Tworzysz dni zdjęciowe dla zaakceptowanych — artyści dostają powiadomienie i potwierdzają obecność. Na planie rejestrujesz obecność w aplikacji lub przez link bez logowania (dla asystentów na planie). Zmiany terminów? Odwołania? Automatyczne powiadomienia do wszystkich zainteresowanych.",
    mock: (
      <div className="bg-[var(--surface)] rounded-xl p-6 w-full max-w-[320px] border border-[var(--border)]">
        <div className="text-[0.7rem] text-[var(--text-dim)] mb-3 uppercase tracking-wider">Dzień zdjęciowy — 15 marca 2026</div>
        <MockRow name="Anna Kowalska" detail="Potwierdziła · 08:00–16:00" badge="Na planie" badgeStyle={{ background: "var(--green-glow)", color: "var(--green)" }} avatarBg="#3a6a4a" />
        <MockRow name="Tomasz Zieliński" detail="Oczekuje potwierdzenia" badge="Wysłane" badgeStyle={{ background: "var(--orange-glow)", color: "var(--orange)" }} avatarBg="#6a3a3a" />
        <MockRow name="Maja Nowak" detail="Odrzuciła — konflikt terminu" badge="Odrzucone" badgeStyle={{ background: "rgba(239,85,85,0.1)", color: "var(--red)" }} avatarBg="#5a5a3a" />
      </div>
    ),
  },
  {
    num: "04",
    title: "ZUS — pliki eksportowe dla księgowości",
    desc: "Historia współpracy to gotowe dane do rozliczenia. Kto, kiedy, ile godzin, jaki projekt — wszystko zarejestrowane automatycznie. Gotowe pliki eksportowe dla księgowości. Pliki ze zgłoszeniami umów bez ręcznego przepisywania. Koniec z korektami i pomyłkami.",
    mock: (
      <div className="bg-[var(--surface)] rounded-xl p-6 w-full max-w-[320px] border border-[var(--border)]">
        <div className="text-[0.7rem] text-[var(--text-dim)] mb-3 uppercase tracking-wider">Eksport rozliczeń — Luty 2026</div>
        <div className="flex justify-between py-2 border-b border-[var(--border)] text-xs">
          <span className="text-[var(--text-muted)]">Artystów rozliczonych</span>
          <span className="text-[var(--text)] font-semibold">47</span>
        </div>
        <div className="flex justify-between py-2 border-b border-[var(--border)] text-xs">
          <span className="text-[var(--text-muted)]">Dni zdjęciowych</span>
          <span className="text-[var(--text)] font-semibold">12</span>
        </div>
        <div className="flex justify-between py-2 border-b border-[var(--border)] text-xs">
          <span className="text-[var(--text-muted)]">Łączne godziny</span>
          <span className="text-[var(--text)] font-semibold">384h</span>
        </div>
        <div className="mt-3 py-2 px-3 bg-[var(--accent-glow)] rounded-md text-center text-xs text-[var(--accent)] font-semibold cursor-pointer">
          ↓ Generuj plik ZUS dla księgowości
        </div>
      </div>
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
          <div className="grid md:grid-cols-2 min-h-[320px] rounded-2xl overflow-hidden bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] transition-colors">
            <div className="p-6 md:p-12 flex flex-col justify-center">
              <div className="text-4xl text-[var(--border-light)] italic mb-2 font-serif">{fb.num}</div>
              <h3 className="text-xl md:text-2xl font-normal mb-3" style={{ fontFamily: "var(--serif)" }}>{fb.title}</h3>
              <p className="text-sm text-[var(--text-muted)] leading-[1.7]">{fb.desc}</p>
            </div>
            <div className="p-6 md:p-12 flex items-center justify-center md:border-l border-[var(--border)]">
              {fb.mock}
            </div>
          </div>
          </AnimateInChild>
        ))}
      </AnimateInStagger>
    </section>
  );
}
