"use client";

import { motion, type Variants } from "framer-motion";

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const transition = { duration: 0.55, ease: [0.22, 1, 0.36, 1] };

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}

/** Scroll-triggered fade-up animation */
export function AnimateIn({ children, className = "", delay = 0, once = true }: AnimateInProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      variants={defaultVariants}
      transition={{ ...transition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface AnimateInStaggerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

/** Parent for staggered children - use with AnimateInChild */
export function AnimateInStagger({
  children,
  className = "",
  staggerDelay = 0.08,
  once = true,
}: AnimateInStaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-40px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface AnimateInChildProps {
  children: React.ReactNode;
  className?: string;
}

/** Child of AnimateInStagger - animates with parent stagger */
export function AnimateInChild({ children, className = "" }: AnimateInChildProps) {
  return (
    <motion.div variants={defaultVariants} transition={transition} className={className}>
      {children}
    </motion.div>
  );
}
