import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useSearchContext } from "../../context/searchContext.js";
import { getData } from "../../utils/httpsClient";
import "../searchBar/SearchBar.css";
import { debounce } from "lodash";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const { setQueryResult } = useSearchContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearchClick();
    }
  };

  const handleSearchClick = async () => {
    setIsLoading(true);
    const data = await getData(`sites/MLA/search?q=${searchQuery}`);
    setQueryResult(data?.results);
    navigate("/items");
    const debouncedData = debounce(setQueryResult, 3000);

    setIsLoading(false);
  };

  return (
    <span className="search-bar">
      <input
        id="search-input"
        className="search-input"
        type="text"
        placeholder="I'm Shopping for..."
        style={{ outline: "none" }}
        value={searchQuery}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
      />
      <Link to="/items" className="search-button-link">
        <button className="search-button" onClick={handleSearchClick}>
          {isLoading ? (
            <CircularProgress sx={{ color: "white" }} />
          ) : (
            <SearchIcon sx={{ color: "white" }} />
          )}
        </button>
      </Link>
    </span>
  );
};

export default SearchBar;
