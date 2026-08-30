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
      <section className="relative overflow-hidden bg-hero-radial">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <motion.div {...fadeInUpSmall()}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand transition-colors hover:text-brand-dark"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to portfolio
            </Link>
          </motion.div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <motion.div className="space-y-5" {...fadeInUp(0.05)}>
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

              <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
                {project.companyName}
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-ink-secondary">
                {project.shortDescription}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.websiteLink && (
                  <a
                    href={project.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
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
                    className="btn-secondary"
                  >
                    <Github className="h-4 w-4" />
                    Source Code
                  </a>
                )}
              </div>
            </motion.div>

            <motion.div className="card-surface overflow-hidden" {...fadeInUp(0.12)}>
              <div className="relative aspect-[16/10]">
                <Image
                  src={project.companyLogoImg}
                  alt={project.companyName}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
          {/* Sticky sidebar */}
          <motion.aside className="lg:sticky lg:top-28 lg:self-start" {...fadeInUp(0.1)}>
            <div className="card-surface space-y-5 p-6">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-ink-muted">Timeline</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-ink-secondary">
                  <Calendar className="h-4 w-4 text-brand" />
                  {formatDate(project.startDate)} – {formatDate(project.endDate)}
                </div>
              </div>

              <div>
                <div className="mb-3 flex items-center gap-2">
                  <Tag className="h-4 w-4 text-brand" />
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
            </div>
          </motion.aside>

          <div className="space-y-12">
            {/* Interactive showcase */}
            <motion.section {...fadeInUp(0.15)}>
              <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">Product showcase</h2>
              <p className="mt-2 text-ink-secondary">
                Browse sections, navigate screenshots, and open fullscreen to explore the work in detail.
              </p>
              <div className="mt-8">
                <ProjectShowcase
                  key={project.id}
                  pages={project.pagesInfoArr}
                  projectName={project.companyName}
                />
              </div>
            </motion.section>

            {/* Overview */}
            <motion.section className="card-surface p-6 sm:p-8" {...fadeInUp(0.2)}>
              <h2 className="font-display text-2xl font-bold text-ink">Project overview</h2>
              <div className="mt-5 space-y-4">
                {project.descriptionDetails.paragraphs.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed text-ink-secondary">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.section>

            {/* Key features */}
            <motion.section {...fadeInUp(0.25)}>
              <h2 className="font-display text-2xl font-bold text-ink">What we delivered</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {project.descriptionDetails.bullets.map((bullet, index) => (
                  <motion.div
                    key={bullet}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="card-surface flex gap-3 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    <p className="text-sm leading-relaxed text-ink-secondary">{bullet}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>
        </div>

        {/* Prev / Next */}
        <motion.div
          className="mt-16 grid gap-4 border-t border-slate-200/80 pt-10 sm:grid-cols-2"
          {...fadeInUp(0.3)}
        >
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.id}`}
              className="card-surface group flex items-center gap-4 p-5 transition-all hover:border-brand/25"
            >
              <ArrowLeft className="h-5 w-5 text-brand transition-transform group-hover:-translate-x-1" />
              <div>
                <p className="text-xs text-ink-muted">Previous project</p>
                <p className="font-display font-semibold text-ink group-hover:text-brand">
                  {prevProject.companyName}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextProject && (
            <Link
              href={`/projects/${nextProject.id}`}
              className="card-surface group flex items-center justify-end gap-4 p-5 text-right transition-all hover:border-brand/25"
            >
              <div>
                <p className="text-xs text-ink-muted">Next project</p>
                <p className="font-display font-semibold text-ink group-hover:text-brand">
                  {nextProject.companyName}
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-brand transition-transform group-hover:translate-x-1" />
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
