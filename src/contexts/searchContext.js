// React context API
import { createContext, useContext, useState } from "react";

// Paso 1: Crear el contexto
const SearchContext = createContext();

// Paso 2: Crear el context provider
export const SearchContextProvider = ({ children }) => {
  const [queryResult, setQueryResult] = useState([]);

  return <SearchContext.Provider value={{ queryResult, setQueryResult }}>{children}</SearchContext.Provider>;
};

// Paso 3: Crear un hook personalizado para acceder al contexto
export const useSearchContext = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearchContext should be used inside SearchContextProvider");
  }

  return context;
};
