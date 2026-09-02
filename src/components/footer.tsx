"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/site-config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] py-12 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-6">
        <nav className="flex gap-6 list-none">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-sm text-[var(--text-dim)] no-underline hover:text-[var(--text-muted)] transition-colors inline-flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            Kontakt
          </a>
          <Link
            href="/privacy"
            className="text-sm text-[var(--text-dim)] no-underline hover:text-[var(--text-muted)] transition-colors"
          >
            Polityka prywatności
          </Link>
          <Link
            href="/terms"
            className="text-sm text-[var(--text-dim)] no-underline hover:text-[var(--text-muted)] transition-colors"
          >
            Regulamin
          </Link>
        </nav>
        <p className="text-sm text-[var(--text-dim)] text-center max-w-[520px] leading-relaxed">
          PlanOS to niezależny produkt technologiczny. Nie jesteśmy agencją — dane każdej
          agencji są od siebie odseparowane.
        </p>
        <p className="text-sm text-[var(--text-dim)]">
          © {currentYear} PlanOS
        </p>
      </div>
    </footer>
  );
}
