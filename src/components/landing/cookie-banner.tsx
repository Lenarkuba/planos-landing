"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import Link from "next/link";
import { X } from "lucide-react";
import {
  defaultConsent,
  readCookieConsent,
  writeCookieConsent,
  type CookieConsent,
} from "@/lib/cookie-consent";
import { buttonVariants, cn } from "./ui";

type CookieConsentContextValue = {
  ready: boolean;
  consent: CookieConsent | null;
  openSettings: () => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }
  return ctx;
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState(false);
  const [draft, setDraft] = useState({ analytics: false });

  useEffect(() => {
    const stored = readCookieConsent();
    setConsent(stored);
    setReady(true);
    if (!stored) setOpen(true);
  }, []);

  const persist = useCallback((next: CookieConsent) => {
    writeCookieConsent(next);
    setConsent(next);
    setOpen(false);
    setSettings(false);
  }, []);

  const acceptAll = useCallback(() => {
    persist(defaultConsent({ analytics: true }));
  }, [persist]);

  const rejectOptional = useCallback(() => {
    persist(defaultConsent({ analytics: false }));
  }, [persist]);

  const saveCustom = useCallback(() => {
    persist(defaultConsent(draft));
  }, [draft, persist]);

  const openSettings = useCallback(() => {
    setDraft({
      analytics: consent?.analytics === true,
    });
    setSettings(true);
    setOpen(true);
  }, [consent]);

  const value = useMemo(
    () => ({ ready, consent, openSettings }),
    [ready, consent, openSettings],
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
      {ready && open ? (
        <CookieBanner
          settings={settings}
          draft={draft}
          setDraft={setDraft}
          onAcceptAll={acceptAll}
          onRejectOptional={rejectOptional}
          onSaveCustom={saveCustom}
          onOpenSettings={() => {
            setDraft({
              analytics: consent?.analytics === true,
            });
            setSettings(true);
          }}
          onDismiss={rejectOptional}
        />
      ) : null}
    </CookieConsentContext.Provider>
  );
}

export function CookieSettingsButton({ className }: { className?: string }) {
  const { openSettings } = useCookieConsent();
  return (
    <button
      type="button"
      onClick={openSettings}
      className={className}
    >
      Ustawienia cookies
    </button>
  );
}

function CookieBanner({
  settings,
  draft,
  setDraft,
  onAcceptAll,
  onRejectOptional,
  onSaveCustom,
  onOpenSettings,
  onDismiss,
}: {
  settings: boolean;
  draft: { analytics: boolean };
  setDraft: (next: { analytics: boolean }) => void;
  onAcceptAll: () => void;
  onRejectOptional: () => void;
  onSaveCustom: () => void;
  onOpenSettings: () => void;
  onDismiss: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
      className="fixed inset-x-0 bottom-0 z-[80] p-4 sm:p-6"
    >
      <div className="relative mx-auto max-w-3xl rounded-2xl border border-paper-border bg-paper-card p-5 shadow-card-lg sm:p-6">
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Zamknij i zachowaj tylko niezbędne pliki"
          className="absolute right-3 top-3 rounded-lg p-1.5 text-ink-faint transition-colors hover:bg-paper-muted hover:text-ink"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>

        <p
          id="cookie-banner-title"
          className="pr-8 text-sm font-semibold uppercase tracking-[0.18em] text-brand-ink"
        >
          Pliki cookies
        </p>
        <p id="cookie-banner-desc" className="mt-2 text-pretty text-sm leading-relaxed text-ink-muted">
          Używamy niezbędnych plików, żeby strona działała i żeby zapamiętać Twój wybór.
          Opcjonalnie, tylko za zgodą, ładujemy Vercel Analytics (pomiary odwiedzin).{" "}
          <Link href="/privacy#cookies" className="font-medium text-ink underline underline-offset-2 hover:text-brand-ink">
            Polityka prywatności
          </Link>
        </p>

        {settings ? (
          <fieldset className="mt-5 space-y-3">
            <legend className="sr-only">Kategorie plików cookies</legend>
            <CategoryRow
              title="Niezbędne"
              description="Działanie strony i zapis Twojej decyzji o zgodzie. Zawsze włączone."
              checked
              disabled
            />
            <CategoryRow
              title="Analityka"
              description="Anonimowe pomiary odwiedzin przez Vercel Analytics. Ładuje się tylko po Twojej zgodzie."
              checked={draft.analytics}
              onChange={(analytics) => setDraft({ analytics })}
            />
          </fieldset>
        ) : null}

        <div className="mt-5 flex flex-col-reverse gap-2 sm:flex-row sm:flex-wrap sm:justify-end">
          <button
            type="button"
            onClick={settings ? onSaveCustom : onOpenSettings}
            className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "sm:mr-auto")}
          >
            {settings ? "Zapisz wybór" : "Ustawienia"}
          </button>
          <button
            type="button"
            onClick={onRejectOptional}
            className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
          >
            Tylko niezbędne
          </button>
          <button
            type="button"
            onClick={onAcceptAll}
            className={cn(buttonVariants({ variant: "primary", size: "sm" }))}
          >
            Akceptuj wszystkie
          </button>
        </div>
      </div>
    </div>
  );
}

function CategoryRow({
  title,
  description,
  checked,
  disabled,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (next: boolean) => void;
}) {
  return (
    <label
      className={cn(
        "flex cursor-pointer items-start justify-between gap-4 rounded-xl border border-paper-border bg-paper-muted px-4 py-3",
        disabled && "cursor-default opacity-80",
      )}
    >
      <span>
        <span className="block text-sm font-semibold text-ink">{title}</span>
        <span className="mt-0.5 block text-xs leading-relaxed text-ink-muted">{description}</span>
      </span>
      <input
        type="checkbox"
        role="switch"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className="mt-1 h-5 w-5 shrink-0 rounded border-paper-border text-brand focus:ring-brand"
      />
    </label>
  );
}
