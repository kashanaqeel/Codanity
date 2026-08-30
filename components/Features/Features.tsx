import React, { FC } from "react";
import { Feature, type Feature as FeatureType } from "./Feature";
import { motion } from "framer-motion";
import { useAnimation } from "@/hooks";
import { Section, SectionHeader } from "@/components";
import CountUp from "react-countup";

export interface FeaturesProps {
  features: FeatureType[];
}

const STATS = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 20, suffix: "+", label: "Projects Delivered" },
  { value: 94, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "/7", label: "Support Available" },
];

export const Features: FC<FeaturesProps> = ({ features }) => {
  const { fadeInUp } = useAnimation();

  return (
    <Section background="bg-white" padding="SECTION" maxWidth="LARGE" animate={false}>
      <SectionHeader
        badge="Why Codanity"
        title={
          <>
            Engineering excellence,{" "}
            <span className="gradient-text">delivered with care</span>
          </>
        }
        subtitle="Modern technology, thoughtful design, and reliable execution — with AI capabilities woven in when your product needs them."
      />

      <motion.div
        className="mt-12 grid grid-cols-2 gap-4 rounded-2xl border border-slate-200/70 bg-surface-subtle p-6 sm:grid-cols-4 sm:gap-6 sm:p-8 lg:mt-16"
        {...fadeInUp(0.15)}
      >
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-3xl font-bold text-brand sm:text-4xl">
              <CountUp
                end={stat.value}
                suffix={stat.suffix}
                duration={2.2}
                enableScrollSpy
                scrollSpyOnce
              />
            </p>
            <p className="mt-1 text-xs text-ink-secondary sm:text-sm">{stat.label}</p>
          </div>
        ))}
      </motion.div>

      <motion.div
        className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-8"
        {...fadeInUp(0.2)}
      >
        {features?.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <Feature feature={feature} index={index} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
