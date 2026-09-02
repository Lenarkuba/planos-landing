export const COOKIE_CONSENT_KEY = "planos_cookie_consent";
/** Bump this when adding a new optional processor (e.g. analytics) so visitors are asked again. */
export const COOKIE_CONSENT_VERSION = 3;
export const COOKIE_CONSENT_MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

export type CookieConsent = {
  v: number;
  ts: number;
  analytics: boolean;
};

export function defaultConsent(
  overrides: Partial<Pick<CookieConsent, "analytics">> = {},
): CookieConsent {
  return {
    v: COOKIE_CONSENT_VERSION,
    ts: Date.now(),
    analytics: false,
    ...overrides,
  };
}

export function readCookieConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<CookieConsent>;
    if (parsed.v !== COOKIE_CONSENT_VERSION || typeof parsed.ts !== "number") return null;
    if (Date.now() - parsed.ts > COOKIE_CONSENT_MAX_AGE_MS) return null;
    return {
      v: COOKIE_CONSENT_VERSION,
      ts: parsed.ts,
      analytics: parsed.analytics === true,
    };
  } catch {
    return null;
  }
}

export function writeCookieConsent(consent: CookieConsent) {
  window.localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
  window.dispatchEvent(new CustomEvent("planos:cookie-consent", { detail: consent }));
}
