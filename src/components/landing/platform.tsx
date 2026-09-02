import Image, { type StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "./ui";
import kalendarzShot from "../../../public/screenshots/kalendarz.png";
import listaShot from "../../../public/screenshots/lista-obecnosci.png";
import zusShot from "../../../public/screenshots/zus.png";

type Step = {
  n: string;
  title: string;
  body: string;
  caption: string;
  image: StaticImageData;
  alt: string;
};

const STEPS: Step[] = [
  {
    n: "1",
    title: "Zaplanuj dzień pracy z jednego kalendarza",
    body:
      "Dzień zdjęciowy, event albo akcja promocyjna — każdy dzień pracy ma swój projekt, obsadę, stawkę i status. Talenty potwierdzają jednym kliknięciem, a Ty widzisz całą agencję w jednym widoku.",
    caption:
      "Kalendarz dni pracy: potwierdzone, oczekujące, zrealizowane i no-show — filtrowane po projekcie, umowie i statusie.",
    image: kalendarzShot,
    alt: "Kalendarz dni pracy w PlanOS z podsumowaniem statusów potwierdzeń",
  },
  {
    n: "2",
    title: "Odhacz obecność na miejscu, bez papieru",
    body:
      "Koordynator na planie lub na evencie otwiera bezpieczny link na telefonie i zaznacza obecność, opóźnienie albo nieobecność. Godziny i stawki zapisują się od razu na dniu pracy.",
    caption:
      "Lista obecności z linku — bez logowania, aktywna tylko w dniu pracy, z godzinami i stawką przy każdej osobie.",
    image: listaShot,
    alt: "Lista obecności w PlanOS z oznaczeniami obecny, opóźniony, nieobecny",
  },
  {
    n: "3",
    title: "Rozliczenie i ZUS policzą się same",
    body:
      "Każdy zrealizowany dzień pracy zna już osobę, umowę i stawkę. Pliki dla księgowości i eksport do ZUS generujesz z historii pracy — bez przepisywania godzin z notatek.",
    caption:
      "Eksport ZUS: system podpowiada daty umów, wyłapuje braki i oznacza, kto został już zgłoszony.",
    image: zusShot,
    alt: "Ekran eksportu ZUS w PlanOS z listą umów i propozycją dat",
  },
];

/** Gigpie's "The Platform — book the session and the money follows" section. */
export function Platform() {
  return (
    <Section id="platforma" tone="paper" width="wide">
      <SectionHeader
        eyebrow="Platforma"
        title="Zaplanuj dzień pracy — rozliczenie policzy się samo"
        description="Trzy ekrany, na których biuro agencji spędza najwięcej czasu — prosto z produktu: kalendarz dni pracy, lista obecności i eksport dla księgowości."
      />

      <ol className="mt-16 space-y-20 md:space-y-28">
        {STEPS.map((step, i) => {
          const reversed = i % 2 === 1;
          return (
            <li
              key={step.n}
              className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14"
            >
              <div
                className={`lg:col-span-5 ${reversed ? "lg:order-2 lg:col-start-8" : ""}`}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-soft font-display text-xl font-medium text-brand-ink">
                  {step.n}
                </span>
                <h3 className="mt-5 font-display text-2xl font-medium leading-tight text-ink md:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-4 text-pretty leading-relaxed text-ink-muted">{step.body}</p>
                <a
                  href="#demo"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-ink transition-colors hover:text-brand"
                >
                  Zobacz demo <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              <figure className={`lg:col-span-7 ${reversed ? "lg:order-1 lg:col-start-1" : ""}`}>
                <div className="overflow-hidden rounded-2xl border border-paper-border bg-paper-card shadow-card-lg ring-1 ring-ink/5">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    sizes="(min-width: 1024px) 720px, 100vw"
                    className="h-auto w-full"
                  />
                </div>
                <figcaption className="mt-3 text-center text-sm text-ink-faint">
                  {step.caption}
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
