import React from "react";
import { ArrowRight } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { featuredProjects } from "@/config/projects";
import { motion } from "framer-motion";
import { useAnimation } from "@/hooks";
import { Button, Section } from "@/components";

const FeaturedProjects: React.FC = () => {
  const { fadeInUp, fadeInUpSmall } = useAnimation();

  return (
    <Section background="bg-gray-50">
      {/* Section Header */}
      <motion.div 
        className="text-center mb-12"
        {...fadeInUp()}
      >
        <motion.div 
          className="inline-flex items-center gap-2 bg-blue-50 text-[#5128a0] px-4 py-1 rounded-full text-sm mb-4"
          {...fadeInUpSmall(0.1)}
        >
          Featured Work
        </motion.div>
        <motion.h2 
          className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
          {...fadeInUp(0.2)}
        >
          Our Latest
          <span className="text-[#5128a0]"> Success Stories</span>
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          {...fadeInUp(0.3)}
        >
          Discover some of our most impactful projects that demonstrate our expertise 
          in creating innovative digital solutions.
        </motion.p>
      </motion.div>

      {/* Featured Projects Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        {...fadeInUp(0.4)}
      >
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            {...fadeInUp(0.5 + index * 0.05)}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>

      {/* View All Projects CTA */}
      <motion.div 
        className="text-center"
        {...fadeInUpSmall(0.1)}
      >
        <Button
          href="/projects"
          variant="primary"
          size="lg"
          icon={<ArrowRight className="w-4 h-4" />}
          iconPosition="right"
        >
          View All Projects
        </Button>
      </motion.div>
    </Section>
  );
};

export default FeaturedProjects;
