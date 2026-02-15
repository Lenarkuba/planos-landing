import { Navbar, Footer } from "@/components";
import type { Metadata } from "next";
import Link from "next/link";
import { Linkedin } from "lucide-react";

const LINKEDIN_URL = "https://www.linkedin.com/in/j-lenar/";

export const metadata: Metadata = {
  title: "Regulamin | PlanOS",
  description:
    "Regulamin korzystania z platformy PlanOS do zarządzania castingami i artystami.",
};

export default function TermsPage() {
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
              Regulamin
            </h1>
            <p className="text-[var(--text-dim)] text-sm">
              Ostatnia aktualizacja: {new Date().toLocaleDateString("pl-PL", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          </div>
        </header>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="space-y-10 text-[var(--text-muted)]">
            <p className="text-[var(--text)] leading-relaxed">
              Niniejszy regulamin określa zasady korzystania z platformy PlanOS — serwisu do
              zarządzania castingami, artystami i dniami zdjęciowymi dla agencji castingowych
              i domów produkcyjnych. Korzystanie z Platformy oznacza akceptację regulaminu.
            </p>

            <section>
              <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: "var(--text)" }}>
                1. Postanowienia ogólne
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-[var(--text)]">Platforma</strong> — aplikacja internetowa PlanOS,
                  dostępna pod adresem planoscast.pl oraz powiązane subdomeny
                </li>
                <li>
                  <strong className="text-[var(--text)]">Użytkownik</strong> — osoba fizyczna lub prawna
                  korzystająca z Platformy (agencja, pracownik agencji, artysta)
                </li>
                <li>
                  <strong className="text-[var(--text)]">Artysta</strong> — statyst, epizodysta lub aktor
                  zarejestrowany w Platformie
                </li>
                <li>
                  <strong className="text-[var(--text)]">Agencja</strong> — organizacja korzystająca
                  z panelu agencji (agencja castingowa, dom produkcyjny)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: "var(--text)" }}>
                2. Usługi Platformy
              </h2>
              <p className="mb-4">PlanOS umożliwia m.in.:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Tworzenie i zarządzanie castingami (otwartymi i zamkniętymi)</li>
                <li>Gromadzenie zgłoszeń artystów ze zdjęciami i self-tape</li>
                <li>Udostępnianie panelu selekcji reżyserom (bez danych wrażliwych — PESEL, adresy)</li>
                <li>Zarządzanie dniami zdjęciowymi, potwierdzaniem obecności i umowami</li>
                <li>Eksport danych do ZUS (zgłoszenia umów o dzieło)</li>
                <li>Bezpieczne przechowywanie i szyfrowanie danych wrażliwych</li>
                <li>Portal artysty — widok castingów, nagrań, powiadomień</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: "var(--text)" }}>
                3. Rejestracja i konta
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Agencje uzyskują dostęp po założeniu konta organizacji (np. przez zaproszenie)</li>
                <li>Artyści mogą zakładać konta samodzielnie lub zostać dodani przez agencję z możliwością przejęcia profilu</li>
                <li>Użytkownik zobowiązuje się do podawania prawdziwych danych</li>
                <li>Konto jest indywidualne — nie należy udostępniać hasła i danych logowania</li>
                <li>Platforma nie jest przeznaczona dla osób poniżej 16 lat; artyści niepełnoletni muszą korzystać z konta przez opiekuna prawnego</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: "var(--text)" }}>
                4. Dane wrażliwe i bezpieczeństwo
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Numery PESEL są zaszyfrowane i niewidoczne bez odrębnej autoryzacji</li>
                <li>Każdy dostęp do PESEL jest rejestrowany w logu audytowym</li>
                <li>Użytkownicy zobowiązują się chronić dane dostępne w ramach swojej roli</li>
                <li>Panel reżysera nie wyświetla PESEL-i, adresów ani numerów telefonów</li>
                <li>Szczegóły przetwarzania danych określa{" "}
                  <Link href="/privacy" className="text-[var(--accent)] hover:underline">
                    Polityka prywatności
                  </Link>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: "var(--text)" }}>
                5. Zasady użytkowania
              </h2>
              <p className="mb-4">Użytkownik zobowiązuje się do:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Korzystania z Platformy zgodnie z prawem polskim i przepisami RODO</li>
                <li>Niepodejmowania działań mogących zakłócić działanie Platformy</li>
                <li>Niepróbowania nieautoryzowanego dostępu do danych innych użytkowników</li>
                <li>Prawidłowego przetwarzania danych artystów w ramach swojej organizacji</li>
                <li>Artyści: aktualizowania swoich profili i odpowiadania na zaproszenia na nagrania w terminie</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: "var(--text)" }}>
                6. Obowiązki agencji wobec artystów
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Agencja odpowiada za prawidłowe zebranie i przetwarzanie danych artystów zgodnie z RODO</li>
                <li>Przed dodaniem artysty do bazy (w tym danych wrażliwych) należy uzyskać stosowne zgody</li>
                <li>Agencja zobowiązuje się przekazywać artystom powiadomienia RODO, gdy Platforma to wspiera</li>
                <li>W przypadku eksportu danych do ZUS — agencja odpowiada za kompletność i poprawność zgłoszeń</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: "var(--text)" }}>
                7. Nieobecność (no-show) i reputacja
              </h2>
              <p>
                Platforma może rejestrować nieobecności artystów na potwierdzonych nagraniach.
                Wielokrotna nieobecność może skutkować ograniczeniem dostępności do castingu.
                Szczegóły mechanizmu reputacji są widoczne w panelu artysty.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: "var(--text)" }}>
                8. Prawa własności intelektualnej
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Platforma PlanOS, jej kod, logo i materiały graficzne są własnością PlanOS</li>
                <li>Zdjęcia i materiały wideo przesyłane przez artystów pozostają ich własnością; udzielają oni licencji na przetwarzanie w celach castingu i realizacji usług Platformy</li>
                <li>Agencja może wykorzystywać zdjęcia artystów w ramach procesów castingowych zgodnie z udzielonymi zgodami</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: "var(--text)" }}>
                9. Odpowiedzialność i wyłączenia
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>PlanOS dąży do zapewnienia stabilności Platformy, nie gwarantuje jednak ciągłości dostępu</li>
                <li>PlanOS nie ponosi odpowiedzialności za treści wprowadzane przez użytkowników ani za decyzje agencji i reżyserów w procesach castingowych</li>
                <li>Odpowiedzialność za zgłoszenia do ZUS spoczywa na agencji; Platforma wspiera technicznie eksport danych</li>
                <li>PlanOS nie ponosi odpowiedzialności za skutki utraty danych wynikające z działania użytkownika (np. udostępnienie hasła, usunięcie danych)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: "var(--text)" }}>
                10. Zawieszenie i rozwiązanie umowy
              </h2>
              <p>
                PlanOS może zawiesić lub zakończyć dostęp do Platformy w przypadku naruszenia
                regulaminu, przepisów prawa lub zasad RODO. Użytkownik może w każdej chwili
                zrezygnować z Platformy (usunięcie konta). Dane zostaną usunięte lub
                zanonimizowane zgodnie z Polityką prywatności.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: "var(--text)" }}>
                11. Zmiany regulaminu
              </h2>
              <p>
                PlanOS zastrzega sobie prawo do zmiany regulaminu. O istotnych zmianach
                użytkownicy zostaną poinformowani w Platformie lub e-mailem. Dalsze
                korzystanie po wejściu zmian w życie oznacza akceptację nowego regulaminu.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-10 mb-4" style={{ color: "var(--text)" }}>
                12. Postanowienia końcowe
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Regulamin podlega prawu polskiemu</li>
                <li>Spory rozstrzygane będą przez sądy właściwe dla PlanOS</li>
                <li>W sprawach nieuregulowanych stosuje się przepisy Kodeksu cywilnego</li>
              </ul>
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
            <Link href="/privacy" className="text-[var(--accent)] hover:underline font-medium text-sm">
              Polityka prywatności
            </Link>
          </nav>
        </article>
      </main>
      <Footer />
    </>
  );
}
