import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useAnimation } from "@/hooks";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  disabled = false,
  external = false,
  icon,
  iconPosition = 'right'
}) => {
  const { hoverScale } = useAnimation();

  const baseClasses = "inline-flex items-center justify-center gap-2 font-medium transition-colors duration-200 rounded-lg";
  
  const variantClasses = {
    primary: "bg-[#5128a0] hover:bg-[#3e217e] text-white",
    secondary: "bg-gray-100 hover:bg-gray-200 text-gray-900",
    outline: "border border-[#5128a0] text-[#5128a0] hover:bg-[#5128a0] hover:text-white"
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </>
  );

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${classes} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          {...hoverScale}
        >
          {content}
        </motion.a>
      );
    }
    
    return (
      <motion.div {...hoverScale}>
        <Link href={href} className={classes}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      disabled={disabled}
      {...hoverScale}
    >
      {content}
    </motion.button>
  );
};

export default Button;
