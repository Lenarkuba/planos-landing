const STEPS = [
  {
    title: "Casting i zgłoszenia",
    body: "Publikujesz link albo zapraszasz talenty z bazy. Zgłoszenia przychodzą kompletne — ze zdjęciami, wymiarami i self-tape.",
  },
  {
    title: "Selekcja z reżyserem",
    body: "Robisz preselekcję i wysyłasz reżyserowi jeden link. Jego wybory i notatki widzisz na żywo.",
  },
  {
    title: "Dzień zdjęciowy",
    body: "Tworzysz harmonogram, talenty potwierdzają jednym kliknięciem. O zmianach wszyscy dowiadują się automatycznie.",
  },
  {
    title: "Obecność na planie",
    body: "Rejestrujesz obecność w aplikacji lub przez bezpieczny link dla asystenta — bez papierowych list.",
  },
  {
    title: "Rozliczenie i ZUS",
    body: "Godziny i obecności są już w systemie. Pliki dla księgowości generujesz jednym kliknięciem.",
  },
];

export function Workflow() {
  return (
    <section
      className="scroll-mt-20 border-y border-slate-200 bg-slate-50 py-16 md:py-24"
      aria-labelledby="workflow-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">
          Jeden przepływ
        </p>
        <h2
          id="workflow-heading"
          className="mt-3 max-w-2xl text-balance text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
        >
          Od castingu do rozliczenia — bez przełączania narzędzi
        </h2>

        <ol className="mt-12 grid gap-4 md:grid-cols-5">
          {STEPS.map((step, i) => (
            <li key={step.title} className="relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6">
              <span
                aria-hidden="true"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-700 to-indigo-600 text-sm font-semibold text-white"
              >
                {i + 1}
              </span>
              <h3 className="mt-4 text-base font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
