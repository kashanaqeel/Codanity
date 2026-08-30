import React from "react";
import { motion } from "framer-motion";

export interface HeroBackdropProps {
  intensity?: "default" | "strong";
  showWave?: boolean;
}

export const HeroBackdrop: React.FC<HeroBackdropProps> = ({
  intensity = "default",
  showWave = true,
}) => {
  const orbScale = intensity === "strong" ? 1.15 : 1;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[#060912]" aria-hidden>
      <div className="absolute inset-0 bg-aurora opacity-60" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.07]" />

      <motion.div
        className="mesh-orb left-1/4 top-0 bg-violet-600/20"
        style={{
          width: `${24 * orbScale}rem`,
          height: `${24 * orbScale}rem`,
        }}
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="mesh-orb right-1/4 bottom-0 bg-brand/15"
        style={{
          width: `${20 * orbScale}rem`,
          height: `${20 * orbScale}rem`,
        }}
        animate={{ x: [0, -20, 0], y: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#060912] via-[#060912]/40 to-transparent" />

      {showWave && (
        <svg
          className="absolute bottom-0 left-0 w-full text-[#f8f9fc]"
          viewBox="0 0 1440 64"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M0,32 C240,64 480,0 720,32 C960,64 1200,0 1440,32 L1440,64 L0,64 Z"
          />
        </svg>
      )}
    </div>
  );
};

export default HeroBackdrop;
