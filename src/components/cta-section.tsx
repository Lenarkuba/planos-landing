"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Check, Sparkles } from "lucide-react";

const benefits = [
  "Talenci sami aktualizują dane",
  "Zgłoszenia zawsze kompletne",
  "Dane zaszyfrowane",
  "Bez zobowiązań",
];

export function CtaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cta" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-primary-50/30 to-white" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-40 h-40 bg-primary-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-40 h-40 bg-accent-400/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Card */}
          <div className="relative p-8 sm:p-12 lg:p-16 bg-white rounded-3xl shadow-2xl border border-slate-100">
            {/* Animated border gradient */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 rounded-3xl opacity-20 blur-sm" />
            <div className="absolute inset-0 bg-white rounded-3xl" />
            
            {/* Content */}
            <div className="relative text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full text-white text-sm font-medium mb-8"
              >
                <Sparkles className="w-4 h-4" />
                Koniec z gonieniem za danymi
              </motion.div>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight"
              >
                Wypróbuj{" "}
                <span className="gradient-text">PLANOS CAST</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto"
              >
                Twój zespół przestaje gonić za danymi i zaczyna domykać castingi. 
                Talenci sami aktualizują profile. Zgłoszenia przychodzą kompletne.
              </motion.p>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
              >
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Check className="w-3 h-3 text-emerald-600" />
                    </div>
                    {benefit}
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <a
                  href="mailto:kontakt@planoscast.pl?subject=Chcę%20wypróbować%20PLANOS%20CAST"
                  className="group relative inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500 rounded-full shadow-xl shadow-primary-500/25 hover:shadow-2xl hover:shadow-primary-500/30 hover:scale-105 transition-all btn-shine"
                >
                  Umów prezentację
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="mailto:demo@planoscast.pl?subject=Chcę%20zobaczyć%20demo"
                  className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
                >
                  Napisz do nas
                </a>
              </motion.div>

              {/* Trust note */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-8 text-sm text-slate-400"
              >
                Pokażemy Ci jak to działa na żywo. Bez zobowiązań.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
