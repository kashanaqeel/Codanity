import { ANIMATION_DURATION } from "@/constants";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export const useAnimation = () => {
  const fadeInUp = (delay: number = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: {
      duration: ANIMATION_DURATION.SLOW,
      delay,
      ease: smoothEase,
    },
  });

  const fadeInUpSmall = (delay: number = 0) => ({
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: {
      duration: ANIMATION_DURATION.NORMAL,
      delay,
      ease: smoothEase,
    },
  });

  const staggerChildren = (baseDelay: number = 0, staggerDelay: number = 0.08) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: {
      duration: ANIMATION_DURATION.NORMAL,
      delay: baseDelay,
      ease: smoothEase,
    },
  });

  const hoverScale = {
    whileHover: { scale: 1.02, y: -2 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring", stiffness: 400, damping: 28 },
  };

  const cardHover = {
    whileHover: {
      y: -6,
      transition: { type: "spring", stiffness: 380, damping: 26 },
    },
    transition: { duration: ANIMATION_DURATION.NORMAL },
  };

  const springIn = (delay: number = 0) => ({
    initial: { opacity: 0, scale: 0.96, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: {
      duration: 0.55,
      delay,
      ease: smoothEase,
    },
  });

  return {
    fadeInUp,
    fadeInUpSmall,
    staggerChildren,
    hoverScale,
    cardHover,
    springIn,
  };
};
