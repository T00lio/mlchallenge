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
      marginTop={"10rem"}
      sx={{ marginLeft: "auto", marginRight: "auto" }}
      className="container"
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
          <Grid item>
            <div className="overlay"></div>
            <div className="bgVideo">
              <Typography
                variant="h2"
                fontFamily={"Montserrat"}
                className="content"
              >
                Welcome to my Ecommerce App
              </Typography>
              <video
                src={Welcome}
                width={900}
                height={900}
                autoPlay
                loop
                muted
              />
            </div>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default SearchResult;
