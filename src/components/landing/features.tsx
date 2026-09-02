import Image from "next/image";
import {
  Users,
  Clapperboard,
  Bell,
  ShieldCheck,
  Download,
  UsersRound,
} from "lucide-react";
import planerShot from "../../../public/screenshots/planer.png";
import listaShot from "../../../public/screenshots/lista-obecnosci.png";
import zusShot from "../../../public/screenshots/zus.png";

const tileBase =
  "group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-[0_20px_50px_-25px_rgba(15,35,63,0.3)] md:p-7";

/** Small decorative reliability chart used in the statistics tile. */
function StatsMock() {
  const bars = [
    { label: "AK", value: 92, tone: "bg-emerald-500" },
    { label: "MW", value: 84, tone: "bg-emerald-500" },
    { label: "PZ", value: 71, tone: "bg-blue-500" },
    { label: "JN", value: 38, tone: "bg-amber-400" },
  ];
  return (
    <div aria-hidden="true" className="mt-5 space-y-2.5 rounded-xl border border-slate-100 bg-slate-50 p-4">
      {bars.map((bar) => (
        <div key={bar.label} className="flex items-center gap-3">
          <span className="w-7 text-[0.7rem] font-semibold text-slate-500">{bar.label}</span>
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-200">
            <div className={`h-full rounded-full ${bar.tone}`} style={{ width: `${bar.value}%` }} />
          </div>
          <span className="w-9 text-right text-[0.7rem] font-medium text-slate-500">{bar.value}%</span>
        </div>
      ))}
      <p className="pt-1 text-[0.68rem] font-medium uppercase tracking-wide text-slate-400">
        Obecność na planie
      </p>
    </div>
  );
}

