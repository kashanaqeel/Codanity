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
    color: "from-violet-500 to-purple-600",
  },
  {
    id: "rag",
    icon: Database,
    label: "RAG Systems",
    tagline: "Grounded answers from your own data",
    color: "from-cyan-500 to-blue-600",
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
      <div className="mb-3 flex items-center gap-2 border-b border-white/10 pb-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-purple-600">
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
      <div className="flex flex-1 flex-col gap-3 overflow-hidden">
        {CHAT_MESSAGES.slice(0, visibleCount).map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
              msg.role === "user"
                ? "ml-auto bg-brand text-white"
                : "bg-white/10 text-slate-200"
            }`}
          >
            {msg.text}
          </motion.div>
        ))}
        {typing && (
          <div className="flex gap-1 rounded-2xl bg-white/10 px-4 py-3 w-fit">
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
    <div className="flex h-full flex-col justify-center gap-6 p-2">
      <div className="flex items-center justify-between gap-2">
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
                  className={`flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-500 ${
                    isActive
                      ? "border-cyan-400/50 bg-cyan-500/20 shadow-glow-cyan"
                      : isPast
                      ? "border-emerald-400/30 bg-emerald-500/10"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <Icon className={`h-5 w-5 ${isActive ? "text-cyan-300" : isPast ? "text-emerald-400" : "text-slate-500"}`} />
                </div>
                <div className="text-center">
                  <p className={`text-xs font-semibold ${isActive ? "text-cyan-300" : "text-slate-400"}`}>{step.label}</p>
                  <p className="text-[10px] text-slate-600">{step.sub}</p>
                </div>
              </motion.div>
              {i < RAG_STEPS.length - 1 && (
                <div className="relative h-px flex-1 overflow-hidden bg-white/10">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-400 to-blue-500"
                    animate={{ width: isPast ? "100%" : isActive ? "50%" : "0%" }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
      <motion.div
        key={activeStep}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4"
      >
        <p className="text-[11px] font-mono text-cyan-300/80">
          {activeStep === 0 && "→ Ingesting 1,247 documents from knowledge base..."}
          {activeStep === 1 && "→ Generating embeddings via text-embedding-3-large..."}
          {activeStep === 2 && "→ Storing 384-dim vectors in Pinecone index..."}
          {activeStep === 3 && "✓ Answer generated with 3 source citations (confidence: 0.94)"}
        </p>
      </motion.div>
    </div>
  );
}

const AUTO_NODES = [
  { id: "trigger", label: "New lead", x: 10, y: 45 },
  { id: "enrich", label: "AI enrich", x: 35, y: 20 },
  { id: "score", label: "Score lead", x: 35, y: 70 },
  { id: "route", label: "Route", x: 62, y: 45 },
  { id: "notify", label: "Notify team", x: 85, y: 45 },
];

function AutomationDemo() {
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setPulse((p) => (p + 1) % AUTO_NODES.length), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative h-full min-h-[220px]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {[
          ["trigger", "enrich"],
          ["trigger", "score"],
          ["enrich", "route"],
          ["score", "route"],
          ["route", "notify"],
        ].map(([from, to], i) => {
          const a = AUTO_NODES.find((n) => n.id === from)!;
          const b = AUTO_NODES.find((n) => n.id === to)!;
          const lit = AUTO_NODES.indexOf(AUTO_NODES.find((n) => n.id === from)!) <= pulse;
          return (
            <motion.line
              key={i}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke={lit ? "#34d399" : "rgba(255,255,255,0.1)"}
              strokeWidth="0.4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            />
          );
        })}
      </svg>
      {AUTO_NODES.map((node, i) => (
        <motion.div
          key={node.id}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          animate={{ scale: pulse === i ? 1.08 : 1 }}
        >
          <div
            className={`rounded-xl border px-3 py-2 text-center transition-all duration-300 ${
              pulse >= i
                ? "border-emerald-400/40 bg-emerald-500/15 shadow-glow-emerald"
                : "border-white/10 bg-white/5"
            }`}
          >
            <p className={`text-[10px] font-semibold whitespace-nowrap ${pulse >= i ? "text-emerald-300" : "text-slate-500"}`}>
              {node.label}
            </p>
          </div>
        </motion.div>
      ))}
      {pulse === AUTO_NODES.length - 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1 }}
          className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500/20 px-3 py-1 text-[10px] font-medium text-emerald-300"
        >
          ✓ Workflow completed in 1.2s
        </motion.div>
      )}
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
    <div className="flex h-full flex-col gap-4 p-2">
      <div className="flex flex-wrap gap-2">
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
      <div className="flex-1 rounded-xl border border-fuchsia-500/20 bg-[#0d0a1a] p-4 font-mono text-xs">
        <p className="text-fuchsia-400/60">$ codanity.llm.route({"{"}model: &quot;{LLM_MODELS[modelIdx]}&quot;{"}"})</p>
        <p className="mt-3 leading-relaxed text-slate-300">
          {LLM_OUTPUT.slice(0, chars)}
          <motion.span
            className="inline-block h-3.5 w-1 bg-fuchsia-400"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        </p>
      </div>
      <div className="grid grid-cols-3 gap-2">
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
          className="mesh-orb right-1/4 bottom-0 h-80 w-80 bg-cyan-500/15"
          animate={{ x: [0, -20, 0], y: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative">
        <SectionHeader
          badge="AI & Automation"
          badgeClassName="border-cyan-500/20 bg-cyan-500/10 text-cyan-300"
          title={
            <>
              Smart features,{" "}
              <span className="text-cyan-300">when you need them</span>
            </>
          }
          subtitle="Not every project needs AI — but when yours does, we bring production experience with chatbots, voice agents, RAG pipelines, LLM integrations, and workflow automations alongside the full-stack engineering to ship it all."
          dark
        />

        <motion.div className="mt-12 grid gap-6 lg:grid-cols-[280px_1fr] lg:gap-8" {...fadeInUp(0.1)}>
          <div className="flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
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
                      ? "border-white/20 bg-white/10 shadow-glow-ai"
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
                        isActive ? "shadow-lg" : "opacity-60 group-hover:opacity-80"
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

          <div className="relative">
            <div className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${activeMeta.color} opacity-30 blur-sm`} />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0f1e]/90 p-5 backdrop-blur-xl sm:p-6 min-h-[300px]">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-violet-400" />
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

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                  className="min-h-[240px]"
                >
                  <ActiveDemo />
                </motion.div>
              </AnimatePresence>
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
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
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
