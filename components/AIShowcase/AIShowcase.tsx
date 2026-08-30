import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Database,
  Workflow,
  BrainCircuit,
  ArrowRight,
  Sparkles,
  FileText,
  Zap,
  MessageSquare,
} from "lucide-react";
import { Section, SectionHeader } from "@/components";
import { useAnimation } from "@/hooks";

type DemoId = "chatbot" | "rag" | "automation" | "llm";

const DEMOS: {
  id: DemoId;
  icon: typeof Bot;
  label: string;
  tagline: string;
  color: string;
}[] = [
  {
    id: "chatbot",
    icon: MessageSquare,
    label: "Chatbots & Voice",
    tagline: "Text and phone-based AI agents",
    color: "from-violet-500 to-indigo-600",
  },
  {
    id: "rag",
    icon: Database,
    label: "RAG Systems",
    tagline: "Grounded answers from your own data",
    color: "from-sky-500 to-indigo-600",
  },
  {
    id: "automation",
    icon: Workflow,
    label: "Automations",
    tagline: "AI-powered workflows that run themselves",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "llm",
    icon: BrainCircuit,
    label: "LLM Integration",
    tagline: "Custom models wired into your product",
    color: "from-fuchsia-500 to-pink-600",
  },
];

const CHAT_MESSAGES = [
  { role: "user", text: "Summarize our Q3 sales report" },
  { role: "ai", text: "Q3 revenue grew 24% YoY. Top performer: Enterprise tier (+38%). Key insight: APAC expansion drove 60% of new deals." },
  { role: "user", text: "Draft a follow-up email for the top 3 accounts" },
  { role: "ai", text: "Done — 3 personalized drafts ready. Each references their specific usage patterns and renewal dates." },
];

const DEMO_PANEL_HEIGHT = "h-[400px] sm:h-[440px]";

