const STEPS = [
  {
    title: "Demo i rozmowa",
    body: "Pokazujemy system i słuchamy, jak działa Twoja agencja.",
  },
  {
    title: "Wdrożenie i migracja",
    body: "Przenosimy Twoją bazę i konfigurujemy RODO oraz eksport ZUS.",
  },
  {
    title: "Szkolenie zespołu",
    body: "Krótkie, praktyczne wdrożenie.",
  },
  {
    title: "Bieżące wsparcie",
    body: "Masz bezpośredni kontakt z twórcą systemu.",
  },
];

export function HowItWorks() {
  return (
    <section
      className="scroll-mt-20 border-y border-slate-200 bg-slate-50 py-16 md:py-24"
      aria-labelledby="how-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">
          Współpraca
        </p>
        <h2
          id="how-heading"
          className="mt-3 text-balance text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
        >
          Jak zaczynamy współpracę
        </h2>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <span
                aria-hidden="true"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-700 to-indigo-600 text-sm font-semibold text-white"
              >
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-600">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
