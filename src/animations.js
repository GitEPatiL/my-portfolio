// ============================================================
// src/animations.js
// Global Framer Motion animation variants and configurations.
// ============================================================

export const smoothSpring = {
  type: "spring",
  stiffness: 70,
  damping: 20,
  mass: 0.8,
};

/* ── Viewport options for IntersectionObserver ───────────────── */
export const VIEWPORT = { once: true, amount: 0.15 };

/* ── Fade-up: scroll-triggered appear-from-below ─────────────── */
export const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ...smoothSpring },
  },
};

/* ── Fade-in: simple opacity fade ───────────────────────────── */
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

/* ── Slide-left: for right-side elements ─────────────────────── */
export const slideLeft = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ...smoothSpring },
  },
};

/* ── Slide-right: for left-side elements ─────────────────────── */
export const slideRight = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ...smoothSpring },
  },
};

/* ── Scale-in: pops in from slightly smaller scale ──────────── */
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ...smoothSpring },
  },
};

/* ── Stagger container: wraps staggered children ─────────────── */
export const staggerContainer = (staggerChildren = 0.12, delayChildren = 0.1) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

/* ── Text reveal: staggered animation for words/letters ─────── */
export const textReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ...smoothSpring },
  },
};

/* ── Floating: ambient background movement ───────────────────── */
export const floating = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/* ── Card tilt helpers (used with useMotionValue) ─────────────── */
export const TILT_AMOUNT = 8;       // max degrees
export const GLOW_AMOUNT = 0.15;    // max glow opacity
