import React from "react";
import { motion } from "framer-motion";

const TECH_ITEMS = [
  "Next.js",
  "React",
  "TypeScript",
  "Nest.js",
  "PostgreSQL",
  "Tailwind CSS",
  "React Native",
  "LangChain",
  "Django",
  "Node.js",
  "RAG",
  "n8n",
];

export const TechMarquee: React.FC = () => {
  const items = [...TECH_ITEMS, ...TECH_ITEMS];

  return (
    <div className="relative mt-10 overflow-hidden border-t border-slate-200/70 pt-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white/80 to-transparent" />

      <motion.div
        className="flex w-max gap-3"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="inline-flex shrink-0 items-center rounded-full border border-slate-200/80 bg-white px-4 py-2 text-sm font-medium text-ink-secondary shadow-soft"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default TechMarquee;
