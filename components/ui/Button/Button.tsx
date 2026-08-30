import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useAnimation } from "@/hooks";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  external?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  disabled = false,
  type = "button",
  external = false,
  icon,
  iconPosition = "right",
}) => {
  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary bg-surface-muted text-ink hover:bg-slate-100",
    outline: "btn-secondary border-brand/25 text-brand hover:border-brand/40 hover:bg-brand-muted",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-sm",
    lg: "px-7 py-3.5 text-base",
  };

  const classes = `${variantClasses[variant]} ${sizeClasses[size]} ${disabled ? "pointer-events-none opacity-50" : ""} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </>
  );

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
        >
          {content}
        </motion.a>
      );
    }

    const isFullWidth = /\bw-full\b/.test(className);
    const hasResponsiveAuto =
      /\bsm:w-auto\b/.test(className) ||
      /\bmd:w-auto\b/.test(className) ||
      /\blg:w-auto\b/.test(className);

    const wrapperClass = isFullWidth
      ? hasResponsiveAuto
        ? "flex w-full sm:inline-flex sm:w-auto"
        : "flex w-full"
      : "inline-flex";

    return (
      <motion.div
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={wrapperClass}
      >
        <Link href={href} className={classes}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
      {content}
    </motion.button>
  );
};

export default Button;
