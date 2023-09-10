import React from "react";
import Grid from "@mui/material/Grid";
import "../searchresult/searchresult.css";
import SearchResultItem from "../searchResultItem/searchResultItem";
import { useSearchContext } from "../../context/searchContext";
import { Typography } from "@mui/material";
import Welcome from "../../assets/video/welcome.mp4";
const SearchResult = () => {
  const { queryResult } = useSearchContext();

  return (
    <Grid
      container
      spacing={2}
      sx={{ margin: "10px", marginTop: "10rem", marginBottom: "10rem" }}
    >
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
              rating={3}
            />
          </Grid>
        ))
      ) : (
        <>
          <div className="overlay"></div>
          <div className="bgVideo">
            <Typography
              variant="h1"
              fontFamily={"Montserrat"}
              className="content"
            >
              Welcome to my Ecommerce App
            </Typography>
            <video src={Welcome} autoPlay loop muted />
          </div>
        </>
      )}
    </Grid>
  );
};

export default SearchResult;
