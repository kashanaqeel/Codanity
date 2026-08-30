import type { Feature } from "@/components/Features/Feature";
import type { Social, Navigation } from "@/components/Footer/Footer";
import { Bot, Code, Layers, Smartphone } from "lucide-react";

export const navigations: Navigation[] = [
  {
    id: "1",
    title: "Services",
    url: "/services",
  },
  {
    id: "2",
    title: "Portfolio",
    url: "/projects",
  },
  {
    id: "3",
    title: "About",
    url: "/aboutUs",
  },
  {
    id: "4",
    title: "Careers",
    url: "/careers",
  },  
];

export const features: Feature[] = [
  {
    id: "1",
    lucideIcon: Code,
    title: "Full-Stack Development",
    description:
      "We build end-to-end web applications with Next.js, Nest.js, and PostgreSQL — from architecture and APIs to deployment and performance tuning.",
    iconBg: "bg-brand-muted",
    iconColor: "text-brand",
    iconHoverRing: "group-hover:ring-brand/20 group-hover:bg-brand/10",
  },
  {
    id: "2",
    lucideIcon: Smartphone,
    title: "Mobile & Web Products",
    description:
      "Responsive web apps and cross-platform mobile experiences designed for real users — fast, polished, and built to scale with your business.",
    iconBg: "bg-brand-muted",
    iconColor: "text-brand",
    iconHoverRing: "group-hover:ring-brand/20 group-hover:bg-brand/10",
  },
  {
    id: "3",
    lucideIcon: Layers,
    title: "UI/UX & Product Design",
    description:
      "Thoughtful interfaces and user flows that make complex products feel simple — from wireframes and design systems to pixel-perfect implementation.",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600",
    iconHoverRing: "group-hover:ring-slate-400/25 group-hover:bg-slate-200/80",
  },
  {
    id: "4",
    lucideIcon: Bot,
    title: "AI & Automation",
    description:
      "When it fits the product, we integrate chatbots, voice agents, RAG knowledge bases, and intelligent workflows — grounded in your data and built for production.",
    iconBg: "bg-accent-muted",
    iconColor: "text-accent-dark",
    iconHoverRing: "group-hover:ring-accent/20 group-hover:bg-violet-100",
  },
];

export const socials: Social[] = [  
  {
    id: "1",
    icon: "/icon-facebook.svg",
    title: "Facebook",
    url: "https://www.facebook.com/codanityco"
  },
  {
    id: "2",
    icon: "/icon-linkedin.svg",
    title: "LinkedIn",
    url: "https://www.linkedin.com/company/codanity"
  },
  {
    id: "3",
    icon: "/icon-instagram.svg",
    title: "Instagram",
    url: "https://www.instagram.com/codanityco"
  },
];

export const navs: Navigation[] = [
  {
    id: "1",
    title: "Home",
    url: "#",
  },
  {
    id: "2",
    title: "Pricing",
    url: "#",
  },
  {
    id: "3",
    title: "Products",
    url: "#",
  },
  {
    id: "4",
    title: "About Us",
    url: "#",
  },
];

export const otherNavigations: Navigation[] = [
  {
    id: "1",
    title: "About",
    url: "/aboutUs",
  },
  {
    id: "2",
    title: "Careers",
    url: "/careers",
  },
  {
    id: "3",
    title: "Contact",
    url: "/contacts",
  },
];
