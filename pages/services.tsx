import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Code,
  Globe,
  Layers,
  Lightbulb,
  Rocket,
  Server,
  Smartphone,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import HomeCTA from "@/components/HomeCTA";
import { ServicesExplorer } from "@/components/ServicesExplorer";
import { ServicesProcess } from "@/components/ServicesProcess";
import { Button, PageHero, Section } from "@/components";
import type { ServiceItem } from "@/components/ServicesExplorer";

const services: ServiceItem[] = [
  {
    id: "fullstack",
    icon: Code,
    title: "Full-Stack Development",
    description:
      "End-to-end web solutions from concept to deployment — architecture, APIs, databases, and launch.",
    features: [
      "Next.js & React",
      "Node.js & Nest.js",
      "PostgreSQL & MongoDB",
      "REST & GraphQL APIs",
      "Auth & security",
      "Performance tuning",
    ],
    highlights: ["Single team from UI to API", "Production-ready architecture", "Faster time to market"],
    idealFor: ["SaaS products", "Internal tools", "MVPs & scale-ups"],
    gradient: "from-brand to-brand-light",
  },
  {
    id: "frontend",
    icon: Globe,
    title: "Frontend Development",
    description:
      "Beautiful, responsive, and interactive user interfaces built with modern frameworks.",
    features: [
      "React & Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive design",
      "Accessibility",
      "Design systems",
    ],
    highlights: ["Pixel-perfect implementation", "Smooth interactions", "Mobile-first layouts"],
    idealFor: ["Marketing sites", "Dashboards", "Design handoffs"],
    gradient: "from-indigo-500 to-violet-600",
  },
  {
    id: "backend",
    icon: Server,
    title: "Backend Development",
    description:
      "Robust server-side applications, scalable APIs, and cloud-ready infrastructure.",
    features: [
      "Nest.js & Express",
      "Django & Python",
      "Database design",
      "Cloud deployment",
      "Caching & queues",
      "API architecture",
    ],
    highlights: ["Scalable API design", "Secure data layers", "Cloud-native deployment"],
    idealFor: ["API platforms", "Data-heavy apps", "Enterprise systems"],
    gradient: "from-slate-600 to-slate-800",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform and native mobile applications for iOS and Android.",
    features: [
      "React Native",
      "Flutter",
      "iOS & Android",
      "Push notifications",
      "Offline support",
      "App store delivery",
    ],
    highlights: ["One codebase, two platforms", "Native-feel UX", "Store-ready delivery"],
    idealFor: ["Consumer apps", "Field tools", "On-the-go workflows"],
    gradient: "from-orange-500 to-rose-600",
  },
  {
    id: "ai-chatbots",
    icon: Bot,
    title: "AI Chatbots & Voice Agents",
    description:
      "Conversational agents for chat and phone — context-aware assistants that integrate with your tools and workflows.",
    features: [
      "Custom GPT/Claude agents",
      "Voice agents & phone integrations",
      "Speech-to-text & text-to-speech",
      "Multi-turn conversations",
      "Tool & API calling",
      "Human handoff flows",
    ],
    highlights: ["24/7 customer support", "Voice & chat channels", "CRM & tool integrations"],
    idealFor: ["Support teams", "Sales workflows", "Booking & intake"],
    gradient: "from-violet-600 to-indigo-700",
  },
  {
    id: "rag",
    icon: BrainCircuit,
    title: "RAG & Knowledge Bases",
    description:
      "Ground AI responses in your documents, wikis, and databases for accurate, cited answers.",
    features: [
      "Document ingestion pipelines",
      "Vector database setup",
      "Semantic search",
      "Source citation",
      "Multi-format support",
      "Continuous indexing",
    ],
    highlights: ["Answers from your data", "Source citations", "Always up to date"],
    idealFor: ["Internal wikis", "Support docs", "Compliance-heavy teams"],
    gradient: "from-indigo-500 to-violet-600",
  },
  {
    id: "automation",
    icon: Workflow,
    title: "AI Automations",
    description:
      "Intelligent workflows that process data, trigger actions, and eliminate repetitive manual work.",
    features: [
      "n8n & custom pipelines",
      "Lead enrichment",
      "Document processing",
      "Email & notification flows",
      "CRM integrations",
      "Scheduled jobs",
    ],
    highlights: ["Hours saved weekly", "Fewer manual errors", "Connected toolchains"],
    idealFor: ["Ops teams", "Sales & marketing", "Back-office workflows"],
    gradient: "from-emerald-500 to-teal-600",
  },
];

