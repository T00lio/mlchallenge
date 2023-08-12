import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../searchBar/SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { useSearchContext } from "../../context/searchContext.js";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const { setQueryResult } = useSearchContext();
  const [searchQuery, setSearchQuery] = useState(" ");

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  const fetchSearchResults = (query) => {
    const endpoint = `https://api.mercadolibre.com/sites/MLA/search?q=${query}`;
    return fetch(endpoint)
      .then((response) => response.json())
      .then((data) => setQueryResult(data.results))
      .catch((error) => {
        console.error("Error fetching search results:", error);
        return [useContext];
      });
  };

  const handleSearchClick = () => {
    fetchSearchResults(searchQuery);
    console.log(searchQuery);
  };

  return (
    <div className="search-bar">
      <input
        style={{ width: "75%" }}
        type="text"
        className="search-input"
        placeholder="Busqueda..."
        value={searchQuery}
        onChange={handleSearchChange}
        id
      />
      <Link to="/items">
        <button className="search-button" onClick={handleSearchClick}>
          <i className="sb">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </i>
        </button>
      </Link>
    </div>
  );
};

export default SearchBar;
