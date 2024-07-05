import React from "react";
import { Box } from "@mui/material";
import "./pagination.css"; // Assuming you have some CSS for the pagination

const Pagination = ({
  currentPage,
  setCurrentPage,
  totalRecords,
  recordsPerPage,
}) => {
  const npages = Math.ceil(totalRecords / recordsPerPage);
  const numbers = [...Array(npages + 1).keys()].slice(1);

  return (
    <Box>
      <nav>
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link-first"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Prev
            </button>
          </li>
          {numbers.map((n) => (
            <li
              className={`page-item ${currentPage === n ? "active" : ""}`}
              key={n}
            >
              <button
                className="page-link-md"
                onClick={() => setCurrentPage(n)}
              >
                {n}
              </button>
            </li>
          ))}
          <li
            className={`page-item ${currentPage === npages ? "disabled" : ""}`}
          >
            <button
              className="page-link-end"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === npages}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </Box>
  );
};

export default Pagination;
