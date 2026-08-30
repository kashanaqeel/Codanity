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
    <footer className="bg-footer-gradient text-white">
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

export const Logo: FC = () => (
  <div className="flex items-center">
    <Image
      src="/codanity-logo-white.svg"
      alt="Codanity Logo"
      width={130}
      height={34}
      className="h-8 w-auto"
    />
  </div>
);
