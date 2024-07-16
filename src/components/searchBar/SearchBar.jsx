import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CircularProgress, IconButton, Modal, Box } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useSearchContext } from "../../context/searchContext.js";
import { getData } from "../../utils/httpsClient";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const { setQueryResult, setSearchQuery } = useSearchContext();
  const [localSearchQuery, setLocalSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setLocalSearchQuery(query);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearchClick();
    }
  };

  const handleSearchClick = async () => {
    setIsLoading(true);
    setSearchQuery(localSearchQuery); // Store the search query in context
    const data = await getData(`sites/MLA/search?q=${localSearchQuery}`);
    setQueryResult(data?.results);
    navigate("/items");
    setIsLoading(false);
    setIsModalOpen(false); // Close the modal after search
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <span className="flex items-center">
      {/* Display search icon for small screens */}
      <div className="block md:hidden">
        <IconButton onClick={handleOpenModal}>
          <SearchIcon />
        </IconButton>
      </div>

      {/* Full search bar for larger screens */}
      <div className="hidden md:flex items-center">
        <input
          id="search-input"
          className="border-2 rounded-l-full p-3 w-16 md:w-72 lg:w-96 xl:w-96 outline-none"
          type="text"
          placeholder="I'm Shopping for..."
          value={localSearchQuery}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
        />
        <Link to="/items">
          <button
            className="bg-gradient-to-r from-indigo-700 via-indigo-500 to-indigo-300 rounded-r-full p-3"
            onClick={handleSearchClick}
          >
            {isLoading ? (
              <CircularProgress sx={{ color: "white", size: 10 }} />
            ) : (
              <SearchIcon sx={{ color: "white" }} />
            )}
          </button>
        </Link>
      </div>

      {/* Modal for small screens */}
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box className="flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 bg-white shadow-lg p-4 rounded-lg">
          <input
            id="modal-search-input"
            className="border-2 rounded-l-full p-3 w-full outline-none"
            type="text"
            placeholder="I'm Shopping for..."
            value={localSearchQuery}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
          />
          <button
            className="bg-gradient-to-r from-indigo-700 via-indigo-500 to-indigo-300 rounded-r-full p-3"
            onClick={handleSearchClick}
          >
            {isLoading ? (
              <CircularProgress sx={{ color: "white" }} />
            ) : (
              <SearchIcon sx={{ color: "white" }} />
            )}
          </button>
        </Box>
      </Modal>
    </span>
  );
};

export default SearchBar;
