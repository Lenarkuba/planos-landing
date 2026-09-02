import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  ClipboardList,
  ListChecks,
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
    title: "Statystyki rzetelności",
    body:
      "Obecność, punktualność, no-show i czas potwierdzenia przy każdej osobie. Filtrujesz bazę po rzetelności i obsadzasz tych, na których można liczyć.",
    icon: BarChart3,
    graphic: FEATURE_ICONS.rzetelnosc,
    href: "#faq",
  },
];

export function Features() {
  return (
    <Section id="funkcje" tone="muted">
      <SectionHeader
        eyebrow="Funkcje"
        title="Cztery rzeczy, które przestajesz robić ręcznie"
        description="Zamiast arkuszy, maili i grup na komunikatorze — jeden system dla biura, koordynatorów na miejscu, klientów i talentów."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
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
