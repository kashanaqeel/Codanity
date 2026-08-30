import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CursorGlow: React.FC = () => {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const x = useSpring(mouseX, { stiffness: 120, damping: 25 });
  const y = useSpring(mouseY, { stiffness: 120, damping: 25 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    setEnabled(!prefersReduced && isFinePointer);

    const onMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[1]"
      aria-hidden
    >
      <motion.div
        className="absolute h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/8 blur-3xl"
        style={{ left: x, top: y }}
      />
      <motion.div
        className="absolute h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/6 blur-2xl"
        style={{ left: x, top: y }}
      />
    </motion.div>
  );
};

export default CursorGlow;
