import React, { FC } from "react";
import Link from "next/link";
import type { Navigation } from "./Navbar";

export interface NavbarLinksProps {
  navigations: Navigation[];
}

export const NavigationLinksDesktop: FC<NavbarLinksProps> = ({
  navigations,
}) => {
  return (
    <ul className="flex flex-row items-center gap-8">
      {navigations?.map((navlink) => {
        return (
          <Link key={navlink.id} href={navlink.url}>
            <li className="text-gray-400 hover:text-gray-600 text-base">
              {navlink.title}
            </li>
          </Link>
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
  return (
    <div className="w-full py-4">
      <ul className="flex flex-col items-center gap-4">
        {navigations?.map((navlink) => {
          return (
            <Link key={navlink.id} href={navlink.url} onClick={onLinkClick}>
              <li className="text-gray-800 text-base hover:text-[#5128a0] transition-colors">{navlink.title}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
