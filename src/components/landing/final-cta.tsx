import { Mail, Phone } from "lucide-react";
import { BOOKING_URL, CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/site-config";
import { TrustLine } from "./trust-line";
import { ContactForm } from "./contact-form";

export function FinalCta() {
  return (
    <section
      id="kontakt"
      className="scroll-mt-20 bg-white py-16 md:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">
            Kontakt
          </p>
          <h2
            id="contact-heading"
            className="mt-3 text-balance text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
          >
            Zobacz PlanOS na przykładzie swojej agencji
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-slate-600">
            Umów krótkie demo. Pokażę, jak PlanOS działa i jak Twoje dane
            pozostają odizolowane i tylko Twoje.
          </p>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-700 to-indigo-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-700/20 transition-all hover:shadow-xl hover:shadow-blue-700/30 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
          >
            Umów demo
          </a>

          <div className="mt-8 space-y-3">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-2.5 text-[0.95rem] font-medium text-slate-700 hover:text-slate-900"
            >
              <Mail aria-hidden="true" className="h-4 w-4 text-blue-700" />
              {CONTACT_EMAIL}
            </a>
            <a
              href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
              className="flex items-center gap-2.5 text-[0.95rem] font-medium text-slate-700 hover:text-slate-900"
            >
              <Phone aria-hidden="true" className="h-4 w-4 text-blue-700" />
              {CONTACT_PHONE}
            </a>
          </div>

          <TrustLine className="mt-8" />
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