function ChatbotDemo() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (visibleCount >= CHAT_MESSAGES.length) {
      const reset = setTimeout(() => {
        setVisibleCount(0);
        setTyping(false);
      }, 3000);
      return () => clearTimeout(reset);
    }

    const isAi = CHAT_MESSAGES[visibleCount]?.role === "ai";
    const delay = isAi ? 1200 : 800;

    if (isAi && !typing) {
      setTyping(true);
      const t = setTimeout(() => {
        setTyping(false);
        setVisibleCount((c) => c + 1);
      }, 1400);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => setVisibleCount((c) => c + 1), delay);
    return () => clearTimeout(t);
  }, [visibleCount, typing]);

  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-800/60 bg-[#0a0f1e] p-4">
      <div className="mb-3 flex shrink-0 items-center gap-2 border-b border-white/10 pb-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600">
          <Bot className="h-4 w-4 text-white" />
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Codanity Assistant</p>
          <p className="flex items-center gap-1 text-[10px] text-emerald-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Online · Text & Voice
          </p>
        </div>
      </div>
      <div className="relative min-h-0 flex-1 overflow-hidden">
        <div className="absolute inset-0 flex flex-col justify-end gap-2.5 overflow-hidden">
          {CHAT_MESSAGES.slice(0, visibleCount).map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
              className={`max-w-[85%] shrink-0 rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                msg.role === "user"
                  ? "ml-auto bg-brand text-white"
                  : "bg-white/10 text-slate-200"
              }`}
            >
              {msg.text}
            </motion.div>
          ))}
          {typing && (
            <div className="flex w-fit shrink-0 gap-1 rounded-2xl bg-white/10 px-4 py-3">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-slate-400"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const RAG_STEPS = [
  { icon: FileText, label: "Documents", sub: "PDFs, docs, wikis" },
  { icon: Zap, label: "Embed", sub: "Vector encoding" },
  { icon: Database, label: "Vector DB", sub: "Semantic search" },
  { icon: Sparkles, label: "Answer", sub: "Grounded response" },
];

function RAGDemo() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveStep((s) => (s + 1) % RAG_STEPS.length), 1800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className={`flex h-full flex-col justify-center gap-4 p-2 sm:gap-5`}>
      <div className="grid shrink-0 grid-cols-2 gap-3 sm:flex sm:items-center sm:justify-between sm:gap-2">
        {RAG_STEPS.map((step, i) => {
          const Icon = step.icon;
          const isActive = i === activeStep;
          const isPast = i < activeStep;
          return (
            <React.Fragment key={step.label}>
              <motion.div
                className={`flex flex-col items-center gap-2 ${isActive ? "scale-105" : ""}`}
                animate={{ opacity: isActive || isPast ? 1 : 0.4 }}
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-500 sm:h-12 sm:w-12 ${
                    isActive
                      ? "border-sky-400/50 bg-sky-500/20 shadow-glow-cyan-tight"
                      : isPast
                      ? "border-emerald-400/30 bg-emerald-500/10"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <Icon className={`h-5 w-5 ${isActive ? "text-sky-300" : isPast ? "text-emerald-400" : "text-slate-500"}`} />
                </div>
                <div className="text-center">
                  <p className={`text-xs font-semibold ${isActive ? "text-sky-300" : "text-slate-400"}`}>{step.label}</p>
                  <p className="text-[10px] text-slate-600">{step.sub}</p>
                </div>
              </motion.div>
              {i < RAG_STEPS.length - 1 && (
                <div className="relative hidden h-px flex-1 overflow-hidden bg-white/10 sm:block">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-sky-400 to-indigo-500"
                    animate={{ width: isPast ? "100%" : isActive ? "50%" : "0%" }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
      <div className="shrink-0 rounded-xl border border-sky-500/20 bg-sky-500/5 p-4">
        <motion.p
          key={activeStep}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="min-h-[2.75rem] break-words text-[11px] font-mono leading-relaxed text-sky-300/80"
        >
          {activeStep === 0 && "→ Ingesting 1,247 documents from knowledge base..."}
          {activeStep === 1 && "→ Generating embeddings via text-embedding-3-large..."}
          {activeStep === 2 && "→ Storing 384-dim vectors in Pinecone index..."}
          {activeStep === 3 && "✓ Answer generated with 3 source citations (confidence: 0.94)"}
        </motion.p>
      </div>
    </div>
  );
}

const AUTO_PHASES = [
  ["trigger"],
  ["trigger", "enrich", "score"],
  ["trigger", "enrich", "score", "route"],
  ["trigger", "enrich", "score", "route", "notify"],
] as const;

function AutomationConnector({ active }: { active: boolean }) {
  return (
    <div className="flex justify-center py-1">
      <motion.div
        className={`h-4 w-px ${active ? "bg-emerald-400" : "bg-white/10"}`}
        animate={{ scaleY: active ? 1 : 0.4, opacity: active ? 1 : 0.45 }}
        transition={{ duration: 0.35 }}
      />
    </div>
  );
}

function AutomationNode({
  id,
  label,
  activeIds,
  currentId,
  className = "",
}: {
  id: string;
  label: string;
  activeIds: Set<string>;
  currentId: string;
  className?: string;
}) {
  const isActive = activeIds.has(id);
  const isCurrent = currentId === id;

  return (
    <motion.div
      animate={{ scale: isCurrent ? 1.04 : 1 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
      className={`rounded-xl border px-3 py-2.5 text-center transition-colors duration-300 ${className} ${
        isActive
          ? "border-emerald-400/40 bg-emerald-500/15 shadow-glow-emerald-tight"
          : "border-white/10 bg-white/5"
      }`}
    >
      <p className={`text-[10px] font-semibold sm:text-xs ${isActive ? "text-emerald-300" : "text-slate-500"}`}>
        {label}
      </p>
    </motion.div>
  );
}

function AutomationDemo() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setPhase((p) => (p + 1) % AUTO_PHASES.length), 1400);
    return () => clearInterval(t);
  }, []);

  const activeIds = new Set(AUTO_PHASES[phase]);
  const currentId = AUTO_PHASES[phase][AUTO_PHASES[phase].length - 1];
  const isComplete = phase === AUTO_PHASES.length - 1;

  return (
    <div className="flex h-full flex-col items-center justify-center px-1 py-2">
      <div className="w-full max-w-[15rem] sm:max-w-xs">
        <AutomationNode id="trigger" label="New lead" activeIds={activeIds} currentId={currentId} />

        <AutomationConnector active={phase >= 1} />

        <div className="grid grid-cols-2 gap-2">
          <AutomationNode id="enrich" label="AI enrich" activeIds={activeIds} currentId={currentId} />
          <AutomationNode id="score" label="Score lead" activeIds={activeIds} currentId={currentId} />
        </div>

        <AutomationConnector active={phase >= 2} />

        <AutomationNode
          id="route"
          label="Route"
          activeIds={activeIds}
          currentId={currentId}
          className="mx-auto max-w-[7.5rem]"
        />

        <AutomationConnector active={phase >= 3} />

        <AutomationNode
          id="notify"
          label="Notify team"
          activeIds={activeIds}
          currentId={currentId}
          className="mx-auto max-w-[7.5rem]"
        />
      </div>

      <p
        className={`mt-4 h-5 shrink-0 text-center text-[10px] font-medium transition-opacity duration-300 sm:text-xs ${
          isComplete ? "text-emerald-300 opacity-100" : "text-transparent opacity-0"
        }`}
      >
        ✓ Workflow completed in 1.2s
      </p>
    </div>
  );
}

const LLM_MODELS = ["GPT-4o", "Claude 3.5", "Gemini Pro", "Llama 3"];
const LLM_OUTPUT = "Analyzing user intent → routing to specialist agent → generating structured JSON response...";

function LLMDemo() {
  const [modelIdx, setModelIdx] = useState(0);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setModelIdx((i) => (i + 1) % LLM_MODELS.length), 2200);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    setChars(0);
    const t = setInterval(() => setChars((c) => (c < LLM_OUTPUT.length ? c + 1 : c)), 30);
    return () => clearInterval(t);
  }, [modelIdx]);

  return (
    <div className="flex h-full flex-col gap-3 p-2 sm:gap-4">
      <div className="flex shrink-0 flex-wrap gap-2">
        {LLM_MODELS.map((model, i) => (
          <motion.span
            key={model}
            animate={{
              scale: i === modelIdx ? 1.05 : 1,
              opacity: i === modelIdx ? 1 : 0.45,
            }}
            className={`rounded-full border px-3 py-1 text-[11px] font-semibold ${
              i === modelIdx
                ? "border-fuchsia-400/40 bg-fuchsia-500/20 text-fuchsia-300"
                : "border-white/10 text-slate-500"
            }`}
          >
            {model}
          </motion.span>
        ))}
      </div>
      <div className="relative min-h-0 flex-1 overflow-hidden rounded-xl border border-fuchsia-500/20 bg-[#0d0a1a] p-4 font-mono text-xs">
        <p className="break-all text-fuchsia-400/60">
          $ codanity.llm.route({"{"}model: &quot;{LLM_MODELS[modelIdx]}&quot;{"}"})
        </p>
        <div className="relative mt-3 min-h-[4.5rem]">
          <p className="invisible break-words leading-relaxed" aria-hidden>
            {LLM_OUTPUT}
          </p>
          <p className="absolute inset-0 break-words leading-relaxed text-slate-300">
            {LLM_OUTPUT.slice(0, chars)}
            <motion.span
              className="inline-block h-3.5 w-1 bg-fuchsia-400"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </p>
        </div>
      </div>
      <div className="grid shrink-0 grid-cols-3 gap-2">
        {[
          { label: "Latency", value: "340ms" },
          { label: "Tokens", value: "1.2k" },
          { label: "Cost", value: "$0.003" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-lg border border-white/10 bg-white/5 p-2 text-center">
            <p className="text-[10px] text-slate-500">{stat.label}</p>
            <p className="text-xs font-bold text-fuchsia-300">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const DEMO_COMPONENTS: Record<DemoId, React.FC> = {
  chatbot: ChatbotDemo,
  rag: RAGDemo,
  automation: AutomationDemo,
  llm: LLMDemo,
};

export const AIShowcase: React.FC = () => {
  const [active, setActive] = useState<DemoId>("chatbot");
  const { fadeInUp } = useAnimation();
  const ActiveDemo = DEMO_COMPONENTS[active];
  const activeMeta = DEMOS.find((d) => d.id === active)!;

  return (
    <Section background="bg-[#060912] relative overflow-hidden" padding="SECTION" maxWidth="LARGE" animate={false}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-aurora opacity-60" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.07]" />
        <motion.div
          className="mesh-orb left-1/4 top-0 h-96 w-96 bg-violet-600/20"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="mesh-orb right-1/4 bottom-0 h-80 w-80 bg-brand/15"
          animate={{ x: [0, -20, 0], y: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative">
        <SectionHeader
          badge="AI & Automation"
          badgeClassName="border-brand/25 bg-brand/10 text-brand-light"
          title={
            <>
              Smart features,{" "}
              <span className="bg-gradient-to-r from-brand-light to-accent-light bg-clip-text text-transparent">when you need them</span>
            </>
          }
          subtitle="Not every project needs AI — but when yours does, we bring production experience with chatbots, voice agents, RAG pipelines, LLM integrations, and workflow automations alongside the full-stack engineering to ship it all."
          dark
        />

        <motion.div className="mt-12 grid min-w-0 gap-6 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-8" {...fadeInUp(0.1)}>
          <div className="flex min-w-0 flex-row gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:flex-col lg:overflow-visible lg:pb-0">
            {DEMOS.map((demo) => {
              const Icon = demo.icon;
              const isActive = demo.id === active;
              return (
                <button
                  key={demo.id}
                  type="button"
                  onClick={() => setActive(demo.id)}
                  className={`group relative shrink-0 rounded-2xl border p-4 text-left transition-all duration-300 lg:w-full ${
                    isActive
                      ? "border-white/20 bg-white/10 shadow-glow-ai-tight"
                      : "border-white/5 bg-white/[0.03] hover:border-white/15 hover:bg-white/[0.06]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="ai-tab-glow"
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${demo.color} opacity-10`}
                    />
                  )}
                  <div className="relative flex items-center gap-3">
                    <div
                      className={`rounded-xl p-2.5 bg-gradient-to-br ${demo.color} ${
                        isActive ? "shadow-sm" : "opacity-60 group-hover:opacity-80"
                      }`}
                    >
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className={`text-sm font-semibold ${isActive ? "text-white" : "text-slate-400"}`}>
                        {demo.label}
                      </p>
                      <p className="mt-0.5 text-[11px] text-slate-500 line-clamp-1">{demo.tagline}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="relative min-w-0">
            <div
              className={`pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br ${activeMeta.color} opacity-[0.07]`}
              aria-hidden
            />
            <div className={`relative flex ${DEMO_PANEL_HEIGHT} flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0a0f1e]/95 p-4 shadow-panel-dark backdrop-blur-xl sm:p-6`}>
              <div className="mb-4 flex shrink-0 flex-wrap items-center justify-between gap-2">
                <div className="flex min-w-0 flex-wrap items-center gap-2">
                  <Sparkles className="h-4 w-4 shrink-0 text-violet-400" />
                  <span className="text-sm font-semibold text-white">{activeMeta.label}</span>
                  <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
                    Live demo
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>
              </div>

              <div className="min-h-0 flex-1 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="h-full"
                  >
                    <ActiveDemo />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-8"
          {...fadeInUp(0.2)}
        >
          {["OpenAI", "Anthropic", "LangChain", "Pinecone", "n8n", "Vercel AI SDK"].map((tech) => (
            <span key={tech} className="text-sm font-medium text-slate-500 transition-colors hover:text-slate-300">
              {tech}
            </span>
          ))}
          <Link
            href="/services?service=ai-chatbots"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-light transition-colors hover:text-accent-light"
          >
            Explore AI services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </Section>
  );
};

export default AIShowcase;
