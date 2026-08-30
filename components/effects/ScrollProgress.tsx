import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const width = useSpring(0, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(value);
      width.set(value);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [width]);

  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-brand via-brand-light to-blue-500"
      style={{ width: `${progress}%` }}
      aria-hidden
    />
  );
};

export default ScrollProgress;
