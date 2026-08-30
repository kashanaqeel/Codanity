import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github, Calendar, Tag } from "lucide-react";
import { formatDateRange, truncateTechStack } from "@/utils";
import type { ProjectsInterface } from "@/types";

export interface ProjectCardProps {
  project: ProjectsInterface;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { display: displayTech, remaining } = truncateTechStack(project.techStack);

  return (
    <motion.article
      className="card-surface group flex h-full flex-col overflow-hidden border-slate-200/70 transition-[border-color,box-shadow] duration-300 hover:border-brand/20 hover:shadow-card-hover"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.995 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={project.companyLogoImg}
          alt={project.companyName}
          width={400}
          height={208}
          className="h-full w-full object-cover transition-transform duration-500 ease-smooth group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/5 to-transparent transition-opacity duration-300 group-hover:from-ink/60" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-bold text-ink transition-colors duration-300 group-hover:text-brand">
            {project.companyName}
          </h3>
          <div className="flex shrink-0 gap-1">
            {project.githubLink && (
              <Link
                href={project.githubLink}
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-muted transition-colors hover:bg-brand-muted hover:text-brand"
                aria-label="View source code"
              >
                <Github className="h-4 w-4" />
              </Link>
            )}
            {project.websiteLink && (
              <Link
                href={project.websiteLink}
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-muted transition-colors hover:bg-brand-muted hover:text-brand"
                aria-label="Visit website"
              >
                <ExternalLink className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>

        <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-ink-secondary">
          {project.shortDescription}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.category.map((cat, index) => (
            <span
              key={index}
              className="rounded-full bg-brand-muted px-3 py-1 text-xs font-medium text-brand"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="mb-4">
          <div className="mb-2 flex items-center gap-2">
            <Tag className="h-4 w-4 text-ink-muted" />
            <span className="text-xs font-medium text-ink-secondary">Tech Stack</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {displayTech.map((tech, index) => (
              <span
                key={index}
                className="rounded-md bg-surface-muted px-2.5 py-1 text-xs text-ink-secondary"
              >
                {tech}
              </span>
            ))}
            {remaining > 0 && (
              <span className="rounded-md bg-surface-muted px-2.5 py-1 text-xs text-ink-secondary">
                +{remaining}
              </span>
            )}
          </div>
        </div>

        <div className="mt-auto flex items-center gap-2 text-xs text-ink-muted">
          <Calendar className="h-4 w-4" />
          <span>{formatDateRange(project.startDate, project.endDate)}</span>
        </div>

        <div className="mt-5 border-t border-slate-100 pt-5">
          <Link
            href={`/projects/${project.id}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 group-hover:bg-brand-dark group-hover:shadow-glow"
          >
            View Case Study
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
