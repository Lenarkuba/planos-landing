"use client";

import Link from "next/link";
import { Linkedin } from "lucide-react";

const LINKEDIN_URL = "https://www.linkedin.com/in/j-lenar/";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] py-12 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-6">
        <nav className="flex gap-6 list-none">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--text-dim)] no-underline hover:text-[var(--text-muted)] transition-colors inline-flex items-center gap-1.5"
          >
            <Linkedin className="w-3.5 h-3.5" />
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
        <p className="text-sm text-[var(--text-dim)]">
          © {currentYear} PlanOS
        </p>
      </div>
    </footer>
  );
}
