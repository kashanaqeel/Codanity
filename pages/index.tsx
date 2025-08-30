import React from "react";
import Head from "next/head";
import {
  features,
} from "@/data";
import Hero from "@/components/Hero";
import { Features } from "@/components/Features";
import FeaturedProjects from "@/components/FeaturedProjects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Codanity</title>
        <meta name="description" content="Transforming Visions into Innovations" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen">
        <Hero />
        <Features features={features} />
        <FeaturedProjects />
      </main>
    </>
  );
}
