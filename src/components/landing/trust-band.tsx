import { Section, SectionHeader } from "./ui";

export function TrustBand() {
  return (
    <Section aria-label="Zbudowany na planie, przy prawdziwej pracy agencji" tone="muted">
      <SectionHeader
        as="h2"
        eyebrow="Skąd się wziął"
        title="Zbudowany na planie, przy prawdziwej pracy agencji"
        description="PlanOS powstał z realnej pracy agencji na planie i na evencie — nie z arkusza „dla każdej branży”."
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
