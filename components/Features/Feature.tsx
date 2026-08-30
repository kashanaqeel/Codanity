import React, { FC } from "react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";

export interface Feature {
  id: string;
  icon?: string;
  lucideIcon?: LucideIcon;
  title: string;
  description: string;
  iconBg?: string;
  iconColor?: string;
  iconHoverRing?: string;
}

export interface FeatureProps {
  feature: Feature;
  index?: number;
}

export const Feature: FC<FeatureProps> = ({ feature }) => {
  const LucideIcon = feature.lucideIcon;

  const iconBg = feature.iconBg ?? "bg-brand-muted";
  const iconColor = feature.iconColor ?? "text-brand";
  const iconHoverRing =
    feature.iconHoverRing ?? "group-hover:ring-brand/20 group-hover:bg-brand/10";

  return (
    <div className="card-surface group relative h-full overflow-hidden p-6 lg:p-7">
      <div
        className={`relative mb-5 inline-flex rounded-2xl p-4 ring-1 ring-transparent transition-all duration-300 ${iconBg} ${iconHoverRing}`}
      >
        {LucideIcon ? (
          <LucideIcon
            className={`h-8 w-8 transition-transform duration-300 group-hover:scale-105 ${iconColor}`}
          />
        ) : feature.icon ? (
          <Image
            src={feature.icon}
            alt={feature.title}
            height={48}
            width={48}
            className="transition-transform duration-300 group-hover:scale-105"
          />
        ) : null}
      </div>

      <h3 className="relative font-display text-xl font-semibold text-ink transition-colors duration-300 group-hover:text-brand">
        {feature.title}
      </h3>

      <p className="relative mt-3 text-sm leading-relaxed text-ink-secondary">{feature.description}</p>

      <div className="relative mt-5 h-0.5 w-0 rounded-full bg-brand transition-all duration-500 group-hover:w-full" />
    </div>
  );
};
