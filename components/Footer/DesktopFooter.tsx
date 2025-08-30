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
    <div className="hidden lg:block py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Logo />
            <p className="mt-4 text-gray-300 max-w-md">
              We build innovative digital solutions that help businesses grow and succeed in the digital age.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <NavigationLinks navigations={navigations} />
          </div>

          {/* Other Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <NavigationLinks navigations={otherNavigations} />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <Copyright />
          <SocialProfiles socials={socials} />
        </div>
      </div>
    </div>
  );
};
