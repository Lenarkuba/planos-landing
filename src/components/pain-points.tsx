"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  X, 
  Mail, 
  Clock,
  ClipboardList,
  RefreshCw
} from "lucide-react";

const painPoints = [
  {
    icon: Mail,
    text: "Weryfikowanie dziesiątek maili dziennie",
    description: "Czy zdjęcia są załączone? Czy dane kompletne? Ciągłe sprawdzanie.",
  },
  {
    icon: RefreshCw,
    text: "Talent zmienił wygląd — kto zaktualizuje profil?",
    description: "Przybrał na wadze, zmienił fryzurę, zapuścił brodę, przeprowadził się...",
  },
  {
    icon: ClipboardList,
    text: "Ręczne tworzenie list obecności",
    description: "Po castingu śledzenie kto był, kto potwierdził, kto nie przyszedł.",
  },
  {
    icon: Clock,
    text: "Informowanie o zmianach terminu",
    description: "Wysyłanie maili, dzwonienie, sprawdzanie kto odebrał informację.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function PainPoints() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problem" className="py-24 lg:py-32 section-gradient-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 text-sm font-semibold text-red-600 bg-red-50 rounded-full mb-6">
              Codzienne problemy
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Znasz to{" "}
              <span className="text-red-500">z własnego doświadczenia?</span>
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Agencje castingowe tracą godziny na zadania, które powinny być automatyczne. 
              Weryfikacja danych, śledzenie obecności, pilnowanie dokumentacji — 
              zamiast skupić się na tym, co naprawdę ważne.
            </p>
            <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl border border-red-100">
              <p className="text-red-800 font-medium">
                💡 A co jeśli talenci sami aktualizowaliby swoje dane, 
                a zgłoszenia przychodziły <span className="font-bold">kompletne</span>?
              </p>
            </div>
          </motion.div>

          {/* Right side - Pain points list */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-4"
          >
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-red-100 transition-all"
              >
                {/* X mark */}
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                  <X className="w-5 h-5 text-red-500" />
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <point.icon className="w-4 h-4 text-slate-400" />
                    <h3 className="font-semibold text-slate-900">
                      {point.text}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-500 pl-7">
                    {point.description}
                  </p>
                </div>

                {/* Decorative gradient on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/0 to-orange-500/0 group-hover:from-red-500/[0.02] group-hover:to-orange-500/[0.02] transition-all pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
