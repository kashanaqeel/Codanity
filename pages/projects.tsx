import React, { useMemo } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { Briefcase, Code2, Layers } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { Projects } from "@/config/projects";
import HomeCTA from "@/components/HomeCTA";
import { PageHero, Section } from "@/components";
import { useAnimation } from "@/hooks";

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ProjectsPage() {
  const { fadeInUp } = useAnimation();

  const portfolioStats = useMemo(() => {
    const categories = new Set(Projects.flatMap((p) => p.category));
    const technologies = new Set(Projects.flatMap((p) => p.techStack));
    return {
      projects: Projects.length,
      categories: categories.size,
      technologies: technologies.size,
    };
  }, []);

  return (
    <>
      <Head>
        <title>Our Projects - Codanity</title>
        <meta
          name="description"
          content="Explore our portfolio of successful projects across various technologies and industries."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <PageHero
        badge="Our Portfolio"
        title={
          <>
            Showcasing our <span className="gradient-text">digital excellence</span>
          </>
        }
        subtitle="Discover successful products we've designed and built across e-commerce, healthcare, AI, and more."
      >
        <motion.div
          className="mt-10 w-full"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 shadow-panel-dark backdrop-blur-md sm:p-5">
            <div className="grid grid-cols-3 gap-3 sm:gap-6">
              {[
                { icon: Briefcase, label: "Projects", value: portfolioStats.projects },
                { icon: Layers, label: "Categories", value: portfolioStats.categories },
                { icon: Code2, label: "Technologies", value: portfolioStats.technologies },
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="text-center sm:text-left">
                    <div className="mb-1.5 flex items-center justify-center gap-1.5 sm:justify-start">
                      <Icon className="h-3.5 w-3.5 text-brand-light/80" />
                      <span className="text-[11px] font-medium uppercase tracking-wide text-slate-500">
                        {stat.label}
                      </span>
                    </div>
                    <p className="font-display text-2xl font-bold text-white sm:text-3xl">{stat.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </PageHero>

      <Section
        background="bg-surface-subtle"
        padding="SECTION"
        maxWidth="LARGE"
        animate={false}
        className="!pt-6 sm:!pt-8"
      >
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
          {...fadeInUp(0.05)}
        >
          {Projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <HomeCTA
        badge="Have a project in mind?"
        title="Let's build your next success story"
        subtitle="Tell us about your idea and we'll help you shape it into a product your users will love."
        primaryLabel="Start a Project"
        primaryHref="/contacts"
        secondaryLabel="Our Services"
        secondaryHref="/services"
      />
    </>
  );
}
