import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { NavigationLinksDesktop, NavigationLinksMobile } from "./NavigationLinks";
import { Button } from "@/components";

export type Navigation = {
  id: string;
  title: string;
  url: string;
};

export interface NavbarProps {
  navigations: Navigation[];
}

export const Navbar: FC<NavbarProps> = ({ navigations }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]);

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav
        className={`transition-all duration-300 ease-smooth ${
          scrolled ? "glass-nav-scrolled backdrop-blur-xl" : "glass-nav"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-[4.25rem]">
            <Link href="/" className="group flex items-center gap-3">
              <Image
                src="/codanity-logo-purple.svg"
                alt="Codanity logo"
                height={34}
                width={34}
                className="transition-transform duration-300 group-hover:scale-105"
              />
              <span className="font-display text-xl font-bold tracking-tight text-brand lg:text-2xl">
                Codanity
              </span>
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              <NavigationLinksDesktop navigations={navigations} />
              <Button href="/contacts" variant="primary" size="sm">
                Let&apos;s Talk
              </Button>
            </div>

            <button
              onClick={() => setIsOpen((open) => !open)}
              className="rounded-xl p-2 text-ink-secondary transition-colors hover:bg-surface-muted hover:text-ink md:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-slate-200/80 bg-white/95 backdrop-blur-xl md:hidden"
            >
              <div className="space-y-4 px-4 py-5">
                <NavigationLinksMobile
                  navigations={navigations}
                  onLinkClick={() => setIsOpen(false)}
                />
                <Button href="/contacts" variant="primary" size="md" className="w-full">
                  Let&apos;s Talk
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
