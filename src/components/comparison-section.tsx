const beforeItems = [
  "Dane artystów rozsiane po Excelach, mailach i Dropboxie",
  "Ręczne sprawdzanie każdego zgłoszenia na casting",
  "PESEL-e w niezabezpieczonych plikach",
  "Dzwonienie po potwierdzenia obecności",
  "Ręczne tworzenie list dla reżysera",
  "Eksport do ZUS z ręcznie zbieranych danych",
  "Brak kontroli kto widzi jakie dane",
];

const afterItems = [
  "Artyści sami aktualizują swoje profile — zdjęcia, dane, umiejętności",
  "Zgłoszenia przychodzą kompletne, ze zdjęciem i self-tape",
  "PESEL-e zaszyfrowane — nikt ich nie zobaczy bez autoryzacji",
  "Artyści potwierdzają jednym kliknięciem w aplikacji",
  "Reżyser przegląda i wybiera w dedykowanym panelu",
  "Eksport ZUS bezpośrednio z historii nagrań",
  "Pełna kontrola — kto, kiedy, do czego miał dostęp",
];

export function ComparisonSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 max-w-[1200px] mx-auto">
      <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent)] mb-4">Transformacja</div>
      <h2
        className="text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.15] mb-4"
        style={{ fontFamily: "var(--serif)" }}
      >
        Jeden system zamiast <em className="italic text-[var(--accent)]">dziesięciu narzędzi</em>
      </h2>
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <div className="rounded-2xl p-10 bg-[var(--bg-card)] border border-[var(--border)]">
          <div className="text-[0.7rem] font-bold uppercase tracking-[0.15em] mb-6 inline-block py-1 px-3 rounded-md bg-[rgba(239,85,85,0.1)] text-[var(--red)]">Bez PlanOS</div>
          <ul className="flex flex-col gap-4 list-none">
            {beforeItems.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-[var(--text-muted)] leading-[1.5]">
                <span className="text-[var(--red)] shrink-0 mt-0.5">✕</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="rounded-2xl p-10 border"
          style={{
            background: "linear-gradient(135deg, rgba(79, 124, 255, 0.06), rgba(62, 207, 142, 0.04))",
            borderColor: "rgba(79, 124, 255, 0.2)",
          }}
        >
          <div className="text-[0.7rem] font-bold uppercase tracking-[0.15em] mb-6 inline-block py-1 px-3 rounded-md bg-[rgba(62,207,142,0.1)] text-[var(--green)]">Z PlanOS</div>
          <ul className="flex flex-col gap-4 list-none">
            {afterItems.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-[var(--text-muted)] leading-[1.5]">
                <span className="text-[var(--green)] shrink-0 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
