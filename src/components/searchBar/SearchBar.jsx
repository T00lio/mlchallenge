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
    JSON.stringify(query);
    setSearchQuery(query);
  };

  const fetchSearchResults = (query) => {
    const endpoint = `https://api.mercadolibre.com/sites/MLA/search?q=${query}`;
    return fetch(endpoint)
      .then((response) => response.json())
      .then((data) => setQueryResult(data.results))
      .catch((error) => {
        console.error("Error fetching search results:", error);
        return [];
      });
  };

  const handleSearchClick = () => {
    fetchSearchResults(searchQuery);
    console.log(fetchSearchResults(searchQuery));
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
      <button className="search-button" onClick={handleSearchClick}>
        <i>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </i>
      </button>
    </div>
  );
};

export default SearchBar;
