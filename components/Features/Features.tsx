import React, { FC } from "react";
import { Feature, type Feature as FeatureType } from "./Feature";
import { motion } from "framer-motion";
import { useAnimation } from "@/hooks";
import { Section } from "@/components";

export interface FeaturesProps {
  features: FeatureType[];
}

export const Features: FC<FeaturesProps> = ({ features }) => {
  const { fadeInUp } = useAnimation();

  return (
    <Section background="bg-gradient-to-br from-[#f4f5f7] via-white to-[#f8fafc]" padding="SECTION" maxWidth="MEDIUM" animate={false}>
      {/* Enhanced Header Section */}
      <motion.div 
        className="flex flex-col items-center text-center gap-8 mt-8 lg:mt-14 relative"
        {...fadeInUp()}
      >
        {/* Background decorative elements */}
        <motion.div 
          className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-[#5128a0]/10 to-transparent rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-bl from-blue-400/20 to-transparent rounded-full blur-lg"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.div 
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#5128a0]/10 to-blue-500/10 text-[#5128a0] px-4 py-2 rounded-full text-sm font-medium border border-[#5128a0]/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="w-2 h-2 bg-[#5128a0] rounded-full animate-pulse"></span>
          Trusted by 20+ Companies
        </motion.div>
        
        <motion.h2 
          className="text-4xl lg:text-5xl font-bold text-center leading-tight"
          style={{ lineHeight: '1.1' }}
          {...fadeInUp(0.1)}
        >
          <span className="bg-gradient-to-r from-gray-900 via-[#5128a0] to-gray-900 bg-clip-text text-transparent">
            Our Core Strengths
          </span>
        </motion.h2>
        
        <motion.h4 
          className="text-gray-600 w-full max-w-4xl mx-auto text-center text-lg leading-relaxed"
          {...fadeInUp(0.2)}
        >
          Discover what sets us apart in the world of software development. 
          Our expertise spans across cutting-edge technologies, delivering 
          <span className="text-[#5128a0] font-semibold"> innovative, scalable, and high-performance solutions</span> that drive business growth.
        </motion.h4>
        
        {/* Stats Row */}
        <motion.div 
          className="flex flex-wrap justify-center gap-8 mt-8 pt-8 border-t border-gray-200/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-[#5128a0]">5+</div>
            <div className="text-sm text-gray-500">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#5128a0]">20+</div>
            <div className="text-sm text-gray-500">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#5128a0]">94%</div>
            <div className="text-sm text-gray-500">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#5128a0]">24/7</div>
            <div className="text-sm text-gray-500">Support Available</div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Enhanced Features Grid */}
      <motion.div 
        className="mt-20 lg:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 justify-items-center"
        {...fadeInUp(0.3)}
      >
        {features?.map((feature, index) => (
          <motion.div
            key={feature.id}
            className="w-full max-w-sm group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.4 + index * 0.1,
              ease: "easeOut"
            }}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            <Feature feature={feature} index={index} />
          </motion.div>
        ))}
      </motion.div>
      
    </Section>
  );
};