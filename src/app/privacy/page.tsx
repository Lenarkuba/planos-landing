import { Navbar, Footer } from "@/components";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Polityka prywatności | PlanOS",
  description:
    "Polityka prywatności i ochrony danych osobowych platformy PlanOS. Zgodność z RODO.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg)]">
        {/* Header */}
        <header className="border-b border-[var(--border)] py-12 md:py-16 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent)] mb-3">
              Dokument prawny
            </div>
            <h1
              className="text-[clamp(2rem,4vw,3rem)] font-normal mb-2"
              style={{ fontFamily: "var(--serif)", color: "var(--text)" }}
            >
              Polityka prywatności
            </h1>
            <p className="text-[var(--text-dim)] text-sm">
              Ostatnia aktualizacja: {new Date().toLocaleDateString("pl-PL", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          </div>
        </header>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="space-y-10 text-[var(--text-muted)]">
            <p className="text-[var(--text)] leading-relaxed">
              Niniejsza Polityka Prywatności opisuje zasady przetwarzania i ochrony danych osobowych
              w związku z korzystaniem z platformy PlanOS. Zobowiązujemy się do ochrony prywatności
              użytkowników i przetwarzania danych zgodnie z RODO oraz polskimi przepisami.
            </p>

            <section>
              <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: "var(--text)" }}>
                1. Administrator danych
              </h2>
              <p>
                Administratorem Twoich danych osobowych jest PlanOS z siedzibą w Warszawie, Polska.
              </p>
              <div className="mt-4 p-5 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                <p className="text-[var(--text)] font-medium mb-2">Kontakt:</p>
                <a href="mailto:kontakt@planoscast.pl" className="text-[var(--accent)] hover:underline">
                  kontakt@planoscast.pl
                </a>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: "var(--text)" }}>
                2. Zakres przetwarzanych danych
              </h2>
              <p className="mb-4">W zależności od roli (agencja, artysta, reżyser) przetwarzamy m.in.:</p>

              <h3 className="text-base font-semibold mt-6 mb-2" style={{ color: "var(--text)" }}>
                2.1 Dane identyfikacyjne
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Imię i nazwisko</li>
                <li>Data urodzenia, płeć</li>
                <li>PESEL (wyłącznie dla ZUS — przechowywany zaszyfrowany)</li>
              </ul>

              <h3 className="text-base font-semibold mt-6 mb-2" style={{ color: "var(--text)" }}>
                2.2 Dane kontaktowe
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Adres e-mail, numer telefonu</li>
                <li>Adres zamieszkania (ulica, nr budynku, kod pocztowy, miasto)</li>
              </ul>

              <h3 className="text-base font-semibold mt-6 mb-2" style={{ color: "var(--text)" }}>
                2.3 Dane fizyczne i wizerunkowe (artyści)
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Wzrost, waga, wymiary (klatka, talia, biodra)</li>
                <li>Rozmiar obuwia i odzieży, kolor włosów i oczu</li>
                <li>Zdjęcia profilowe, self-tape, wizytówka YouTube</li>
              </ul>

              <h3 className="text-base font-semibold mt-6 mb-2" style={{ color: "var(--text)" }}>
                2.4 Dane techniczne
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Adres IP, user agent, dane sesji</li>
                <li>Logi audytowe (niemodyfikowalne)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: "var(--text)" }}>
                3. Cele i podstawy prawne
              </h2>
              <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[var(--surface)]">
                      <th className="text-left p-4 font-semibold text-[var(--text)]">Cel</th>
                      <th className="text-left p-4 font-semibold text-[var(--text)]">Podstawa (RODO)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-[var(--border)]">
                      <td className="p-4">Świadczenie usług platformy</td>
                      <td className="p-4">Art. 6 ust. 1 lit. b</td>
                    </tr>
                    <tr className="border-t border-[var(--border)]">
                      <td className="p-4">Zgłoszenia do ZUS</td>
                      <td className="p-4">Art. 6 ust. 1 lit. c — obowiązek prawny</td>
                    </tr>
                    <tr className="border-t border-[var(--border)]">
                      <td className="p-4">Bezpieczeństwo, logi audytowe</td>
                      <td className="p-4">Art. 6 ust. 1 lit. f — uzasadniony interes</td>
                    </tr>
                    <tr className="border-t border-[var(--border)]">
                      <td className="p-4">Powiadomienia, dane biometryczne</td>
                      <td className="p-4">Art. 6 ust. 1 lit. a — zgoda</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: "var(--text)" }}>
                4. Ochrona numeru PESEL
              </h2>
              <div className="p-5 rounded-xl bg-[var(--surface)] border border-[var(--border)] mb-4">
                <ul className="space-y-2 text-[var(--text)]">
                  <li>• PESEL przechowywany wyłącznie zaszyfrowany (AES-256)</li>
                  <li>• PESEL nie jest przetwarzany w przeglądarce</li>
                  <li>• Każdy dostęp jest rejestrowany w logu audytowym</li>
                  <li>• Panel reżysera nie wyświetla danych wrażliwych</li>
                </ul>
              </div>
              <p>
                Jako artysta masz prawo wglądu do historii dostępu do swojego PESEL w panelu użytkownika.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: "var(--text)" }}>
                5. Udostępnianie danych
              </h2>
              <p className="mb-4">Dane mogą być udostępniane:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-[var(--text)]">Agencjom i reżyserom</strong> — w zakresie koniecznym do castingu
                </li>
                <li>
                  <strong className="text-[var(--text)]">ZUS</strong> — dane wymagane prawnie
                </li>
                <li>
                  <strong className="text-[var(--text)]">Dostawcom IT</strong> — Supabase (hosting w UE)
                </li>
                <li>
                  <strong className="text-[var(--text)]">Organom państwowym</strong> — gdy wymaga prawa
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: "var(--text)" }}>
                6. Okres przechowywania
              </h2>
              <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[var(--surface)]">
                      <th className="text-left p-4 font-semibold text-[var(--text)]">Kategoria</th>
                      <th className="text-left p-4 font-semibold text-[var(--text)]">Okres</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-[var(--border)]">
                      <td className="p-4">Dane konta</td>
                      <td className="p-4">Do usunięcia konta</td>
                    </tr>
                    <tr className="border-t border-[var(--border)]">
                      <td className="p-4">Umowy, wynagrodzenia</td>
                      <td className="p-4">5 lat (wymóg prawny)</td>
                    </tr>
                    <tr className="border-t border-[var(--border)]">
                      <td className="p-4">Zgłoszenia ZUS</td>
                      <td className="p-4">10 lat</td>
                    </tr>
                    <tr className="border-t border-[var(--border)]">
                      <td className="p-4">Logi audytowe</td>
                      <td className="p-4">5 lat</td>
                    </tr>
                    <tr className="border-t border-[var(--border)]">
                      <td className="p-4">Dane sesji</td>
                      <td className="p-4">30 dni</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: "var(--text)" }}>
                7. Twoje prawa
              </h2>
              <p className="mb-4">Zgodnie z RODO przysługują Ci: prawo dostępu, sprostowania, usunięcia,
                ograniczenia przetwarzania, przenoszenia danych, sprzeciwu oraz wycofania zgody.
              </p>
              <p>
                Kontakt: <a href="mailto:kontakt@planoscast.pl" className="text-[var(--accent)] hover:underline">kontakt@planoscast.pl</a>.
                Skargę możesz złożyć do Prezesa UODO (ul. Stawki 2, Warszawa).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: "var(--text)" }}>
                8. Bezpieczeństwo
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Szyfrowanie TLS/HTTPS, AES-256 dla danych wrażliwych</li>
                <li>Uwierzytelnianie MFA, kontrola dostępu RBAC</li>
                <li>Izolacja danych (RLS), niemodyfikowalne logi</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: "var(--text)" }}>
                9. Cookies
              </h2>
              <p>
                Używamy cookies niezbędnych (sesja, uwierzytelnianie), funkcjonalnych (preferencje)
                oraz opcjonalnie analitycznych. Nie przekazujemy danych podmiotom trzecim w celach marketingowych.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: "var(--text)" }}>
                10. Usługi zewnętrzne
              </h2>
              <p>
                Korzystamy z Supabase (baza danych, hosting w UE) oraz Vercel (hosting aplikacji).
                Dostawcy zapewniają zgodność z RODO.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: "var(--text)" }}>
                11. Ochrona dzieci
              </h2>
              <p>
                Platforma nie jest przeznaczona dla osób poniżej 16 lat. Artyści niepełnoletni muszą
                korzystać z konta przez rodzica lub opiekuna prawnego.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: "var(--text)" }}>
                12. Zmiany polityki
              </h2>
              <p>
                Zastrzegamy prawo do aktualizacji niniejszej polityki. O istotnych zmianach
                poinformujemy w platformie i zaktualizujemy datę na tej stronie.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: "var(--text)" }}>
                13. Kontakt
              </h2>
              <div className="p-5 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                <p className="text-[var(--text)] font-medium">PlanOS</p>
                <p className="mt-1">
                  <a href="mailto:kontakt@planoscast.pl" className="text-[var(--accent)] hover:underline">
                    kontakt@planoscast.pl
                  </a>
                </p>
                <p className="mt-1 text-[var(--text-dim)]">Warszawa, Polska</p>
              </div>
            </section>
          </div>

          <nav className="mt-14 pt-8 border-t border-[var(--border)] flex flex-wrap gap-2">
            <Link href="/" className="text-[var(--accent)] hover:underline font-medium text-sm">
              ← Powrót na stronę główną
            </Link>
            <span className="text-[var(--border)]">|</span>
            <Link href="/terms" className="text-[var(--accent)] hover:underline font-medium text-sm">
              Regulamin
            </Link>
          </nav>
        </article>
      </main>
      <Footer />
    </>
  );
}
