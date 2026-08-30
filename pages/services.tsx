import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Code, Server, Smartphone, Globe, CheckCircle2, Bot, BrainCircuit, Workflow } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import HomeCTA from "@/components/HomeCTA";
import { Button, PageHero, Section } from "@/components";
import { useAnimation } from "@/hooks";

type Service = {
  id: string;
  icon: typeof Code;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  category: "engineering" | "ai";
};

const services: Service[] = [
  {
    id: "fullstack",
    icon: Code,
    title: "Full-Stack Development",
    description: "End-to-end web solutions from concept to deployment — architecture, APIs, databases, and launch.",
    features: ["Next.js & React", "Node.js & Nest.js", "PostgreSQL & MongoDB", "REST & GraphQL APIs", "Auth & security", "Performance tuning"],
    gradient: "from-brand to-brand-light",
    category: "engineering",
  },
  {
    id: "frontend",
    icon: Globe,
    title: "Frontend Development",
    description: "Beautiful, responsive, and interactive user interfaces built with modern frameworks.",
    features: ["React & Next.js", "TypeScript", "Tailwind CSS", "Responsive design", "Accessibility", "Design systems"],
    gradient: "from-indigo-500 to-violet-600",
    category: "engineering",
  },
  {
    id: "backend",
    icon: Server,
    title: "Backend Development",
    description: "Robust server-side applications, scalable APIs, and cloud-ready infrastructure.",
    features: ["Nest.js & Express", "Django & Python", "Database design", "Cloud deployment", "Caching & queues", "API architecture"],
    gradient: "from-slate-600 to-slate-800",
    category: "engineering",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform and native mobile applications for iOS and Android.",
    features: ["React Native", "Flutter", "iOS & Android", "Push notifications", "Offline support", "App store delivery"],
    gradient: "from-orange-500 to-rose-600",
    category: "engineering",
  },
  {
    id: "ai-chatbots",
    icon: Bot,
    title: "AI Chatbots & Voice Agents",
    description: "Conversational agents for chat and phone — context-aware assistants that integrate with your tools and workflows.",
    features: [
      "Custom GPT/Claude agents",
      "Voice agents & phone integrations",
      "Speech-to-text & text-to-speech",
      "Multi-turn conversations",
      "Tool & API calling",
      "Human handoff flows",
    ],
    gradient: "from-violet-500 to-purple-600",
    category: "ai",
  },
  {
    id: "rag",
    icon: BrainCircuit,
    title: "RAG & Knowledge Bases",
    description: "Ground AI responses in your documents, wikis, and databases for accurate, cited answers.",
    features: ["Document ingestion pipelines", "Vector database setup", "Semantic search", "Source citation", "Multi-format support", "Continuous indexing"],
    gradient: "from-cyan-500 to-blue-600",
    category: "ai",
  },
  {
    id: "automation",
    icon: Workflow,
    title: "AI Automations",
    description: "Intelligent workflows that process data, trigger actions, and eliminate repetitive manual work.",
    features: ["n8n & custom pipelines", "Lead enrichment", "Document processing", "Email & notification flows", "CRM integrations", "Scheduled jobs"],
    gradient: "from-emerald-500 to-teal-600",
    category: "ai",
  },
];

const stats = [
  { value: 20, suffix: "+", label: "Projects delivered" },
  { value: 94, suffix: "%", label: "Success rate" },
  { value: 5, suffix: "+", label: "Years experience" },
  { value: 24, suffix: "/7", label: "Support" },
];

const engineeringServices = services.filter((s) => s.category === "engineering");
const aiServices = services.filter((s) => s.category === "ai");

const DEFAULT_SERVICE_ID = services[0].id;
const DEFAULT_AI_SERVICE_ID = aiServices[0]?.id ?? "ai-chatbots";

const resolveServiceId = (
  serviceParam: string | string[] | undefined,
  categoryParam: string | string[] | undefined
): string => {
  const service = Array.isArray(serviceParam) ? serviceParam[0] : serviceParam;
  const category = Array.isArray(categoryParam) ? categoryParam[0] : categoryParam;

  if (service && services.some((s) => s.id === service)) {
    return service;
  }

  if (category === "ai") {
    return DEFAULT_AI_SERVICE_ID;
  }

  return DEFAULT_SERVICE_ID;
};

