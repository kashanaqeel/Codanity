import React from "react";
import { ArrowRight } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { featuredProjects } from "@/config/projects";
import { motion } from "framer-motion";
import { useAnimation } from "@/hooks";
import { Button, Section, SectionHeader } from "@/components";

const FeaturedProjects: React.FC = () => {
  const { fadeInUp } = useAnimation();

  return (
    <Section background="bg-surface-subtle" padding="SECTION" maxWidth="LARGE" animate={false}>
      <SectionHeader
        badge="Featured Work"
        title={
          <>
            Recent <span className="gradient-text">success stories</span>
          </>
        }
        subtitle="A snapshot of the products we've designed and built for clients across e-commerce, healthcare, AI, and more."
      />

      <motion.div
        className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-16 lg:grid-cols-3"
        {...fadeInUp(0.15)}
      >
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="mt-12 text-center lg:mt-14" {...fadeInUp(0.25)}>
        <Button
          href="/projects"
          variant="outline"
          size="lg"
          icon={<ArrowRight className="h-4 w-4" />}
          iconPosition="right"
        >
          View All Projects
        </Button>
      </motion.div>
    </Section>
  );
};

export default FeaturedProjects;
