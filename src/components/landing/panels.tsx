const AGENCY_POINTS = [
  {
    title: "Wiele produkcji naraz",
    body: "Każdy projekt z własną obsadą, harmonogramem i statusem — bez mieszania danych między produkcjami.",
  },
  {
    title: "Import istniejącej bazy",
    body: "Przenosisz dotychczasową bazę z arkuszy, a system sam wyłapuje błędy i duplikaty.",
  },
  {
    title: "Umowy i historia współpracy",
    body: "Kto, kiedy, w jakim projekcie i na jakich warunkach — wszystko zapisane i gotowe do rozliczenia.",
  },
  {
    title: "Pełna historia komunikacji",
    body: "Widzisz, jakie wiadomości system wysłał i czy dotarły. Koniec z „nie dostałem maila”.",
  },
];

const TALENT_POINTS = [
  {
    title: "Profil zawsze aktualny",
    body: "Nowa fryzura, zmiana numeru? Talent aktualizuje dane sam — Twoja baza nigdy się nie starzeje.",
  },
  {
    title: "Zgłoszenie w kilka sekund",
    body: "Kompletna aplikacja ze zdjęciami i self-tape jednym kliknięciem — bez maili i dopytywania.",
  },
  {
    title: "Potwierdzenia bez telefonów",
    body: "Nowy termin? Talent potwierdza lub odrzuca jednym kliknięciem, a Ty od razu widzisz status.",
  },
  {
    title: "Zaufanie i przejrzystość",
    body: "Talent ma wgląd w swoje dane i zgody — a to buduje relację, na której zyskuje Twoja agencja.",
  },
];

export function Panels() {
  return (
    <section className="scroll-mt-20 bg-white py-16 md:py-24" aria-labelledby="panels-heading">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">
          Dwa panele, jeden system
        </p>
        <h2
          id="panels-heading"
          className="mt-3 max-w-2xl text-balance text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
        >
          Agencja zarządza. Talent współpracuje.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Każdy ma swój widok i swoje uprawnienia, a dane synchronizują się na
          bieżąco — mniej pracy po Twojej stronie, mniej tarć po stronie
          talentów.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 md:p-8">
            <h3 className="text-xl font-semibold text-slate-900">Panel agencji</h3>
            <p className="mt-1 text-sm text-slate-500">
              Pełna kontrola nad castingami, projektami i talentami
            </p>
            <ul className="mt-7 space-y-5">
              {AGENCY_POINTS.map((point) => (
                <li key={point.title} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{point.title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-slate-600">{point.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 md:p-8">
            <h3 className="text-xl font-semibold text-slate-900">Portal talentu</h3>
            <p className="mt-1 text-sm text-slate-500">
              Własne konto i kontrola nad profilem — Twoja baza aktualizuje się sama
            </p>
            <ul className="mt-7 space-y-5">
              {TALENT_POINTS.map((point) => (
                <li key={point.title} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{point.title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-slate-600">{point.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
