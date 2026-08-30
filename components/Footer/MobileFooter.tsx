import React, { FC } from "react";
import { Copyright } from "./Copyright";
import { Logo } from "./Footer";
import { NavigationLinks } from "./NavigationLinks";
import { SocialProfiles } from "./SocialProfiles";
import type { FooterProps } from "./Footer";

export const MobileFooter: FC<FooterProps> = ({
  socials,
  navigations,
  otherNavigations,
}) => {
  return (
    <div className="px-4 py-12 lg:hidden">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <Logo />
          </div>
          <p className="mx-auto max-w-md px-4 text-sm leading-relaxed text-slate-400">
            Codanity builds innovative digital products that help businesses grow, scale, and succeed
            in a fast-moving digital world.
          </p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-8 px-4 sm:grid-cols-2">
          <div className="text-center sm:text-left">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <NavigationLinks navigations={navigations} />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <NavigationLinks navigations={otherNavigations} />
          </div>
        </div>

        <div className="flex flex-col items-center space-y-4 border-t border-white/10 px-4 pt-8">
          <SocialProfiles socials={socials} />
          <Copyright />
        </div>
      </div>
    </div>
  );
};
