export function ProofBar() {
  return (
    <div className="px-4 md:px-8 -mt-8 mb-16">
      <div className="max-w-[700px] mx-auto flex justify-center gap-8 md:gap-12 py-6 border-t border-[var(--border)] flex-wrap">
        <div className="text-center">
          <div className="text-2xl font-bold text-[var(--text)]">2 panele</div>
          <div className="text-xs text-[var(--text-dim)] uppercase tracking-widest mt-0.5">Agencja + Artysta</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-[var(--text)]">Multi-projekt</div>
          <div className="text-xs text-[var(--text-dim)] uppercase tracking-widest mt-0.5">Wiele castingów naraz</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-[var(--text)]">1-klik</div>
          <div className="text-xs text-[var(--text-dim)] uppercase tracking-widest mt-0.5">Zgłoszenie na casting</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-[var(--text)]">ZUS export</div>
          <div className="text-xs text-[var(--text-dim)] uppercase tracking-widest mt-0.5">Prosto z systemu</div>
        </div>
      </div>
    </div>
  );
}
