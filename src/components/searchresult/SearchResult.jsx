import React, { useEffect, useState } from "react";
import SearchResultItem from "../searchResultItem/searchResultItem";
import Pagination from "../Pagination/Pagination";
import { useSearchContext } from "../../context/searchContext";
import { useLocation } from "react-router-dom";

import "../../index.css";

const SearchResult = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { queryResult, searchQuery } = useSearchContext();
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const recordsPerPage = 20;

  const paginationLength = queryResult?.length;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = 1;
  const records = queryResult?.slice(firstIndex, lastIndex);

  useEffect(() => {
    setLoading(true);
    if (currentPage > paginationLength) {
      setCurrentPage(paginationLength);
    } else {
      setLoading(false);
    }
  }, [currentPage, paginationLength]);

  // useEffect(() => {
  //   if (records && records.length > 0) {
  //     const fetchImages = async () => {
  //       const updatedRecords = await fetchHQImages(records);
  //     };
  //     fetchImages();
  //   }
  // }, [records]);

  return (
    <section className="search">
      <div className="container-xl">
        <div className="top border-2 rounded-xl p-4 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-indigo-700 via-indigo-500 to-indigo-300 text-white ">
          <h1 className="font-bold">Search Results</h1>
          <h5 className="font-light">
            {queryResult?.length} results found on your search for "
            {searchQuery}" {""}{" "}
          </h5>
          <h5>
            Showing {recordsPerPage} to of {paginationLength} results
          </h5>
          <button className="border-2 p-2 rounded-xl font-extrabold flex">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M3 8.5a.5.5 0 0 1 .5-.5h25a.5.5 0 0 1 0 1h-25a.5.5 0 0 1-.5-.5m4 7a.5.5 0 0 1 .5-.5h17a.5.5 0 0 1 0 1h-17a.5.5 0 0 1-.5-.5m4.5 6.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z"
              />
            </svg>
            Filters
          </button>
        </div>
        <div
          className="container flex justify-center items-center mt-5"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {records?.map((result) => (
            <li key={result.id} style={{ listStyle: "none" }}>
              <SearchResultItem
                id={result.id}
                imageUrl={result.imageUrl}
                price={result.price}
                title={result.title}
                rating={3}
              />
            </li>
          ))}
        </div>
        <div className="align-self-end">
          <Pagination
            paginationLength={paginationLength}
            recordsPerPage={recordsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </section>
  );
};

export default SearchResult;
