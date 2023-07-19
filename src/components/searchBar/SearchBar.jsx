import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../searchBar/SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useSearchContext } from "../../contexts/searchContext";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { setQueryResult } = useSearchContext();

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  // async/await approach
  const fetchSearchResults = async () => {
    try {
      const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchQuery}`);
      const jsonResponse = await response.json();
      setQueryResult(jsonResponse.results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Busqueda..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <button className="search-button" onClick={fetchSearchResults}>
        <i>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </i>
      </button>
    </div>
  );
};

export default SearchBar;
