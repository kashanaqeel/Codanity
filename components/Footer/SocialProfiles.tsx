import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Social } from "./Footer";

export interface SocialProps {
  socials: Social[];
}

export const SocialProfiles: FC<SocialProps> = ({ socials }) => {
  return (
    <div className="flex items-center space-x-4">
      {socials.map((social) => (
        <Link
          key={social.id}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors"
          aria-label={social.title}
        >
          <Image
            src={social.icon}
            alt={social.title}
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </Link>
      ))}
    </div>
  );
};
