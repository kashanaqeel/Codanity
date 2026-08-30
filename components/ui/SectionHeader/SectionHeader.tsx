import React from "react";
import { motion } from "framer-motion";
import { useAnimation } from "@/hooks";

export interface SectionHeaderProps {
  badge?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
  badgeClassName?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  align = "center",
  className = "",
  dark = false,
  badgeClassName = "",
}) => {
  const { fadeInUp, fadeInUpSmall } = useAnimation();
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-5 ${alignment} ${className}`}>
      {badge && (
        <motion.div className={`section-badge ${badgeClassName}`} {...fadeInUpSmall(0.05)}>
          <span className={`h-1.5 w-1.5 rounded-full animate-pulse-soft ${dark ? "bg-accent-light" : "bg-brand"}`} />
          {badge}
        </motion.div>
      )}
      <motion.h2
        className={`section-title text-balance ${dark ? "text-white" : ""}`}
        {...fadeInUp(0.1)}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className={`section-subtitle ${dark ? "text-slate-400" : ""}`}
          {...fadeInUp(0.15)}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
