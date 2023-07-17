 import { useContext, useState } from "react";
import { createContext } from "react";

 export const SearchContext = createContext();

 export const SearchContextProvider = ({ children }) => {
    const [queryResult, setQueryResult] = useState([]);

    return (
        <SearchContext.Provider value={{ queryResult, setQueryResult }}>
            {children}
        </SearchContext.Provider>
    );
}

 export const useSearchContext = () => {
    const context = useContext(SearchContext);

    if (!context) {
        throw new Error('No conext present');
    };
    return context;
 };