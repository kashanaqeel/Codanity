import React from "react";
import { X } from "lucide-react";

export interface FilterChipProps {
  label: string;
  onRemove: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md";
  className?: string;
}

const FilterChip: React.FC<FilterChipProps> = ({
  label,
  onRemove,
  variant = "primary",
  size = "md",
  className = "",
}) => {
  const baseClasses =
    "inline-flex items-center gap-2 font-medium rounded-full transition-colors duration-200";

  const variantClasses = {
    primary: "bg-brand text-white hover:bg-brand-dark",
    secondary: "bg-surface-muted text-ink-secondary hover:bg-slate-200",
    outline: "border border-brand/30 text-brand hover:bg-brand hover:text-white",
  };

  const sizeClasses = {
    sm: "px-3 py-1 text-xs",
    md: "px-4 py-2 text-sm",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <span className={classes}>
      {label}
      <button
        type="button"
        onClick={onRemove}
        className="ml-1 transition-transform duration-200 hover:scale-110"
        aria-label={`Remove ${label} filter`}
      >
        <X className="h-3 w-3" />
      </button>
    </span>
  );
};

export default FilterChip;
