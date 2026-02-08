"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ShieldCheck,
  Lock,
  Bell,
  UserX,
  Eye,
  FileCheck,
} from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "PESEL chroniony hasłem",
    description: "Żeby zobaczyć dane wrażliwe, trzeba podać hasło. Zawsze.",
  },
  {
    icon: Bell,
    title: "Powiadomienia o dostępie",
    description: "Talent wie gdy ktoś korzysta z jego danych. Pełna przejrzystość.",
  },
  {
    icon: UserX,
    title: "Panel reżysera bez wrażliwych danych",
    description: "Reżyser widzi tylko to co potrzebuje do selekcji.",
  },
  {
    icon: Eye,
    title: "Historia dostępu",
    description: "Kto, kiedy i do czego miał dostęp. Pełna kontrola.",
  },
  {
    icon: FileCheck,
    title: "Dokumenty chronione",
    description: "Umowy zabezpieczone hasłem. Widoczne tylko dla uprawnionych.",
  },
  {
    icon: ShieldCheck,
    title: "Zgody RODO pod kontrolą",
    description: "Śledzenie zgód i wycofań. Wszystko udokumentowane.",
  },
];

export function Security() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="bezpieczenstwo" className="py-24 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold text-emerald-400 bg-emerald-500/10 rounded-full mb-6 border border-emerald-500/20">
              <ShieldCheck className="w-4 h-4" />
              Bezpieczeństwo
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Dane zaszyfrowane.{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-primary-400 bg-clip-text text-transparent">
                Dostęp kontrolowany.
              </span>
            </h2>
            
            <p className="mt-6 text-lg text-slate-400 leading-relaxed">
              Nawet jeśli coś pójdzie nie tak, dane PESEL są zaszyfrowane 
              i praktycznie niemożliwe do odczytania bez autoryzacji.
            </p>

            {/* Key point */}
            <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-white font-medium">
                🔐 Wielowarstwowe szyfrowanie <br/>
                <span className="text-slate-400 font-normal">
                  Dane chronione na każdym poziomie. Bez hasła nikt ich nie zobaczy, 
                  a każda próba dostępu jest logowana.
                </span>
              </p>
            </div>
          </motion.div>

          {/* Right side - Features grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="group p-5 bg-white/5 backdrop-blur rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500/20 to-primary-500/20 flex items-center justify-center mb-4 group-hover:from-emerald-500/30 group-hover:to-primary-500/30 transition-colors">
                  <feature.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-16 border-t border-white/10"
        >
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed">
              Talenci sami podają swoje dane i decydują kto ma do nich dostęp.
              <span className="text-emerald-400 font-medium"> Ich dane, ich kontrola.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
