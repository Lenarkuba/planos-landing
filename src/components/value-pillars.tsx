"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Users, Shield, BarChart3 } from "lucide-react";

const pillars = [
  {
    icon: Clock,
    title: "Oszczędność czasu",
    description:
      "Talenci sami aktualizują swoje profile — zdjęcia, wagę, fryzurę, adres. Zgłoszenia na casting przychodzą kompletne ze zdjęciem i self-tape. Zero pustych maili.",
    color: "primary",
    highlight: "Koniec z gonieniem za danymi",
  },
  {
    icon: Users,
    title: "Portal dla talentów",
    description:
      "Każdy talent ma własne konto. Jednym kliknięciem wysyła zgłoszenie, potwierdza nagranie, sprawdza umowy. Powiadomienia push — nikt nie przegapi zmiany terminu.",
    color: "accent",
    highlight: "Talent sam zarządza swoim profilem",
  },
  {
    icon: Shield,
    title: "Bezpieczeństwo danych",
    description:
      "PESEL zaszyfrowany i chroniony hasłem. Panel reżysera bez dostępu do danych wrażliwych. Talent dostaje powiadomienie gdy jego dane są używane.",
    color: "emerald",
    highlight: "Nawet otwarty laptop to nie problem",
  },
  {
    icon: BarChart3,
    title: "Pełna kontrola",
    description:
      "Statystyki obecności, nieobecności, punktualności. Śledzenie zgód RODO. Historia nagrań do szybkiego rozliczenia ZUS. Wszystko w jednym miejscu.",
    color: "amber",
    highlight: "Wiesz dokładnie co się dzieje",
  },
];

const colorClasses = {
  primary: {
    bg: "bg-primary-50",
    bgHover: "group-hover:bg-primary-100",
    icon: "text-primary-600",
    border: "border-primary-100",
    gradient: "from-primary-500 to-primary-600",
    glow: "group-hover:shadow-primary-500/20",
    highlight: "bg-primary-100 text-primary-700",
  },
  accent: {
    bg: "bg-accent-50",
    bgHover: "group-hover:bg-accent-100",
    icon: "text-accent-600",
    border: "border-accent-100",
    gradient: "from-accent-500 to-accent-600",
    glow: "group-hover:shadow-accent-500/20",
    highlight: "bg-accent-100 text-accent-700",
  },
  emerald: {
    bg: "bg-emerald-50",
    bgHover: "group-hover:bg-emerald-100",
    icon: "text-emerald-600",
    border: "border-emerald-100",
    gradient: "from-emerald-500 to-emerald-600",
    glow: "group-hover:shadow-emerald-500/20",
    highlight: "bg-emerald-100 text-emerald-700",
  },
  amber: {
    bg: "bg-amber-50",
    bgHover: "group-hover:bg-amber-100",
    icon: "text-amber-600",
    border: "border-amber-100",
    gradient: "from-amber-500 to-amber-600",
    glow: "group-hover:shadow-amber-500/20",
    highlight: "bg-amber-100 text-amber-700",
  },
};

export function ValuePillars() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-slate-50 to-transparent rounded-full blur-3xl opacity-70" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-semibold text-emerald-600 bg-emerald-50 rounded-full mb-6">
            Rozwiązanie
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Wszystko czego potrzebuje{" "}
            <span className="gradient-text">Twoja agencja</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            PLANOS CAST to kompletna platforma — dla Ciebie i Twoich talentów. 
            Każdy ma swoje konto, każdy wie co się dzieje.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => {
            const colors = colorClasses[pillar.color as keyof typeof colorClasses];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`group relative p-8 bg-white rounded-3xl border ${colors.border} shadow-sm hover:shadow-xl ${colors.glow} transition-all duration-300 feature-card`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 ${colors.bg} ${colors.bgHover} rounded-2xl flex items-center justify-center mb-6 transition-colors`}>
                  <pillar.icon className={`w-7 h-7 ${colors.icon}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed mb-4">
                  {pillar.description}
                </p>

                {/* Highlight */}
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${colors.highlight}`}>
                  {pillar.highlight}
                </div>

                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-[0.02] transition-opacity pointer-events-none`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
