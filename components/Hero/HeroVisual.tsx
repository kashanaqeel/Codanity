import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  Cloud,
  Layers,
  Smartphone,
  Sparkles,
  Rocket,
  type LucideIcon,
} from "lucide-react";

type Capability = {
  id: string;
  icon: LucideIcon;
  label: string;
  description: string;
  gradient: string;
  isAI?: boolean;
};

const CAPABILITIES: Capability[] = [
  {
    id: "web",
    icon: Cloud,
    label: "Web Platforms",
    description: "Fast, scalable apps with modern stacks",
    gradient: "from-brand to-brand-light",
  },
  {
    id: "mobile",
    icon: Smartphone,
    label: "Mobile Apps",
    description: "Cross-platform experiences users love",
    gradient: "from-indigo-500 to-violet-600",
  },
  {
    id: "design",
    icon: Layers,
    label: "Product Design",
    description: "Interfaces that feel intuitive and premium",
    gradient: "from-slate-600 to-slate-800",
  },
  {
    id: "ai",
    icon: Bot,
    label: "AI Integration",
    description: "Chatbots, voice AI & automations",
    gradient: "from-violet-500 to-purple-600",
    isAI: true,
  },
];

const TERMINAL_LINES = [
  { type: "cmd", text: '$ codanity build --stack "nextjs+nestjs"' },
  { type: "out", text: "✓ Frontend compiled · API deployed" },
  { type: "out", text: "✓ PostgreSQL migrations applied" },
  { type: "cmd", text: "$ codanity ai enable --feature chatbot" },
  { type: "out", text: "✓ RAG index ready · agent online" },
  { type: "out", text: "→ Product shipped end-to-end" },
];

const CapabilityCard: React.FC<{
  item: Capability;
  isActive: boolean;
  onHover: (id: string | null) => void;
  delay: number;
}> = ({ item, isActive, onHover, delay }) => {
  const Icon = item.icon;

  return (
    <motion.button
      type="button"
      onMouseEnter={() => onHover(item.id)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(item.id)}
      onBlur={() => onHover(null)}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.2 + delay, ease: [0.22, 1, 0.36, 1] }}
      className={`flex h-full flex-col rounded-2xl border p-4 text-left transition-all duration-300 ${
        isActive
          ? item.isAI
            ? "border-violet-500/30 bg-white shadow-glow-ai"
            : "border-brand/30 bg-white shadow-card-hover"
          : "border-slate-200/80 bg-white/90 hover:border-brand/20"
      }`}
    >
      <div
        className={`mb-3 inline-flex w-fit rounded-xl bg-gradient-to-br p-2 ${item.gradient}`}
      >
        <Icon className="h-4 w-4 text-white" />
      </div>
      <p className="font-display text-sm font-semibold text-ink">{item.label}</p>
      <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-ink-secondary sm:text-xs">
        {item.description}
      </p>
    </motion.button>
  );
};

export const HeroVisual: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [lineIndex, setLineIndex] = useState(0);

  React.useEffect(() => {
    const t = setInterval(() => setLineIndex((i) => (i + 1) % (TERMINAL_LINES.length + 1)), 1800);
    return () => clearInterval(t);
  }, []);

  const visibleLines = TERMINAL_LINES.slice(0, lineIndex);

  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-brand/10 via-transparent to-violet-500/10 blur-2xl" />

      <div className="card-surface relative overflow-hidden rounded-3xl border-slate-200/80 p-5 shadow-card sm:p-6">
        {/* Header */}
        <div className="mb-5 flex items-center justify-between rounded-2xl border border-slate-200/60 bg-surface-subtle px-4 py-3">
          <div className="flex items-center gap-2">
            <Rocket className="h-4 w-4 text-brand" />
            <span className="text-xs font-semibold text-ink">Delivery Pipeline</span>
          </div>
          <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-600">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            Build in progress
          </span>
        </div>

        {/* Terminal — centered, full width */}
        <motion.div
          className="relative mx-auto mb-5 max-w-sm"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="overflow-hidden rounded-2xl border border-slate-800/80 bg-[#0f172a] shadow-glow">
            <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2.5">
              <span className="h-2 w-2 rounded-full bg-red-400/90" />
              <span className="h-2 w-2 rounded-full bg-amber-400/90" />
              <span className="h-2 w-2 rounded-full bg-emerald-400/90" />
              <span className="ml-1 text-[10px] text-slate-400">delivery.ts</span>
            </div>
            <div className="h-[7.5rem] overflow-hidden p-3 font-mono text-[10px] leading-relaxed sm:h-[8rem] sm:text-[11px]">
              <div className="space-y-1.5">
                {visibleLines.map((line, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={
                      line.type === "cmd"
                        ? "text-sky-300/90"
                        : line.text.includes("ai") || line.text.includes("RAG")
                        ? "text-violet-300/90"
                        : "text-emerald-400/80"
                    }
                  >
                    {line.text}
                  </motion.p>
                ))}
                <motion.span
                  className="inline-block h-3.5 w-1.5 bg-brand-light"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>
            </div>
          </div>

          <div className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-brand/20 bg-white px-3 py-1 shadow-soft">
            <Sparkles className="h-3.5 w-3.5 text-brand" />
            <span className="text-[11px] font-semibold text-ink">Ship with confidence</span>
          </div>
        </motion.div>

        {/* Symmetric 2×2 capability grid */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          {CAPABILITIES.map((item, index) => (
            <CapabilityCard
              key={item.id}
              item={item}
              isActive={activeId === item.id}
              onHover={setActiveId}
              delay={index * 0.06}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
