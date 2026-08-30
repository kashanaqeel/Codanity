import React, { useState, useEffect, useMemo } from "react";
import { Search, X } from "lucide-react";

export interface SearchInputProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  debounceMs?: number;
  className?: string;
  initialValue?: string;
  value?: string;
  variant?: "light" | "dark";
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search...",
  onSearch,
  debounceMs = 300,
  className = "",
  initialValue = "",
  value,
  variant = "light",
}) => {
  const [query, setQuery] = useState(value ?? initialValue);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (value !== undefined && !isFocused) {
      setQuery(value);
    }
  }, [value, isFocused]);

  const debouncedSearch = useMemo(() => {
    let timeoutId: NodeJS.Timeout;

    return (searchQuery: string) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        onSearch(searchQuery);
      }, debounceMs);
    };
  }, [onSearch, debounceMs]);

  useEffect(() => {
    debouncedSearch(query);
  }, [query, debouncedSearch]);

  const handleClear = () => {
    setQuery("");
    onSearch("");
  };

  const isDark = variant === "dark";

  return (
    <div className={`relative ${className}`}>
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
        <Search className={`h-4 w-4 ${isDark ? "text-slate-500" : "text-ink-muted"}`} />
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`block w-full rounded-xl border py-3 pl-11 pr-10 text-sm transition-all duration-200 focus:outline-none focus:ring-2 ${
          isDark
            ? `border-white/10 bg-white/[0.08] text-white placeholder:text-slate-500 focus:border-brand-light/40 focus:ring-brand-light/20 ${
                isFocused ? "border-brand-light/40 ring-2 ring-brand-light/20" : ""
              }`
            : `border-slate-200/80 bg-white text-ink shadow-soft placeholder:text-ink-muted focus:border-brand/40 focus:ring-brand/20 ${
                isFocused ? "border-brand/40 ring-2 ring-brand/20" : ""
              }`
        }`}
        placeholder={placeholder}
      />
      {query && (
        <button
          type="button"
          onClick={handleClear}
          className={`absolute inset-y-0 right-0 flex items-center pr-4 transition-colors ${
            isDark ? "text-slate-500 hover:text-slate-300" : "text-ink-muted hover:text-ink"
          }`}
          aria-label="Clear search"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

export default SearchInput;
