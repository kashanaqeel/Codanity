import React, { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import CountUp from "react-countup";
import { Button } from "@/components";
import HeroVisual from "./HeroVisual";
import RotatingHeadline from "./RotatingHeadline";
import TechMarquee from "./TechMarquee";
import FloatingParticles from "../effects/FloatingParticles";
import NeuralGrid from "../effects/NeuralGrid";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const STATS = [
  { value: 20, suffix: "+", label: "Projects delivered" },
  { value: 94, suffix: "%", label: "Client satisfaction" },
  { value: 5, suffix: "+", label: "Years experience" },
];

export const Hero: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });
  const springXSlow = useSpring(mouseX, { stiffness: 80, damping: 18 });
  const springYSlow = useSpring(mouseY, { stiffness: 80, damping: 18 });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) / 20;
    const y = (event.clientY - rect.top - rect.height / 2) / 20;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      className="relative isolate overflow-hidden bg-hero-radial"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-50" />
      <NeuralGrid />
      <FloatingParticles />

      <motion.div
        className="mesh-orb -left-24 top-20 h-72 w-72 bg-brand/20"
        style={{ x: springX, y: springY }}
      />
      <motion.div
        className="mesh-orb -right-16 bottom-10 h-64 w-64 bg-blue-400/15"
        style={{ x: springXSlow, y: springYSlow }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left"
            initial="hidden"
            animate={ready ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div className="section-badge" variants={itemVariants}>
              <Sparkles className="h-4 w-4" />
              Full-Stack Development Partner
            </motion.div>

            <motion.h1
              className="w-full font-display text-4xl font-bold leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-[3.35rem]"
              variants={itemVariants}
            >
              <span className="block">We build</span>
              <RotatingHeadline />
            </motion.h1>

            <motion.p
              className="max-w-xl text-base leading-relaxed text-ink-secondary sm:text-lg"
              variants={itemVariants}
            >
              Codanity partners with startups and growing businesses to design, engineer, and ship
              digital products — from web and mobile platforms to AI chatbots, voice agents, RAG systems, and
              intelligent automations when the use case calls for it.
            </motion.p>

            <motion.div
              className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
              variants={itemVariants}
            >
              <Button href="/contacts" variant="primary" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                Start a Project
              </Button>
              <Button href="/projects" variant="outline" size="lg">
                Explore Portfolio
              </Button>
            </motion.div>

            <motion.div
              className="grid w-full max-w-md grid-cols-3 gap-4 rounded-2xl border border-slate-200/70 bg-white/70 p-4 backdrop-blur-sm"
              variants={itemVariants}
            >
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="font-display text-2xl font-bold text-brand">
                    <CountUp end={stat.value} suffix={stat.suffix} duration={2} enableScrollSpy scrollSpyOnce />
                  </p>
                  <p className="text-[11px] text-ink-muted sm:text-xs">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={ready ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroVisual />
          </motion.div>
        </div>

        <TechMarquee />
      </div>
    </section>
  );
};

export default Hero;
