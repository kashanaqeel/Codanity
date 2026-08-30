import React, { FC } from "react";
import { Copyright } from "./Copyright";
import { Logo } from "./Footer";
import { NavigationLinks } from "./NavigationLinks";
import { SocialProfiles } from "./SocialProfiles";
import type { FooterProps } from "./Footer";

export const DesktopFooter: FC<FooterProps> = ({
  socials,
  navigations,
  otherNavigations,
}) => {
  return (
    <div className="hidden py-16 lg:block">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-400">
              Codanity builds innovative digital products that help businesses grow, scale, and succeed
              in a fast-moving digital world.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <NavigationLinks navigations={navigations} />
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <NavigationLinks navigations={otherNavigations} />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <Copyright />
          <SocialProfiles socials={socials} />
        </div>
      </div>
    </div>
  );
};
