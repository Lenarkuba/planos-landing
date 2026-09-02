import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

type SectionProps = HTMLAttributes<HTMLElement> & {
  /** Visual band style. */
  tone?: "paper" | "muted" | "dark";
  /** Max width preset for the inner container. */
  width?: "default" | "narrow" | "wide";
  children: ReactNode;
};

const widths = {
  default: "max-w-6xl",
  narrow: "max-w-3xl",
  wide: "max-w-7xl",
};

const tones = {
  paper: "bg-paper",
  muted: "bg-paper-muted border-y border-paper-border",
  dark: "bg-ink-hover text-paper",
};

export function Section({
  tone = "paper",
  width = "default",
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <section
      className={cn("relative scroll-mt-20 py-16 md:py-24", tones[tone], className)}
      {...rest}
    >
      <div className={cn("mx-auto w-full px-4 sm:px-6", widths[width])}>{children}</div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* SectionHeader                                                       */
/* ------------------------------------------------------------------ */

type SectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  /** Use on dark bands. */
  invert?: boolean;
  className?: string;
  as?: "h1" | "h2";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  invert = false,
  className,
  as: Tag = "h2",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.18em]",
            invert ? "text-brand-bright" : "text-brand-ink",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={cn(
          "mt-3 text-balance font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl",
          invert ? "text-paper" : "text-ink",
        )}
      >
        {title}
      </Tag>
      {description ? (
        <p
          className={cn(
            "mt-5 text-pretty text-lg leading-relaxed",
            invert ? "text-paper/75" : "text-ink-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Button (anchor)                                                     */
/* ------------------------------------------------------------------ */

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-brand text-brand-foreground shadow-brand hover:bg-brand-ink hover:shadow-lg",
        outline:
          "border border-paper-border bg-paper-card text-ink hover:border-ink-faint hover:bg-paper-muted",
        ghost: "text-ink hover:bg-paper-muted",
        inverted:
          "bg-paper text-ink hover:bg-paper-muted shadow-lg shadow-black/20",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-12 px-8 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonVariants> & { children: ReactNode };

export function ButtonLink({ variant, size, className, children, ...rest }: ButtonLinkProps) {
  return (
    <a className={cn(buttonVariants({ variant, size }), className)} {...rest}>
      {children}
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* Card                                                                */
/* ------------------------------------------------------------------ */

type CardProps = HTMLAttributes<HTMLDivElement> & {
  hover?: boolean;
  children: ReactNode;
};

export function Card({ hover = false, className, children, ...rest }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-paper-border bg-paper-card p-6 shadow-card",
        hover && "transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-card-lg",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* StatusChip                                                          */
/* ------------------------------------------------------------------ */

type ChipTone = "green" | "blue" | "red" | "orange" | "grey";

const chipTones: Record<ChipTone, string> = {
  green: "bg-tag-green-bg text-tag-green-tx",
  blue: "bg-tag-blue-bg text-tag-blue-tx",
  red: "bg-tag-red-bg text-tag-red-tx",
  orange: "bg-tag-orange-bg text-tag-orange-tx",
  grey: "bg-tag-grey-bg text-tag-grey-tx",
};

export function StatusChip({
  tone = "grey",
  className,
  children,
}: {
  tone?: ChipTone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[0.7rem] font-semibold",
        chipTones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* IconBadge — small rounded tile for a lucide icon or generated PNG   */
/* ------------------------------------------------------------------ */

export function IconBadge({
  className,
  children,
  size = "md",
}: {
  className?: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = { sm: "h-9 w-9", md: "h-11 w-11", lg: "h-14 w-14" };
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand-ink",
        sizes[size],
        className,
      )}
    >
      {children}
    </div>
  );
}
