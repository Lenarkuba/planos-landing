import Image from "next/image";
import { STATS, TEAM } from "@/lib/site-config";

/**
 * Gigpie's "Trusted by growing education teams" strip + "We run our own company on it" card.
 * STATS values are PLACEHOLDERS (see site-config.ts) until real numbers are available.
 * Company voice: PlanOS is an independent software product, not an agency and
 * not owned/financed by one.
 */
export function TrustBand() {
  return (
    <section
      aria-labelledby="trust-heading"
      className="border-b border-paper-border bg-paper-muted"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <h2
          id="trust-heading"
          className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint"
        >
          Zbudowany razem z agencjami, nie obok nich
        </h2>

        <dl className="mt-8 grid grid-cols-2 gap-6 text-center md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <dd className="font-display text-3xl font-medium text-ink md:text-4xl">
                {s.value}
              </dd>
              <dt className="mt-1 text-sm text-ink-muted">{s.label}</dt>
            </div>
          ))}
        </dl>

        <div className="mt-12 grid items-center gap-6 rounded-2xl border border-paper-border bg-paper-card p-6 shadow-card md:grid-cols-[auto_1fr] md:p-8">
          <div className="flex items-center gap-4 md:flex-col md:items-start">
            <Image
              src={TEAM.photo}
              alt=""
              width={72}
              height={72}
              className="h-16 w-16 rounded-full border border-paper-border bg-brand-soft object-cover md:h-[72px] md:w-[72px]"
            />
            <div>
              <p className="font-semibold text-ink">{TEAM.name}</p>
              <p className="text-sm text-ink-muted">{TEAM.role}</p>
            </div>
          </div>
          <div>
            <p className="font-display text-xl font-medium leading-snug text-ink md:text-2xl">
              PlanOS powstał jako niezależny projekt technologiczny, budowany
              przez 3 lata we współpracy z agencjami castingowymi i eventowymi —
              nie należy do żadnej agencji i nie jest przez żadną agencję
              finansowany. Każda funkcja przeszła przez prawdziwe zgłoszenia,
              prawdziwe listy obecności i prawdziwy eksport ZUS.
            </p>
            <p className="mt-3 text-sm text-ink-muted">
              Zespół z doświadczeniem w legal-tech, więc RODO i bezpieczeństwo
              danych są fundamentem, nie dodatkiem. Baza każdej agencji jest
              odseparowana od pozostałych, a we wdrożeniu i na co dzień rozmawiasz
              bezpośrednio z zespołem, który zna każdy element systemu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
