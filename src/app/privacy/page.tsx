import { Navbar, Footer } from "@/components";
import type { Metadata } from "next";
import Link from "next/link";
import { Linkedin } from "lucide-react";

const LINKEDIN_URL = "https://www.linkedin.com/in/j-lenar/";

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
              w związku z korzystaniem z platformy PlanOS. Przetwarzanie odbywa się zgodnie z RODO oraz
              polskimi przepisami. W zależności od rodzaju danych i Twojej roli, administratorem może
              być agencja (organizacja korzystająca z PlanOS) albo PlanOS jako operator platformy.
            </p>

            <div className="p-5 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
              <p className="text-[var(--text)] font-semibold mb-2">Kto jest administratorem w Twojej sytuacji?</p>
              <ul className="space-y-2 text-sm">
                <li><strong className="text-[var(--text)]">Artysta / talent</strong> — dane podane przy zgłoszeniu do castingu, w profilu lub przy rejestracji w bazie agencji: administratorem jest <strong className="text-[var(--text)]">agencja</strong> (organizacja), która prowadzi casting lub do której należysz. PlanOS przetwarza te dane wyłącznie w imieniu agencji (podmiot przetwarzający).</li>
                <li><strong className="text-[var(--text)]">Użytkownik platformy</strong> (agencja, reżyser) — dane konta, sesji, logów: administratorem jest <strong className="text-[var(--text)]">PlanOS</strong>.</li>
              </ul>
            </div>

            <section>
              <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: "var(--text)" }}>
                1. Administrator danych i podmiot przetwarzający
              </h2>

              <h3 className="text-base font-semibold mt-6 mb-2" style={{ color: "var(--text)" }}>
                1.1 Dane związane z castingu, rekrutacją i bazą talentów
              </h3>
              <p className="mb-2">
                Administratorem Twoich danych osobowych (jako artysty/talentu) jest <strong className="text-[var(--text)]">agencja</strong> —
                czyli organizacja (np. agencja castingowa), która korzysta z platformy PlanOS, dodała Cię do bazy,
                prowadzi casting lub z którą współpracujesz. To agencja decyduje o celach i środkach przetwarzania
                tych danych (np. rekrutacja, umowy, zgłoszenia ZUS).
              </p>
              <p className="mb-4">
                <strong className="text-[var(--text)]">PlanOS</strong> w tym zakresie działa wyłącznie jako <strong className="text-[var(--text)]">podmiot przetwarzający</strong> (art. 28 RODO):
                przechowuje i przetwarza dane w imieniu agencji, na podstawie umowy powierzenia, nie wykorzystuje
                ich do własnych celów. Kontakt w sprawie tych danych (prawo dostępu, usunięcia, sprzeciwu itd.)
                należy kierować do agencji.
              </p>

              <h3 className="text-base font-semibold mt-6 mb-2" style={{ color: "var(--text)" }}>
                1.2 Dane związane z działaniem platformy (konto, sesja, bezpieczeństwo)
              </h3>
              <p className="mb-4">
                W zakresie danych dotyczących kont użytkowników platformy (agencje, reżyserzy), sesji, plików cookies,
                logów technicznych i audytowych oraz bezpieczeństwa — <strong className="text-[var(--text)]">administratorem jest PlanOS</strong>.
              </p>
              <div className="mt-4 p-5 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                <p className="text-[var(--text)] font-medium mb-2">Kontakt z PlanOS (tylko w sprawach platformy):</p>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--accent)] hover:underline"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: "var(--text)" }}>
                2. Zakres przetwarzanych danych
              </h2>
              <p className="mb-4">
                Dane zbierane w ramach platformy (w imieniu agencji lub przez PlanOS) obejmują m.in.:
              </p>

              <h3 className="text-base font-semibold mt-6 mb-2" style={{ color: "var(--text)" }}>
                2.1 Dane identyfikacyjne (talent/artysta — na zlecenie agencji)
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Imię i nazwisko</li>
                <li>Data urodzenia, płeć</li>
                <li>PESEL (wyłącznie na potrzeby ZUS; przechowywany zaszyfrowany w systemie)</li>
              </ul>

              <h3 className="text-base font-semibold mt-6 mb-2" style={{ color: "var(--text)" }}>
                2.2 Dane kontaktowe
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Adres e-mail, numer telefonu</li>
                <li>Adres zamieszkania (ulica, nr budynku, lokalu, kod pocztowy, miasto)</li>
              </ul>

              <h3 className="text-base font-semibold mt-6 mb-2" style={{ color: "var(--text)" }}>
                2.3 Dane fizyczne i wizerunkowe (talent/artysta — na zlecenie agencji)
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Wzrost, waga, wymiary (klatka, talia, biodra, obwód głowy, szyi)</li>
                <li>Rozmiar obuwia i odzieży, kolor włosów i oczu, odcień skóry</li>
                <li>Zdjęcia (profilowe, pełna postać, galeria), self-tape, wizytówka YouTube</li>
              </ul>

              <h3 className="text-base font-semibold mt-6 mb-2" style={{ color: "var(--text)" }}>
                2.4 Dane zgłoszeń do castingu (na zlecenie agencji)
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Zgłoszenia do castingu (zdjęcia, link do self-tape, notatki reżysera, status)</li>
              </ul>

              <h3 className="text-base font-semibold mt-6 mb-2" style={{ color: "var(--text)" }}>
                2.5 Dane techniczne i logi (PlanOS jako administrator)
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Adres IP, user agent, dane sesji, identyfikator użytkownika</li>
                <li>Logi audytowe (akcje w systemie, niemodyfikowalne)</li>
                <li>Logi wysłanych e-maili (adresat, szablon, status dostawy — do audytu i RODO)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: "var(--text)" }}>
                3. Cele i podstawy prawne
              </h2>
              <p className="mb-4">
                Cele i podstawy prawne ustala <strong className="text-[var(--text)]">administrator</strong> (agencja dla danych talentów; PlanOS dla danych platformy). W platformie stosowane są m.in.:
              </p>
              <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[var(--surface)]">
                      <th className="text-left p-4 font-semibold text-[var(--text)]">Cel</th>
                      <th className="text-left p-4 font-semibold text-[var(--text)]">Podstawa (RODO)</th>
                      <th className="text-left p-4 font-semibold text-[var(--text)]">Administrator</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-[var(--border)]">
                      <td className="p-4">Rekrutacja, castingi, baza talentów, umowy</td>
                      <td className="p-4">Art. 6 ust. 1 lit. b / c / a (w zależności od kontekstu)</td>
                      <td className="p-4">Agencja</td>
                    </tr>
                    <tr className="border-t border-[var(--border)]">
                      <td className="p-4">Zgłoszenia do ZUS</td>
                      <td className="p-4">Art. 6 ust. 1 lit. c — obowiązek prawny</td>
                      <td className="p-4">Agencja</td>
                    </tr>
                    <tr className="border-t border-[var(--border)]">
                      <td className="p-4">Świadczenie usług platformy (konto, sesja)</td>
                      <td className="p-4">Art. 6 ust. 1 lit. b</td>
                      <td className="p-4">PlanOS</td>
                    </tr>
                    <tr className="border-t border-[var(--border)]">
                      <td className="p-4">Bezpieczeństwo, logi audytowe, e-mail</td>
                      <td className="p-4">Art. 6 ust. 1 lit. f — uzasadniony interes</td>
                      <td className="p-4">PlanOS</td>
                    </tr>
                    <tr className="border-t border-[var(--border)]">
                      <td className="p-4">Powiadomienia, zgoda na przetwarzanie (casting)</td>
                      <td className="p-4">Art. 6 ust. 1 lit. a — zgoda</td>
                      <td className="p-4">Agencja</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: "var(--text)" }}>
                4. Ochrona numeru PESEL
              </h2>
              <p className="mb-4">
                PESEL jest zbierany i przetwarzany przez platformę <strong className="text-[var(--text)]">w imieniu agencji</strong> (administratora) na potrzeby ZUS i umów. PlanOS jako podmiot przetwarzający stosuje poniższe środki techniczne:
              </p>
              <div className="p-5 rounded-xl bg-[var(--surface)] border border-[var(--border)] mb-4">
                <ul className="space-y-2 text-[var(--text)]">
                  <li>• PESEL przechowywany wyłącznie zaszyfrowany (AES-256)</li>
                  <li>• PESEL nie jest przetwarzany w przeglądarce</li>
                  <li>• Każdy dostęp jest rejestrowany w logu audytowym</li>
                  <li>• Panel reżysera nie wyświetla danych wrażliwych</li>
                </ul>
              </div>
              <p>
                Jako artysta masz prawo wglądu do historii dostępu do swojego PESEL w panelu użytkownika. Wnioski o dostęp do danych lub usunięcie PESEL kieruj do agencji (administratora).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: "var(--text)" }}>
                5. Udostępnianie danych
              </h2>
              <p className="mb-4">
                W imieniu agencji (jako podmiot przetwarzający) lub w ramach działania platformy dane mogą być udostępniane:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-[var(--text)]">Agencji</strong> — jako administratorowi danych talentów; agencja ma dostęp do danych swojej organizacji w platformie.
                </li>
                <li>
                  <strong className="text-[var(--text)]">Reżyserom</strong> — w zakresie koniecznym do castingu (np. zdjęcia, dane do wyboru — na zasadach ustalonych przez agencję).
                </li>
                <li>
                  <strong className="text-[var(--text)]">ZUS</strong> — dane wymagane prawnie (agencja składa zgłoszenia; PlanOS nie wykorzystuje danych do własnych celów).
                </li>
                <li>
                  <strong className="text-[var(--text)]">Dostawcom IT</strong> — Supabase (baza, hosting w UE), Vercel (hosting), Resend (e-maile); na podstawie umów powierzenia / DPA.
                </li>
                <li>
                  <strong className="text-[var(--text)]">Organom państwowym</strong> — gdy wymaga tego prawo.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: "var(--text)" }}>
                6. Okres przechowywania
              </h2>
              <p className="mb-4">
                Okres przechowywania danych talentów/artystów (profil, zgłoszenia, umowy) ustala <strong className="text-[var(--text)]">agencja</strong> (administrator). Platforma może stosować okresy wynikające z prawa lub z umowy z agencją. Dla danych, których administratorem jest PlanOS:
              </p>
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
                      <td className="p-4">Dane konta użytkownika platformy</td>
                      <td className="p-4">Do usunięcia konta</td>
                    </tr>
                    <tr className="border-t border-[var(--border)]">
                      <td className="p-4">Umowy, wynagrodzenia (w systemie)</td>
                      <td className="p-4">5 lat (wymóg prawny)</td>
                    </tr>
                    <tr className="border-t border-[var(--border)]">
                      <td className="p-4">Zgłoszenia ZUS</td>
                      <td className="p-4">Zgodnie z prawem (m.in. 10 lat)</td>
                    </tr>
                    <tr className="border-t border-[var(--border)]">
                      <td className="p-4">Logi audytowe</td>
                      <td className="p-4">5 lat</td>
                    </tr>
                    <tr className="border-t border-[var(--border)]">
                      <td className="p-4">Logi e-mail (audyt)</td>
                      <td className="p-4">Zgodnie z polityką platformy / RODO</td>
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
              <p className="mb-4">
                Zgodnie z RODO przysługują Ci: prawo dostępu, sprostowania, usunięcia, ograniczenia przetwarzania,
                przenoszenia danych, sprzeciwu oraz wycofania zgody. Realizacja praw zależy od tego, kto jest administratorem.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <strong className="text-[var(--text)]">Dane talentów/artystów</strong> (casting, profil, umowy, ZUS): realizacji praw dokonuje <strong className="text-[var(--text)]">agencja</strong>. Z wnioskami (dostęp, usunięcie, sprzeciw itd.) należy kontaktować się z agencją, z którą współpracujesz lub która prowadzi casting.
                </li>
                <li>
                  <strong className="text-[var(--text)]">Dane konta platformy, sesji, logów</strong>: realizacji praw dokonuje <strong className="text-[var(--text)]">PlanOS</strong>. Kontakt:{" "}
                  <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[var(--accent)] hover:underline">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>.
                </li>
              </ul>
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
                10. Usługi zewnętrzne (podmioty przetwarzające)
              </h2>
              <p>
                PlanOS korzysta z: Supabase (baza danych, uwierzytelnianie — hosting w UE), Vercel (hosting aplikacji),
                Resend (wysyłka e-maili w imieniu agencji i platformy). Dostawcy są wybierani z zachowaniem wymogów
                RODO (umowy powierzenia / DPA, lokalizacja w EOG gdzie to możliwe).
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
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[var(--accent)] hover:underline"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </p>
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
