import React from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export interface TabItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface TabGroupProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (id: string) => void;
}

export const TabGroup: React.FC<TabGroupProps> = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={`relative flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors duration-300 sm:px-5 sm:py-3 ${
              isActive ? "text-brand" : "text-ink-secondary hover:text-ink"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="tab-pill"
                className="absolute inset-0 rounded-xl border border-brand/20 bg-brand-muted shadow-soft"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <Icon className="relative h-4 w-4" />
            <span className="relative">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default TabGroup;
