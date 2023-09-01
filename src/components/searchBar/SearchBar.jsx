import { useState } from "react";
import { Link } from "react-router-dom";
import { CircularProgress, IconButton, Box } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useSearchContext } from "../../context/searchContext.js";
import { getData } from "../../utils/httpsClient";
import "../searchBar/SearchBar.css";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

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

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  return (
    <Box className="search-bar">
      <Search>
        <Box sx={{ display: { xs: "flex", md: "flex" } }}>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
            className="search-input"
          />
          <Link to="/items">
            <SearchIconWrapper>
              <IconButton
                className="search-button"
                size="large"
                edge="end"
                aria-label="search items"
                aria-haspopup="true"
                color="primary"
                onKeyDown={handleKeyDown}
                onClick={handleSearchClick}
              >
                {isLoading ? <CircularProgress /> : <SearchIcon />}
              </IconButton>
            </SearchIconWrapper>
          </Link>
        </Box>
      </Search>
    </Box>
  );
};

export default SearchBar;
