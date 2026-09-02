import { CalendarPlus, RefreshCcw, MessageSquareOff, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Outcome {
  icon: LucideIcon;
  title: string;
  body: string;
}

const OUTCOMES: Outcome[] = [
  {
    icon: CalendarPlus,
    title: "Więcej projektów",
    body: "Zgłoszenia, potwierdzenia i rozliczenia dzieją się same. Odzyskany czas przeznaczasz na kolejne produkcje.",
  },
  {
    icon: RefreshCcw,
    title: "Baza zawsze aktualna",
    body: "Talenty same aktualizują profile, zdjęcia i wymiary. Koniec z nieaktualnymi numerami i martwymi rekordami.",
  },
  {
    icon: MessageSquareOff,
    title: "Mniej telefonów i tarć",
    body: "Talent potwierdza udział jednym kliknięciem, a o zmianach terminów wszyscy dowiadują się automatycznie.",
  },
  {
    icon: BarChart3,
    title: "Decyzje na danych",
    body: "Statystyki rzetelności pokazują, kto potwierdza i kto naprawdę pojawia się na planie. Obsadzasz pewniej.",
  },
];

export function Outcomes() {
  return (
    <section className="bg-white py-14 md:py-20">
      <h2 className="sr-only">Co zyskuje Twoja agencja</h2>
      <div className="mx-auto grid w-full max-w-6xl gap-x-8 gap-y-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {OUTCOMES.map(({ icon: Icon, title, body }) => (
          <div key={title}>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 ring-1 ring-blue-100">
              <Icon aria-hidden="true" className="h-5 w-5 text-blue-700" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-slate-900">{title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
