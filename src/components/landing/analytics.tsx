"use client";

import { Analytics } from "@vercel/analytics/next";
import { useCookieConsent } from "./cookie-banner";

/** Loads Vercel Analytics only after the visitor accepts the analytics category. */
export function ConsentAnalytics() {
  const { ready, consent } = useCookieConsent();
  if (!ready || consent?.analytics !== true) return null;
  return <Analytics />;
}
