import React from "react";
import { motion } from "framer-motion";
import HeroBackdrop from "@/components/effects/HeroBackdrop";

export interface PageHeroProps {
  badge: string;
  title: React.ReactNode;
  subtitle: string;
  children?: React.ReactNode;
  align?: "center" | "left";
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export const PageHero: React.FC<PageHeroProps> = ({
  badge,
  title,
  subtitle,
  children,
  align = "center",
}) => {
  const isCentered = align === "center";

  return (
    <section className="page-hero-dark relative isolate overflow-hidden pb-12 sm:pb-16">
      <HeroBackdrop />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <motion.div
          className={`mx-auto max-w-3xl ${isCentered ? "text-center" : "text-left"}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className={`section-badge border-brand/25 bg-brand/10 text-brand-light ${
              isCentered ? "mx-auto" : "w-fit"
            }`}
            variants={itemVariants}
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-light" />
            {badge}
          </motion.div>

          <motion.h1 className="section-title mt-5 text-balance text-white" variants={itemVariants}>
            {title}
          </motion.h1>

          <motion.p
            className={`section-subtitle mt-4 text-slate-400 ${isCentered ? "mx-auto" : "max-w-2xl"}`}
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>

          {children && (
            <motion.div
              className={`mt-8 flex flex-wrap gap-3 ${isCentered ? "justify-center" : ""}`}
              variants={itemVariants}
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
