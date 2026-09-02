import Link from "next/link";
import { APP_URL, BOOKING_URL, CONTACT_EMAIL } from "@/lib/site-config";
import { Logo } from "./nav";

const COLUMNS: { title: string; links: { href: string; label: string; external?: boolean }[] }[] = [
  {
    title: "Produkt",
    links: [
      { href: "/#funkcje", label: "Funkcje" },
      { href: "/#platforma", label: "Platforma" },
      { href: "/#bezpieczenstwo", label: "Bezpieczeństwo" },
      { href: "/#cennik", label: "Cennik" },
      { href: APP_URL, label: "Zaloguj się", external: true },
    ],
  },
  {
    title: "Zasoby",
    links: [
      { href: "/#demo", label: "Demo wideo" },
      { href: "/#jak-to-dziala", label: "Jak zaczynamy" },
      { href: "/#faq", label: "FAQ" },
      { href: "/dla-statystow", label: "Dla statystów i talentów" },
    ],
  },
  {
    title: "Firma",
    links: [
      { href: "/#kontakt", label: "Kontakt" },
      { href: BOOKING_URL, label: "Umów demo (kalendarz)", external: true },
      { href: "/privacy", label: "Polityka prywatności" },
      { href: "/terms", label: "Regulamin" },
      { href: "/privacy", label: "Informacja o cookies" },
    ],
  },
];

export function LandingFooter() {
  return (
    <footer className="border-t border-paper-border bg-paper-muted">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-block">
              <Logo />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
              Centrum dowodzenia dla agencji castingowych, statystów i hostess.
              Baza, nabory, obecności i rozliczenia w jednym systemie. Zbudowany
              w Polsce, zgodny z RODO.
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-muted">
              PlanOS to niezależny produkt technologiczny. Nie jesteśmy agencją
              i nie współpracujemy z żadną agencją na zasadach właścicielskich —
              dane każdej agencji są od siebie odseparowane.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-4 inline-block text-sm font-medium text-ink hover:text-brand-ink"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-sm font-semibold text-ink">{col.title}</h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l.href + l.label}>
                    {l.external ? (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ink-muted hover:text-ink"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link href={l.href} className="text-ink-muted hover:text-ink">
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-paper-border pt-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} PlanOS. Wszelkie prawa zastrzeżone.</p>
          <p>Zbudowany w Polsce, zgodny z RODO.</p>
        </div>
      </div>
    </footer>
  );
}
