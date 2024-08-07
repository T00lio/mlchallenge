import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import React from "react";

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [queryResult, setQueryResult] = useState(() => {
    const storedQuery = sessionStorage.getItem("queryResult");
    return storedQuery ? JSON.parse(storedQuery) : [];
  });
  const [searchQuery, setSearchQuery] = useState(
    sessionStorage.getItem("searchQuery")
  );

  useEffect(() => {
    sessionStorage.getItem("searchQuery");
  }, [searchQuery]);

  return (
    <SearchContext.Provider
      value={{ queryResult, setQueryResult, searchQuery, setSearchQuery }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("No conext present");
  }
  return context;
};
