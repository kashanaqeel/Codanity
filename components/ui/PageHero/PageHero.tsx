import React from "react";
import { motion } from "framer-motion";
import NeuralGrid from "@/components/effects/NeuralGrid";

export interface PageHeroProps {
  badge: string;
  title: React.ReactNode;
  subtitle: string;
  children?: React.ReactNode;
}

export const PageHero: React.FC<PageHeroProps> = ({ badge, title, subtitle, children }) => {
  return (
    <section className="relative isolate overflow-hidden bg-hero-radial">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-50" />
      <NeuralGrid />
      <motion.div
        className="mesh-orb -left-20 top-10 h-56 w-56 bg-brand/15"
        animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="mesh-orb -right-10 bottom-0 h-48 w-48 bg-blue-400/10"
        animate={{ x: [0, -12, 0], y: [0, 12, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="section-badge mx-auto">{badge}</div>
          <h1 className="section-title mt-5 text-balance">{title}</h1>
          <p className="section-subtitle mt-4">{subtitle}</p>
          {children && <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
