export function CtaSection() {
  return (
    <section id="cta" className="py-24 md:py-32 px-4 md:px-8 text-center relative">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)" }}
      />
      <div className="relative z-10 max-w-[600px] mx-auto">
        <h2
          className="text-[clamp(2rem,4vw,2.8rem)] font-normal mb-4"
          style={{ fontFamily: "var(--serif)" }}
        >
          Gotowy żeby przestać
          <br />
          gonić za danymi?
        </h2>
        <p className="text-[var(--text-muted)] mb-8 text-base">
          Pokażemy Ci jak PlanOS działa na żywo. Bez zobowiązań. 15 minut i będziesz wiedzieć czy to dla Ciebie.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="mailto:kontakt@planoscast.pl?subject=Chcę%20zobaczyć%20demo"
            className="inline-flex items-center gap-2 bg-[var(--accent)] text-white py-3 px-8 rounded-[10px] font-semibold text-[0.95rem] no-underline border-none cursor-pointer transition-all hover:bg-[var(--accent-soft)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(79,124,255,0.25)]"
          >
            Umów prezentację →
          </a>
          <a
            href="mailto:demo@planoscast.pl?subject=Mam%20pytanie"
            className="inline-flex items-center gap-2 bg-transparent text-[var(--text)] py-3 px-8 rounded-[10px] font-semibold text-[0.95rem] no-underline border border-[var(--border)] transition-all hover:border-[var(--border-light)] hover:bg-[var(--surface)]"
          >
            Napisz do nas
          </a>
        </div>
      </div>
    </section>
  );
}
