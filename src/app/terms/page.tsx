import { Navbar, Footer } from "@/components";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Regulamin | PlanOS",
  description:
    "Regulamin korzystania z platformy PlanOS do zarządzania castingami i artystami.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <h1
            className="text-3xl font-bold mb-2"
            style={{ fontFamily: "var(--serif)", color: "var(--text)" }}
          >
            Regulamin
          </h1>
          <p className="text-[var(--text-dim)] text-sm mb-12">
            Ostatnia aktualizacja: 14 lutego 2026
          </p>

          <div className="space-y-8 text-[var(--text-muted)] prose prose-invert max-w-none">
            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4" style={{ color: "var(--text)" }}>
                1. Postanowienia ogólne
              </h2>
              <p>
                Niniejszy regulamin określa zasady korzystania z platformy
                PlanOS (dalej: &quot;Platforma&quot;), służącej do zarządzania
                castingami, artystami i dniami zdjęciowymi przez agencje
                castingowe i domy produkcyjne. Korzystanie z Platformy oznacza
                akceptację niniejszego regulaminu.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4" style={{ color: "var(--text)" }}>
                2. Usługi Platformy
              </h2>
              <p className="mb-4">
                PlanOS umożliwia m.in.:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Tworzenie i zarządzanie castingami (otwartymi i zamkniętymi)</li>
                <li>Gromadzenie zgłoszeń artystów ze zdjęciami i self-tape</li>
                <li>Udostępnianie panelu selekcji reżyserom (bez danych wrażliwych)</li>
                <li>Zarządzanie dniami zdjęciowymi i potwierdzaniem obecności</li>
                <li>Eksport danych do ZUS</li>
                <li>Bezpieczne przechowywanie i szyfrowanie danych wrażliwych (PESEL)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4" style={{ color: "var(--text)" }}>
                3. Użytkownicy — agencje i artyści
              </h2>
              <p>
                Agencje mają dostęp do panelu agencji; artyści — do portalu
                artysty. Każdy użytkownik zobowiązuje się do podawania
                prawdziwych danych oraz przestrzegania zasad RODO. Artyści
                aktualizują swoje profile samodzielnie; agencje odpowiadają za
                prawidłowe przetwarzanie danych w ramach swojej organizacji.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4" style={{ color: "var(--text)" }}>
                4. Dane wrażliwe i bezpieczeństwo
              </h2>
              <p>
                Numery PESEL i inne dane wrażliwe są zaszyfrowane. Dostęp do nich
                wymaga dodatkowej autoryzacji i jest rejestrowany. Użytkownicy
                zobowiązują się nie udostępniać haseł i chronić dane dostępne
                w ramach swojej roli.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4" style={{ color: "var(--text)" }}>
                5. Zgodność z prawem
              </h2>
              <p>
                Korzystanie z Platformy musi być zgodne z prawem polskim, w tym z
                RODO i przepisami dotyczącymi danych osobowych. Szczegóły
                przetwarzania danych określa{" "}
                <Link href="/privacy" className="text-[var(--accent)] hover:underline">
                  Polityka prywatności
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4" style={{ color: "var(--text)" }}>
                6. Kontakt i zmiany regulaminu
              </h2>
              <p>
                W sprawach związanych z Platformą: kontakt@planoscast.pl. PlanOS
                zastrzega sobie prawo do zmiany regulaminu z zachowaniem
                praw nabytych użytkowników. O istotnych zmianach użytkownicy
                zostaną poinformowani.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-[var(--border)]">
            <Link href="/" className="text-[var(--accent)] hover:underline font-medium">
              ← Powrót na stronę główną
            </Link>
            <span className="mx-2 text-[var(--border)]">|</span>
            <Link href="/privacy" className="text-[var(--accent)] hover:underline font-medium">
              Polityka prywatności
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
