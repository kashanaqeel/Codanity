import React, { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useAnimation } from "@/hooks";

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface FeatureProps {
  feature: Feature;
  index?: number;
}

export const Feature: FC<FeatureProps> = ({ feature, index = 0 }) => {
  const { hoverScale } = useAnimation();

  return (
    <motion.div 
      className="flex flex-col items-center lg:items-start gap-4 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 group"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {/* Enhanced Icon Container */}
      <motion.div 
        className="relative p-4 bg-gradient-to-br from-[#5128a0]/10 to-blue-500/10 rounded-2xl group-hover:from-[#5128a0]/20 group-hover:to-blue-500/20 transition-all duration-300"
        {...hoverScale}
        whileHover={{ 
          rotate: [0, -5, 5, 0],
          transition: { duration: 0.6, ease: "easeInOut" }
        }}
      >
        <Image 
          src={feature.icon} 
          alt={feature.title} 
          height={56} 
          width={56}
          className="group-hover:scale-110 transition-transform duration-300"
        />
        {/* Decorative ring */}
        <motion.div 
          className="absolute inset-0 rounded-2xl border-2 border-[#5128a0]/20 group-hover:border-[#5128a0]/40 transition-colors duration-300"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 8 + index * 2, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      </motion.div>
      
      {/* Enhanced Title */}
      <motion.h3 
        className="text-xl font-bold text-gray-900 text-center lg:text-start group-hover:text-[#5128a0] transition-colors duration-300"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {feature.title}
      </motion.h3>
      
      {/* Enhanced Description */}
      <motion.p 
        className="text-sm text-gray-600 text-center lg:text-start leading-relaxed group-hover:text-gray-800 transition-colors duration-300"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        {feature.description}
      </motion.p>
      
      {/* Hover indicator */}
      <motion.div 
        className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-[#5128a0] to-blue-500 rounded-full transition-all duration-300"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
      />
    </motion.div>
  );
};
