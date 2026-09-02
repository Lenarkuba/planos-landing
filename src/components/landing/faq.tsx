import { Section, SectionHeader } from "./ui";

const FAQ_ITEMS = [
  {
    q: "Czy PlanOS nadaje się dla agencji hostess i eventowych?",
    a: "Tak. Przepływ jest ten sam, co przy castingu: nabór do projektu, wybór klienta przez link, potwierdzenia jednym kliknięciem, lista obecności na evencie, umowy i eksport ZUS. Uczciwie: część nazw w aplikacji jest jeszcze filmowa (np. „dni zdjęciowe” zamiast „zmiany”), ale mechanika — ludzie, terminy, obecność, stawki, rozliczenia — działa identycznie dla hostess i promotorów.",
  },
  {
    q: "Czy PlanOS należy do jakiejś agencji albo z nią współpracuje?",
    a: "Nie. PlanOS to niezależna firma software'owa — producent oprogramowania (SaaS) dla agencji castingowych, statystów i hostess. Nie jesteśmy agencją, żadna agencja nie jest właścicielem ani inwestorem PlanOS i żadna nas nie finansuje. Nie prowadzimy wspólnej puli talentów: baza każdej agencji jest odseparowana od pozostałych, a PlanOS nigdy nie sprzedaje ani nie udostępnia danych jednej agencji innej.",
  },
  {
    q: "Czy inna agencja może zobaczyć moją bazę?",
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
    a: "Pliki dla księgowości generujesz wprost z historii dni pracy i obecności — kto, kiedy i w jakim projekcie. System podpowiada daty umów, wyłapuje braki i oznacza, kto już został zgłoszony. Numery PESEL pozostają przy tym zaszyfrowane.",
  },
  {
    q: "Czy muszę być osobą techniczną, żeby korzystać z PlanOS?",
    a: "Nie. Zajmujemy się migracją i konfiguracją za Ciebie, a zespół przechodzi krótkie szkolenie. Talenty, klienci i koordynatorzy na miejscu korzystają z prostych linków — bez instalowania czegokolwiek.",
  },
  {
    q: "Czy talenty mogą sami zarządzać swoimi profilami?",
    a: "Tak — talent ma bezpłatne konto, aktualizuje własne dane, zdjęcia i wymiary, a dane Twojej agencji (notatki, stawki, historia) pozostają prywatne. Synchronizują się tylko pola zarządzane przez talent, więc baza jest zawsze aktualna.",
  },
  {
    q: "Skąd mam wiedzieć, na kim mogę polegać przy obsadzie?",
    a: "PlanOS prowadzi statystyki rzetelności: widzisz, kto potwierdza udział, kto pojawia się na miejscu, a kto zawodzi. Decyzje o obsadzie podejmujesz na danych, nie na pamięci.",
  },
  {
    q: "Nie mam teraz dużo projektów. Czy muszę płacić pełną stawkę?",
    a: "Nie. Włącz tryb uśpienia (149 zł/mies.) — konto przechodzi w tryb tylko-do-odczytu, dane są zachowane, a Ty wracasz, kiedy zaczyna się sezon.",
  },
];

export { FAQ_ITEMS };

export function Faq() {
  return (
    <Section id="faq" tone="muted" width="narrow" aria-labelledby="faq-heading">
      <SectionHeader
        eyebrow="FAQ"
        title="Pytania, które agencje zadają przed zmianą"
        description="Jeśli nie znajdziesz tu odpowiedzi — napisz, odpowiemy konkretnie."
      />

      <div className="mt-10 divide-y divide-paper-border rounded-2xl border border-paper-border bg-paper-card shadow-card">
        {FAQ_ITEMS.map((item) => (
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
    </Section>
  );
}
