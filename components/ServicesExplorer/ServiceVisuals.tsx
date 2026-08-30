import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Database,
  FileText,
  Globe,
  Server,
  Sparkles,
  Zap,
} from "lucide-react";

const STAGE =
  "relative flex h-[260px] items-center justify-center overflow-hidden rounded-2xl bg-[#0a0f1e] p-4 sm:h-[300px] sm:p-6";

const CHATBOT_MSGS = [
  { role: "user", text: "Summarize our Q3 report" },
  { role: "ai", text: "Revenue up 24%. Top tier: Enterprise." },
] as const;

const RAG_STEPS = [
  { icon: FileText, label: "Docs" },
  { icon: Zap, label: "Embed" },
  { icon: Database, label: "Index" },
  { icon: Sparkles, label: "Answer" },
] as const;

const AUTOMATION_NODES = ["Trigger", "Enrich", "Route", "Notify"] as const;

function FlowArrow({ active }: { active: boolean }) {
  return (
    <motion.div
      className="flex flex-col items-center gap-0.5 py-1"
      animate={{ opacity: active ? 1 : 0.35 }}
    >
      <motion.div
        className="h-5 w-px bg-gradient-to-b from-white/30 to-brand-light"
        animate={{ scaleY: active ? [0.4, 1, 0.4] : 0.4 }}
        transition={{ duration: 1.2, repeat: Infinity }}
      />
      <span className="text-[8px] text-white/40">▼</span>
    </motion.div>
  );
}

function StackLayer({
  label,
  sub,
  active,
  icon: Icon,
}: {
  label: string;
  sub: string;
  active: boolean;
  icon: React.ElementType;
}) {
  return (
    <motion.div
      animate={{
        scale: active ? 1.03 : 1,
        borderColor: active ? "rgba(165,180,252,0.5)" : "rgba(255,255,255,0.1)",
      }}
      className="w-full max-w-[14rem] rounded-xl border bg-white/5 px-4 py-3 backdrop-blur-sm"
    >
      <div className="flex items-center gap-2.5">
        <div className={`rounded-lg p-1.5 ${active ? "bg-brand/30" : "bg-white/10"}`}>
          <Icon className={`h-4 w-4 ${active ? "text-brand-light" : "text-slate-400"}`} />
        </div>
        <div>
          <p className={`text-xs font-semibold ${active ? "text-white" : "text-slate-400"}`}>{label}</p>
          <p className="text-[10px] text-slate-500">{sub}</p>
        </div>
        {active && (
          <motion.span
            className="ml-auto h-2 w-2 rounded-full bg-emerald-400"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}
      </div>
    </motion.div>
  );
}

function FullStackVisual() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setStep((s) => (s + 1) % 3), 1600);
    return () => clearInterval(t);
  }, []);

  return (
    <div className={STAGE}>
      <div className="absolute inset-0 bg-grid-pattern-dark bg-grid opacity-[0.08]" />
      <div className="relative flex w-full max-w-xs flex-col items-center">
        <StackLayer label="React / Next.js" sub="UI & experience" active={step === 0} icon={Globe} />
        <FlowArrow active={step >= 1} />
        <StackLayer label="Nest.js API" sub="Business logic" active={step === 1} icon={Server} />
        <FlowArrow active={step >= 2} />
        <StackLayer label="PostgreSQL" sub="Data layer" active={step === 2} icon={Database} />
      </div>
    </div>
  );
}

