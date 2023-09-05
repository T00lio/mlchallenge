import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CircularProgress,
  TextField,
  IconButton,
  InputAdornment,
  Box,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useSearchContext } from "../../context/searchContext.js";
import { getData } from "../../utils/httpsClient";
import "../searchBar/SearchBar.css";

const SearchBar = () => {
  const { setQueryResult } = useSearchContext();
  const [searchQuery, setSearchQuery] = useState("");
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
    <Box
      className="fixed-search-bar"
      display="flex"
      justifyContent="center"
      alignItems="center"
      paddingX={2}
      paddingY={1}
      bgcolor="#ffffff"
      position="sticky"
      top={0}
    >
      <TextField
        className="search-input"
        type="text"
        label="I'm Shopping for..."
        variant="outlined"
        value={searchQuery}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                component={Link}
                to="/items"
                className="search-button"
                onClick={handleSearchClick}
                disabled={isLoading}
                sx={{
                  borderRadius: "0rem",
                  background: "#1E65FF",
                  display: "flex",
                  width: "5rem",
                  height: "3.375rem",
                  color: "#ffffff",
                }}
              >
                {isLoading ? <CircularProgress size={24} /> : <SearchIcon />}
              </IconButton>
            </InputAdornment>
          ),
          sx: {
            "& input": {
              fontFamily: "Montserrat, sans-serif",
            },
          },
        }}
        InputLabelProps={{
          sx: {
            fontFamily: "Montserrat, sans-serif",
          },
        }}
      />
    </Box>
  );
};

export default SearchBar;
