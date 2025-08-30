import React from "react";
import { motion } from "framer-motion";
import { useAnimation } from "@/hooks";
import { LAYOUT } from "@/constants";

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: string;
  padding?: keyof typeof LAYOUT.PADDING;
  maxWidth?: keyof typeof LAYOUT.MAX_WIDTH;
  animate?: boolean;
  delay?: number;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = "",
  background = "bg-white",
  padding = "SECTION",
  maxWidth = "LARGE",
  animate = true,
  delay = 0
}) => {
  const { fadeInUp } = useAnimation();

  const sectionClasses = `${background} ${LAYOUT.PADDING[padding]} ${className}`;
  const containerClasses = `${LAYOUT.MAX_WIDTH[maxWidth]} mx-auto ${LAYOUT.PADDING.CONTAINER}`;

  if (!animate) {
    return (
      <section className={sectionClasses}>
        <div className={containerClasses}>
          {children}
        </div>
      </section>
    );
  }

  return (
    <motion.section 
      className={sectionClasses}
      {...fadeInUp(delay)}
    >
      <div className={containerClasses}>
        {children}
      </div>
    </motion.section>
  );
};

export default Section;
