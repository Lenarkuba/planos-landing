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
      <main className="min-h-screen">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <h1
            className="text-3xl font-bold mb-2"
            style={{ fontFamily: "var(--serif)", color: "var(--text)" }}
          >
            Polityka prywatności
          </h1>
          <p className="text-[var(--text-dim)] text-sm mb-12">
            Ostatnia aktualizacja: 14 lutego 2026
          </p>

          <div className="space-y-8 text-[var(--text-muted)] prose prose-invert max-w-none">
            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4" style={{ color: "var(--text)" }}>
                1. Administrator danych
              </h2>
              <p>
                Administratorem danych osobowych zbieranych w ramach platformy
                PlanOS jest PlanOS (Warszawa, Polska). Kontakt:
                kontakt@planoscast.pl.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4" style={{ color: "var(--text)" }}>
                2. Zakres przetwarzanych danych
              </h2>
              <p className="mb-4">
                W zależności od Twojej roli (agencja, artysta, reżyser) oraz
                zakresu korzystania z platformy możemy przetwarzać m.in.:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-[var(--text)]">Dane identyfikacyjne:</strong> imię, nazwisko, numer
                  PESEL (wyłącznie gdy wymagane prawem, np. rozliczenia ZUS)
                </li>
                <li>
                  <strong className="text-[var(--text)]">Dane kontaktowe:</strong> adres e-mail, numer telefonu
                </li>
                <li>
                  <strong className="text-[var(--text)]">Dane wizerunkowe:</strong> zdjęcia, nagrania
                  (self-tape) wykorzystywane w procesach castingowych
                </li>
                <li>
                  <strong className="text-[var(--text)]">Dane organizacyjne:</strong> nazwa firmy, NIP (dla
                  agencji)
                </li>
                <li>
                  <strong className="text-[var(--text)]">Dane techniczne:</strong> adres IP, typ przeglądarki,
                  dane logowania
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4" style={{ color: "var(--text)" }}>
                3. Cel i podstawa prawna przetwarzania
              </h2>
              <p>
                Dane są przetwarzane w celu świadczenia usług platformy
                PlanOS — zarządzania castingami, artystami, dniami
                zdjęciowymi oraz eksportu danych do ZUS. Podstawą
                prawną jest wykonanie umowy (art. 6 ust. 1 lit. b RODO),
                zgoda (art. 6 ust. 1 lit. a RODO) oraz prawnie uzasadniony
                interes (art. 6 ust. 1 lit. f RODO).
              </p>
              <p className="mt-4">
                W przypadku danych artystów zgłaszających się na castingi:
                dane są przetwarzane zgodnie z RODO w celu przeprowadzenia
                procesu rekrutacji. Dane są przechowywane przez okres 30 dni
                od zakończenia castingu, chyba że kandydat zostanie wybrany do
                współpracy — wówczas dane są przechowywane na potrzeby umowy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4" style={{ color: "var(--text)" }}>
                4. Ochrona danych wrażliwych (PESEL)
              </h2>
              <p>
                Numery PESEL są zaszyfrowane i niewidoczne bez odrębnej
                autoryzacji. Każde odblokowanie dostępu jest rejestrowane.
                Panel reżysera nie udostępnia danych wrażliwych — reżyser widzi
                jedynie zdjęcia, wiek i wymiary potrzebne do selekcji.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4" style={{ color: "var(--text)" }}>
                5. Prawa osób, których dane dotyczą
              </h2>
              <p className="mb-4">
                Zgodnie z RODO masz prawo do: dostępu do danych, ich
                sprostowania, usunięcia (&quot;prawo do bycia zapomnianym&quot;),
                ograniczenia przetwarzania, przenoszenia danych, sprzeciwu oraz
                wycofania zgody.
              </p>
              <p>
                Skontaktuj się z nami: kontakt@planoscast.pl. Masz także prawo
                wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych
                (UODO).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4" style={{ color: "var(--text)" }}>
                6. Okres przechowywania
              </h2>
              <p>
                Dane są przechowywane przez okres niezbędny do realizacji celu
                (wykonanie umowy, rozliczenia, obowiązki podatkowe) oraz
                zgodnie z wymogami prawa (np. 5 lat dla dokumentacji
                księgowej).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4" style={{ color: "var(--text)" }}>
                7. Cookies i dane techniczne
              </h2>
              <p>
                Strona może wykorzystywać pliki cookies niezbędne do działania
                platformy. Nie przekazujemy danych osobowych podmiotom
                trzecim w celach marketingowych bez Twojej zgody.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4" style={{ color: "var(--text)" }}>
                8. Kontakt
              </h2>
              <p>
                W sprawach dotyczących przetwarzania danych i polityki
                prywatności: kontakt@planoscast.pl.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-[var(--border)]">
            <Link href="/" className="text-[var(--accent)] hover:underline font-medium">
              ← Powrót na stronę główną
            </Link>
            <span className="mx-2 text-[var(--border)]">|</span>
            <Link href="/terms" className="text-[var(--accent)] hover:underline font-medium">
              Regulamin
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
