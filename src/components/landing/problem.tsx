import { X, Check } from "lucide-react";

const BEFORE = [
  "Baza statystów w Excelu, zgody RODO rozsiane po mailach",
  "Telefony i SMS-y po każde potwierdzenie obecności",
  "Godziny do ZUS przepisywane ręcznie z notatek",
  "Listy dla reżysera składane w PDF-ach na ostatnią chwilę",
];

const AFTER = [
  "Jedna, wyszukiwalna baza z aktualnymi profilami i zgodami",
  "Talent potwierdza jednym kliknięciem, Ty widzisz status na żywo",
  "Pliki dla księgowości generowane z historii nagrań i obecności",
  "Reżyser wybiera w swoim panelu — bez maili i bez chaosu",
];

export function Problem() {
  return (
    <section
      className="scroll-mt-20 border-y border-slate-200 bg-slate-50 py-16 md:py-24"
      aria-labelledby="problem-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">
            Problem
          </p>
          <h2
            id="problem-heading"
            className="mt-3 text-balance text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
          >
            Prowadzenie agencji to dziś dziesiątki plików, arkuszy i ryzyko
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-slate-600">
            Jeden wyciek albo jedna kontrola i lata pracy stają pod znakiem
            zapytania. A oddając dane do przypadkowego systemu, ryzykujesz, że
            trafią tam, gdzie nie chcesz — do konkurencji.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-7 md:p-8">
            <p className="inline-block rounded-md bg-red-50 px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-red-600">
              Bez PlanOS
            </p>
            <ul className="mt-6 space-y-4">
              {BEFORE.map((item) => (
                <li key={item} className="flex gap-3 text-[0.95rem] leading-relaxed text-slate-600">
                  <X aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-red-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50/80 to-indigo-50/50 p-7 md:p-8">
            <p className="inline-block rounded-md bg-emerald-50 px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-emerald-700">
              Z PlanOS
            </p>
            <ul className="mt-6 space-y-4">
              {AFTER.map((item) => (
                <li key={item} className="flex gap-3 text-[0.95rem] leading-relaxed text-slate-700">
                  <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
