import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button, Section } from "@/components";
import { useAnimation } from "@/hooks";

export interface HomeCTAProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

const HomeCTA: React.FC<HomeCTAProps> = ({
  badge = "Ready to build something great?",
  title = "Let's bring your next product to life",
  subtitle = "Partner with Codanity for design, development, and delivery — from MVPs to production-ready platforms that scale with your business.",
  primaryLabel = "Get in Touch",
  primaryHref = "/contacts",
  secondaryLabel = "Explore Services",
  secondaryHref = "/services",
}) => {
  const { fadeInUp } = useAnimation();

  return (
    <Section background="bg-white" padding="SECTION" maxWidth="LARGE" animate={false}>
      <motion.div
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#060912] via-brand-dark to-[#2d1b69] px-6 py-12 text-center sm:px-10 sm:py-16 lg:px-16"
        {...fadeInUp()}
      >
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10" />
        <motion.div
          className="mesh-orb right-0 top-0 h-48 w-48 bg-white/10"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90">
            <Sparkles className="h-4 w-4" />
            {badge}
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Button
              href={primaryHref}
              variant="primary"
              size="lg"
              className="w-full bg-white text-brand hover:bg-white/90 hover:shadow-glow sm:w-auto"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              {primaryLabel}
            </Button>
            <Button
              href={secondaryHref}
              variant="outline"
              size="lg"
              className="w-full border-white/30 bg-white/10 text-white backdrop-blur-sm hover:border-white/50 hover:bg-white/20 hover:text-white sm:w-auto"
            >
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default HomeCTA;
