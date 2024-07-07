import { useEffect } from "react";
import { Box } from "@mui/material";
import "./pagination.css";

const Pagination = ({
  paginationLength,
  recordsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const totalRecords = paginationLength;
  const npages = Math.ceil(totalRecords / recordsPerPage);
  const numbers = Array.from({ length: npages }, (_, i) => i + 1);

  useEffect(() => {
    if (currentPage > npages) {
      setCurrentPage(npages);
    }
  }, [npages, currentPage, setCurrentPage]);

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
