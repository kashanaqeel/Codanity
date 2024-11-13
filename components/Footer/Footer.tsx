import React, { FC } from "react";
import Image from "next/image";
import { FooterProps } from "./Footer.interface";
import { DesktopFooter } from "./DesktopFooter";
import { MobileFooter } from "./MobileFooter";

export const Logo = () => {
  return (
    <div className="flex items-center">
      <Image src="/codanity-logo-white.svg" alt="logo" height={32} width={32} />
      <span className="text-2xl font-bold font-mono text-white">Codanity</span>
    </div>
  );
};

export const Footer: FC<FooterProps> = ({
  navigations,
  otherNavigations,
  socials,
}) => {
  return (
    <div className="bg-[#5128a0] py-16 h-full">
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
    </div>
  );
};
