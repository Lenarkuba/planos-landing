"use client";

import { useState } from "react";
import Link from "next/link";
import { APP_URL, BOOKING_URL } from "@/lib/site-config";
import { ButtonLink } from "./ui";

/* Root-relative hashes so the nav also works on subpages (/dla-statystow, /privacy, /terms). */
const NAV_LINKS = [
  { href: "/#funkcje", label: "Funkcje" },
  { href: "/#jak-to-dziala", label: "Jak to działa" },
  { href: "/#bezpieczenstwo", label: "Bezpieczeństwo" },
  { href: "/#cennik", label: "Cennik" },
  { href: "/#faq", label: "FAQ" },
];

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span
        aria-hidden="true"
        className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-paper"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2.5" width="12" height="11" rx="2" />
          <path d="M2 6.5h12M5.5 2.5v4M10.5 2.5v4" />
          <path d="M5 10.5l2 2 4-4" />
        </svg>
      </span>
      <span className="font-display text-xl font-semibold tracking-tight text-ink">
        Plan<span className="text-brand-ink">OS</span>
      </span>
    </span>
  );
}

export function LandingNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-paper-border bg-paper/85 backdrop-blur-md">
      <nav
        aria-label="Nawigacja główna"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        <Link
          href="/"
          className="shrink-0 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
        >
          <Logo />
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-ink-muted transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ButtonLink
            href={APP_URL}
            variant="ghost"
            size="sm"
            className="hidden md:inline-flex"
          >
            Zaloguj się
          </ButtonLink>
          <ButtonLink
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Umów demo
          </ButtonLink>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-lg text-ink hover:bg-paper-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand lg:hidden"
          >
            <svg
              aria-hidden="true"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-paper-border bg-paper px-4 pb-5 pt-3 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-[0.95rem] font-medium text-ink hover:bg-paper-muted"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={APP_URL}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-[0.95rem] font-medium text-ink-muted hover:bg-paper-muted"
              >
                Zaloguj się
              </a>
            </li>
          </ul>
          <ButtonLink
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-3 w-full"
          >
            Umów demo
          </ButtonLink>
        </div>
      )}
    </header>
  );
}
