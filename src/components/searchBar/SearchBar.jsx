import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../searchBar/SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { useSearchContext } from "../../context/searchContext.js";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const SearchBar = () => {
  const { setQueryResult } = useSearchContext();
  const [searchQuery, setSearchQuery] = useState(" ");
  const [loading, setLoading] = useState(" ");

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  const fetchSearchResults = (query) => {
    loading(true);
    const endpoint = `https://api.mercadolibre.com/sites/MLA/search?q=${query}`;
    return fetch(endpoint)
      .then((response) => response.json())
      .then((data) => setQueryResult(data.results))
      .then(() => {
        loading(false);
      })
      .catch((error) => {
        loading(false);
        console.error("Error fetching search results:", error);
        return [useContext];
      });
  };

  const handleSearchClick = () => {
    fetchSearchResults(searchQuery);
    console.log(searchQuery);
  };

  return loading ? (
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
            <CircularProgress />
          </i>
        </button>
      </Link>
    </div>
  ) : (
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
