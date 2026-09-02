import { Section, SectionHeader } from "./ui";

export function TrustBand() {
  return (
    <Section aria-label="Zbudowany razem z agencjami, nie obok nich" tone="muted">
      <SectionHeader
        as="h2"
        eyebrow="Niezależność i ochrona danych"
        title="Zbudowany razem z agencjami, nie obok nich"
        description="PlanOS jest niezależnym oprogramowaniem dla agencji castingowych, statystów i hostess. Nie należy do żadnej agencji, nie jest przez żadną z nich finansowany i nie prowadzi wspólnej puli talentów."
      />
      <p className="mx-auto mt-5 max-w-3xl text-center text-pretty text-lg leading-relaxed text-ink-muted">
        Zgodność z RODO oraz ochrona danych osobowych stanowią fundament
        architektury systemu. Dane każdej agencji są przetwarzane w
        odseparowanej przestrzeni. Dane wrażliwe, w tym numery PESEL, podlegają
        szyfrowaniu, a każdy dostęp do nich jest rejestrowany.
      </p>
    </Section>
  );
}
