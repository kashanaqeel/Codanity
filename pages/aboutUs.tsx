import React, { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Users, Target, Zap, Shield, Award, Globe, Code, Smartphone, Database, Heart } from "lucide-react";
import HomeCTA from "@/components/HomeCTA";
import { Button, PageHero, Section, TabGroup } from "@/components";
import { useAnimation } from "@/hooks";

const tabs = [
  { id: "mission", label: "Our Mission", icon: Target },
  { id: "values", label: "Our Values", icon: Heart },
  { id: "culture", label: "Our Culture", icon: Users },
  { id: "tech", label: "Technologies", icon: Code },
];

const values = [
  { icon: Shield, title: "Quality", description: "We deliver products of the highest standard." },
  { icon: Zap, title: "Innovation", description: "We explore new ideas and technologies continuously." },
  { icon: Users, title: "Collaboration", description: "Teamwork and open communication define our culture." },
  { icon: Award, title: "Excellence", description: "We exceed expectations in everything we do." },
];

const technologies = [
  { icon: Code, name: "Next.js", category: "Frontend", description: "React framework for production-grade apps." },
  { icon: Database, name: "MERN Stack", category: "Full-Stack", description: "MongoDB, Express, React, and Node.js." },
  { icon: Globe, name: "Django", category: "Backend", description: "Secure Python web framework." },
  { icon: Smartphone, name: "Mobile Dev", category: "Mobile", description: "React Native and Flutter experiences." },
];

const stats = [
  { value: 15, suffix: "+", label: "Team members" },
  { value: 20, suffix: "+", label: "Projects delivered" },
  { value: 94, suffix: "%", label: "Success rate" },
  { value: 5, suffix: "+", label: "Years experience" },
];

export default function AboutUsPage() {
  const [activeTab, setActiveTab] = useState("mission");
  const { fadeInUp } = useAnimation();

  return (
    <>
      <Head>
        <title>About Us - Codanity</title>
        <meta name="description" content="Learn about Codanity's mission, values, and team." />
      </Head>

      <PageHero
        badge="Our Story"
        title={
          <>
            About <span className="gradient-text">Codanity</span>
          </>
        }
        subtitle="We're a passionate team of developers, designers, and engineers dedicated to transforming ideas into powerful digital solutions."
      />

      <Section background="bg-white" padding="SECTION" maxWidth="LARGE" animate={false}>
        <motion.div
          className="grid grid-cols-2 gap-4 rounded-2xl border border-slate-200/70 bg-surface-subtle p-6 sm:grid-cols-4 lg:p-8"
          {...fadeInUp(0.05)}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-bold text-brand">
                <CountUp end={stat.value} suffix={stat.suffix} duration={2} enableScrollSpy scrollSpyOnce />
              </p>
              <p className="mt-1 text-xs text-ink-secondary sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="mt-14">
          <TabGroup tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="card-surface mt-8 p-6 sm:p-10"
          >
            {activeTab === "mission" && (
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">Our mission</h2>
                <p className="mt-4 leading-relaxed text-ink-secondary">
                  We build powerful, scalable applications that help businesses thrive in the digital age —
                  empowering companies with modern, reliable solutions across web and mobile.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-brand-muted p-5 text-left">
                    <h3 className="font-semibold text-ink">What we do</h3>
                    <p className="mt-2 text-sm text-ink-secondary">Transform business ideas into digital products.</p>
                  </div>
                  <div className="rounded-2xl bg-surface-muted p-5 text-left">
                    <h3 className="font-semibold text-ink">How we do it</h3>
                    <p className="mt-2 text-sm text-ink-secondary">With cutting-edge tech and proven practices.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "values" && (
              <div className="grid gap-5 sm:grid-cols-2">
                {values.map((value) => (
                  <div key={value.title} className="rounded-2xl border border-slate-200/70 bg-surface-subtle p-5">
                    <div className="mb-4 inline-flex rounded-xl bg-brand p-3 text-white">
                      <value.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-ink">{value.title}</h3>
                    <p className="mt-2 text-sm text-ink-secondary">{value.description}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "culture" && (
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-display text-2xl font-bold text-ink">Our culture</h2>
                <p className="mt-4 leading-relaxed text-ink-secondary">
                  We foster learning, innovation, and collaboration — creating an environment where people think
                  creatively, take ownership, and push boundaries together.
                </p>
              </div>
            )}

            {activeTab === "tech" && (
              <div className="grid gap-5 sm:grid-cols-2">
                {technologies.map((tech) => (
                  <div key={tech.name} className="flex gap-4 rounded-2xl border border-slate-200/70 p-5">
                    <div className="rounded-xl bg-brand-muted p-3 text-brand">
                      <tech.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-ink">{tech.name}</h3>
                      <span className="mt-1 inline-block rounded-full bg-brand-muted px-2.5 py-0.5 text-xs font-medium text-brand">
                        {tech.category}
                      </span>
                      <p className="mt-2 text-sm text-ink-secondary">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </Section>

      <Section background="bg-surface-subtle" padding="SECTION" maxWidth="MEDIUM" animate={false}>
        <motion.div className="card-surface p-8 text-center sm:p-10" {...fadeInUp()}>
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">Join our team</h2>
          <p className="mx-auto mt-3 max-w-xl text-ink-secondary">
            We&apos;re always looking for talented people who share our passion for building great products.
          </p>
          <div className="mt-6">
            <Button href="/careers" variant="primary" size="lg">
              View careers
            </Button>
          </div>
        </motion.div>
      </Section>

      <HomeCTA secondaryLabel="Our Services" secondaryHref="/services" />
    </>
  );
}
