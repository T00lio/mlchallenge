import React from "react";
import Grid from "@mui/material/Grid";
import "../searchresult/searchresult.css";
import SearchResultItem from "../searchResultItem/searchResultItem";
import { useSearchContext } from "../../context/searchContext";
import { Typography } from "@mui/material";
import Welcome from "../../assets/images/welcom.jpeg";

const SearchResult = () => {
  const { queryResult } = useSearchContext();

  return (
    <Grid
      container
      spacing={2}
      marginTop={"10rem"}
      sx={{ marginLeft: "auto", marginRight: "auto" }}
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
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            display={"flex"}
            flexDirection={"Row"}
          >
            <Typography
              variant="h1"
              fontFamily={"Montserrat"}
              className="content"
              sx={{ marginLeft: "auto", marginRight: "auto" }}
            >
              Welcome to my Ecommerce App
            </Typography>
            <img
              src={Welcome}
              width={500}
              height={700}
              alt="welcome"
              className="welcome"
            />
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default SearchResult;
