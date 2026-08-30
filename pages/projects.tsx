import React, { useState, useMemo } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { Projects } from "@/config/projects";
import HomeCTA from "@/components/HomeCTA";
import { PageHero, Section, SearchInput } from "@/components";
import { useAnimation } from "@/hooks";

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const { fadeInUp } = useAnimation();

  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return Projects;

    return Projects.filter((project) => {
      const haystack = [
        project.companyName,
        project.shortDescription,
        ...project.category,
        ...project.techStack,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(query);
    });
  }, [searchQuery]);

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
      />

      <Section background="bg-surface-subtle" padding="SECTION" maxWidth="LARGE" animate={false}>
        <motion.div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between" {...fadeInUp(0.05)}>
          <div>
            <p className="text-sm font-medium text-ink-secondary">
              {filteredProjects.length} of {Projects.length} projects
            </p>
          </div>
          <SearchInput
            placeholder="Search by name, tech, or category..."
            onSearch={setSearchQuery}
            className="w-full sm:max-w-md"
          />
        </motion.div>

        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="card-surface py-16 text-center"
            >
              <p className="font-display text-lg font-semibold text-ink">No projects found</p>
              <p className="mt-2 text-sm text-ink-secondary">
                Try a different search term or browse all {Projects.length} projects.
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="mt-4 text-sm font-semibold text-brand hover:text-brand-dark"
              >
                Clear search
              </button>
            </motion.div>
          )}
        </AnimatePresence>
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
