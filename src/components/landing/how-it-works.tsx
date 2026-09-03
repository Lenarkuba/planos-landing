import { Section, SectionHeader } from "./ui";

const STEPS = [
  {
    n: "01",
    title: "Demo i konfiguracja",
    body:
      "Pokazuję system na przykładzie Twojej agencji i słucham, jak pracujecie. Ustawiam projekty, typy umów i formularze zgłoszeń tak, jak dziś sprzedajecie.",
  },
  {
    n: "02",
    title: "Migracja bazy i zaproszenie zespołu",
    body:
      "Przenoszę dotychczasową bazę z arkuszy. System wyłapuje duplikaty i braki. Zapraszasz zespół z odpowiednimi uprawnieniami, a koordynatorzy dostają tylko listę obecności.",
  },
  {
    n: "03",
    title: "Pierwszy projekt na żywo",
    body:
      "Publikujesz nabór, klient wybiera przez link, talenty potwierdzają dni pracy. Po pierwszym miesiącu pliki dla księgowości i ZUS bierzesz z tej historii.",
  },
];

export function HowItWorks() {
  return (
    <Section id="jak-to-dziala" tone="paper">
      <SectionHeader
        eyebrow="Jak zaczynamy"
        title="Po tygodniu zespół pracuje w systemie"
        description="Nie musisz być osobą techniczną. Migrację i konfigurację robię z Tobą, a zespół przechodzi krótkie, praktyczne szkolenie."
      />

      <ol className="mt-14 grid gap-8 md:grid-cols-3">
        {STEPS.map((s) => (
          <li key={s.n} className="relative">
            <span className="font-display text-5xl font-medium text-brand/60">{s.n}</span>
            <h3 className="mt-3 font-display text-xl font-semibold text-ink md:text-2xl">
              {s.title}
            </h3>
            <p className="mt-3 text-pretty leading-relaxed text-ink-muted">{s.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
