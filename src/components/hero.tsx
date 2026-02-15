"use client";

import { motion } from "framer-motion";

const fadeUp = { opacity: 0, y: 32 };
const fadeUpEnd = { opacity: 1, y: 0 };
const ease = [0.22, 1, 0.36, 1];

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-32 pb-24 px-4 md:px-8 relative overflow-hidden">
      <div
        className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)" }}
      />
      <motion.div
        className="max-w-[820px] text-center relative z-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
        }}
      >
        <motion.h1
          className="text-[clamp(2.8rem,6vw,4.5rem)] leading-[1.1] font-normal mb-8 tracking-tight"
          style={{ fontFamily: "var(--serif)" }}
          variants={{ hidden: fadeUp, visible: { ...fadeUpEnd, transition: { duration: 0.6, ease } } }}
        >
          Wszystko w&nbsp;jednym miejscu — jedno źródło danych dla całej agencji
        </motion.h1>
        <motion.p
          className="text-[1.15rem] text-[var(--text-muted)] max-w-[600px] mx-auto mb-8 leading-[1.7]"
          variants={{ hidden: fadeUp, visible: { ...fadeUpEnd, transition: { duration: 0.55, ease } } }}
        >
          Projekty, castingi, artyści, dni zdjęciowe. Zarządzaj agencją bez Excela, bez chaosu.
        </motion.p>
        <motion.div
          className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--surface)] border border-[var(--border)] rounded-full text-[0.95rem] text-[var(--text-muted)] mb-8 font-medium"
          variants={{ hidden: fadeUp, visible: { ...fadeUpEnd, transition: { duration: 0.55, ease } } }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] animate-pulse" />
          Polska platforma dla agencji castingowych
        </motion.div>
        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          variants={{ hidden: fadeUp, visible: { ...fadeUpEnd, transition: { duration: 0.55, ease } } }}
        >
          <a
            href="https://calendly.com/lenarkuba/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[var(--accent)] text-white py-3 px-8 rounded-[10px] font-semibold text-[0.95rem] no-underline border-none cursor-pointer transition-all hover:bg-[var(--accent-soft)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(79,124,255,0.25)]"
          >
            Umów prezentację →
          </a>
          <a
            href="/#workflow"
            className="inline-flex items-center gap-2 bg-transparent text-[var(--text)] py-3 px-8 rounded-[10px] font-semibold text-[0.95rem] no-underline border border-[var(--border)] transition-all hover:border-[var(--border-light)] hover:bg-[var(--surface)]"
          >
            Jak to działa
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
