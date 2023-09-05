import React from "react";

import Grid from "@mui/material/Grid";
import "../searchresult/searchresult.css";
import SearchResultItem from "../searchResultItem/searchResultItem";
import { useSearchContext } from "../../context/searchContext";
import { Typography } from "@mui/material";
import Carousel from "../carousel/Carousel";

const SearchResult = () => {
  const { queryResult } = useSearchContext();
  console.log("queryResult", queryResult);

  const handleAddToCart = (resultId) => {
    handleAddToCart(resultId);
    console.log("resultId", resultId);
  };

  const rating = 4.5; //placeholder

  return (
    <Grid container spacing={4} sx={{ margin: "10px", marginTop: "10rem" }}>
      {queryResult?.length > 0 ? (
        queryResult.map((result) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={result.id}>
            <SearchResultItem
              key={result.id}
              id={result.id}
              imageUrl={result.thumbnail}
              price={result.price}
              title={result.title}
              location={result.address.state_name}
              rating={rating}
              // onAddToCart={(() => handleAddToCart(result.id), console.log())}
            />
          </Grid>
        ))
      ) : (
        <>
          <Typography variant="h1">Welcome</Typography>
          <Carousel />
        </>
      )}
    </Grid>
  );
};

export default SearchResult;