export function Features() {
  return (
    <section
      id="funkcje"
      className="scroll-mt-20 bg-white py-16 md:py-24"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">
            Rozwiązanie
          </p>
          <h2
            id="features-heading"
            className="mt-3 text-balance text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
          >
            PlanOS porządkuje całą agencję — bez oddawania kontroli nad danymi
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-slate-600">
            Baza talentów, castingi, dni zdjęciowe i rozliczenia w jednym
            systemie zbudowanym od podstaw z myślą o polskich agencjach
            castingowych i agencjach statystów. Twoja baza pozostaje oddzielona,
            zaszyfrowana i wyłącznie Twoja.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-fr gap-4 md:grid-cols-3">
          {/* Anchor tile: casting flow with screenshot */}
          <article className={`${tileBase} md:col-span-2 md:row-span-2 md:pb-0`}>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 ring-1 ring-blue-100">
              <Clapperboard aria-hidden="true" className="h-5 w-5 text-blue-700" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-slate-900">
              Od zgłoszenia do obsady — w jednym przepływie
            </h3>
            <p className="mt-2 max-w-xl text-[0.95rem] leading-relaxed text-slate-600">
              Tworzysz casting z własnym formularzem zgłoszenia — sam decydujesz,
              jakie zdjęcia, wymiary czy self-tape są wymagane. Kompletne
              zgłoszenia lądują w jednym panelu, gotowe do selekcji i obsady.
            </p>
            <div className="mt-6 flex-1 overflow-hidden rounded-t-xl border border-b-0 border-slate-200 shadow-sm">
              <Image
                src={planerShot}
                alt="Zrzut ekranu PlanOS: planer dni zdjęciowych z obsadą projektu"
                sizes="(min-width: 768px) 700px, 100vw"
                className="h-full w-full object-cover object-left-top"
              />
            </div>
          </article>

          {/* Talent database */}
          <article className={tileBase}>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 ring-1 ring-blue-100">
              <Users aria-hidden="true" className="h-5 w-5 text-blue-700" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Baza talentów, zawsze aktualna
            </h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-600">
              Profile, zdjęcia, wymiary i tagi w jednym wyszukiwalnym miejscu.
              Talenty same dbają o aktualność swoich danych.
            </p>
          </article>

          {/* Director panel */}
          <article className={tileBase}>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 ring-1 ring-blue-100">
              <svg
                aria-hidden="true"
                className="h-5 w-5 text-blue-700"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Panel wyboru dla reżysera
            </h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-600">
              Wysyłasz jeden link. Reżyser przegląda, notuje i wybiera — bez
              logowania i bez wglądu w dane wrażliwe.
            </p>
          </article>

          {/* Attendance — wide with screenshot */}
          <article className={`${tileBase} md:col-span-2 md:pb-0`}>
            <h3 className="text-lg font-semibold text-slate-900">
              Obecności prosto z planu
            </h3>
            <p className="mt-2 max-w-lg text-[0.95rem] leading-relaxed text-slate-600">
              Rejestrujesz obecność w aplikacji albo udostępniasz asystentowi na
              planie bezpieczny link. Zero papierowych list i pomyłek.
            </p>
            <div className="mt-5 flex-1 overflow-hidden rounded-t-xl border border-b-0 border-slate-200 shadow-sm">
              <Image
                src={listaShot}
                alt="Zrzut ekranu PlanOS: lista obecności na planie zdjęciowym"
                sizes="(min-width: 768px) 700px, 100vw"
                className="h-full w-full object-cover object-left-top"
              />
            </div>
          </article>

          {/* Reliability statistics */}
          <article className={tileBase}>
            <h3 className="text-lg font-semibold text-slate-900">
              Statystyki rzetelności
            </h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-600">
              Widzisz, kto potwierdza, kto się pojawia, a kto zawodzi — zanim
              znów go obsadzisz.
            </p>
            <StatsMock />
          </article>

          {/* ZUS — wide with screenshot */}
          <article className={`${tileBase} md:col-span-2 md:pb-0`}>
            <h3 className="text-lg font-semibold text-slate-900">
              Rozliczenia i ZUS bez przepisywania
            </h3>
            <p className="mt-2 max-w-lg text-[0.95rem] leading-relaxed text-slate-600">
              Godziny i obecności z planu zamieniają się w gotowe pliki dla
              księgowości — eksport generowany wprost z historii nagrań. Mniej
              przepisywania, mniej błędów, mniej korekt.
            </p>
            <div className="mt-5 flex-1 overflow-hidden rounded-t-xl border border-b-0 border-slate-200 shadow-sm">
              <Image
                src={zusShot}
                alt="Zrzut ekranu PlanOS: eksport plików rozliczeniowych do ZUS"
                sizes="(min-width: 768px) 700px, 100vw"
                className="h-full w-full object-cover object-left-top"
              />
            </div>
          </article>

          {/* Notifications */}
          <article className={tileBase}>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 ring-1 ring-blue-100">
              <Bell aria-hidden="true" className="h-5 w-5 text-blue-700" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Powiadomienia zamiast telefonów
            </h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-600">
              Zmiana terminu, odwołanie, nowy dzień zdjęciowy — wszyscy
              zainteresowani dostają powiadomienie automatycznie.
            </p>
          </article>

          {/* Talent groups */}
          <article className={tileBase}>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 ring-1 ring-blue-100">
              <UsersRound aria-hidden="true" className="h-5 w-5 text-blue-700" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Grupy castingowe
            </h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-600">
              Buduj grupy talentów pod typ produkcji i zapraszaj je do
              zamkniętych castingów jednym ruchem.
            </p>
          </article>

          {/* RODO */}
          <article className={tileBase}>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 ring-1 ring-blue-100">
              <ShieldCheck aria-hidden="true" className="h-5 w-5 text-blue-700" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              RODO w standardzie
            </h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-600">
              Zgody, prawo do bycia zapomnianym i rejestr dostępu do danych
              wrażliwych — wbudowane, nie doklejone.
            </p>
          </article>

          {/* Data ownership */}
          <article className={tileBase}>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 ring-1 ring-blue-100">
              <Download aria-hidden="true" className="h-5 w-5 text-blue-700" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Twoje dane, Twoja własność
            </h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-600">
              W każdej chwili pobierzesz komplet danych swojej agencji.
              Odchodzisz? Zabierasz wszystko ze sobą.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
