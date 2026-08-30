import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Github,
  Tag,
} from "lucide-react";
import { Projects } from "@/config/projects";
import ProjectShowcase from "@/components/ProjectShowcase";
import HomeCTA from "@/components/HomeCTA";
import { Button } from "@/components";
import { getProjectTypeColor } from "@/utils";
import { useAnimation } from "@/hooks";
import HeroBackdrop from "@/components/effects/HeroBackdrop";

export default function ProjectDetailPage() {
  const router = useRouter();
  const { projectId } = router.query;
  const { fadeInUp, fadeInUpSmall } = useAnimation();

  const projectIndex = Projects.findIndex((p) => p.id === projectId);
  const project = projectIndex >= 0 ? Projects[projectIndex] : undefined;
  const prevProject = projectIndex > 0 ? Projects[projectIndex - 1] : null;
  const nextProject = projectIndex >= 0 && projectIndex < Projects.length - 1 ? Projects[projectIndex + 1] : null;

  if (!project) {
    return (
      <>
        <Head>
          <title>Project Not Found - Codanity</title>
        </Head>
        <div className="mx-auto max-w-4xl px-4 py-20 text-center">
          <h1 className="font-display text-3xl font-bold text-ink">Project not found</h1>
          <p className="mt-3 text-ink-secondary">The project you&apos;re looking for doesn&apos;t exist.</p>
          <div className="mt-8">
            <Button href="/projects" variant="primary">
              Back to Projects
            </Button>
          </div>
        </div>
      </>
    );
  }

  const formatDate = (date: Date) =>
    date.toLocaleDateString("en-US", { year: "numeric", month: "long" });

  return (
    <>
      <Head>
        <title>{project.companyName} - Codanity Projects</title>
        <meta name="description" content={project.shortDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Hero */}
      <section className="page-hero-dark relative isolate overflow-hidden pb-12 sm:pb-16">
        <HeroBackdrop intensity="strong" />

        <div className="relative mx-auto w-full min-w-0 max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
          <motion.div {...fadeInUpSmall()}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-light transition-colors hover:text-accent-light"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to portfolio
            </Link>
          </motion.div>

          <div className="mt-6 grid min-w-0 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10">
            <motion.div className="min-w-0 space-y-4 sm:space-y-5" {...fadeInUp(0.05)}>
              <div className="flex flex-wrap gap-2">
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${getProjectTypeColor(project.type)}`}>
                  {project.type}
                </span>
                {project.category.map((cat) => (
                  <span
                    key={cat}
                    className="rounded-full bg-brand-muted px-3 py-1 text-xs font-medium text-brand"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              <h1 className="break-words font-display text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {project.companyName}
              </h1>
              <p className="break-words text-base leading-relaxed text-slate-400 sm:text-lg">
                {project.shortDescription}
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {project.websiteLink && (
                  <a
                    href={project.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center sm:w-auto"
                  >
                    Visit Live Site
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full justify-center sm:w-auto"
                  >
                    <Github className="h-4 w-4" />
                    Source Code
                  </a>
                )}
              </div>
            </motion.div>

            <motion.div className="card-surface min-w-0 overflow-hidden" {...fadeInUp(0.12)}>
              <div className="relative aspect-[4/3] w-full bg-surface-subtle sm:aspect-[16/10]">
                <Image
                  src={project.companyLogoImg}
                  alt={project.companyName}
                  fill
                  className="object-contain p-2 sm:p-3"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full min-w-0 max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <motion.div className="card-surface mb-8 flex flex-col gap-5 p-5 sm:flex-row sm:flex-wrap sm:items-start sm:gap-x-10 sm:gap-y-4 sm:p-6" {...fadeInUp(0.1)}>
          <div className="min-w-0 sm:flex-1">
            <p className="text-xs font-medium uppercase tracking-wider text-ink-muted">Timeline</p>
            <div className="mt-2 flex items-start gap-2 text-sm leading-relaxed text-ink-secondary">
              <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <span className="break-words">
                {formatDate(project.startDate)} – {formatDate(project.endDate)}
              </span>
            </div>
          </div>

          <div className="min-w-0 sm:flex-[2]">
            <div className="mb-3 flex items-center gap-2">
              <Tag className="h-4 w-4 shrink-0 text-brand" />
              <p className="text-xs font-medium uppercase tracking-wider text-ink-muted">Tech Stack</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg bg-surface-muted px-3 py-1.5 text-xs font-medium text-ink-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="min-w-0 space-y-8 sm:space-y-10">
          {/* Interactive showcase */}
          <motion.section className="min-w-0" {...fadeInUp(0.15)}>
            <h2 className="font-display text-xl font-bold text-ink sm:text-2xl lg:text-3xl">Product showcase</h2>
            <p className="mt-2 break-words text-sm text-ink-secondary sm:text-base">
              Browse sections, navigate screenshots, and open fullscreen to explore the work in detail.
            </p>
            <div className="mt-5 sm:mt-6">
              <ProjectShowcase
                key={project.id}
                pages={project.pagesInfoArr}
                projectName={project.companyName}
              />
            </div>
          </motion.section>

          {/* Overview */}
          <motion.section className="card-surface min-w-0 p-5 sm:p-8" {...fadeInUp(0.2)}>
              <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">Project overview</h2>
              <div className="mt-5 space-y-4">
                {project.descriptionDetails.paragraphs.map((paragraph, index) => (
                  <p key={index} className="break-words leading-relaxed text-ink-secondary">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.section>

            {/* Key features */}
            <motion.section className="min-w-0" {...fadeInUp(0.25)}>
              <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">What we delivered</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {project.descriptionDetails.bullets.map((bullet, index) => (
                  <motion.div
                    key={bullet}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="card-surface flex min-w-0 gap-3 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    <p className="min-w-0 break-words text-sm leading-relaxed text-ink-secondary">{bullet}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
        </div>

        {/* Prev / Next */}
        <motion.div
          className="mt-12 grid min-w-0 gap-4 border-t border-slate-200/80 pt-8 sm:mt-16 sm:grid-cols-2 sm:pt-10"
          {...fadeInUp(0.3)}
        >
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.id}`}
              className="card-surface group flex min-w-0 items-center gap-3 p-4 transition-all hover:border-brand/25 sm:gap-4 sm:p-5"
            >
              <ArrowLeft className="h-5 w-5 shrink-0 text-brand transition-transform group-hover:-translate-x-1" />
              <div className="min-w-0">
                <p className="text-xs text-ink-muted">Previous project</p>
                <p className="break-words font-display font-semibold text-ink group-hover:text-brand">
                  {prevProject.companyName}
                </p>
              </div>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}

          {nextProject && (
            <Link
              href={`/projects/${nextProject.id}`}
              className="card-surface group flex min-w-0 items-center justify-end gap-3 p-4 text-right transition-all hover:border-brand/25 sm:gap-4 sm:p-5"
            >
              <div className="min-w-0">
                <p className="text-xs text-ink-muted">Next project</p>
                <p className="break-words font-display font-semibold text-ink group-hover:text-brand">
                  {nextProject.companyName}
                </p>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-brand transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </motion.div>
      </div>

      <HomeCTA
        badge="Inspired by this work?"
        title="Let's build something like this for you"
        subtitle="Whether it's e-commerce, a custom platform, or a full product build — Codanity can help you ship with confidence."
        primaryLabel="Start a Project"
        primaryHref="/contacts"
        secondaryLabel="View All Projects"
        secondaryHref="/projects"
      />
    </>
  );
}
