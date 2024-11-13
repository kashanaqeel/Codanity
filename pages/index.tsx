import Head from "next/head";
import { Navbar } from "@/components/Navbar";
import {
  features,
} from "@/data";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";

export default function Home() {
  return (
    <>
      <Head>
        <title>Codanity</title>
        <meta name="description" content="Next generation digital banking" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen">
        <Hero />
        <Features features={features} />
      </main>
    </>
  );
}
