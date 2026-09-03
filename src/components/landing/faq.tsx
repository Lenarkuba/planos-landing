import { Section, SectionHeader } from "./ui";

const FAQ_ITEMS = [
  {
    q: "Czy PlanOS nadaje się dla agencji hostess i eventowych?",
    a: "Tak. Ten sam przepływ: nabór, wybór klienta przez link, potwierdzenia, lista obecności na evencie, umowy i eksport ZUS. Szczegóły w sekcji Platforma.",
  },
  {
    q: "Czy PlanOS należy do jakiejś agencji albo z nią współpracuje?",
    a: "Nie. PlanOS to niezależna firma software'owa. Żadna agencja nie jest właścicielem ani inwestorem PlanOS, a baza każdej agencji jest odseparowana od pozostałych.",
  },
  {
    q: "Czy inna agencja może zobaczyć moją bazę?",
    a: "Nie. Twoja baza działa w oddzielonej przestrzeni i jest niewidoczna dla kogokolwiek spoza Twojej agencji. Żadna inna agencja nie zobaczy Twoich talentów, projektów ani stawek.",
  },
  {
    q: "Co się stanie z moimi danymi, jeśli zrezygnuję?",
    a: "Zabierasz JSON i CSV w ZIP. W każdej chwili.",
  },
  {
    q: "Jak PlanOS pomaga w zgodności z RODO?",
    a: "Masz zarządzanie zgodami, usuwanie danych na żądanie (prawo do bycia zapomnianym) i szyfrowanie danych wrażliwych. Na wniosek talentu usuwany jest profil, zdjęcia i dane w bazie; rozliczenia i zgłoszenia do ZUS możesz zachować przez okres wymagany prawnie. Każdy dostęp do numerów PESEL jest rejestrowany. Dane są hostowane w UE. Umowę powierzenia przetwarzania (DPA) dostajesz przy wdrożeniu.",
  },
  {
    q: "Jak wygląda eksport do ZUS?",
    a: "Pliki dla księgowości generujesz wprost z historii dni pracy i obecności: kto, kiedy i w jakim projekcie. System podpowiada daty umów, wyłapuje braki i oznacza, kto już został zgłoszony. Numery PESEL pozostają przy tym zaszyfrowane.",
  },
  {
    q: "Czy muszę być osobą techniczną, żeby korzystać z PlanOS?",
    a: "Nie. Migracją i konfiguracją zajmuję się ja, a zespół przechodzi krótkie szkolenie. Przy płatności rocznej wdrożenie jest darmowe (0 zł). Talenty, klienci i koordynatorzy na miejscu korzystają z prostych linków, bez instalowania czegokolwiek.",
  },
  {
    q: "Czy talenty mogą sami zarządzać swoimi profilami?",
    a: "Tak. Talent ma bezpłatne konto, aktualizuje własne dane, zdjęcia i wymiary, a dane Twojej agencji (notatki, stawki, historia) pozostają prywatne. Synchronizują się tylko pola zarządzane przez talent, więc baza jest zawsze aktualna.",
  },
  {
    q: "Skąd mam wiedzieć, na kim mogę polegać przy obsadzie?",
    a: "PlanOS prowadzi statystyki rzetelności: widzisz, kto potwierdza udział, kto pojawia się na miejscu, a kto zawodzi. Decyzje o obsadzie podejmujesz na danych, nie na pamięci.",
  },
  {
    q: "Nie mam teraz dużo projektów. Czy muszę płacić pełną stawkę?",
    a: "Nie. Przy rozliczeniu miesięcznym włączasz tryb uśpienia (149 zł/mies.). Konto przechodzi w tryb tylko-do-odczytu, dane są zachowane, a Ty wracasz, kiedy zaczyna się sezon. Plan roczny jest już rozliczony z góry (dwa miesiące gratis), więc tryb uśpienia go nie dotyczy.",
  },
];

export { FAQ_ITEMS };

export function Faq() {
  return (
    <Section id="faq" tone="muted" width="narrow" aria-labelledby="faq-heading">
      <SectionHeader
        eyebrow="FAQ"
        title="Pytania, które agencje zadają przed zmianą"
        description="Jeśli nie znajdziesz tu odpowiedzi, napisz. Odpowiem konkretnie."
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
