import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Pagination = ({
  paginationLength,
  recordsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const totalRecords = paginationLength;
  const npages = Math.ceil(totalRecords / recordsPerPage);
  const numbers = Array.from({ length: npages }, (_, i) => i + 1);

  const updatePage = (page) => {
    setCurrentPage(page);
    const searchParams = new URLSearchParams(location.search);
    navigate(`${location.pathname}${searchParams.toString()}`);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      updatePage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < npages) {
      updatePage(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center">
      <nav className="mt-4">
        <ul className="flex">
          <li>
            <button
              className={`px-4 py-3 border rounded-l-full font-black shadow-xl${
                currentPage === 1
                  ? "text-gray-500"
                  : "text-whitep-4 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-indigo-700 via-indigo-500 to-indigo-300"
              }`}
              onClick={handlePrevClick}
              disabled={currentPage === 1}
            >
              Prev
            </button>
          </li>
          {numbers.map((n) => (
            <li key={n}>
              <button
                className={`px-4 py-3 border font-black shadow-xl ${
                  currentPage === n
                    ? "text-white p-4 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-indigo-700 via-indigo-500 to-indigo-300"
                    : "text-black"
                }`}
                onClick={() => updatePage(n)}
              >
                {n}
              </button>
            </li>
          ))}
          <li>
            <button
              className={`px-4 py-3 border rounded-r-full font-black shadow-xl ${
                currentPage === npages
                  ? "text-gray-300"
                  : "text-white p-4 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-indigo-700 via-indigo-500 to-indigo-300"
              }`}
              onClick={handleNextClick}
              disabled={currentPage === npages}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
