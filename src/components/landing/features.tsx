import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  Bell,
  CalendarCheck2,
  ClipboardList,
  FileSpreadsheet,
  ListChecks,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { FEATURE_ICONS } from "@/lib/graphics";
import { Card, IconBadge, Section, SectionHeader } from "./ui";

type Feature = {
  title: string;
  body: string;
  icon: LucideIcon;
  /** Generated illustration in public/graphics; falls back to lucide icon when missing. */
  graphic?: string;
  href: string;
};

const FEATURES: Feature[] = [
  {
    title: "Baza talentów i hostess",
    body:
      "Statyści, aktorzy, hostessy i promotorzy w jednej wyszukiwalnej bazie: wymiary, zdjęcia, tagi, notatki i historia współpracy. Talenty same aktualizują swoje dane.",
    icon: Users,
    graphic: FEATURE_ICONS.baza,
    href: "#platforma",
  },
  {
    title: "Formularze zgłoszeń pod projekt",
    body:
      "Na każdy casting lub nabór ustalasz, co jest wymagane: zdjęcia, wymiary, self-tape, dodatkowe ujęcia. Zgłoszenia przychodzą kompletne — do jednego panelu.",
    icon: ClipboardList,
    graphic: FEATURE_ICONS.formularze,
    href: "#demo",
  },
  {
    title: "Panel wyboru dla klienta",
    body:
      "Reżyser, producent albo brand manager dostaje jeden link. Przegląda, notuje, wybiera TAK / MOŻE / NIE — bez logowania i bez wglądu w dane wrażliwe.",
    icon: ListChecks,
    graphic: FEATURE_ICONS.klient,
    href: "#demo",
  },
  {
    title: "Dni pracy i potwierdzenia jednym kliknięciem",
    body:
      "Dzień zdjęciowy, event, akcja promocyjna — tworzysz harmonogram, talent potwierdza lub odrzuca z telefonu. Status widzisz na żywo, bez telefonów.",
    icon: CalendarCheck2,
    graphic: FEATURE_ICONS.dni,
    href: "#platforma",
  },
  {
    title: "Lista obecności z linku na miejscu",
    body:
      "Koordynator na planie lub na evencie otwiera bezpieczny link i odhacza obecność, opóźnienie, nieobecność. Godziny i stawki zapisują się od razu.",
    icon: ListChecks,
    graphic: FEATURE_ICONS.obecnosc,
    href: "#platforma",
  },
  {
    title: "Statystyki rzetelności",
    body:
      "Obecność, punktualność, no-show i czas potwierdzenia przy każdej osobie. Filtrujesz bazę po rzetelności i obsadzasz tych, na których można liczyć.",
    icon: BarChart3,
    graphic: FEATURE_ICONS.rzetelnosc,
    href: "#wzrost",
  },
  {
    title: "Rozliczenia i eksport ZUS z historii pracy",
    body:
      "Zrealizowane dni pracy zamieniają się w pliki dla księgowości i eksport ZUS. System podpowiada daty umów i oznacza, kto już został zgłoszony.",
    icon: FileSpreadsheet,
    graphic: FEATURE_ICONS.zus,
    href: "#platforma",
  },
  {
    title: "Powiadomienia zamiast telefonów",
    body:
      "Zmiana godziny, odwołanie, nowy dzień pracy — wszyscy zainteresowani dostają powiadomienie e-mail i w aplikacji. Widzisz, co zostało wysłane i czy dotarło.",
    icon: Bell,
    graphic: FEATURE_ICONS.powiadomienia,
    href: "#wzrost",
  },
  {
    title: "RODO, zgody i własność danych",
    body:
      "Zgody, prawo do bycia zapomnianym, rejestr dostępu do PESEL i pełny eksport danych w każdej chwili — wbudowane, nie doklejone. Odchodzisz? Zabierasz wszystko.",
    icon: ShieldCheck,
    graphic: FEATURE_ICONS.rodo,
    href: "#bezpieczenstwo",
  },
];

export function Features() {
  return (
    <Section id="funkcje" tone="muted">
      <SectionHeader
        eyebrow="Funkcje"
        title="Wszystko, czego potrzebuje agencja — bez oddawania kontroli nad danymi"
        description="Zamiast arkuszy, maili i grup na komunikatorze — jeden system dla biura, koordynatorów na miejscu, klientów i talentów. Każda karta to jedna rzecz, którą przestajesz robić ręcznie."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => (
          <Card key={f.title} hover className="flex flex-col">
            <FeatureGraphic feature={f} />
            <h3 className="mt-5 font-display text-xl font-semibold leading-snug text-ink">
              {f.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{f.body}</p>
            <a
              href={f.href}
              className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-ink transition-colors hover:text-brand"
            >
              Więcej <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function FeatureGraphic({ feature }: { feature: Feature }) {
  const Icon = feature.icon;
  if (feature.graphic) {
    return (
      <IconBadge size="lg" className="overflow-hidden bg-brand-soft">
        <Image
          src={feature.graphic}
          alt=""
          width={56}
          height={56}
          className="h-12 w-12 object-contain"
        />
      </IconBadge>
    );
  }
  return (
    <IconBadge size="lg">
      <Icon className="h-6 w-6" aria-hidden="true" />
    </IconBadge>
  );
}
