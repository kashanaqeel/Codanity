import { ANIMATION_DURATION, ANIMATION_DELAY } from '@/constants';

export const useAnimation = () => {
  const fadeInUp = (delay: number = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { 
      duration: ANIMATION_DURATION.NORMAL, 
      delay: delay 
    }
  });

  const fadeInUpSmall = (delay: number = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { 
      duration: ANIMATION_DURATION.NORMAL, 
      delay: delay 
    }
  });

  const staggerChildren = (baseDelay: number = 0, staggerDelay: number = 0.05) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { 
      duration: ANIMATION_DURATION.NORMAL, 
      delay: baseDelay 
    }
  });

  const hoverScale = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { type: "spring", stiffness: 400, damping: 25 }
  };

  const cardHover = {
    whileHover: { 
      y: -8,
      transition: { type: "spring", stiffness: 400, damping: 25 }
    },
    transition: { duration: ANIMATION_DURATION.NORMAL }
  };

  return {
    fadeInUp,
    fadeInUpSmall,
    staggerChildren,
    hoverScale,
    cardHover
  };
};
