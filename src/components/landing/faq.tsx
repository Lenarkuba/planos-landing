const FAQ_ITEMS = [
  {
    q: "Czy inna agencja może zobaczyć moją bazę talentów?",
    a: "Nie. Twoja baza działa w oddzielonej przestrzeni i jest niewidoczna dla kogokolwiek spoza Twojej agencji. Żadna inna agencja nie zobaczy Twoich talentów, projektów ani stawek.",
  },
  {
    q: "Co się stanie z moimi danymi, jeśli zrezygnuję?",
    a: "Zabierasz je ze sobą. W każdej chwili pobierzesz komplet danych (JSON + CSV w ZIP). Nie stosujemy uzależnienia od dostawcy.",
  },
  {
    q: "Jak PlanOS pomaga w zgodności z RODO?",
    a: "Masz zarządzanie zgodami, silnik usuwania danych (prawo do bycia zapomnianym) i szyfrowanie danych wrażliwych. Każdy dostęp do numerów PESEL jest rejestrowany. Udostępniamy też umowę powierzenia przetwarzania (DPA).",
  },
  {
    q: "Jak wygląda eksport do ZUS?",
    a: "Pliki dla księgowości generujesz wprost z historii nagrań i obecności — kto, kiedy i w jakim projekcie. Bez ręcznego przepisywania godzin i bez korekt. Numery PESEL pozostają przy tym zaszyfrowane.",
  },
  {
    q: "Czy muszę być osobą techniczną, żeby korzystać z PlanOS?",
    a: "Nie. Zajmujemy się migracją i konfiguracją za Ciebie, a zespół przechodzi krótkie szkolenie. Talenty i asystenci na planie korzystają z prostych linków — bez instalowania czegokolwiek.",
  },
  {
    q: "Czy talenty mogą sami zarządzać swoimi profilami?",
    a: "Opcjonalnie tak — talenty aktualizują własne profile, a dane Twojej agencji pozostają prywatne. Synchronizują się tylko pola zarządzane przez talent, więc Twoja baza jest zawsze aktualna.",
  },
  {
    q: "Skąd mam wiedzieć, na kim mogę polegać przy obsadzie?",
    a: "PlanOS prowadzi statystyki rzetelności: widzisz, kto potwierdza udział, kto pojawia się na planie, a kto zawodzi. Decyzje o obsadzie podejmujesz na danych, nie na pamięci.",
  },
  {
    q: "Nie mam teraz dużo projektów. Czy muszę płacić pełną stawkę?",
    a: "Nie. Włącz tryb uśpienia (149 zł/mies.) — konto przechodzi w tryb tylko-do-odczytu, dane są zachowane, a Ty wracasz, kiedy chcesz.",
  },
];

export { FAQ_ITEMS };

export function Faq() {
  return (
    <section
      id="faq"
      className="scroll-mt-20 border-y border-slate-200 bg-slate-50 py-16 md:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">
          FAQ
        </p>
        <h2
          id="faq-heading"
          className="mt-3 text-balance text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
        >
          Najczęstsze pytania
        </h2>

        <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {FAQ_ITEMS.map((item) => (
            <details key={item.q} className="group px-6 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
                {item.q}
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180"
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
              <p className="mt-3 text-[0.95rem] leading-relaxed text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
