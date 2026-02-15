"use client";

import { AnimateIn, AnimateInStagger, AnimateInChild } from "./animate-in";

const agencyFeatures = [
  { title: "Multi-projekt", desc: "Zarządzaj wieloma castingami i produkcjami jednocześnie. Każdy projekt z własną bazą artystów, harmonogramem i statusem." },
  { title: "Zgłoszenia w jednym miejscu", desc: "Kompletne aplikacje ze zdjęciem, self-tape i danymi. Filtruj po wyglądzie, umiejętnościach, dostępności. Zero pustych maili." },
  { title: "Panel reżysera", desc: "Dedykowany link do selekcji kandydatów — bez logowania, bez dostępu do PESEL-i. Reżyser widzi tylko to, co potrzebuje." },
  { title: "Obecność i dni zdjęciowe", desc: "Twórz harmonogramy nagrań, śledź potwierdzenia, rejestruj obecność na planie — w aplikacji lub tokenem bez logowania." },
  { title: "Import bazy artystów", desc: "Przenieś istniejącą bazę z CSV. System waliduje PESEL-e (sumy kontrolne), adresy email i duplikaty automatycznie." },
  { title: "ZUS i rozliczenia", desc: "Generuj pliki ze zgłoszeniami umów (ZUS) prosto z historii nagrań. Koniec z ręcznym przepisywaniem godzin." },
];

const artistFeatures = [
  { title: "Profil zawsze aktualny", desc: "Nowa fryzura? Zmiana adresu? Artysta aktualizuje dane sam, kiedy chce. Agencja zawsze ma najnowsze informacje." },
  { title: "Zgłoszenie jednym kliknięciem", desc: "Otwarte castingi, zaproszenia z agencji — artysta wysyła kompletne zgłoszenie (zdjęcie + self-tape + dane) w kilka sekund." },
  { title: "Potwierdzanie nagrań", desc: "Nowy dzień zdjęciowy? Zmiana terminu? Artysta potwierdza lub odrzuca jednym kliknięciem. Zero telefonów." },
  { title: "Powiadomienia w czasie rzeczywistym", desc: "Push notyfikacje o nowych castingach, zmianach terminów, potwierdzeniach. Nikt nie przegapi ważnej informacji." },
  { title: "Dokumenty i umowy", desc: "Wszystkie umowy w jednym miejscu. Artysta widzi co podpisał i na jakich warunkach." },
  { title: "Kontrola nad swoimi danymi", desc: "Artysta wie kto i kiedy korzystał z jego danych. Pełna przejrzystość — zgodna z RODO." },
];

function FeatureItem({
  title,
  desc,
  dotColor = "var(--accent)",
}: {
  title: string;
  desc: string;
  dotColor?: string;
}) {
  return (
    <li className="flex gap-3 items-start">
      <div
        className="w-2 h-2 rounded-full shrink-0 mt-1.5"
        style={{ background: dotColor }}
      />
      <div>
        <strong className="block text-sm font-semibold text-[var(--text)] mb-0.5">{title}</strong>
        <span className="text-[0.82rem] text-[var(--text-muted)] leading-[1.5]">{desc}</span>
      </div>
    </li>
  );
}

export function PanelsSection() {
  return (
    <section id="features" className="py-16 md:py-24 px-4 md:px-8 max-w-[1200px] mx-auto">
      <AnimateIn>
        <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent)] mb-4">Dwa panele, jeden system</div>
        <h2
          className="text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.15] mb-4"
          style={{ fontFamily: "var(--serif)" }}
        >
          Agencja zarządza. <em className="italic text-[var(--accent)]">Artysta współpracuje.</em>
        </h2>
        <p className="text-[var(--text-muted)] text-[1.05rem] max-w-[600px] leading-[1.7] mb-12">
          Każdy ma swój widok i swoje uprawnienia. Dane synchronizują się w&nbsp;czasie rzeczywistym.
        </p>
      </AnimateIn>
      <AnimateInStagger className="grid md:grid-cols-2 gap-8 mt-12" staggerDelay={0.1}>
        <AnimateInChild>
          <div className="rounded-2xl p-8 md:p-10 border border-[var(--border)] bg-[var(--bg-card)]">
          <h3 className="text-xl md:text-2xl font-normal mb-1" style={{ fontFamily: "var(--serif)" }}>Panel Agencji</h3>
          <p className="text-[var(--text-dim)] text-sm mb-8 font-medium">Pełna kontrola nad castingami, projektami i&nbsp;artystami</p>
          <ul className="flex flex-col gap-5 list-none">
            {agencyFeatures.map((f) => (
              <FeatureItem key={f.title} title={f.title} desc={f.desc} />
            ))}
          </ul>
          </div>
        </AnimateInChild>
        <AnimateInChild>
          <div className="rounded-2xl p-8 md:p-10 border border-[var(--border)] bg-[var(--bg-card)]">
          <h3 className="text-xl md:text-2xl font-normal mb-1" style={{ fontFamily: "var(--serif)" }}>Portal Artysty</h3>
          <p className="text-[var(--text-dim)] text-sm mb-8 font-medium">Własne konto, pełna kontrola nad profilem i&nbsp;zgłoszeniami</p>
          <ul className="flex flex-col gap-5 list-none">
            {artistFeatures.map((f) => (
              <FeatureItem key={f.title} title={f.title} desc={f.desc} dotColor="var(--green)" />
            ))}
          </ul>
          </div>
        </AnimateInChild>
      </AnimateInStagger>
    </section>
  );
}
