import React from "react";
import { motion } from "framer-motion";

const NODES = [
  { x: 15, y: 20 }, { x: 35, y: 10 }, { x: 55, y: 25 }, { x: 75, y: 15 }, { x: 90, y: 35 },
  { x: 10, y: 50 }, { x: 30, y: 45 }, { x: 50, y: 55 }, { x: 70, y: 48 }, { x: 88, y: 60 },
  { x: 20, y: 75 }, { x: 45, y: 80 }, { x: 65, y: 72 }, { x: 85, y: 85 },
];

const CONNECTIONS: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [1, 6], [2, 7], [3, 8], [4, 9],
  [5, 6], [6, 7], [7, 8], [8, 9], [5, 10], [6, 11], [7, 12], [8, 13], [10, 11], [11, 12], [12, 13],
];

export const NeuralGrid: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-40" aria-hidden>
      <svg className="h-full w-full" preserveAspectRatio="none">
        {CONNECTIONS.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={`${NODES[a].x}%`}
            y1={`${NODES[a].y}%`}
            x2={`${NODES[b].x}%`}
            y2={`${NODES[b].y}%`}
            stroke="url(#neuralLine)"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0.1, 0.35, 0.1] }}
            transition={{
              pathLength: { duration: 2, delay: i * 0.05 },
              opacity: { duration: 3 + (i % 4), repeat: Infinity, ease: "easeInOut" },
            }}
          />
        ))}
        <defs>
          <linearGradient id="neuralLine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>
      {NODES.map((node, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-brand-light"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          animate={{ opacity: [0.3, 0.9, 0.3], scale: [1, 1.5, 1] }}
          transition={{ duration: 2 + (i % 3), delay: i * 0.15, repeat: Infinity }}
        />
      ))}
    </div>
  );
};

export default NeuralGrid;
