"use client";

import { AnimateIn, AnimateInStagger, AnimateInChild } from "./animate-in";

const whoCards = [
  {
    title: "Agencje castingowe",
    desc: "Przestajesz gonić za danymi i zaczynasz domykać castingi. Artyści sami aktualizują profile, zgłoszenia przychodzą kompletne.",
    features: ["Baza artystów z importem CSV", "Otwarte i zamknięte castingi", "Panel reżysera bez danych wrażliwych", "Eksport ZUS", "Zarządzanie wieloma projektami"],
  },
  {
    title: "Domy produkcyjne",
    desc: "Zarządzaj castingami i dniami zdjęciowymi wielu produkcji w jednym systemie. Od preselekcji po rozliczenie.",
    features: ["Multi-projekt z osobnymi zespołami", "Harmonogramy dni zdjęciowych", "Lista obecności na planie", "Historia współpracy z artystami", "Bezpieczne udostępnianie reżyserom"],
  },
  {
    title: "Artyści",
    desc: "Twoje dane, Twoja kontrola. Zarządzaj profilem, zgłaszaj się na castingi i potwierdzaj nagrania — wszystko w jednym miejscu.",
    features: ["Własny profil — zdjęcia, dane, umiejętności", "Zgłoszenie jednym kliknięciem", "Powiadomienia o castingach i zmianach", "Potwierdzanie nagrań w aplikacji", "Wgląd w to kto korzysta z Twoich danych"],
  },
];

export function ForWhoSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 max-w-[1200px] mx-auto">
      <AnimateIn>
        <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent)] mb-4">Dla kogo</div>
        <h2
          className="text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.15] mb-4"
          style={{ fontFamily: "var(--serif)" }}
        >
          Czy PlanOS jest <em className="italic text-[var(--accent)]">dla Twojej firmy?</em>
        </h2>
      </AnimateIn>
      <AnimateInStagger className="grid md:grid-cols-3 gap-6 mt-12 items-stretch" staggerDelay={0.1}>
        {whoCards.map((card) => (
          <AnimateInChild key={card.title} className="h-full">
          <div className="h-full flex flex-col rounded-2xl p-8 md:p-10 bg-[var(--bg-card)] transition-all hover:bg-[var(--bg-card-hover)] hover:-translate-y-1">
            <h3 className="text-xl md:text-2xl font-normal mb-2" style={{ fontFamily: "var(--serif)" }}>{card.title}</h3>
            <p className="text-sm text-[var(--text-muted)] leading-[1.6] mb-5">{card.desc}</p>
            <ul className="flex flex-col gap-2 list-none">
              {card.features.map((f) => (
                <li key={f} className="text-sm text-[var(--text-muted)] flex gap-2 items-start">
                  <span className="text-[var(--accent)] shrink-0">→</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          </AnimateInChild>
        ))}
      </AnimateInStagger>
    </section>
  );
}
