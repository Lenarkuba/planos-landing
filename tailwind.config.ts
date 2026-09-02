import type { Config } from "tailwindcss";

/** Helper: expose an HSL triplet CSS variable as a Tailwind color with alpha support. */
const hsl = (name: string) => `hsl(var(${name}) / <alpha-value>)`;

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Landing v2 warm palette */
        paper: {
          DEFAULT: hsl("--lp-background"),
          muted: hsl("--lp-muted"),
          card: hsl("--lp-card"),
          border: hsl("--lp-border"),
        },
        ink: {
          DEFAULT: hsl("--lp-foreground"),
          muted: hsl("--lp-muted-foreground"),
          faint: hsl("--lp-faint"),
          hover: hsl("--lp-hover"),
        },
        brand: {
          DEFAULT: hsl("--lp-primary"),
          foreground: hsl("--lp-primary-foreground"),
          ink: hsl("--lp-brand-ink"),
          bright: hsl("--lp-brand-bright"),
          soft: hsl("--lp-brand-soft"),
        },
        tag: {
          "green-bg": hsl("--lp-tag-green-bg"),
          "green-tx": hsl("--lp-tag-green-tx"),
          "blue-bg": hsl("--lp-tag-blue-bg"),
          "blue-tx": hsl("--lp-tag-blue-tx"),
          "red-bg": hsl("--lp-tag-red-bg"),
          "red-tx": hsl("--lp-tag-red-tx"),
          "orange-bg": hsl("--lp-tag-orange-bg"),
          "orange-tx": hsl("--lp-tag-orange-tx"),
          "grey-bg": hsl("--lp-tag-grey-bg"),
          "grey-tx": hsl("--lp-tag-grey-tx"),
        },
        /* Legacy palettes kept for older components */
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },
        accent: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7c3aed",
          800: "#6b21a8",
          900: "#581c87",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        /* Headings share the body sans — serif display looked decorative, not product-grade. */
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(60, 45, 20, 0.04), 0 8px 24px -12px rgba(60, 45, 20, 0.18)",
        "card-lg": "0 2px 4px rgba(60, 45, 20, 0.05), 0 30px 60px -30px rgba(60, 45, 20, 0.35)",
        brand: "0 10px 30px -10px hsl(var(--lp-primary) / 0.45)",
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-in-left": "slideInLeft 0.5s ease-out forwards",
        "slide-in-right": "slideInRight 0.5s ease-out forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
