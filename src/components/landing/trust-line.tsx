import { ShieldCheck, Lock, Layers, Download } from "lucide-react";

const TRUST_ITEMS = [
  { icon: ShieldCheck, label: "Zgodność z RODO" },
  { icon: Lock, label: "Szyfrowane dane wrażliwe" },
  { icon: Layers, label: "Baza oddzielona od innych agencji" },
  { icon: Download, label: "Pełny eksport w każdej chwili" },
];

/** Trust cues shown near every CTA. `tone` adapts colors to light or dark sections. */
export function TrustLine({
  tone = "light",
  className = "",
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const text = tone === "light" ? "text-slate-600" : "text-slate-300";
  const icon = tone === "light" ? "text-blue-700" : "text-sky-300";

  return (
    <ul className={`flex flex-wrap items-center gap-x-5 gap-y-2 ${className}`}>
      {TRUST_ITEMS.map(({ icon: Icon, label }) => (
        <li key={label} className={`flex items-center gap-1.5 text-[0.82rem] font-medium ${text}`}>
          <Icon aria-hidden="true" className={`h-4 w-4 shrink-0 ${icon}`} />
          {label}
        </li>
      ))}
    </ul>
  );
}
