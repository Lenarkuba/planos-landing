export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-32 pb-24 px-4 md:px-8 relative overflow-hidden">
      <div
        className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)" }}
      />
      <div className="max-w-[820px] text-center relative z-10">
        <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--surface)] border border-[var(--border)] rounded-full text-xs md:text-sm text-[var(--text-muted)] mb-8 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] animate-pulse" />
          Polska platforma dla agencji castingowych
        </div>
        <h1
          className="text-[clamp(2.8rem,6vw,4.5rem)] leading-[1.1] font-normal mb-6 tracking-tight"
          style={{ fontFamily: "var(--serif)" }}
        >
          Jedno miejsce na <em className="italic text-[var(--accent)]">castingi,</em> artystów i&nbsp;dni zdjęciowe
        </h1>
        <p className="text-[1.15rem] text-[var(--text-muted)] max-w-[600px] mx-auto mb-10 leading-[1.7]">
          Artyści sami aktualizują profile i&nbsp;zgłaszają się na castingi.
          Ty zarządzasz projektami, potwierdzasz obecność i&nbsp;eksportujesz dane do&nbsp;ZUS — bez Excela, bez chaosu mailowego.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="mailto:kontakt@planoscast.pl?subject=Chcę%20zobaczyć%20demo"
            className="inline-flex items-center gap-2 bg-[var(--accent)] text-white py-3 px-8 rounded-[10px] font-semibold text-[0.95rem] no-underline border-none cursor-pointer transition-all hover:bg-[var(--accent-soft)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(79,124,255,0.25)]"
          >
            Umów prezentację →
          </a>
          <a
            href="/#workflow"
            className="inline-flex items-center gap-2 bg-transparent text-[var(--text)] py-3 px-8 rounded-[10px] font-semibold text-[0.95rem] no-underline border border-[var(--border)] transition-all hover:border-[var(--border-light)] hover:bg-[var(--surface)]"
          >
            Jak to działa
          </a>
        </div>
      </div>
    </section>
  );
}
