import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { getData } from "../utils/httpsClient";
import React from "react";

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [queryResult, setQueryResult] = useState(() => {
    const storedQuery = localStorage.getItem("queryResult");
    return storedQuery ? JSON.parse(storedQuery) : [];
  });
  const [searchQuery, setSearchQuery] = useState(
    localStorage.getItem("searchQuery")
  );
  const [highQuality, setHighQuality] = useState({});

  useEffect(() => {
    localStorage.setItem("queryResult", JSON.stringify(queryResult));
  });

  useEffect(() => {
    localStorage.getItem("searchQuery");
  }, [searchQuery]);

  const getHighQuality = async (queryResult) => {
    queryResult.map(async (item) => {
      const data = await getData(`items/${item.id}`);
      setHighQuality(data);
    });
  };

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
