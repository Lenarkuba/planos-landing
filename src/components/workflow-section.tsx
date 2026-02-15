"use client";

import { AnimateIn, AnimateInStagger, AnimateInChild } from "./animate-in";

const steps = [
  {
    num: 1,
    title: "Zaimportuj bazę artystów",
    desc: "Wgraj istniejące dane artystów do systemu. Import waliduje wszystkie informacje i zwraca listę błędów dla rekordów, których nie można zaimportować.",
    tags: ["Import CSV", "Walidacja danych", "Lista błędów"],
  },
  {
    num: 2,
    title: "Stwórz casting",
    desc: "Opisz rolę, wymagania, terminy, lokalizacje, stawki. Wyślij link publiczny lub zaproś artystów z bazy. Artyści mogą się zgłosić bez rejestracji.",
    tags: ["Link publiczny", "Zaproszenia z bazy", "Rejestracja + zgłoszenie"],
  },
  {
    num: 3,
    title: "Zgłoszenia",
    desc: "Kompletne zgłoszenia — zdjęcia, self-tape, dane kontaktowe. Przejdź od razu do preselekcji bez sprawdzania załączników.",
    tags: ["1-klik zgłoszenie", "Auto-walidacja", "Filtry"],
  },
  {
    num: 4,
    title: "Reżyser wybiera",
    desc: "Udostępniasz panel selekcji — reżyser przegląda preselekcję i zaznacza wybranych. Bez logowania, bez PESEL-i, bez chaosu mailowego. Reżyser może wygenerować PDF z wyborem dla produkcji — Ty widzisz wszystko na żywo w aplikacji.",
    tags: ["Panel z tokenem", "Bez danych wrażliwych", "Śledzenie wyborów"],
  },
  {
    num: 5,
    title: "Potwierdź dzień zdjęciowy",
    desc: "Stwórz harmonogram, wyślij zaproszenia. Zarejestrowani artyści potwierdzają w aplikacji, niezarejestrowani — przez link w mailu.",
    tags: ["Powiadomienia push", "1-klik potwierdzenie", "Link w mailu"],
  },
  {
    num: 6,
    title: "Lista obecności na planie",
    desc: "Rejestruj obecność w aplikacji lub przez link bez logowania — dla asystentów na planie.",
    tags: ["Lista obecności", "Bez logowania", "Token na planie"],
  },
  {
    num: 7,
    title: "Rozlicz i eksportuj",
    desc: "Wszystkie dane o godzinach i obecnościach są już w systemie. Generuj pliki ze zgłoszeniami umów (ZUS) dla księgowości — jeden klik.",
    tags: ["Eksport ZUS", "Pliki dla księgowości", "Historia nagrań"],
  },
];

export function WorkflowSection() {
  return (
    <section
      id="workflow"
      className="min-h-screen py-16 md:py-24 px-4 md:px-8 flex flex-col justify-center"
    >
      <div className="max-w-[960px] mx-auto w-full">
        <AnimateIn>
          <div className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--accent)] mb-6">
            Jak to działa
          </div>
          <h2
            className="text-[clamp(2.25rem,5vw,3.5rem)] font-normal leading-[1.15] mb-6"
            style={{ fontFamily: "var(--serif)" }}
          >
            Od castingu do rozliczenia <em className="italic text-[var(--accent)]">w jednym przepływie</em>
          </h2>
          <p className="text-[var(--text-muted)] text-base max-w-[540px] leading-[1.6] mb-12">
            Od castingu po ZUS — w jednym systemie.
          </p>
        </AnimateIn>
        <div className="mt-8 relative">
          <div
            className="absolute left-5 top-[2.5rem] bottom-[2.5rem] w-px opacity-30 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, var(--accent), var(--green))" }}
          />
          <AnimateInStagger className="relative" staggerDelay={0.08}>
          {steps.map((s) => (
            <AnimateInChild key={s.num}>
            <div className="flex gap-5 py-5 relative">
              <div
                className="w-10 h-10 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-sm font-bold text-[var(--accent)] shrink-0 z-10"
              >
                {s.num}
              </div>
              <div className="min-w-0">
                <h3 className="text-base font-semibold mb-1 text-[var(--text)]">{s.title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-[1.55]">{s.desc}</p>
                <div className="flex gap-2 mt-2 flex-wrap">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.7rem] py-1 px-2 rounded bg-[var(--surface)] text-[var(--text-dim)] border border-[var(--border)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            </AnimateInChild>
          ))}
          </AnimateInStagger>
        </div>
      </div>
    </section>
  );
}