function FrontendVisual() {
  const [zone, setZone] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setZone((z) => (z + 1) % 3), 1400);
    return () => clearInterval(t);
  }, []);

  return (
    <div className={STAGE}>
      <div className="w-full max-w-sm overflow-hidden rounded-xl border border-white/10 bg-[#0f172a] shadow-panel-dark">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-red-400/80" />
          <span className="h-2 w-2 rounded-full bg-amber-400/80" />
          <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
          <span className="ml-2 text-[10px] text-slate-500">yourproduct.com</span>
        </div>
        <div className="space-y-2 p-3">
          <motion.div
            animate={{ opacity: zone === 0 ? 1 : 0.4, scale: zone === 0 ? 1 : 0.98 }}
            className="h-8 rounded-lg bg-gradient-to-r from-brand/40 to-brand-light/30"
          />
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  opacity: zone === 1 ? 1 : 0.35,
                  borderColor: zone === 1 ? "rgba(129,140,248,0.4)" : "rgba(255,255,255,0.06)",
                }}
                className="h-14 rounded-lg border bg-white/5"
              />
            ))}
          </div>
          <motion.div
            animate={{ opacity: zone === 2 ? 1 : 0.4, scale: zone === 2 ? 1 : 0.95 }}
            className="mx-auto h-7 w-24 rounded-lg bg-brand"
          />
        </div>
      </div>
    </div>
  );
}

