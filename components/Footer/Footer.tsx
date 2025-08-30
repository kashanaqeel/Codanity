import React, { FC } from "react";
import Image from "next/image";
import { DesktopFooter } from "./DesktopFooter";
import { MobileFooter } from "./MobileFooter";

export type Social = {
  id: string;
  title: string;
  icon: string;
  url: string;
};

export type Navigation = {
  id: string;
  title: string;
  url: string;
};

export interface FooterProps {
  socials: Social[];
  navigations: Navigation[];
  otherNavigations: Navigation[];
}

export const Footer: FC<FooterProps> = ({ socials, navigations, otherNavigations }) => {
  return (
    <footer className="bg-[#1f2937] text-white">
      <DesktopFooter
        socials={socials}
        navigations={navigations}
        otherNavigations={otherNavigations}
      />
      <MobileFooter
        socials={socials}
        navigations={navigations}
        otherNavigations={otherNavigations}
      />
    </footer>
  );
};

// Logo component
export const Logo: FC = () => (
  <div className="flex items-center">
    <Image
      src="/codanity-logo-white.svg"
      alt="Codanity Logo"
      width={120}
      height={32}
      className="h-8 w-auto"
    />
  </div>
);
