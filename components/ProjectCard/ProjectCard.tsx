import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ExternalLink, Github, Calendar, Tag } from "lucide-react";
import { useAnimation } from "@/hooks";
import { formatDateRange, getProjectTypeColor, truncateTechStack } from "@/utils";
import type { ProjectsInterface } from "@/types";

export interface ProjectCardProps {
  project: ProjectsInterface;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { cardHover } = useAnimation();
  const { display: displayTech, remaining } = truncateTechStack(project.techStack);
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.article
      ref={cardRef}
      className="card-surface group flex h-full flex-col overflow-hidden"
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...cardHover}
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={project.companyLogoImg}
          alt={project.companyName}
          width={400}
          height={208}
          className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />

        <div className="absolute inset-0 flex items-end p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <p className="text-sm font-medium text-white/90">Hover to explore →</p>
        </div>

        <div className="absolute left-4 top-4">
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${getProjectTypeColor(project.type)}`}>
            {project.type}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-bold text-ink transition-colors group-hover:text-brand">
            {project.companyName}
          </h3>
          <div className="flex shrink-0 gap-1">
            {project.githubLink && (
              <Link
                href={project.githubLink}
                target="_blank"
                className="rounded-lg p-2 text-ink-muted transition-colors hover:bg-brand-muted hover:text-brand"
                aria-label="View source code"
              >
                <Github className="h-4 w-4" />
              </Link>
            )}
            {project.websiteLink && (
              <Link
                href={project.websiteLink}
                target="_blank"
                className="rounded-lg p-2 text-ink-muted transition-colors hover:bg-brand-muted hover:text-brand"
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
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-dark hover:shadow-glow"
          >
            View Case Study
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