function BackendVisual() {
  const [pulse, setPulse] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setPulse((p) => (p + 1) % 4), 1200);
    return () => clearInterval(t);
  }, []);

  const nodes = ["Client", "API", "Cache", "DB"];

  return (
    <div className={STAGE}>
      <div className="flex w-full max-w-md items-center justify-between gap-1 px-2">
        {nodes.map((node, i) => (
          <React.Fragment key={node}>
            <motion.div
              animate={{
                scale: pulse === i ? 1.08 : 1,
                backgroundColor: pulse === i ? "rgba(81,40,160,0.25)" : "rgba(255,255,255,0.05)",
              }}
              className="flex flex-1 flex-col items-center gap-1.5 rounded-xl border border-white/10 px-2 py-3"
            >
              <Server className={`h-4 w-4 ${pulse === i ? "text-brand-light" : "text-slate-500"}`} />
              <span className="text-[10px] font-medium text-slate-300">{node}</span>
            </motion.div>
            {i < nodes.length - 1 && (
              <motion.div
                className="h-px max-w-4 flex-1 bg-white/20"
                animate={{ opacity: pulse > i ? 1 : 0.3 }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
      <motion.p
        key={pulse}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute bottom-6 font-mono text-[10px] text-emerald-400/80"
      >
        → GET /api/v1/resource · 200 OK · {120 + pulse * 40}ms
      </motion.p>
    </div>
  );
}

function MobileVisual() {
  const [screen, setScreen] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setScreen((s) => (s + 1) % 3), 1800);
    return () => clearInterval(t);
  }, []);

  const screens = [
    { label: "Home", color: "from-brand/30 to-violet-500/20" },
    { label: "Dashboard", color: "from-indigo-500/30 to-brand/20" },
    { label: "Profile", color: "from-violet-500/30 to-brand/20" },
  ];

  return (
    <div className={STAGE}>
      <div className="relative rounded-[2rem] border-4 border-slate-700 bg-slate-900 p-2 shadow-panel-dark">
        <div className="h-44 w-28 overflow-hidden rounded-[1.4rem] sm:h-52 sm:w-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={screen}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className={`flex h-full flex-col bg-gradient-to-b ${screens[screen].color} p-3`}
            >
              <div className="h-2 w-8 rounded-full bg-white/30" />
              <div className="mt-3 flex-1 space-y-1.5">
                <div className="h-2 w-full rounded bg-white/20" />
                <div className="h-2 w-3/4 rounded bg-white/15" />
                <div className="mt-2 h-8 rounded-lg bg-white/10" />
              </div>
              <span className="text-center text-[9px] font-medium text-white/70">{screens[screen].label}</span>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="absolute bottom-1 left-1/2 h-1 w-10 -translate-x-1/2 rounded-full bg-slate-600" />
      </div>
      <div className="absolute bottom-6 flex gap-1.5">
        {screens.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all ${i === screen ? "w-4 bg-brand-light" : "w-1.5 bg-white/20"}`}
          />
        ))}
      </div>
    </div>
  );
}

function ChatbotVisual() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCount((c) => (c < CHATBOT_MSGS.length ? c + 1 : 0)), 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className={STAGE}>
      <div className="flex h-full w-full max-w-xs flex-col rounded-xl border border-white/10 bg-[#0a0f1e] p-3">
        <div className="mb-2 flex items-center gap-2 border-b border-white/10 pb-2">
          <Bot className="h-4 w-4 text-brand-light" />
          <span className="text-xs font-semibold text-white">AI Assistant</span>
          <span className="ml-auto flex items-center gap-1 text-[9px] text-emerald-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Live
          </span>
        </div>
        <div className="flex flex-1 flex-col justify-end gap-2 overflow-hidden">
          {CHATBOT_MSGS.slice(0, count).map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={`max-w-[85%] rounded-xl px-3 py-2 text-[11px] ${
                m.role === "user" ? "ml-auto bg-brand text-white" : "bg-white/10 text-slate-200"
              }`}
            >
              {m.text}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RAGVisual() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setStep((s) => (s + 1) % RAG_STEPS.length), 1500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className={STAGE}>
      <div className="flex w-full max-w-md items-center justify-between gap-1">
        {RAG_STEPS.map((s, i) => {
          const Icon = s.icon;
          const isActive = i === step;
          const isPast = i < step;
          return (
            <React.Fragment key={s.label}>
              <motion.div
                animate={{ scale: isActive ? 1.1 : 1, opacity: isActive || isPast ? 1 : 0.4 }}
                className="flex flex-col items-center gap-1.5"
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
                    isActive ? "border-sky-400/50 bg-sky-500/20" : "border-white/10 bg-white/5"
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? "text-sky-300" : "text-slate-500"}`} />
                </div>
                <span className={`text-[10px] font-medium ${isActive ? "text-sky-300" : "text-slate-500"}`}>
                  {s.label}
                </span>
              </motion.div>
              {i < RAG_STEPS.length - 1 && (
                <motion.div
                  className="h-px flex-1 bg-white/10"
                  animate={{ backgroundColor: isPast ? "rgba(56,189,248,0.5)" : "rgba(255,255,255,0.1)" }}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

function AutomationVisual() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setPhase((p) => (p + 1) % (AUTOMATION_NODES.length + 1)), 1100);
    return () => clearInterval(t);
  }, []);

  return (
    <div className={STAGE}>
      <div className="flex w-full max-w-[11rem] flex-col items-center gap-1 sm:max-w-xs">
        {AUTOMATION_NODES.map((node, i) => (
          <React.Fragment key={node}>
            <motion.div
              animate={{
                scale: phase === i + 1 ? 1.05 : 1,
                borderColor: phase > i ? "rgba(52,211,153,0.4)" : "rgba(255,255,255,0.1)",
                backgroundColor: phase > i ? "rgba(16,185,129,0.12)" : "rgba(255,255,255,0.04)",
              }}
              className="w-full rounded-xl border px-4 py-2 text-center"
            >
              <p className={`text-[11px] font-semibold ${phase > i ? "text-emerald-300" : "text-slate-500"}`}>
                {node}
              </p>
            </motion.div>
            {i < AUTOMATION_NODES.length - 1 && (
              <motion.div
                className="h-3 w-px"
                animate={{ backgroundColor: phase > i ? "rgba(52,211,153,0.6)" : "rgba(255,255,255,0.1)" }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

const VISUALS: Record<string, React.FC> = {
  fullstack: FullStackVisual,
  frontend: FrontendVisual,
  backend: BackendVisual,
  mobile: MobileVisual,
  "ai-chatbots": ChatbotVisual,
  rag: RAGVisual,
  automation: AutomationVisual,
};

export function ServiceVisual({ serviceId }: { serviceId: string }) {
  const Visual = VISUALS[serviceId] ?? FullStackVisual;
  return (
    <motion.div
      key={serviceId}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="h-full w-full"
    >
      <Visual />
    </motion.div>
  );
}

export default ServiceVisual;
