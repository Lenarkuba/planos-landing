import Link from "next/link";
import { BOOKING_URL, CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/site-config";

export function LandingFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link href="/" className="text-xl font-bold tracking-tight text-slate-900">
              Plan<span className="text-blue-700">OS</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-600">
              PlanOS — system dla agencji castingowych. Zbudowany w Polsce,
              zgodny z RODO.
            </p>
          </div>

          <nav aria-label="Kontakt">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-slate-600 hover:text-slate-900">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                  className="text-slate-600 hover:text-slate-900"
                >
                  {CONTACT_PHONE}
                </a>
              </li>
              <li>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-900"
                >
                  Umów demo (kalendarz)
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Nawigacja stopki">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Na skróty
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="/#funkcje" className="text-slate-600 hover:text-slate-900">
                  Funkcje
                </a>
              </li>
              <li>
                <a href="/#bezpieczenstwo" className="text-slate-600 hover:text-slate-900">
                  Bezpieczeństwo
                </a>
              </li>
              <li>
                <a href="/#cennik" className="text-slate-600 hover:text-slate-900">
                  Cennik
                </a>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-600 hover:text-slate-900">
                  Polityka prywatności
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-600 hover:text-slate-900">
                  Regulamin
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-600 hover:text-slate-900">
                  Informacja o cookies
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <p className="mt-12 border-t border-slate-200 pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} PlanOS — system dla agencji castingowych.
          Zbudowany w Polsce, zgodny z RODO.
        </p>
      </div>
    </footer>
  );
}
