export function Founder() {
  return (
    <section
      className="scroll-mt-20 bg-white py-16 md:py-24"
      aria-labelledby="founder-heading"
    >
      <div className="mx-auto grid w-full max-w-4xl items-start gap-10 px-4 sm:px-6 md:grid-cols-[200px_1fr]">
        {/*
          Placeholder na zdjęcie Jakuba. Docelowo podmień na:
          <Image src={jakubPhoto} alt="Jakub, twórca PlanOS" className="..." />
          (import zdjęcia z /public, np. public/jakub.jpg)
        */}
        <div
          aria-hidden="true"
          className="mx-auto flex h-40 w-40 items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 md:mx-0 md:h-[200px] md:w-[200px]"
        >
          <span className="text-5xl font-bold text-slate-300">J</span>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">
            Od twórcy
          </p>
          <h2
            id="founder-heading"
            className="mt-3 text-balance text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
          >
            Dlaczego zbudowałem PlanOS
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-slate-600">
            Nazywam się Jakub i przez ostatnie 3 lata budowałem PlanOS. Mam
            doświadczenie w legal-tech, więc zgodność z RODO i bezpieczeństwo
            danych traktuję priorytetowo — nie jako marketingowy dodatek.
            PlanOS tworzę sam, więc rozmawiasz bezpośrednio z osobą, która zna
            każdy element systemu. Jeśli masz pytanie o to, gdzie i jak
            przechowywane są Twoje dane — odpowiem konkretnie.
          </p>
          <p className="mt-6 font-serif text-2xl italic text-slate-800">Jakub</p>
          <p className="mt-1 text-sm text-slate-500">twórca PlanOS</p>
        </div>
      </div>
    </section>
  );
}
