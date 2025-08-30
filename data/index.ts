import type { Feature } from "@/components/Features/Feature";
import type { Social, Navigation } from "@/components/Footer/Footer";

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
    icon: "/icon-nextjs.svg",
    title: "Next.js Expertise",
    description:
      "We build lightning-fast, SEO-optimized web applications with Next.js, ensuring smooth performance and seamless user experience.",
  },
  {
    id: "2",
    icon: "/icon-coding.svg",
    title: "Full-Stack MERN Development",
    description:
      "Our mastery in MongoDB, Express, React, and Node.js allows us to craft scalable, full-featured web applications tailored to your needs.",
  },
  {
    id: "3",
    icon: "/icon-django.svg",
    title: "Robust Django Backends",
    description:
      "Codanity leverages Django's security and scalability to build dependable backend solutions, perfect for data-intensive applications.",
  },
  {
    id: "4",
    icon: "/icon-mobile-dev.svg",
    title: "Mobile Development",
    description:
      "From concept to launch, we develop mobile applications that are performant, user-friendly, and compatible across both iOS and Android platforms.",
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
  {
    id: "4",
    icon: "/icon-youtube.svg",
    title: "YouTube",
    url: ""
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
    title: "Careers",
    url: "#",
  },
  {
    id: "2",
    title: "Community",
    url: "#",
  },
  {
    id: "3",
    title: "Privacy Policy",
    url: "#",
  },
];
