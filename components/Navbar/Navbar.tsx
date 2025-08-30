import React, { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { NavigationLinksDesktop, NavigationLinksMobile } from "./NavigationLinks";

export type Navigation = {
  id: string;
  title: string;
  url: string;
};

export interface NavbarProps {
  navigations: Navigation[];
}

export const Navbar: FC<NavbarProps> = ({ navigations }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white fixed w-full top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/codanity-logo-purple.svg" alt="logo" height={32} width={32} />
            <span className="text-2xl font-bold font-mono text-[#5128a0]">Codanity</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationLinksDesktop navigations={navigations} />
            <Link
              href="/contacts"
              className="bg-[#5128a0] text-white px-6 py-2 rounded-lg hover:bg-[#3e217e] transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#5128a0]"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavigationLinksMobile 
                navigations={navigations} 
                onLinkClick={() => setIsOpen(false)}
              />
              <div className="pt-4">
                <Link
                  href="/contacts"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-[#5128a0] text-white px-6 py-2 rounded-lg hover:bg-[#3e217e] transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};
