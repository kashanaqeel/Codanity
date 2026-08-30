import React, { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  Zap,
  Globe,
  Code,
  Heart,
  Award,
  Mail,
  ArrowRight,
  Briefcase,
  Users,
} from "lucide-react";
import HomeCTA from "@/components/HomeCTA";
import { PageHero, Section, TabGroup } from "@/components";

const tabs = [
  { id: "overview", label: "Overview", icon: Briefcase },
  { id: "culture", label: "Culture", icon: Heart },
  { id: "benefits", label: "Benefits", icon: Award },
  { id: "contact", label: "Get in Touch", icon: Mail },
];

const benefits = [
  { icon: Zap, title: "Fast-paced growth", description: "Rapid learning and career advancement." },
  { icon: Globe, title: "Remote first", description: "Work from anywhere with flexible schedules." },
  { icon: Code, title: "Latest tech", description: "Modern frameworks and best practices." },
  { icon: Heart, title: "Great culture", description: "Collaborative and supportive environment." },
  { icon: Award, title: "Recognition", description: "Your contributions are valued." },
  { icon: Users, title: "Team events", description: "Regular team building activities." },
];

const values = [
  { icon: Zap, title: "Innovation", description: "We push boundaries and explore new possibilities." },
  { icon: Award, title: "Excellence", description: "We strive for the highest quality in our work." },
  { icon: Globe, title: "Growth", description: "Continuous learning and development." },
  { icon: Heart, title: "Passion", description: "We love what we do and it shows." },
];

export default function CareersPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <>
      <Head>
        <title>Careers - Codanity</title>
        <meta name="description" content="Join the Codanity team." />
      </Head>

      <PageHero
        badge="Join Our Team"
        title={
          <>
            Careers at <span className="gradient-text">Codanity</span>
          </>
        }
        subtitle="We're looking for passionate builders to help us create the next generation of digital products."
      />

      <Section background="bg-white" padding="SECTION" maxWidth="LARGE" animate={false}>
        <TabGroup tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="card-surface mt-8 p-6 sm:p-10"
        >
          {activeTab === "overview" && (
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-2xl font-bold text-ink">Current opportunities</h2>
              <div className="mt-6 rounded-2xl bg-brand-muted p-8">
                <h3 className="font-display text-xl font-semibold text-ink">No open positions right now</h3>
                <p className="mt-3 text-ink-secondary">
                  We don&apos;t have active openings, but we&apos;re always interested in meeting talented people.
                  Send your resume and we&apos;ll keep you in mind.
                </p>
              </div>
            </div>
          )}

          {activeTab === "culture" && (
            <div className="grid gap-5 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value.title} className="rounded-2xl border border-slate-200/70 bg-surface-subtle p-5">
                  <div className="mb-4 inline-flex rounded-xl bg-brand p-3 text-white">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-semibold text-ink">{value.title}</h3>
                  <p className="mt-2 text-sm text-ink-secondary">{value.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "benefits" && (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="rounded-2xl border border-slate-200/70 p-5">
                  <div className="mb-4 inline-flex rounded-xl bg-brand-muted p-3 text-brand">
                    <benefit.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-semibold text-ink">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-ink-secondary">{benefit.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "contact" && (
            <div className="mx-auto max-w-xl text-center">
              <h2 className="font-display text-2xl font-bold text-ink">Get in touch</h2>
              <p className="mt-3 text-ink-secondary">
                Send us your resume and we&apos;ll reach out when a role opens up that fits your profile.
              </p>
              <div className="mt-8">
                <a
                  href="mailto:codanityco@gmail.com?subject=Resume Submission - Codanity Careers"
                  className="btn-primary inline-flex"
                >
                  Send your resume
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          )}
        </motion.div>
      </Section>

      <HomeCTA
        badge="Interested in joining?"
        title="We'd love to hear from you"
        subtitle="Even without open roles, great talent always gets our attention. Drop us a line and tell us what you're passionate about building."
        primaryLabel="Send Resume"
        primaryHref="mailto:codanityco@gmail.com?subject=Resume Submission - Codanity Careers"
        secondaryLabel="About Codanity"
        secondaryHref="/aboutUs"
      />
    </>
  );
}
