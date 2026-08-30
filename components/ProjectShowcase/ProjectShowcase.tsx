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

  useEffect(() => {
    if (!lightboxOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [lightboxOpen]);

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
      <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,240px)_minmax(0,1fr)] lg:gap-8">
        {/* Main viewer — first on mobile */}
        <div className="order-1 min-w-0 space-y-4 lg:order-none">
          <div className="card-surface min-w-0 overflow-hidden">
            <div className="flex flex-wrap items-start justify-between gap-2 border-b border-slate-200/80 bg-surface-subtle px-3 py-3 sm:px-4">
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium uppercase tracking-wider text-ink-muted">Viewing</p>
                <p className="break-words font-display text-sm font-semibold text-ink sm:text-base">
                  {active.sectionTitle}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <span className="whitespace-nowrap text-xs text-ink-muted">
                  {safeIndex + 1} / {images.length}
                </span>
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-secondary transition-colors hover:bg-white hover:text-brand"
                  aria-label="Open fullscreen"
                >
                  <Maximize2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="relative min-h-[220px] w-full bg-slate-100 sm:min-h-[300px] lg:min-h-[360px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.src}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 flex items-center justify-center p-2 sm:p-3"
                >
                  <Image
                    src={active.src}
                    alt={`${projectName} - ${active.sectionTitle}`}
                    fill
                    className="cursor-zoom-in object-contain"
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
                    className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-ink shadow-soft transition hover:bg-white sm:left-3 sm:h-10 sm:w-10"
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => goTo(safeIndex + 1)}
                    className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-ink shadow-soft transition hover:bg-white sm:right-3 sm:h-10 sm:w-10"
                    aria-label="Next screenshot"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            {active.description && (
              <div className="border-t border-slate-200/80 px-3 py-4 sm:px-4">
                <p className="break-words text-sm leading-relaxed text-ink-secondary">
                  {active.description}
                </p>
              </div>
            )}
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex max-w-full gap-2 overflow-x-auto pb-1 sm:gap-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {images.map((image, index) => (
                <button
                  key={`${image.src}-${index}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 bg-slate-100 transition-all duration-300 sm:h-20 sm:w-28 ${
                    index === safeIndex
                      ? "border-brand shadow-glow"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={`${image.sectionTitle} thumbnail`}
                    fill
                    className="object-contain p-0.5"
                    sizes="112px"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Section navigation */}
        <div className="order-2 flex min-w-0 max-w-full flex-row gap-2 overflow-x-auto pb-1 lg:order-none lg:flex-col lg:overflow-visible lg:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {pages.map((page, index) => {
            const isActive = index === activeSection;

            return (
              <button
                key={page.title}
                type="button"
                onClick={() => selectSection(index)}
                className={`max-w-[12rem] shrink-0 rounded-xl border px-3 py-2.5 text-left transition-all duration-300 sm:max-w-none sm:px-4 sm:py-3 lg:w-full lg:max-w-none ${
                  isActive
                    ? "border-brand/30 bg-brand-muted shadow-soft"
                    : "border-slate-200/80 bg-white hover:border-brand/20 hover:bg-surface-subtle"
                }`}
              >
                <span className="block break-words text-sm font-semibold text-ink">{page.title}</span>
                {page.description && (
                  <span className="mt-1 hidden line-clamp-2 break-words text-xs text-ink-secondary lg:block">
                    {page.description}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-3 backdrop-blur-sm sm:p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              type="button"
              className="absolute right-3 top-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-4 sm:top-4"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              className="relative flex w-full max-w-6xl flex-col items-center"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => goTo(safeIndex - 1)}
                    className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:-left-12 sm:h-11 sm:w-11"
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    type="button"
                    onClick={() => goTo(safeIndex + 1)}
                    className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:-right-12 sm:h-11 sm:w-11"
                    aria-label="Next screenshot"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}

              <div className="relative h-[min(75vh,640px)] w-full rounded-2xl bg-slate-900/80">
                <Image
                  src={active.src}
                  alt={`${projectName} fullscreen`}
                  fill
                  className="rounded-2xl object-contain p-2 sm:p-4"
                  sizes="100vw"
                  priority
                />
              </div>

              <p className="mt-3 max-w-full break-words px-2 text-center text-sm text-white/80">
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
