/**
 * Central place for all contact / booking details and placeholders used across
 * the landing page. Update these values in one spot and every section follows.
 *
 * Anything marked PLACEHOLDER renders visibly bracketed ([…]) on the page so it
 * is obvious what still needs real data before launch.
 */

/** Booking link for all "Umów demo" buttons (Cal.com / Calendly). */
export const BOOKING_URL =
  "https://calendly.com/lenarkuba/planos-prezentacja-systemu-15-min";

/** Production app login URL (nav "Zaloguj się"). */
export const APP_URL = "https://app.planos.pl";

/** Contact e-mail shown in the final CTA and footer. TODO: podmień na docelowy adres. */
export const CONTACT_EMAIL = "admin@planos.pl";

export const CONTACT_PHONE = "+48 534 780 059";

/** YouTube IDs of the product walkthrough videos (click-to-load embeds). */
export const VIDEO_APPLICATION_FORM_ID = "Gyiwj6UpaBc";
export const VIDEO_DIRECTOR_PANEL_ID = "EXPI617RY40";

export const SITE_URL = "https://planos.pl";

/**
 * Legal entity behind the PlanOS brand (CEIDG). Used in footer, privacy, terms, JSON-LD.
 */
export const LEGAL = {
  brand: "PlanOS",
  legalName: "Syntegrade Business Automation - Jakub Lenartowicz",
  nip: "8351620867",
  regon: "540036340",
  streetAddress: "ul. Solidarności 7/31",
  postalCode: "96-200",
  city: "Rawa Mazowiecka",
  country: "PL",
  addressLine: "ul. Solidarności 7/31, 96-200 Rawa Mazowiecka",
  pkd: "62.10.B",
  pkdDescription: "Pozostała działalność w zakresie programowania",
} as const;
