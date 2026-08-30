import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Sparkles, type LucideIcon } from "lucide-react";
import { Button } from "@/components";
import { ServiceVisual } from "./ServiceVisuals";

export type ServiceItem = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  highlights: string[];
  idealFor: string[];
  gradient: string;
};

export interface ServicesExplorerProps {
  services: ServiceItem[];
  activeId: string;
  onSelect: (id: string) => void;
}

export const ServicesExplorer: React.FC<ServicesExplorerProps> = ({
  services,
  activeId,
  onSelect,
}) => {
  const active = services.find((s) => s.id === activeId) ?? services[0];
  const activeIndex = services.findIndex((s) => s.id === activeId);
  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < services.length - 1;

  const goToPrev = () => {
    if (canGoPrev) onSelect(services[activeIndex - 1].id);
  };

  const goToNext = () => {
    if (canGoNext) onSelect(services[activeIndex + 1].id);
  };

  return (
    <div className="relative space-y-6 lg:space-y-8">
      <div className="relative">
        <div className="absolute left-0 top-0 z-10 hidden h-full w-8 bg-gradient-to-r from-surface-subtle to-transparent sm:block" />
        <div className="absolute right-0 top-0 z-10 hidden h-full w-8 bg-gradient-to-l from-surface-subtle to-transparent sm:block" />
        <div className="flex gap-2 overflow-x-auto py-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {services.map((service) => {
            const Icon = service.icon;
            const isActive = service.id === activeId;
            return (
              <motion.button
                key={service.id}
                type="button"
                onClick={() => onSelect(service.id)}
                whileTap={{ scale: 0.97 }}
                className={`flex shrink-0 items-center gap-2.5 rounded-2xl border px-3 py-2.5 transition-all duration-300 sm:px-4 ${
                  isActive
                    ? "border-brand/40 bg-white shadow-card"
                    : "border-slate-200/70 bg-white/60 hover:border-brand/20 hover:bg-white hover:shadow-soft"
                }`}
              >
                <div
                  className={`rounded-xl p-2 ${
                    isActive ? `bg-gradient-to-br ${service.gradient} text-white` : "bg-surface-muted text-brand"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <span
                  className={`max-w-[7rem] text-left text-xs font-semibold leading-tight sm:max-w-none sm:text-sm ${
                    isActive ? "text-ink" : "text-ink-secondary"
                  }`}
                >
                  {service.title}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-card"
        >
          <div className="grid lg:grid-cols-2">
            <div className="relative border-b border-slate-200/70 bg-[#060912] p-4 sm:p-6 lg:border-b-0 lg:border-r">
              <div className="absolute inset-0 bg-aurora opacity-40" />
              <div className="absolute inset-0 bg-grid-pattern-dark bg-grid opacity-[0.06]" />
              <div className="relative mb-3 flex items-center justify-between">
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white/70">
                  Live preview
                </span>
                <div className="flex gap-1">
                  <button
                    type="button"
                    onClick={goToPrev}
                    disabled={!canGoPrev}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-white/70 transition-colors hover:bg-white/10 disabled:opacity-30"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={goToNext}
                    disabled={!canGoNext}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-white/70 transition-colors hover:bg-white/10 disabled:opacity-30"
                    aria-label="Next"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <ServiceVisual serviceId={active.id} />
            </div>

            <div className="flex flex-col p-6 sm:p-8">
              <h3 className="font-display text-2xl font-bold text-ink sm:text-3xl">{active.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-secondary sm:text-base">{active.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {active.features.map((f, i) => (
                  <motion.span
                    key={f}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.04 }}
                    className="rounded-lg border border-slate-200/70 bg-surface-subtle px-3 py-1.5 text-xs font-medium text-ink-secondary"
                  >
                    {f}
                  </motion.span>
                ))}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {active.highlights.map((h, i) => (
                  <motion.div
                    key={h}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                    className="rounded-xl border border-brand/15 bg-brand-muted/40 p-3"
                  >
                    <Sparkles className="mb-1.5 h-4 w-4 text-brand" />
                    <p className="text-xs font-medium leading-snug text-ink">{h}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 mb-6">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-ink-muted">Great fit for</p>
                <div className="flex flex-wrap gap-2">
                  {active.idealFor.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200/80 bg-white px-3 py-1 text-xs text-ink-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto flex flex-col gap-3 border-t border-slate-200/70 pt-6 sm:flex-row sm:items-center">
                <Button href="/contacts" variant="primary">
                  Discuss this service
                </Button>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark"
                >
                  See related work
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <div className="flex gap-3 sm:ml-auto">
                  <button
                    type="button"
                    onClick={goToPrev}
                    disabled={!canGoPrev}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-ink-muted hover:text-brand disabled:opacity-40"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    Prev
                  </button>
                  <button
                    type="button"
                    onClick={goToNext}
                    disabled={!canGoNext}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-ink-muted hover:text-brand disabled:opacity-40"
                  >
                    Next
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ServicesExplorer;
