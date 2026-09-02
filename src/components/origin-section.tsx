"use client";

import { AnimateIn } from "./animate-in";

export function OriginSection() {
  return (
    <section id="origin" className="py-16 md:py-24 px-4 md:px-8 max-w-[800px] mx-auto">
      <AnimateIn>
        <blockquote className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] p-8 md:p-10 transition-colors hover:bg-[var(--bg-card-hover)]">
          <div className="text-5xl text-[var(--border-light)] leading-none mb-[-0.5rem] italic" style={{ fontFamily: "var(--serif)" }}>
            
          </div>
          <p
            className="text-xl md:text-2xl font-normal leading-[1.4] italic text-[var(--text)]"
            style={{ fontFamily: "var(--serif)" }}
          >
            Powstał na planie filmowym. Z&nbsp;prawdziwej potrzeby.
          </p>
          <div className="text-[var(--text-muted)] text-[0.95rem] leading-[1.8] mt-6 space-y-4 italic">
            <p>
              PlanOS zaczął się na produkcji filmowej, gdzie właściciel agencji castingowej potrzebował pomocy z&nbsp;Excelem. Setki PESEL-i w&nbsp;niezabezpieczonym arkuszu. Godziny spędzane na sprawdzaniu maili z&nbsp;niekompletnymi zgłoszeniami. Lista obecności na kartce.
            </p>
            <p>
              W&nbsp;2024 powstał pierwszy prototyp — prosta baza artystów, nagrań i&nbsp;danych do ZUS. Zadziałało. Szybko okazało się, że problem jest znacznie większy niż jeden Excel: większość agencji w&nbsp;Polsce zmaga się z&nbsp;tym samym chaosem.
            </p>
            <p>
              PlanOS to nie jest kolejna platforma przetłumaczona z&nbsp;angielskiego. To niezależny system zaprojektowany od zera dla polskiego rynku, we współpracy z&nbsp;agencjami — z&nbsp;obsługą PESEL-i, eksportem do ZUS i&nbsp;ze zrozumieniem, jak naprawdę wygląda praca agencji castingowej w&nbsp;Polsce. Nie należy do żadnej agencji i&nbsp;nie jest przez żadną finansowany.
            </p>
          </div>
          <footer className="mt-6 text-[var(--text-muted)] not-italic text-center">
            — Zespół PlanOS
          </footer>
        </blockquote>
      </AnimateIn>
    </section>
  );
}
