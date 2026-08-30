import React, { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import type { Navigation } from "./Navbar";

export interface NavbarLinksProps {
  navigations: Navigation[];
}

const linkClasses = (active: boolean) =>
  `relative text-sm font-medium transition-colors duration-200 ${
    active ? "text-brand" : "text-ink-secondary hover:text-ink"
  }`;

export const NavigationLinksDesktop: FC<NavbarLinksProps> = ({ navigations }) => {
  const router = useRouter();

  return (
    <ul className="flex items-center gap-8">
      {navigations.map((navlink) => {
        const active = router.pathname === navlink.url || router.pathname.startsWith(`${navlink.url}/`);

        return (
          <li key={navlink.id}>
            <Link href={navlink.url} className={linkClasses(active)}>
              {navlink.title}
              {active && (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-brand" />
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export interface NavigationLinksMobileProps extends NavbarLinksProps {
  onLinkClick: () => void;
}

export const NavigationLinksMobile: FC<NavigationLinksMobileProps> = ({
  navigations,
  onLinkClick,
}) => {
  const router = useRouter();

  return (
    <ul className="flex flex-col gap-1">
      {navigations.map((navlink) => {
        const active = router.pathname === navlink.url;

        return (
          <li key={navlink.id}>
            <Link
              href={navlink.url}
              onClick={onLinkClick}
              className={`block rounded-xl px-3 py-2.5 text-base font-medium transition-colors ${
                active
                  ? "bg-brand-muted text-brand"
                  : "text-ink-secondary hover:bg-surface-muted hover:text-ink"
              }`}
            >
              {navlink.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
