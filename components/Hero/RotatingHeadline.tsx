import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const PHRASES = [
  "web platforms",
  "online stores",
  "mobile apps",
  "AI products",
  "digital products",
];

export const RotatingHeadline: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % PHRASES.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <span className="relative mt-1 block min-h-[1.2em] w-full">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={PHRASES[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="block break-words text-brand sm:whitespace-nowrap"
        >
          {PHRASES[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default RotatingHeadline;
