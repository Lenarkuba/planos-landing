/**
 * Central place for all contact / booking details and placeholders used across
 * the landing page. Update these values in one spot and every section follows.
 *
 * Anything marked PLACEHOLDER renders visibly bracketed ([…]) on the page so it
 * is obvious what still needs real data before launch.
 */

/** Booking link for all "Umów demo" buttons (Cal.com / Calendly). */
export const BOOKING_URL =
  "https://calendly.com/lenarkuba/planos-prezentacja-systemu-15-min-clone";

/** Production app login URL (nav "Zaloguj się"). */
export const APP_URL = "https://app.planos.pl";

/** Contact e-mail shown in the final CTA and footer. TODO: podmień na docelowy adres. */
export const CONTACT_EMAIL = "kontakt@planos.pl";

/** PLACEHOLDER — contact phone shown in the final CTA and footer. */
export const CONTACT_PHONE = "+48 000 000 000";

/** YouTube IDs of the product walkthrough videos (click-to-load embeds). */
export const VIDEO_APPLICATION_FORM_ID = "Gyiwj6UpaBc";
export const VIDEO_DIRECTOR_PANEL_ID = "EXPI617RY40";

export const SITE_URL = "https://planos.pl";

/** PLACEHOLDER — deadline shown in the founder-offer strip (pricing section). */
export const FOUNDING_OFFER_DEADLINE = "[DATA]";

/**
 * PLACEHOLDER — trust-band numbers (hero "stats" strip).
 * Replace `value` with real figures once available (e.g. "12 400+").
 */
export const STATS: { value: string; label: string }[] = [
  { value: "[LICZBA]+", label: "talentów w bazach agencji" },
  { value: "[LICZBA]+", label: "dni pracy rozliczonych" },
  { value: "[LICZBA]", label: "agencji na platformie" },
  { value: "3 lata", label: "budowany razem z agencjami" },
];

/**
 * Team / company identity used in the trust band. Company voice on purpose:
 * PlanOS is an independent software product, not a one-person side project
 * and not owned or financed by any agency. Photo is a generated placeholder.
 */
export const TEAM = {
  name: "Zespół PlanOS",
  role: "niezależny projekt technologiczny",
  photo: "/graphics/founder-placeholder.png",
};