export default function ServicesPage() {
  const router = useRouter();
  const [activeId, setActiveId] = useState(DEFAULT_SERVICE_ID);
  const { fadeInUp } = useAnimation();
  const active = services.find((s) => s.id === activeId) ?? services[0];
  const ActiveIcon = active.icon;

  useEffect(() => {
    if (!router.isReady) return;
    setActiveId(resolveServiceId(router.query.service, router.query.category));
  }, [router.isReady, router.query.service, router.query.category]);

  const selectService = (serviceId: string) => {
    setActiveId(serviceId);
    router.replace({ pathname: "/services", query: { service: serviceId } }, undefined, {
      shallow: true,
    });
  };

  const renderServiceButton = (service: Service) => {
    const Icon = service.icon;
    const isActive = service.id === activeId;

    return (
      <button
        key={service.id}
        type="button"
        onClick={() => selectService(service.id)}
        className={`relative shrink-0 rounded-2xl border px-4 py-4 text-left transition-all duration-300 lg:shrink lg:w-full ${
          isActive
            ? service.category === "ai"
              ? "border-violet-500/25 bg-violet-500/5 shadow-glow-ai"
              : "border-brand/25 bg-brand-muted shadow-soft"
            : "border-slate-200/70 bg-white hover:border-brand/15"
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`rounded-xl bg-gradient-to-br p-2.5 transition-all ${
              isActive ? `${service.gradient} text-white shadow-lg` : "bg-surface-muted text-brand"
            }`}
          >
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <p className="font-display text-sm font-semibold text-ink sm:text-base">{service.title}</p>
            <p className="mt-0.5 text-xs text-ink-secondary line-clamp-2">{service.description}</p>
          </div>
        </div>
      </button>
    );
  };

  return (
    <>
      <Head>
        <title>Our Services - Codanity</title>
        <meta name="description" content="Full-stack web, mobile, and AI development services from Codanity." />
      </Head>

      <PageHero
        badge="What We Offer"
        title={
          <>
            Services built for <span className="gradient-text">modern products</span>
          </>
        }
        subtitle="From full-stack engineering and mobile apps to AI chatbots, voice agents, RAG systems, and automations — we cover the stack your product needs."
      />

      <Section background="bg-white" padding="SECTION" maxWidth="LARGE" animate={false}>
        <motion.div
          className="grid grid-cols-2 gap-4 rounded-2xl border border-slate-200/70 bg-surface-subtle p-6 sm:grid-cols-4 lg:p-8"
          {...fadeInUp(0.05)}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl font-bold text-brand sm:text-3xl">
                <CountUp end={stat.value} suffix={stat.suffix} duration={2} enableScrollSpy scrollSpyOnce />
              </p>
              <p className="mt-1 text-xs text-ink-secondary sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="mt-14 grid min-w-0 gap-8 lg:grid-cols-[minmax(0,300px)_1fr]">
          <motion.div
            className="min-w-0 max-w-full overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:overflow-visible lg:pb-0"
            {...fadeInUp(0.1)}
          >
            <div className="hidden lg:contents">
              <p className="mb-1 px-1 text-xs font-semibold uppercase tracking-wider text-ink-muted">
                Product Engineering
              </p>
              {engineeringServices.map(renderServiceButton)}
              <p className="mb-1 mt-4 px-1 text-xs font-semibold uppercase tracking-wider text-ink-muted">
                AI & Automation
              </p>
              {aiServices.map(renderServiceButton)}
            </div>
            <div className="flex w-max min-w-full gap-2 lg:hidden">
              {services.map((service) => {
                const Icon = service.icon;
                const isActive = service.id === activeId;
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => selectService(service.id)}
                    className={`flex shrink-0 snap-start flex-col items-center gap-2 rounded-2xl border px-4 py-3 transition-all duration-300 ${
                      isActive
                        ? service.category === "ai"
                          ? "border-violet-500/25 bg-violet-500/5 shadow-glow-ai"
                          : "border-brand/25 bg-brand-muted shadow-soft"
                        : "border-slate-200/70 bg-white"
                    }`}
                  >
                    <div
                      className={`rounded-xl bg-gradient-to-br p-2 ${
                        isActive ? `${service.gradient} text-white` : "bg-surface-muted text-brand"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="max-w-[5.5rem] text-center text-[10px] font-semibold leading-tight text-ink line-clamp-2">
                      {service.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          <motion.div className="card-surface relative overflow-hidden p-6 sm:p-8" {...fadeInUp(0.15)}>
            <div className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${active.gradient} opacity-10 blur-3xl`} />

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-3">
                  <span
                    className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                      active.category === "ai"
                        ? "bg-violet-500/10 text-violet-600"
                        : "bg-brand-muted text-brand"
                    }`}
                  >
                    {active.category === "ai" ? "AI & Automation" : "Product Engineering"}
                  </span>
                </div>
                <div className={`mb-6 inline-flex rounded-2xl bg-gradient-to-br p-4 text-white ${active.gradient}`}>
                  <ActiveIcon className="h-7 w-7" />
                </div>
                <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">{active.title}</h2>
                <p className="mt-3 text-ink-secondary">{active.description}</p>

                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {active.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-secondary">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button href="/contacts" variant="primary" size="lg">
                    Discuss this service
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </Section>

      <HomeCTA
        badge="Ready to start?"
        title="Let's build something amazing together"
        subtitle="Whether it's a new web platform, a mobile app, or an AI feature that sets you apart — we're here to help you ship it."
        primaryLabel="Start Your Project"
        secondaryLabel="View Our Work"
        secondaryHref="/projects"
      />
    </>
  );
}
