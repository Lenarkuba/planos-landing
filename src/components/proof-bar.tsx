export function ProofBar() {
  return (
    <div className="px-4 md:px-8 -mt-8 mb-16">
      <div className="max-w-[700px] mx-auto flex justify-center gap-8 md:gap-12 py-6 border-t border-[var(--border)] flex-wrap">
        <div className="text-center">
          <div className="text-2xl font-bold text-[var(--text)]">7 kroków</div>
          <div className="text-xs text-[var(--text-dim)] uppercase tracking-widest mt-0.5">Od castingu do ZUS</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-[var(--text)]">0 maili</div>
          <div className="text-xs text-[var(--text-dim)] uppercase tracking-widest mt-0.5">Do potwierdzenia nagrania</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-[var(--text)]">1 link</div>
          <div className="text-xs text-[var(--text-dim)] uppercase tracking-widest mt-0.5">Dla reżysera, bez logowania</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-[var(--text)]">PESEL</div>
          <div className="text-xs text-[var(--text-dim)] uppercase tracking-widest mt-0.5">Zaszyfrowany, audyt dostępu</div>
        </div>
      </div>
    </div>
  );
}
