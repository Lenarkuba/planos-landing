"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Upload,
  Clapperboard,
  MousePointerClick,
  Bell,
  FileText,
  UserCheck,
  Search,
  BarChart3,
  Video,
  Calendar,
  Lock,
  Users,
} from "lucide-react";

const featuresAgency = [
  {
    icon: Upload,
    title: "Zgłoszenia przychodzą kompletne",
    description: "Zdjęcie, self-tape, wszystkie dane — bez pustych maili",
  },
  {
    icon: Search,
    title: "Zaawansowane filtry",
    description: "Szukaj po wyglądzie, umiejętnościach, tagach",
  },
  {
    icon: UserCheck,
    title: "Panel dla reżysera",
    description: "Zewnętrzny link do selekcji, bez logowania, bez PESEL-i",
  },
  {
    icon: Calendar,
    title: "Śledzenie obecności",
    description: "Kto był na planie, kto potwierdził, kto nie przyszedł",
  },
  {
    icon: FileText,
    title: "Zarządzanie umowami",
    description: "Dokumenty chronione hasłem, widoczne dla obu stron",
  },
  {
    icon: BarChart3,
    title: "Szybki eksport ZUS",
    description: "Z historii nagrań do rozliczenia — jednym kliknięciem",
  },
];

const featuresTalent = [
  {
    icon: MousePointerClick,
    title: "Zgłoszenie jednym kliknięciem",
    description: "Zdjęcie + self-tape + dane — wszystko od razu",
  },
  {
    icon: Users,
    title: "Własny profil",
    description: "Aktualizuj zdjęcia, wagę, fryzurę, adres kiedy chcesz",
  },
  {
    icon: Bell,
    title: "Powiadomienia o zmianach",
    description: "Nowy casting, zmiana terminu — informacja od razu",
  },
  {
    icon: Video,
    title: "Potwierdzanie nagrań",
    description: "Jednym kliknięciem potwierdzasz udział w nagraniu",
  },
  {
    icon: FileText,
    title: "Dostęp do umów",
    description: "Wszystkie dokumenty w jednym miejscu",
  },
  {
    icon: Lock,
    title: "Kontrola nad danymi",
    description: "Wiesz kto i kiedy korzysta z Twoich danych",
  },
];

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="funkcje" className="py-24 lg:py-32 section-gradient-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-semibold text-primary-600 bg-primary-50 rounded-full mb-6">
            Funkcje
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Dwa panele,{" "}
            <span className="gradient-text">jeden system</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            Agencja i talenci pracują razem, ale każdy ma swój widok. 
            Dane synchronizują się automatycznie.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Agency Features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                <Clapperboard className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Dla agencji</h3>
                <p className="text-sm text-slate-500">Panel zarządzania</p>
              </div>
            </div>
            <div className="space-y-4">
              {featuresAgency.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className="group flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:border-primary-100 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-50 group-hover:bg-primary-100 flex items-center justify-center transition-colors">
                    <feature.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-slate-500">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Talent Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center">
                <Users className="w-6 h-6 text-accent-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Dla talentów</h3>
                <p className="text-sm text-slate-500">Portal talentu</p>
              </div>
            </div>
            <div className="space-y-4">
              {featuresTalent.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  className="group flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:border-accent-100 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent-50 group-hover:bg-accent-100 flex items-center justify-center transition-colors">
                    <feature.icon className="w-5 h-5 text-accent-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-slate-500">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
