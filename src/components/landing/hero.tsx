import Image from "next/image";
import { CheckCircle2, FileCheck2 } from "lucide-react";
import { BOOKING_URL } from "@/lib/site-config";
import { TrustLine } from "./trust-line";
import kalendarzShot from "../../../public/screenshots/kalendarz.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200">
      {/* Decorative gradient mesh */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-100 via-indigo-50 to-transparent blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(15,35,63,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,35,63,0.05) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-14 pt-16 sm:px-6 md:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="lp-animate inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 text-[0.8rem] font-medium text-slate-600 shadow-sm">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            System dla agencji castingowych i agencji statystów
          </p>

          <h1 className="lp-animate lp-delay-1 mt-6 text-balance text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Mniej administracji.{" "}
            <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
              Więcej projektów.
            </span>
          </h1>
          <p className="lp-animate lp-delay-2 mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-600">
            Bezpieczny system do zarządzania agencją castingową: baza talentów,
            castingi, dni zdjęciowe i rozliczenia w jednym miejscu. Twoje dane
            są w pełni oddzielone od innych agencji — i zawsze pozostają Twoją
            własnością.
          </p>

          <div className="lp-animate lp-delay-2 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-700 to-indigo-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-700/20 transition-all hover:shadow-xl hover:shadow-blue-700/30 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 sm:w-auto"
            >
              Umów demo
            </a>
            <a
              href="#demo"
              className="inline-flex w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-8 py-3.5 text-base font-semibold text-slate-800 transition-colors hover:border-slate-400 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 sm:w-auto"
            >
              Zobacz, jak to działa
            </a>
          </div>

          <div className="lp-animate lp-delay-3 mt-7 flex justify-center">
            <TrustLine className="justify-center" />
          </div>
        </div>

        {/* Product screenshot with glow + floating value chips */}
        <div className="lp-animate lp-delay-3 relative mx-auto mt-14 max-w-4xl md:mt-16">
          <div
            aria-hidden="true"
            className="absolute -inset-x-8 -top-8 bottom-0 rounded-[2rem] bg-gradient-to-b from-blue-600/10 to-transparent blur-2xl"
          />
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_30px_80px_-30px_rgba(15,35,63,0.35)] ring-1 ring-slate-900/5">
            <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-4 py-2.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="ml-3 hidden rounded-md bg-white px-3 py-0.5 text-[0.7rem] text-slate-400 sm:block">
                app.planos.pl
              </span>
            </div>
            <Image
              src={kalendarzShot}
              alt="Zrzut ekranu PlanOS: kalendarz projektów i dni zdjęciowych agencji castingowej"
              priority
              sizes="(min-width: 1024px) 896px, 100vw"
              className="h-auto w-full"
            />
          </div>

          {/* Floating chips (hidden on small screens) */}
          <div
            aria-hidden="true"
            className="absolute -left-6 top-1/4 hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg lg:flex"
          >
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
            <div className="text-xs">
              <p className="font-semibold text-slate-900">Obecność potwierdzona</p>
              <p className="text-slate-500">42 z 45 na planie</p>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute -right-6 bottom-1/4 hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg lg:flex"
          >
            <FileCheck2 className="h-5 w-5 text-blue-700" />
            <div className="text-xs">
              <p className="font-semibold text-slate-900">Pliki dla księgowości</p>
              <p className="text-slate-500">gotowe z historii nagrań</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
