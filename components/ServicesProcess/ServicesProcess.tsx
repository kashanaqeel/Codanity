import React, { useState } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export type ProcessStep = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export interface ServicesProcessProps {
  steps: ProcessStep[];
}

export const ServicesProcess: React.FC<ServicesProcessProps> = ({ steps }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="relative">
      {/* Desktop timeline */}
      <div className="hidden lg:block">
        <div className="relative mb-10 flex justify-between">
          <div className="absolute left-0 right-0 top-5 h-px bg-slate-200" />
          <motion.div
            className="absolute left-0 top-5 h-px w-full origin-left bg-brand"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === activeStep;
            const isPast = index < activeStep;

            return (
              <button
                key={step.title}
                type="button"
                onMouseEnter={() => setActiveStep(index)}
                onFocus={() => setActiveStep(index)}
                className="relative z-10 flex flex-1 flex-col items-center px-2 text-center"
              >
                <motion.div
                  animate={{
                    scale: isActive ? 1.1 : 1,
                    backgroundColor: isActive || isPast ? "#5128a0" : "#ffffff",
                  }}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 shadow-soft transition-colors ${
                    isActive || isPast ? "border-brand text-white" : "border-slate-200 text-brand"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </motion.div>
                <p
                  className={`mt-3 font-display text-sm font-semibold ${
                    isActive ? "text-brand" : "text-ink-secondary"
                  }`}
                >
                  {step.title}
                </p>
              </button>
            );
          })}
        </div>

        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="card-surface mx-auto max-w-2xl p-8 text-center"
        >
          <p className="font-display text-xl font-semibold text-ink">{steps[activeStep].title}</p>
          <p className="mt-3 text-base leading-relaxed text-ink-secondary">{steps[activeStep].description}</p>
        </motion.div>
      </div>

      {/* Mobile / tablet cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:hidden">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="card-surface group relative overflow-hidden p-6"
            >
              <span className="absolute right-4 top-4 font-display text-3xl font-bold text-brand/10">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="mb-4 inline-flex rounded-xl bg-brand-muted p-3 text-brand transition-transform duration-300 group-hover:scale-105">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{step.description}</p>
              <div className="mt-4 h-0.5 w-0 rounded-full bg-brand transition-all duration-500 group-hover:w-full" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesProcess;
