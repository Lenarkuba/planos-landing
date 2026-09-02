/**
 * Manifest of generated small graphics (public/graphics/*).
 * Images are produced with the Higgsfield plugin; if a file is missing the
 * feature cards fall back to lucide icons (see features.tsx).
 */

export type Doodle = {
  src: string;
  size: number;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  rotate: number;
};

/** Low-opacity decorative doodles scattered around the hero collage. */
export const DOODLES: Doodle[] = [
  { src: "/graphics/doodle-klaps.png", size: 72, left: "20%", top: "38%", rotate: -12 },
  { src: "/graphics/doodle-identyfikator.png", size: 64, right: "21%", top: "36%", rotate: 10 },
  { src: "/graphics/doodle-kalendarz.png", size: 60, left: "13%", bottom: "4%", rotate: 8 },
  { src: "/graphics/doodle-megafon.png", size: 64, right: "12%", top: "54%", rotate: -8 },
  { src: "/graphics/doodle-lista.png", size: 56, left: "30%", bottom: "22%", rotate: 6 },
];

/** Feature-card icons, keyed by feature id (see features.tsx). */
export const FEATURE_ICONS: Record<string, string> = {
  baza: "/graphics/icon-baza.png",
  formularze: "/graphics/icon-formularze.png",
  klient: "/graphics/icon-klient.png",
  dni: "/graphics/icon-dni.png",
  obecnosc: "/graphics/icon-obecnosc.png",
  rzetelnosc: "/graphics/icon-rzetelnosc.png",
  zus: "/graphics/icon-zus.png",
  powiadomienia: "/graphics/icon-powiadomienia.png",
  rodo: "/graphics/icon-rodo.png",
};
