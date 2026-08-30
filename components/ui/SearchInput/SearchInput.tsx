import React, { useState, useEffect, useMemo } from "react";
import { Search, X } from "lucide-react";

export interface SearchInputProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  debounceMs?: number;
  className?: string;
  initialValue?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search...",
  onSearch,
  debounceMs = 300,
  className = "",
  initialValue = "",
}) => {
  const [query, setQuery] = useState(initialValue);
  const [isFocused, setIsFocused] = useState(false);

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

  return (
    <div className={`relative ${className}`}>
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
        <Search className="h-4 w-4 text-ink-muted" />
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`block w-full rounded-xl border border-slate-200/80 bg-white py-3 pl-11 pr-10 text-sm text-ink shadow-soft transition-all duration-200 placeholder:text-ink-muted focus:border-brand/40 focus:outline-none focus:ring-2 focus:ring-brand/20 ${
          isFocused ? "border-brand/40 ring-2 ring-brand/20" : ""
        }`}
        placeholder={placeholder}
      />
      {query && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute inset-y-0 right-0 flex items-center pr-4 text-ink-muted transition-colors hover:text-ink"
          aria-label="Clear search"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

export default SearchInput;
