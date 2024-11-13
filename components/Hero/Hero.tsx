import React from "react";
import { ArrowRight, Database, Layout, Smartphone, Globe, LucideIcon } from "lucide-react";
import Link from "next/link";

// Types and Interfaces
interface TechStackIconProps {
  Icon: LucideIcon;
  label: string;
}

interface CTAButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  onClick?: () => void;
}

interface StatItemProps {
  value: string;
  label: string;
}

interface TechStackCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
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
  { value: "50+", label: "Projects" },
  { value: "4", label: "Tech Stacks" },
  { value: "100%", label: "Client Satisfaction" }
];

// Components
const TechStackIcon: React.FC<TechStackIconProps> = ({ Icon, label }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="p-2 bg-[#5128a0] rounded-lg">
      <Icon className="w-6 h-6 text-[#5128a0]" />
    </div>
    <span className="text-sm text-gray-600">{label}</span>
  </div>
);

const TechStackCard: React.FC<TechStackCardProps> = ({ Icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
    <Icon className="w-8 h-8 text-[#5128a0] mb-2" />
    <h3 className="font-semibold">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const StatItem: React.FC<StatItemProps> = ({ value, label }) => (
  <div className="text-center">
    <p className="text-2xl font-bold text-gray-900">{value}</p>
    <p className="text-sm text-gray-600">{label}</p>
  </div>
);

const HeroImageDesktop: React.FC = () => {
  return (
    <div className="relative hidden lg:block w-1/2">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10 rounded-bl-3xl" />
      <div className="relative p-8 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-8">
          {TECH_STACKS.map((stack, index) => (
            <TechStackCard
              key={index}
              Icon={stack.icon}
              title={stack.label}
              description={stack.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const HeroImageMobile: React.FC = () => {
  return (
    <div className="w-full lg:hidden p-4">
      <div className="flex gap-4 overflow-x-auto pb-4">
        {TECH_STACKS.map((stack, index) => (
          <TechStackIcon
            key={index}
            Icon={stack.icon}
            label={stack.label}
          />
        ))}
      </div>
    </div>
  );
};

const CTAButton: React.FC<CTAButtonProps> = ({ children, primary = false, onClick }) => (
  <button 
    onClick={onClick}
    className={`inline-flex items-center gap-2 ${
      primary 
        ? "bg-[#5128a0] hover:bg-[#3e217e] text-white" 
        : "bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-200"
    } px-6 py-3 rounded-lg font-medium transition-colors`}
  >
    {children}
    {primary && <ArrowRight className="w-4 h-4" />}
  </button>
);

export const Hero: React.FC = () => {
  return (
    <div className="bg-white w-full">
      <div className="min-h-[calc(100vh-6rem)] flex flex-col-reverse lg:flex-row items-center max-w-6xl mx-auto justify-center gap-8 md:gap-16 lg:justify-between px-4">
        <div className="w-full lg:w-1/2 flex flex-col gap-6 py-8 lg:py-0">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#5128a0] px-4 py-1 rounded-full text-sm">
            Full-Stack Development Solutions
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-center lg:text-start text-gray-900">
            Bringing Your
            <span className="text-[#5128a0]"> Digital Vision</span> <div className="mt-0">to Life</div>
          </h1>
          
          <h4 className="text-lg text-gray-600 w-full lg:w-4/5 mx-auto lg:mx-0 text-center lg:text-start">
            Expert development services across Next.js, MERN Stack, Django, and Mobile platforms. 
            We transform your ideas into powerful, scalable solutions.
          </h4>
          
          <div className="flex flex-col sm:flex-row gap-4 text-center lg:text-start">
            <Link href="/contacts">
            <CTAButton 
              primary 
            >
              Get Started
            </CTAButton>
            </Link>
            <Link href='/aboutUs'>
            <CTAButton 
              
            >
              Learn More
            </CTAButton>
            </Link>
          </div>
          
          <div className="flex items-center gap-8 pt-8">
            {STATS.map((stat, index) => (
              <StatItem
                key={index}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </div>
        
        <HeroImageMobile />
        <HeroImageDesktop />
      </div>
    </div>
  );
};

export default Hero;