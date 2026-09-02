import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Database, Eye, FileKey2, ShieldCheck } from "lucide-react";
import { BOOKING_URL } from "@/lib/site-config";
import { ButtonLink, Card, IconBadge, Section, SectionHeader } from "./ui";

type Pillar = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const AGENCY_PILLARS: Pillar[] = [
  {
    icon: ShieldCheck,
    title: "Pełne oddzielenie Twojej bazy",
    body:
      "Twoja baza działa w oddzielonej przestrzeni, niewidocznej dla kogokolwiek spoza Twojej agencji. Żadna inna agencja nie zobaczy Twoich talentów, projektów ani stawek — nigdy.",
  },
  {
    icon: FileKey2,
    title: "Szyfrowanie i kontrola dostępu",
    body:
      "Dane wrażliwe, w tym numery PESEL, są szyfrowane. Każde ich użycie jest rejestrowane — zawsze wiesz, kto i kiedy z nich korzystał. Koordynator na miejscu widzi tylko listę obecności.",
  },
  {
    icon: Eye,
    title: "RODO w praktyce",
    body:
      "Zarządzanie zgodami, informacja dla talentu i silnik usuwania danych pozwalają realnie wypełnić obowiązki administratora. Udostępniamy umowę powierzenia przetwarzania (DPA).",
  },
  {
    icon: Database,
    title: "Własność danych, bez uzależnienia",
    body:
      "W każdej chwili pobierzesz wszystkie swoje dane (JSON + CSV w ZIP). Odchodzisz? Zabierasz dane ze sobą. Bez zakładników.",
  },
];

export const TALENT_PILLARS: Pillar[] = [
  {
    icon: FileKey2,
    title: "Szyfrowanie danych wrażliwych",
    body:
      "PESEL i inne dane wrażliwe są szyfrowane algorytmem AES-256. Nie leżą w arkuszu ani w skrzynce mailowej.",
  },
  {
    icon: Eye,
    title: "Rejestr każdego dostępu",
    body:
      "Każde odczytanie Twojego PESEL-u zostaje zapisane: kto, kiedy i w jakim celu. Dostajesz o tym powiadomienie.",
  },
  {
    icon: ShieldCheck,
    title: "Zgody i prawo do bycia zapomnianym",
    body:
      "Widzisz wszystkie zgody, które wyraziłeś. Cofasz je jednym kliknięciem, a wniosek o usunięcie danych realizuje system — nie ręcznie ktoś w biurze.",
  },
  {
    icon: Database,
    title: "Odseparowane dane agencji",
    body:
      "PlanOS to oprogramowanie, z którego korzysta Twoja agencja — nie portal ani giełda statystów. Dane każdej agencji są oddzielone; nikt spoza niej nie widzi Twojego profilu.",
  },
];

type SecurityBandProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  pillars: Pillar[];
  cta?: { href: string; label: string; external?: boolean };
};

/** Shared security section — homepage and /dla-statystow use the same chrome. */
export function SecurityBand({
  eyebrow,
  title,
  description,
  pillars,
  cta,
}: SecurityBandProps) {
  return (
    <Section id="bezpieczenstwo" tone="paper">
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {pillars.map(({ icon: Icon, title: pillarTitle, body }) => (
          <Card key={pillarTitle} hover>
            <IconBadge>
              <Icon className="h-5 w-5" aria-hidden="true" />
            </IconBadge>
            <h3 className="mt-4 font-display text-xl font-semibold text-ink">{pillarTitle}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{body}</p>
          </Card>
        ))}
      </div>

      {cta ? (
        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-paper-border bg-paper-muted px-6 py-6 md:flex-row md:px-8">
          <p className="text-center font-display text-xl font-semibold text-ink md:text-left">
            Porozmawiajmy o tym, gdzie i jak przechowywane są Twoje dane.
          </p>
          <ButtonLink
            href={cta.href}
            target={cta.external ? "_blank" : undefined}
            rel={cta.external ? "noopener noreferrer" : undefined}
            size="lg"
            className="shrink-0"
          >
            {cta.label}
          </ButtonLink>
        </div>
      ) : null}
    </Section>
  );
}

export function Security() {
  return (
    <SecurityBand
      eyebrow="Bezpieczeństwo danych"
      title="Twoja baza nigdy nie trafi do innej agencji"
      description="Baza talentów i hostess to najcenniejszy zasób agencji. Dlatego oddzielenie danych, szyfrowanie i RODO są fundamentem PlanOS, a nie dodatkiem."
      pillars={AGENCY_PILLARS}
      cta={{ href: BOOKING_URL, label: "Umów demo", external: true }}
    />
  );
}
