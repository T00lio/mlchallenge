import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import "../searchresult/searchresult.css";
import SearchResultItem from "../searchResultItem/searchResultItem";
import Pagination from "../Pagination/Pagination";

import { useSearchContext } from "../../context/searchContext";
import { Typography, Box } from "@mui/material";
import ecomm from "../../assets/images/ecomm.svg";
import Hero from "../Hero/Hero";

const SearchResult = () => {
  const { queryResult } = useSearchContext();
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 20;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = queryResult?.slice(firstIndex, lastIndex);
  const npages = Math.ceil(queryResult?.length / recordsPerPage);
  const numbers = [...Array(npages + 1).keys()].slice(1);

  return (
    <>
      <Grid className="search-result" container spacing={2} marginTop={"10rem"}>
        {records.length > 0 ? (
          records.map((result) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={result.id}>
              <SearchResultItem
                key={result.id}
                id={result.id}
                imageUrl={result.thumbnail}
                price={result.price}
                title={result.title}
                rating={3}
              />
            </Grid>
          ))
        ) : (
          <></>
        )}
      </Grid>
      <br />
      {records?.length > 0 ? (
        <Box>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalRecords={queryResult?.length}
            recordsPerPage={recordsPerPage}
          />
        </Box>
      ) : (
        <Hero />
      )}
    </>
  );
};

export default SearchResult;
