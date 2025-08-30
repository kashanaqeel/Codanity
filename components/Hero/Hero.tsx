import React, { useRef, useEffect, useState } from "react";
import { ArrowRight, Database, Layout, Smartphone, Globe, LucideIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useSpring, animated, useTrail, config } from "@react-spring/web";

interface CTAButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  onClick?: () => void;
}

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
}

interface TechStackCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

type TechStack = {
  icon: LucideIcon;
  label: string;
  description: string;
};

// Constants
const TECH_STACKS: TechStack[] = [
  {
    icon: Layout,
    label: "Frontend",
    description: "Next.js, React"
  },
  {
    icon: Database,
    label: "Backend",
    description: "Node.js, Django"
  },
  {
    icon: Smartphone,
    label: "Mobile",
    description: "React Native"
  },
  {
    icon: Globe,
    label: "Full Stack",
    description: "MERN Stack"
  }
];
 
const STATS: StatItemProps[] = [
  { value: 20, label: "Projects", suffix: "+" },
  { value: 94, label: "Client Satisfaction", suffix: "%" }
];

// Components
const TechStackCard: React.FC<TechStackCardProps> = ({ Icon, title, description, index = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Create smooth wave effect with gentle elevation
  const waveSpring = useSpring({
    from: { y: 0, scale: 1, rotate: 0, shadow: 0 },
    to: async (next) => {
      while (true) {
        // Rise up with gentle scale and shadow
        await next({ y: -15, scale: 1.04, rotate: 2, shadow: 8 });
        await new Promise(resolve => setTimeout(resolve, 1800 + index * 250));
        // Gentle descent
        await next({ y: -8, scale: 1.02, rotate: -1, shadow: 4 });
        await new Promise(resolve => setTimeout(resolve, 1800 + index * 250));
        // Return to base with slight bounce
        await next({ y: 0, scale: 1, rotate: 0, shadow: 0 });
        await new Promise(resolve => setTimeout(resolve, 1800 + index * 250));
        // Subtle lift
        await next({ y: -5, scale: 1.01, rotate: 1, shadow: 2 });
        await new Promise(resolve => setTimeout(resolve, 1800 + index * 250));
      }
    },
    config: config.gentle,
    loop: true,
  });

  const tapSpring = useSpring({
    scale: 1,
    config: config.wobbly,
  });

  return (
    <animated.div 
      className="bg-white p-4 sm:p-6 rounded-xl shadow-lg cursor-pointer"
      style={waveSpring}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => {
        tapSpring.scale.set(0.95);
        setTimeout(() => tapSpring.scale.set(1), 150);
      }}
    >
      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#5128a0] mb-2" />
      <h3 className="font-semibold text-sm sm:text-base">{title}</h3>
      <p className="text-xs sm:text-sm text-gray-600">{description}</p>
    </animated.div>
  );
};

const StatItem: React.FC<StatItemProps> = ({ value, label, suffix }) => (
  <div className="text-center">
    <p className="text-xl sm:text-2xl font-bold text-gray-900">
      <CountUp
        end={value}
        suffix={suffix}
        duration={2.5}
        delay={0.5}
        enableScrollSpy={true}
        scrollSpyOnce={true}
      />
    </p>
    <p className="text-xs sm:text-sm text-gray-600">{label}</p>
  </div>
);

const HeroImageDesktop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Create staggered animations for tech stack cards
  const trail = useTrail(TECH_STACKS.length, {
    from: { opacity: 0, y: 30, scale: 0.9 },
    to: isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 },
    config: config.gentle,
    delay: 300,
  });

  // Container animation
  const containerSpring = useSpring({
    from: { opacity: 0, x: 50 },
    to: isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 },
    config: config.gentle,
    delay: 100,
  });

  return (
    <animated.div 
      className="relative hidden lg:block w-1/2"
      ref={containerRef}
      style={containerSpring}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10 rounded-3xl" />
      <div className="relative p-8 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-8">
          {trail.map((props, index) => (
            <animated.div
              key={index}
              style={props}
            >
              <TechStackCard
                Icon={TECH_STACKS[index].icon}
                title={TECH_STACKS[index].label}
                description={TECH_STACKS[index].description}
                index={index}
              />
            </animated.div>
          ))}
        </div>
      </div>
    </animated.div>
  );
};

const HeroImageMobile: React.FC = () => {
  // Mobile view no longer shows tech stacks
  return null;
};

const CTAButton: React.FC<CTAButtonProps> = ({ children, primary = false, onClick }) => (
  <button 
    onClick={onClick}
    className={`inline-flex items-center justify-center gap-2 w-full sm:w-auto ${
      primary 
        ? "bg-[#5128a0] hover:bg-[#3e217e] text-white" 
        : "bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-200"
    } px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base`}
  >
    {children}
    {primary && <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />}
  </button>
);

export const Hero: React.FC = () => {
  return (
    <div className="bg-white w-full min-h-[calc(100vh-4rem)] pt-8 lg:pt-12">
      <div className="min-h-[calc(100vh-4rem)] flex flex-col-reverse lg:flex-row items-center justify-center max-w-6xl mx-auto gap-6 sm:gap-8 md:gap-12 lg:gap-16 px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
        <motion.div 
          className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6 text-center lg:text-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-blue-50 text-[#5128a0] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.05 }}
          >
            Full-Stack Development Solutions
          </motion.div>
          
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:text-start text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Bringing Your
            <span className="text-[#5128a0]"> Digital Vision</span> 
            <div className="mt-0">to Life</div>
          </motion.h1>
          
          <motion.h4 
            className="text-base sm:text-lg text-gray-600 w-full lg:w-4/5 mx-auto lg:mx-0 text-center lg:text-start leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
          >
            Expert development services across Next.js, MERN Stack, Django, and Mobile platforms. 
            We transform your ideas into powerful, scalable solutions.
          </motion.h4>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Link href="/contacts" className="w-full sm:w-auto">
              <CTAButton primary>
                Get Started
              </CTAButton>
            </Link>
            <Link href='/projects' className="w-full sm:w-auto">
              <CTAButton>
                View Projects
              </CTAButton>
            </Link>
            <Link href='/aboutUs' className="w-full sm:w-auto">
              <CTAButton>
                Learn More
              </CTAButton>
            </Link>
          </motion.div>
          
          <motion.div 
            className="flex items-center justify-center lg:justify-start gap-6 sm:gap-8 pt-6 sm:pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.25 }}
          >
            {STATS.map((stat, index) => (
              <StatItem
                key={index}
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
              />
            ))}
          </motion.div>
        </motion.div>
        
        <HeroImageDesktop />
      </div>
    </div>
  );
};

export default Hero;