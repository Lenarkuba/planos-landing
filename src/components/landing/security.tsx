import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Database, Eye, FileKey2, ShieldCheck } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/site-config";
import { Card, IconBadge, Section, SectionHeader } from "./ui";

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
      "Zarządzanie zgodami, informacja dla talentu i usuwanie danych na żądanie (prawo do bycia zapomnianym) pozwalają realnie wypełnić obowiązki administratora. Na wniosek usuwasz profil, zdjęcia i dane w bazie; rozliczenia i zgłoszenia do ZUS możesz zachować przez okres wymagany prawnie. Udostępniamy umowę powierzenia przetwarzania (DPA).",
  },
  {
    icon: Database,
    title: "Własność danych, bez uzależnienia",
    body:
      "W każdej chwili pobierzesz wszystkie swoje dane (JSON + CSV w ZIP). Odchodzisz? Zabierasz wszystko. Bez zakładników.",
  },
];

export const TALENT_PILLARS: Pillar[] = [
  {
    icon: FileKey2,
    title: "Szyfrowanie danych wrażliwych",
    body:
      "PESEL i inne dane wrażliwe są szyfrowane.",
  },
  {
    icon: Eye,
    title: "Rejestr każdego dostępu",
    body:
      "Każde odczytanie Twojego PESEL-u zostaje zapisane: kto, kiedy i w jakim celu. Historię dostępu widzisz w swoim koncie.",
  },
  {
    icon: ShieldCheck,
    title: "Zgody i prawo do bycia zapomnianym",
    body:
      "Wszystkie zgody widzisz w swoim koncie i możesz je cofnąć jednym kliknięciem. Masz też prawo do bycia zapomnianym: po Twoim wniosku agencja usuwa Twój profil, zdjęcia i dane w bazie. Dane związane z rozliczeniami i zgłoszeniami do ZUS agencja może zachować przez okres wymagany prawnie.",
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
  /** Optional closing band with a plain hosting / compliance statement. */
  footerNote?: ReactNode;
};

/** Shared security section — homepage and /dla-statystow use the same chrome. */
export function SecurityBand({
  eyebrow,
  title,
  description,
  pillars,
  footerNote,
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

      {footerNote ? (
        <div className="mt-12 rounded-2xl border border-paper-border bg-paper-muted px-6 py-5 text-center text-pretty md:px-8 md:text-left">
          {footerNote}
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
      footerNote={<HostingNote />}
    />
  );
}

function HostingNote() {
  return (
    <>
      <p className="font-display text-lg font-semibold text-ink">
        Dane są przechowywane w Unii Europejskiej (Supabase, AWS eu-west-1 —
        Irlandia). Pełna lista podprocesorów znajduje się w załączniku do umowy
        powierzenia.
      </p>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">
        Umowę powierzenia (DPA) wysyłamy na życzenie:{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="font-semibold text-brand-ink hover:text-brand"
        >
          {CONTACT_EMAIL}
        </a>
      </p>
      {/* Odkomentuj, gdy /public/dpa.pdf będzie po weryfikacji prawnej:
      <a
        href="/dpa.pdf"
        className="mt-3 inline-flex text-sm font-semibold text-brand-ink hover:text-brand"
      >
        Pobierz umowę powierzenia (DPA, PDF)
      </a>
      */}
    </>
  );
}
