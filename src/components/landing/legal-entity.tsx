import { CONTACT_EMAIL, LEGAL } from "@/lib/site-config";

type LegalEntityProps = {
  /** Footer: name, NIP, REGON, address. Legal pages also include PKD and e-mail. */
  variant?: "compact" | "full";
  className?: string;
};

export function LegalEntity({ variant = "full", className = "" }: LegalEntityProps) {
  return (
    <address className={`not-italic ${className}`}>
      <p className={variant === "full" ? "font-medium text-ink" : undefined}>{LEGAL.legalName}</p>
      <p>NIP: {LEGAL.nip}</p>
      <p>REGON: {LEGAL.regon}</p>
      <p>Adres do doręczeń: {LEGAL.addressLine}</p>
      <p>
        PKD {LEGAL.pkd} — {LEGAL.pkdDescription}
      </p>
      {variant === "full" ? (
        <p className="mt-2">
          E-mail:{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-ink hover:underline">
            {CONTACT_EMAIL}
          </a>
        </p>
      ) : null}
    </address>
  );
}
