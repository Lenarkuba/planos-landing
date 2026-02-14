export function OriginSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 max-w-[800px] mx-auto">
      <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-[20px] p-8 md:p-14 relative overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 h-[3px] opacity-60"
          style={{ background: "linear-gradient(90deg, var(--accent), var(--green))" }}
        />
        <div className="text-5xl text-[var(--border-light)] leading-none mb-[-0.5rem] italic" style={{ fontFamily: "var(--serif)" }}>
          &quot;
        </div>
        <h3
          className="text-xl md:text-2xl font-normal leading-[1.4] italic text-[var(--text)]"
          style={{ fontFamily: "var(--serif)" }}
        >
          Powstał na planie filmowym. Z&nbsp;prawdziwej potrzeby.
        </h3>
        <div className="text-[var(--text-muted)] text-[0.95rem] leading-[1.8] mt-6">
          <p className="mb-4">
            Znajomy koordynator planu zaprosił mnie na produkcję. Na miejscu poznałem właściciela agencji castingowej, który potrzebował pomocy z&nbsp;Excelem. Setki PESEL-i w&nbsp;niezabezpieczonym arkuszu. Godziny spędzane na sprawdzaniu maili z&nbsp;niekompletnymi zgłoszeniami. Lista obecności na kartce.
          </p>
          <p className="mb-4">
            W&nbsp;2024 zbudowałem dla niego pierwszy prototyp — prostą bazę artystów, nagrań i&nbsp;danych do ZUS. Zadziałało. Wtedy zobaczyłem, że problem jest znacznie większy niż jeden Excel. Większość agencji w&nbsp;Polsce zmaga się z&nbsp;tym samym chaosem.
          </p>
          <p>
            PlanOS to nie jest kolejna platforma przetłumaczona z&nbsp;angielskiego. To system zaprojektowany od zera dzięki otwartej współpracy dla polskiego rynku — z&nbsp;obsługą PESEL-i, eksportem do ZUS, i&nbsp;ze zrozumieniem jak naprawdę wygląda praca agencji castingowej w&nbsp;Polsce.
          </p>
        </div>
      </div>
    </section>
  );
}
