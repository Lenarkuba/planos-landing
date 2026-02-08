"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Clapperboard } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#problem", label: "Problem" },
  { href: "#demo", label: "Demo" },
  { href: "#funkcje", label: "Funkcje" },
  { href: "#bezpieczenstwo", label: "Bezpieczeństwo" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/80 backdrop-blur-lg shadow-sm border-b border-slate-200/50"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-600 flex items-center justify-center shadow-lg group-hover:shadow-primary-500/25 transition-shadow">
                  <Clapperboard className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="text-xl font-bold text-slate-900">
                PLANOS <span className="text-primary-600">CAST</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#kontakt"
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors"
              >
                Kontakt
              </a>
              <a
                href="#cta"
                className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500 rounded-full hover:shadow-lg hover:shadow-primary-500/25 transition-all btn-shine"
              >
                Rozpocznij za darmo
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-primary-600 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 lg:hidden"
          >
            <div className="bg-white/95 backdrop-blur-lg border-b border-slate-200/50 shadow-xl">
              <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-base font-medium text-slate-600 hover:text-primary-600 transition-colors py-2"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4 border-t border-slate-200 space-y-3">
                  <a
                    href="#kontakt"
                    className="block text-base font-medium text-slate-600 hover:text-primary-600 transition-colors py-2"
                  >
                    Kontakt
                  </a>
                  <a
                    href="#cta"
                    className="block w-full px-5 py-3 text-center text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500 rounded-full"
                  >
                    Rozpocznij za darmo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
