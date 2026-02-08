"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Users, Clock, Shield } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary-400/5 to-accent-400/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            <span className="text-sm font-medium text-primary-700">
              Platforma dla agencji castingowych
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 leading-tight tracking-tight"
          >
            Talenci aktualizują{" "}
            <span className="gradient-text">swoje dane</span>
            <br />
            Ty zajmujesz się produkcją
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Zgłoszenia na casting przychodzą kompletne. Obecność potwierdzana jednym kliknięciem. 
            Koniec z gonieniem za zdjęciami i weryfikowaniem maili.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#cta"
              className="group relative inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500 rounded-full shadow-xl shadow-primary-500/25 hover:shadow-2xl hover:shadow-primary-500/30 transition-all btn-shine"
            >
              Umów prezentację
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#demo"
              className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-slate-700 bg-white/80 backdrop-blur rounded-full border border-slate-200 hover:border-primary-300 hover:bg-white transition-all"
            >
              <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                <Play className="w-4 h-4 text-primary-600 ml-0.5" />
              </div>
              Zobacz demo
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500"
          >
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary-500" />
              <span>Oszczędź godziny tygodniowo</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-300" />
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-accent-500" />
              <span>Portal dla talentów</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-300" />
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-500" />
              <span>Dane zaszyfrowane</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
