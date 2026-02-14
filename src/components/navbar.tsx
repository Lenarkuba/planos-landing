"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] p-4 md:px-8 backdrop-blur-[20px] bg-[rgba(10,10,12,0.8)] border-b border-[rgba(42,42,53,0.5)] transition-all duration-300"
      style={{ fontFamily: "var(--sans)" }}
    >
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-xl text-[var(--text)] no-underline tracking-tight">
          Plan<span className="text-[var(--accent)]">OS</span>
        </Link>
        <ul className="hidden md:flex gap-8 items-center list-none">
          <li>
            <Link href="/#problem" className="text-[var(--text-muted)] no-underline text-sm font-medium hover:text-[var(--text)] transition-colors">
              Problem
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
            <Link href="/#cta" className="!text-white bg-[var(--accent)] px-5 py-2 rounded-lg font-semibold hover:bg-[var(--accent-soft)] hover:-translate-y-px transition-all">
              Umów demo
            </Link>
          </li>
        </ul>
        <button
          type="button"
          className="md:hidden bg-transparent border-none text-[var(--text)] text-2xl cursor-pointer"
          aria-label="Menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-[var(--border)] flex flex-col gap-4">
          <Link href="/#problem" className="text-[var(--text-muted)] hover:text-[var(--text)]" onClick={() => setMobileMenuOpen(false)}>Problem</Link>
          <Link href="/#features" className="text-[var(--text-muted)] hover:text-[var(--text)]" onClick={() => setMobileMenuOpen(false)}>Funkcje</Link>
          <Link href="/#workflow" className="text-[var(--text-muted)] hover:text-[var(--text)]" onClick={() => setMobileMenuOpen(false)}>Jak to działa</Link>
          <Link href="/#security" className="text-[var(--text-muted)] hover:text-[var(--text)]" onClick={() => setMobileMenuOpen(false)}>Bezpieczeństwo</Link>
          <Link href="/#cta" className="text-[var(--accent)] font-semibold" onClick={() => setMobileMenuOpen(false)}>Umów demo</Link>
        </div>
      )}
    </nav>
  );
}
