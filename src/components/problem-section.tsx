const problems = [
  { title: "Rozproszone dane artystów", desc: "Zdjęcia w Dropboxie, dane w Excelu, umowy na mailu. Artysta zmienił fryzurę 3 miesiące temu — a Ty wciąż wysyłasz stare zdjęcia reżyserowi." },
  { title: "Toniesz w mailach", desc: "Każde zgłoszenie to osobny mail. Sprawdzasz czy zdjęcie jest, czy dane kompletne, czy PESEL się zgadza. Przy 50 zgłoszeniach dziennie — to cały etat." },
  { title: "PESEL-e w Excelu", desc: "Kontrola UODO to koszmar. Kto ma dostęp? Gdzie są kopie? Czy laptop asystenta jest zabezpieczony? Jedno wycieknięcie = kary i utrata zaufania artystów." },
  { title: "Potwierdzenia przez telefon", desc: "Dzwonisz, piszesz SMS-y, sprawdzasz kto odebrał. Dzień przed zdjęciami wciąż nie wiesz kto się pojawi na planie." },
  { title: "ZUS ręcznie", desc: "Zbierasz godziny z różnych źródeł, przepisujesz do formularzy, modlisz się żeby się nie pomylić. Każdy błąd to korekta i stracony czas." },
  { title: "Reżyser czeka na materiały", desc: "Tworzysz PDFy z kandydatami, wysyłasz mailem, czekasz na odpowiedź. Reżyser nie wie co zaznaczył tydzień temu. Chaos wersji." },
];

export function ProblemSection() {
  return (
    <section id="problem" className="py-16 md:py-24 px-4 md:px-8 max-w-[1200px] mx-auto">
      <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent)] mb-4">Codzienność bez systemu</div>
      <h2
        className="text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.15] mb-4 tracking-tight"
        style={{ fontFamily: "var(--serif)" }}
      >
        Excel, maile, WhatsApp, Dropbox.<br /><em className="italic text-[var(--accent)]">Ile narzędzi</em> potrzebujesz żeby obsłużyć jeden casting?
      </h2>
      <p
        className="text-[var(--text-muted)] text-[1.1rem] md:text-[1.2rem] leading-[1.7] max-w-[720px] mb-12 text-left"
        style={{ fontFamily: "var(--serif)" }}
      >
        Agencje castingowe tracą godziny na ręczne procesy, które powinny się dziać automatycznie.
        Dane w pięciu miejscach, brak kontroli nad PESEL-ami, i ciągłe pytanie: kto potwierdził?
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] rounded-2xl overflow-hidden mt-8">
        {problems.map((p) => (
          <div key={p.title} className="bg-[var(--bg-card)] p-8 transition-colors hover:bg-[var(--bg-card-hover)]">
            <h3 className="font-sans text-base font-semibold mb-2 text-[var(--text)]">{p.title}</h3>
            <p className="text-sm text-[var(--text-muted)] leading-[1.6]">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
