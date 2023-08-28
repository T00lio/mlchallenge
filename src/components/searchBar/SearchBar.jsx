import { useState } from "react";
import { Link } from "react-router-dom";
import { CircularProgress, IconButton } from "@mui/material";
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
      <input
        id="search-input"
        style={{ width: "75%" }}
        type="text"
        className="search-input"
        placeholder="Busqueda..."
        value={searchQuery}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
      />

      <Link to="/items">
        <IconButton
          className="search-button"
          size="large"
          edge="end"
          aria-label="search items"
          aria-haspopup="true"
          color="primary"
          onClick={handleSearchClick}
        >
          {isLoading ? <CircularProgress /> : <SearchIcon />}
        </IconButton>
        {/* <button className="search-button" onClick={handleSearchClick}>
          <i className="sb">{isLoading ? <CircularProgress /> : <FontAwesomeIcon icon={faMagnifyingGlass} />}</i>
        </button> */}
      </Link>
    </div>
  );
};

export default SearchBar;
