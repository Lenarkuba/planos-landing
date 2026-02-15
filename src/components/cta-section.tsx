"use client";

import { AnimateIn } from "./animate-in";

export function CtaSection() {
  return (
    <section id="cta" className="py-24 md:py-32 px-4 md:px-8 text-center relative">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)" }}
      />
      <AnimateIn className="relative z-10 max-w-[600px] mx-auto -translate-y-6 md:-translate-y-8">
        <h2
          className="text-[clamp(2rem,4vw,2.8rem)] font-normal mb-4 leading-tight"
          style={{ fontFamily: "var(--serif)" }}
        >
          Gotowy żeby przestać
          <br />
          gonić za danymi?
        </h2>
        <p className="text-[var(--text-muted)] mb-8 text-base">
          Twoja opinia wpływa na rozwój systemu. Zobacz PlanOS i&nbsp;powiedz nam,<br />co jest dla Ciebie ważne. 15&nbsp;minut, bez zobowiązań.
        </p>
        <div className="flex justify-center">
          <a
            href="mailto:kontakt@planoscast.pl?subject=Chcę%20zobaczyć%20demo"
            className="inline-flex items-center gap-2 bg-[var(--accent)] text-white py-3 px-8 rounded-[10px] font-semibold text-[0.95rem] no-underline border-none cursor-pointer transition-all hover:bg-[var(--accent-soft)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(79,124,255,0.25)]"
          >
            Umów prezentację →
          </a>
        </div>
      </AnimateIn>
    </section>
  );
}
