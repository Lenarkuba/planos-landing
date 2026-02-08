"use client";

import { Clapperboard, Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="kontakt" className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-600 flex items-center justify-center">
                <Clapperboard className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">
                PLANOS <span className="text-primary-400">CAST</span>
              </span>
            </a>
            <p className="mt-4 text-slate-400 max-w-md leading-relaxed">
              Platforma do zarządzania castingami i talentami. Dla agencji które 
              chcą przestać gonić za danymi i zacząć domykać castingi.
            </p>
            <div className="mt-6 space-y-3">
              <a 
                href="mailto:kontakt@planoscast.pl" 
                className="flex items-center gap-3 text-slate-400 hover:text-primary-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                kontakt@planoscast.pl
              </a>
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-5 h-5" />
                Warszawa, Polska
              </div>
            </div>
          </div>

          {/* Links column 1 */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Dla agencji
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#funkcje" className="text-slate-400 hover:text-primary-400 transition-colors">
                  Zgłoszenia na casting
                </a>
              </li>
              <li>
                <a href="#funkcje" className="text-slate-400 hover:text-primary-400 transition-colors">
                  Panel reżysera
                </a>
              </li>
              <li>
                <a href="#funkcje" className="text-slate-400 hover:text-primary-400 transition-colors">
                  Śledzenie obecności
                </a>
              </li>
              <li>
                <a href="#funkcje" className="text-slate-400 hover:text-primary-400 transition-colors">
                  Eksport ZUS
                </a>
              </li>
            </ul>
          </div>

          {/* Links column 2 */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Dla talentów
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#funkcje" className="text-slate-400 hover:text-primary-400 transition-colors">
                  Portal talentu
                </a>
              </li>
              <li>
                <a href="#funkcje" className="text-slate-400 hover:text-primary-400 transition-colors">
                  Powiadomienia
                </a>
              </li>
              <li>
                <a href="#bezpieczenstwo" className="text-slate-400 hover:text-primary-400 transition-colors">
                  Bezpieczeństwo danych
                </a>
              </li>
              <li>
                <a href="#cta" className="text-slate-400 hover:text-primary-400 transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {currentYear} PLANOS CAST. Wszystkie prawa zastrzeżone.
          </p>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Dane zawsze zaszyfrowane
          </div>
        </div>
      </div>
    </footer>
  );
}
