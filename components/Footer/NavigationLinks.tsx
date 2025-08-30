import Link from "next/link";
import React, { FC } from "react";
import type { Navigation } from "./Footer";

export interface NavigationProps {
  navigations: Navigation[];
}

export const NavigationLinks: FC<NavigationProps> = ({ navigations }) => {
  return (
    <nav className="flex flex-col space-y-2">
      {navigations.map((nav) => (
        <Link
          key={nav.id}
          href={nav.url}
          className="text-gray-300 hover:text-white transition-colors text-sm"
        >
          {nav.title}
        </Link>
      ))}
    </nav>
  );
};
