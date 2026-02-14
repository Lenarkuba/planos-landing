const securityItems = [
  { title: "PESEL niewidoczny bez autoryzacji", desc: "Administrator agencji zarządza, którzy pracownicy mogą wyświetlić PESEL w aplikacji — każdy dostęp jest rejestrowany. Eksporty (ZUS oraz historia eksportów) chronione hasłem." },
  { title: "Gotowe na kontrolę UODO", desc: "Pełna historia dostępu, śledzenie zgód RODO, kontrola kto widzi jakie dane. Przy kontroli pokażesz dokładnie kto miał dostęp i kiedy." },
  { title: "Artysta wie kto używa jego danych", desc: "Każdy artysta dostaje powiadomienie gdy ktoś sprawdza jego dane wrażliwe. Pełna przejrzystość buduje zaufanie." },
  { title: "Reżyser bez danych wrażliwych", desc: "Panel selekcji pokazuje tylko to, co potrzebne do wyboru — zdjęcia, wiek, wzrost. Bez PESEL-i, bez adresów, bez numerów telefonów." },
  { title: "Zagubione urządzenie? Bez stresu.", desc: "Dane za hasłem, sesja wygasa. Ograniczenia dostępu blokują masowe pobieranie — nawet przy zagubionym urządzeniu." },
  { title: "Umowy zabezpieczone", desc: "Dokumenty chronione hasłem, widoczne tylko dla uprawnionych stron. Artysta i agencja mają swoje kopie w jednym miejscu." },
];

export function SecuritySection() {
  return (
    <section id="security" className="py-16 md:py-24 px-4 md:px-8 max-w-[1200px] mx-auto">
      <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent)] mb-4">Bezpieczeństwo danych</div>
      <h2
        className="text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.15] mb-4"
        style={{ fontFamily: "var(--serif)" }}
      >
        PESEL-e <em className="italic text-[var(--accent)]">chronione dzięki technologii 
          bankowej</em>
        
      </h2>
      <p className="text-[var(--text-muted)] text-[1.05rem] max-w-[600px] leading-[1.7] mb-12">
        Dane wrażliwe są zaszyfrowane na każdym poziomie. Dostęp do numerów PESEL wymaga odrębnej autoryzacji.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] rounded-2xl overflow-hidden mt-12">
        {securityItems.map((item) => (
          <div
            key={item.title}
            className="bg-[var(--bg-card)] p-8 transition-colors hover:bg-[var(--bg-card-hover)]"
          >
            <h3 className="text-base font-semibold mb-2 text-[var(--text)]">{item.title}</h3>
            <p className="text-[0.82rem] text-[var(--text-muted)] leading-[1.6]">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
