"use client";

import React, { useState, useContext, createContext, ReactNode } from "react";
import { useMedia } from "react-use";

interface SearchContextType {
  isMobile: boolean;
  showSearch: boolean;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const isMobile = useMedia("(max-width: 400px)", false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <SearchContext.Provider value={{ isMobile, showSearch, setShowSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchContext() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
}
