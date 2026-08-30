import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import type { PagesInfoInterface } from "@/types";

interface FlatImage {
  sectionTitle: string;
  src: string;
  description?: string;
}

export interface ProjectShowcaseProps {
  pages: PagesInfoInterface[];
  projectName: string;
}

const buildImages = (pages: PagesInfoInterface[]): FlatImage[] =>
  pages.flatMap((page) =>
    (page.imgArr ?? [])
      .filter((src): src is string => typeof src === "string" && src.length > 0)
      .map((src) => ({
        sectionTitle: page.title,
        src,
        description: page.description,
      }))
  );

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ pages, projectName }) => {
  const images = useMemo(() => buildImages(pages), [pages]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    setActiveIndex(0);
    setLightboxOpen(false);
  }, [pages]);

  useEffect(() => {
    if (images.length === 0) {
      setActiveIndex(0);
      return;
    }
    if (activeIndex >= images.length) {
      setActiveIndex(0);
    }
  }, [images.length, activeIndex]);

  const safeIndex = images.length > 0 ? activeIndex % images.length : 0;
  const active = images[safeIndex];
  const activeSection = pages.findIndex((page) => page.title === active?.sectionTitle);

  const goTo = (index: number) => {
    if (images.length === 0) return;
    setActiveIndex((index + images.length) % images.length);
  };

  const selectSection = (sectionIndex: number) => {
    const firstImageIndex = images.findIndex(
      (img) => img.sectionTitle === pages[sectionIndex]?.title
    );
    if (firstImageIndex >= 0) setActiveIndex(firstImageIndex);
  };

  if (images.length === 0 || !active) {
    return (
      <div className="card-surface p-8 text-center">
        <p className="font-display text-lg font-semibold text-ink">No screenshots available</p>
        <p className="mt-2 text-sm text-ink-secondary">
          Visuals for this project haven&apos;t been added yet.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        {/* Section navigation */}
        <div className="flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
          {pages.map((page, index) => {
            const isActive = index === activeSection;

            return (
              <button
                key={page.title}
                type="button"
                onClick={() => selectSection(index)}
                className={`shrink-0 rounded-xl border px-4 py-3 text-left transition-all duration-300 lg:w-full ${
                  isActive
                    ? "border-brand/30 bg-brand-muted shadow-soft"
                    : "border-slate-200/80 bg-white hover:border-brand/20 hover:bg-surface-subtle"
                }`}
              >
                <span className="block text-sm font-semibold text-ink">{page.title}</span>
                {page.description && (
                  <span className="mt-1 hidden line-clamp-2 text-xs text-ink-secondary lg:block">
                    {page.description}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Main viewer */}
        <div className="space-y-4">
          <div className="card-surface overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-200/80 bg-surface-subtle px-4 py-3">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-ink-muted">Viewing</p>
                <p className="font-display text-sm font-semibold text-ink sm:text-base">
                  {active.sectionTitle}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-ink-muted">
                  {safeIndex + 1} / {images.length}
                </span>
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="rounded-lg p-2 text-ink-secondary transition-colors hover:bg-white hover:text-brand"
                  aria-label="Open fullscreen"
                >
                  <Maximize2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.src}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={active.src}
                    alt={`${projectName} - ${active.sectionTitle}`}
                    fill
                    className="cursor-zoom-in object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 70vw"
                    onClick={() => setLightboxOpen(true)}
                  />
                </motion.div>
              </AnimatePresence>

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => goTo(safeIndex - 1)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-ink shadow-soft transition hover:bg-white"
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => goTo(safeIndex + 1)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-ink shadow-soft transition hover:bg-white"
                    aria-label="Next screenshot"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            {active.description && (
              <div className="border-t border-slate-200/80 px-4 py-4">
                <p className="text-sm leading-relaxed text-ink-secondary">{active.description}</p>
              </div>
            )}
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-1">
              {images.map((image, index) => (
                <button
                  key={`${image.src}-${index}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-300 sm:h-20 sm:w-32 ${
                    index === safeIndex
                      ? "border-brand shadow-glow"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={`${image.sectionTitle} thumbnail`}
                    fill
                    className="object-cover object-top"
                    sizes="128px"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              type="button"
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-h-[90vh] w-full max-w-6xl"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-900">
                <Image
                  src={active.src}
                  alt={`${projectName} fullscreen`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
              <p className="mt-4 text-center text-sm text-white/80">
                {active.sectionTitle} — {safeIndex + 1} of {images.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectShowcase;
