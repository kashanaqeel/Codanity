import React from "react";
import Head from "next/head";
import { features } from "@/data";
import Hero from "@/components/Hero";
import { Features } from "@/components/Features";
import FeaturedProjects from "@/components/FeaturedProjects";
import HomeCTA from "@/components/HomeCTA";
import AIShowcase from "@/components/AIShowcase/AIShowcase";

export default function Home() {
  return (
    <>
      <Head>
        <title>Codanity — Full-Stack & AI Development Partner</title>
        <meta
          name="description"
          content="Codanity designs and builds modern web, mobile, and AI-powered platforms — including chatbots, voice agents, and automations."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero />
      <Features features={features} />
      <AIShowcase />
      <FeaturedProjects />
      <HomeCTA />
    </>
  );
}
