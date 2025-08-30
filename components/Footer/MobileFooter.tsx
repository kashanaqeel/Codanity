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
    <div className="lg:hidden py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Logo and Description */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Logo />
          </div>
          <p className="text-gray-300 max-w-md mx-auto px-4">
            We build innovative digital solutions that help businesses grow and succeed in the digital age.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8 px-4">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <NavigationLinks navigations={navigations} />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <NavigationLinks navigations={otherNavigations} />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-700 flex flex-col items-center space-y-4 px-4">
          <SocialProfiles socials={socials} />
          <Copyright />
        </div>
      </div>
    </div>
  );
};
