import React from "react";
import { X } from "lucide-react";

export interface FilterChipProps {
  label: string;
  onRemove: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

const FilterChip: React.FC<FilterChipProps> = ({
  label,
  onRemove,
  variant = 'primary',
  size = 'md',
  className = ""
}) => {
  const baseClasses = "inline-flex items-center gap-2 font-medium rounded-full transition-colors duration-200";
  
  const variantClasses = {
    primary: 'bg-[#5128a0] text-white hover:bg-[#3e217e]',
    secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
    outline: 'border border-[#5128a0] text-[#5128a0] hover:bg-[#5128a0] hover:text-white'
  };

  const sizeClasses = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-2 text-sm'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <span className={classes}>
      {label}
      <button
        onClick={onRemove}
        className="ml-1 hover:scale-110 transition-transform duration-200"
        aria-label={`Remove ${label} filter`}
      >
        <X className="w-3 h-3" />
      </button>
    </span>
  );
};

export default FilterChip;
