import Image from "next/image";
import { Section } from "./ui";

/* Placeholder portrait in the paper palette — swap the file, keep the path. */
const PORTRAIT = "/kim-jestem/jakub-lenartowicz.png";

export function Founder() {
  return (
    <Section id="kim-jestem" tone="muted">
      <div className="grid items-center gap-10 md:grid-cols-[minmax(0,17rem)_1fr] md:gap-14">
        <Image
          src={PORTRAIT}
          alt="Jakub Lenartowicz, twórca PlanOS"
          width={880}
          height={1100}
          sizes="(min-width: 768px) 272px, 272px"
          className="mx-auto aspect-[4/5] w-full max-w-[17rem] rounded-2xl border border-paper-border bg-paper-card object-cover shadow-card-lg"
        />

        <div>
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
      </div>
    </Section>
  );
}
