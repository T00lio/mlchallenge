import { useState } from "react";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useSearchContext } from "../../context/searchContext.js";
import { getData } from "../../utils/httpsClient";
import "../searchBar/SearchBar.css";

const SearchBar = () => {
  const { setQueryResult } = useSearchContext();
  const [searchQuery, setSearchQuery] = useState(" ");
  const [isLoading, setIsLoading] = useState(false);

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
    setQueryResult(data.results);
    setIsLoading(false);
  };

  return (
    <div className="search-bar">
      <form className="search-form">
        <input
          className="search-input"
          type="text"
          placeholder="I'm Shopping for..."
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
        />

        <Link to="/items">
          <button className="search-button" onClick={handleSearchClick}>
            {isLoading ? <CircularProgress /> : <SearchIcon />}
          </button>
        </Link>
      </form>
    </div>
  );
};

export default SearchBar;
