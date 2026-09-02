"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { APP_URL, BOOKING_URL } from "@/lib/site-config";
import { ButtonLink, cn } from "./ui";
import logoMark from "../../../public/brand/logo.png";

type NavLink = { href: string; label: string; ghost?: boolean };

/* Root-relative hashes so the agency nav also works on /privacy and /terms. */
const AGENCY_LINKS: NavLink[] = [
  { href: "/#funkcje", label: "Funkcje" },
  { href: "/#jak-to-dziala", label: "Jak to działa" },
  { href: "/#bezpieczenstwo", label: "Bezpieczeństwo" },
  { href: "/#cennik", label: "Cennik" },
  { href: "/#faq", label: "FAQ" },
  { href: "/dla-statystow", label: "Dla statystów", ghost: true },
];

const TALENT_LINKS: NavLink[] = [
  { href: "#jak-to-dziala", label: "Jak to działa" },
  { href: "#co-masz-z-tego", label: "Co masz z tego" },
  { href: "#bezpieczenstwo", label: "Bezpieczeństwo" },
  { href: "#faq", label: "FAQ" },
  { href: "/", label: "Dla agencji", ghost: true },
];

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src={logoMark}
        alt=""
        width={40}
        height={40}
        className="h-10 w-10"
        priority
      />
      <span className="font-display text-lg font-semibold tracking-tight text-ink">
        PlanOS
      </span>
    </span>
  );
}

function navLinkClass(ghost?: boolean) {
  return cn(
    "text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand",
    ghost
      ? "text-ink-faint hover:text-ink-muted"
      : "text-ink-muted hover:text-ink",
  );
}

function mobileLinkClass(ghost?: boolean) {
  return cn(
    "block rounded-lg px-3 py-2.5 text-[0.95rem] font-medium hover:bg-paper-muted",
    ghost ? "text-ink-faint" : "text-ink",
  );
}

export function LandingNav({
  variant = "agency",
}: {
  variant?: "agency" | "talent";
}) {
  const [open, setOpen] = useState(false);
  const links = variant === "talent" ? TALENT_LINKS : AGENCY_LINKS;
  const showLogin = variant !== "talent";

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
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={navLinkClass(link.ghost)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {showLogin && (
            <ButtonLink
              href={APP_URL}
              variant="ghost"
              size="sm"
              className="hidden md:inline-flex"
            >
              Zaloguj się
            </ButtonLink>
          )}
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
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={mobileLinkClass(link.ghost)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            {showLogin && (
              <li>
                <a
                  href={APP_URL}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-[0.95rem] font-medium text-ink-muted hover:bg-paper-muted"
                >
                  Zaloguj się
                </a>
              </li>
            )}
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
