import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Calendar, Tag } from "lucide-react";
import { motion } from "framer-motion";
import { useAnimation } from "@/hooks";
import { formatDateRange, getProjectTypeColor, truncateTechStack } from "@/utils";
import { COLORS } from "@/constants";
import type { ProjectsInterface } from "@/types";

export interface ProjectCardProps {
  project: ProjectsInterface;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { cardHover } = useAnimation();
  const { display: displayTech, remaining } = truncateTechStack(project.techStack);

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
      {...cardHover}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.companyLogoImg}
          alt={project.companyName}
          width={400}
          height={192}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getProjectTypeColor(project.type)}`}>
            {project.type}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Company Name and Links */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900">{project.companyName}</h3>
          <div className="flex space-x-2">
            {project.githubLink && (
              <Link
                href={project.githubLink}
                target="_blank"
                className="p-2 text-gray-600 hover:text-[#5128a0] transition-colors"
                aria-label="View source code"
              >
                <Github className="w-4 h-4" />
              </Link>
            )}
            {project.websiteLink && (
              <Link
                href={project.websiteLink}
                target="_blank"
                className="p-2 text-gray-600 hover:text-[#5128a0] transition-colors"
                aria-label="Visit website"
              >
                <ExternalLink className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.category.map((cat: string, index: number) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#5128a0] bg-opacity-10 text-[#5128a0] text-xs font-medium rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Tag className="w-4 h-4 text-gray-500" />
            <span className="text-xs font-medium text-gray-600">Tech Stack</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {displayTech.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
              >
                {tech}
              </span>
            ))}
            {remaining > 0 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                +{remaining}
              </span>
            )}
          </div>
        </div>

        {/* Date Range */}
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Calendar className="w-4 h-4" />
          <span>
            {formatDateRange(project.startDate, project.endDate)}
          </span>
        </div>

        {/* View Details Button */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <Link
            href={`/projects/${project.id}`}
            className="w-full bg-[#5128a0] hover:bg-[#3e217e] text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
