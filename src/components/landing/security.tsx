import { Database, Eye, FileKey2, ShieldCheck } from "lucide-react";
import { BOOKING_URL } from "@/lib/site-config";
import { ButtonLink, Section, SectionHeader } from "./ui";

const PILLARS = [
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

export function Security() {
  return (
    <Section id="bezpieczenstwo" tone="dark" className="overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-[480px] w-[480px] rounded-full bg-brand/15 blur-3xl"
      />
      <SectionHeader
        invert
        eyebrow="Bezpieczeństwo danych"
        title="Twoja baza nigdy nie trafi do innej agencji"
        description="Baza talentów i hostess to najcenniejszy zasób agencji. Dlatego oddzielenie danych, szyfrowanie i RODO są fundamentem PlanOS, a nie dodatkiem."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {PILLARS.map(({ icon: Icon, title, body }) => (
          <div
            key={title}
            className="rounded-2xl border border-paper/10 bg-paper/[0.04] p-6 backdrop-blur-sm transition-colors hover:bg-paper/[0.07]"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/20 text-brand-bright">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-display text-xl font-medium text-paper">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-paper/70">{body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-paper/10 bg-paper/[0.04] px-6 py-6 md:flex-row md:px-8">
        <p className="text-center font-display text-xl text-paper md:text-left">
          Porozmawiajmy o tym, gdzie i jak przechowywane są Twoje dane.
        </p>
        <ButtonLink
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          variant="inverted"
          size="lg"
        >
          Umów demo
        </ButtonLink>
      </div>
    </Section>
  );
}
