import React, { FC, useState } from "react";
import Image from "next/image";
import { Navigation } from "./Navbar.interface";
import Link from "next/link";


export interface NavbarProps {
  navigations: Navigation[];
}

interface IconProps {
  url: string;
  onClick: () => void;
}

const Logo: FC = () => {
  return (
    <div className="flex items-center">

      {/*will add our logo here*/} 
      <Link href={"/"} className="flex items-center">
      <Image
        src="/codanity-logo-purple.svg"
        alt="Codanity Logo"
        width={32}
        height={32}
        className="mr-2"
      />
      
      <span className="text-2xl font-bold font-mono bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Codanity
      </span>
      </Link>
    </div>
  );
};

const Icon: FC<IconProps> = ({ url, onClick }) => {
  return (
    <button
      className="p-2 hover:bg-gray-100 rounded-lg transition-colors md:hidden"
      onClick={onClick}
    >
      <Image src={url} alt="Menu Icon" width={24} height={24} />
    </button>
  );
};

const NavigationLinksDesktop: FC<{ navigations: Navigation[] }> = ({ navigations }) => {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {navigations.map((item) => (
        <a
          key={item.id}
          href={item.url}
          className="text-gray-700 hover:text-[#5128a0] transition-colors"
        >
          {item.title}
        </a>
      ))}
    </div>
  );
};

const NavigationLinksMobile: FC<{ navigations: Navigation[] }> = ({ navigations }) => {
  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-lg py-4 md:hidden">
      {navigations.map((item) => (
        <a
          key={item.id}
          href={item.url}
          className="block px-6 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
        >
          {item.title}
        </a>
      ))}
    </div>
  );
};

const StartProjectButton: FC = () => {
  return (
    <Link href="/contacts">
    <button className="bg-[#5128a0] hover:bg-[#3e217e] text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg">
  Contact Us
</button>
    </Link>
  );
};

export const Navbar: FC<NavbarProps> = ({ navigations }) => {
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false);

  return (
    <nav className="relative bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>

          <div className="flex-1 flex items-center justify-center">
            <NavigationLinksDesktop navigations={navigations} />
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <StartProjectButton />
            </div>

            {!isMobileNavigationOpen && (
              <Icon
                onClick={() => setIsMobileNavigationOpen(true)}
                url="/icon-hamburger.svg"
              />
            )}
            {isMobileNavigationOpen && (
              <Icon
                onClick={() => setIsMobileNavigationOpen(false)}
                url="/icon-close.svg"
              />
            )}
          </div>
        </div>

        {isMobileNavigationOpen && (
          <div className="md:hidden">
            <NavigationLinksMobile navigations={navigations} />
            <div className="px-4 py-3">
              <StartProjectButton />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
