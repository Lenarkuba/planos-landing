import { Section } from "./ui";

export function Founder() {
  return (
    <Section id="kim-jestem" tone="muted">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-ink">
          Kim jestem
        </p>
        <h2 className="mt-3 text-balance font-display text-3xl font-semibold leading-[1.12] tracking-tight text-ink sm:text-4xl">
          Jakub Lenartowicz
        </h2>
        <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-muted">
          Zbudowałem PlanOS po tym, jak na planie zdjęciowym patrzyłem, jak te
          same nazwiska są przepisywane ręcznie z arkusza do arkusza, dzień po
          dniu. Platformę rozwijam jako niezależny produkt i sam prowadzę
          każde wdrożenie, więc masz pewność, że rozmawiasz z osobą, która zna
          każdy jej element. Twoje dane są szyfrowane i zawsze Twoje: w każdej
          chwili pobierzesz je w całości i przeniesiesz, gdzie chcesz.
        </p>
      </div>
    </Section>
  );
}
