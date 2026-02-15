"use client";

import { useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] px-4 py-4 md:px-8 md:py-4 backdrop-blur-[20px] bg-[rgba(10,10,12,0.8)] border-b border-[rgba(42,42,53,0.5)] transition-all duration-300 overflow-x-hidden"
      style={{ fontFamily: "var(--sans)" }}
    >
      <div className="w-full max-w-[1200px] min-w-0 mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-xl text-[var(--text)] no-underline tracking-tight shrink-0">
          Plan<span className="text-[var(--accent)]">OS</span>
        </Link>
        <ul className="hidden md:flex gap-8 items-center list-none">
          <li>
            <Link href="/#problem" className="text-[var(--text-muted)] no-underline text-sm font-medium hover:text-[var(--text)] transition-colors">
              Co rozwiązujemy
            </Link>
          </li>
          <li>
            <Link href="/#features" className="text-[var(--text-muted)] no-underline text-sm font-medium hover:text-[var(--text)] transition-colors">
              Funkcje
            </Link>
          </li>
          <li>
            <Link href="/#workflow" className="text-[var(--text-muted)] no-underline text-sm font-medium hover:text-[var(--text)] transition-colors">
              Jak to działa
            </Link>
          </li>
          <li>
            <Link href="/#security" className="text-[var(--text-muted)] no-underline text-sm font-medium hover:text-[var(--text)] transition-colors">
              Bezpieczeństwo
            </Link>
          </li>
          <li>
            <a
              href="https://calendly.com/lenarkuba/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--accent)] text-white py-2.5 px-6 rounded-[10px] font-semibold text-[0.95rem] no-underline border-none cursor-pointer transition-all hover:bg-[var(--accent-soft)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(79,124,255,0.25)]"
            >
              Umów prezentację →
            </a>
          </li>
        </ul>
        <button
          type="button"
          className="md:hidden shrink-0 bg-transparent border-none text-[var(--text)] text-2xl cursor-pointer p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-[var(--border)] flex flex-col gap-4">
          <Link href="/#problem" className="text-[var(--text-muted)] hover:text-[var(--text)]" onClick={() => setMobileMenuOpen(false)}>Co rozwiązujemy</Link>
          <Link href="/#features" className="text-[var(--text-muted)] hover:text-[var(--text)]" onClick={() => setMobileMenuOpen(false)}>Funkcje</Link>
          <Link href="/#workflow" className="text-[var(--text-muted)] hover:text-[var(--text)]" onClick={() => setMobileMenuOpen(false)}>Jak to działa</Link>
          <Link href="/#security" className="text-[var(--text-muted)] hover:text-[var(--text)]" onClick={() => setMobileMenuOpen(false)}>Bezpieczeństwo</Link>
          <a
            href="https://calendly.com/lenarkuba/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[var(--accent)] text-white py-2.5 px-6 rounded-[10px] font-semibold text-[0.95rem] no-underline border-none cursor-pointer transition-all hover:bg-[var(--accent-soft)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(79,124,255,0.25)]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Umów prezentację →
          </a>
        </div>
      )}
    </nav>
  );
}
