"use client";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] py-12 px-4 md:px-8 max-w-[1200px] mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 flex-wrap">
        <div className="text-sm text-[var(--text-dim)]">
          © {currentYear} PlanOS · Warszawa, Polska ·{" "}
          <a href="mailto:kontakt@planoscast.pl" className="text-[var(--text-muted)] no-underline hover:underline">
            kontakt@planoscast.pl
          </a>
        </div>
        <ul className="flex gap-6 list-none">
          <li>
            <Link href="/#features" className="text-sm text-[var(--text-dim)] no-underline hover:text-[var(--text-muted)] transition-colors">
              Funkcje
            </Link>
          </li>
          <li>
            <Link href="/#security" className="text-sm text-[var(--text-dim)] no-underline hover:text-[var(--text-muted)] transition-colors">
              Bezpieczeństwo
            </Link>
          </li>
          <li>
            <Link href="/#cta" className="text-sm text-[var(--text-dim)] no-underline hover:text-[var(--text-muted)] transition-colors">
              Kontakt
            </Link>
          </li>
          <li>
            <Link href="/privacy" className="text-sm text-[var(--text-dim)] no-underline hover:text-[var(--text-muted)] transition-colors">
              Polityka prywatności
            </Link>
          </li>
          <li>
            <Link href="/terms" className="text-sm text-[var(--text-dim)] no-underline hover:text-[var(--text-muted)] transition-colors">
              Regulamin
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