const stats = [
  { value: 20, suffix: "+", label: "Projects delivered", icon: Rocket },
  { value: 94, suffix: "%", label: "Success rate", icon: Zap },
  { value: 5, suffix: "+", label: "Years experience", icon: Layers },
  { value: 24, suffix: "/7", label: "Support", icon: Sparkles },
];

const processSteps = [
  { icon: Lightbulb, title: "Discover", description: "Goals, scope, and technical requirements" },
  { icon: Layers, title: "Design", description: "Architecture, UX flows, and milestones" },
  { icon: Code, title: "Build", description: "Iterative development with clear updates" },
  { icon: Rocket, title: "Launch", description: "Deploy, monitor, and hand over confidently" },
];

const DEFAULT_SERVICE_ID = services[0].id;

const resolveServiceId = (
  serviceParam: string | string[] | undefined,
  categoryParam?: string | string[] | undefined
): string => {
  const service = Array.isArray(serviceParam) ? serviceParam[0] : serviceParam;
  const category = Array.isArray(categoryParam) ? categoryParam[0] : categoryParam;

  if (service && services.some((s) => s.id === service)) {
    return service;
  }

  if (category === "ai") {
    return "ai-chatbots";
  }

  return DEFAULT_SERVICE_ID;
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ServicesPage() {
  const router = useRouter();
  const [activeId, setActiveId] = useState(DEFAULT_SERVICE_ID);

  useEffect(() => {
    if (!router.isReady) return;
    const resolved = resolveServiceId(router.query.service, router.query.category);
    setActiveId((current) => (current === resolved ? current : resolved));
  }, [router.isReady, router.query.service, router.query.category]);

  const selectService = (serviceId: string) => {
    if (serviceId === activeId) return;
    setActiveId(serviceId);
    router.replace({ pathname: "/services", query: { service: serviceId } }, undefined, {
      shallow: true,
      scroll: false,
    });
  };

  return (
    <>
      <Head>
        <title>Our Services - Codanity</title>
        <meta
          name="description"
          content="Full-stack web, mobile, and AI development services from Codanity."
        />
      </Head>

      <PageHero
        badge="What We Offer"
        title={
          <>
            Services built for <span className="gradient-text">modern products</span>
          </>
        }
        subtitle="From full-stack engineering and mobile apps to AI chatbots, voice agents, RAG systems, and automations — we cover the stack your product needs."
      >
        <motion.div
          className="mt-10 w-full"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 shadow-panel-dark backdrop-blur-md sm:p-5">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="text-center sm:text-left">
                    <div className="mb-1.5 flex items-center justify-center gap-1.5 sm:justify-start">
                      <Icon className="h-3.5 w-3.5 text-brand-light/80" />
                      <span className="text-[11px] font-medium uppercase tracking-wide text-slate-500">
                        {stat.label}
                      </span>
                    </div>
                    <p className="font-display text-2xl font-bold text-white sm:text-3xl">
                      <CountUp end={stat.value} suffix={stat.suffix} duration={2} enableScrollSpy scrollSpyOnce />
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="mt-5 flex flex-col items-center justify-center gap-3 border-t border-white/10 pt-5 sm:flex-row">
              <Button href="/contacts" variant="primary" size="md" className="w-full sm:w-auto">
                Start a project
              </Button>
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-light transition-colors hover:text-accent-light"
              >
                View our work
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </PageHero>

      <Section
        background="bg-surface-subtle"
        padding="SECTION"
        maxWidth="LARGE"
        animate={false}
        className="!pt-8 sm:!pt-10"
      >
        <div className="mb-10 text-center lg:mb-12">
          <p className="section-badge mx-auto">Explore our capabilities</p>
          <h2 className="section-title mt-4 text-balance">
            See how we build
          </h2>
          <p className="section-subtitle mt-3">
            Each capability comes alive with a live preview — architecture flows, product surfaces, and AI pipelines in motion.
          </p>
        </div>

        <ServicesExplorer services={services} activeId={activeId} onSelect={selectService} />
      </Section>

      <Section background="bg-white" padding="SECTION" maxWidth="LARGE" animate={false}>
        <div className="mb-10 text-center lg:mb-12">
          <p className="section-badge mx-auto">How we work</p>
          <h2 className="section-title mt-4">A clear path from idea to launch</h2>
          <p className="section-subtitle mt-3">
            A structured journey from first conversation to production launch.
          </p>
        </div>

        <ServicesProcess steps={processSteps} />
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
