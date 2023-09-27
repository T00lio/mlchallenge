import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import "../searchresult/searchresult.css";
import SearchResultItem from "../searchResultItem/searchResultItem";
import { useSearchContext } from "../../context/searchContext";
import { Typography, Box } from "@mui/material";
import ecomm from "../../assets/images/ecomm.svg";

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
            sm={8}
            md={8}
            lg={8}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            sx={{
              marginLeft: "auto",
              marginRight: "auto",
              backgroundColor: "white",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
              padding: "2rem",
            }}
          >
            <Typography
              variant="h4"
              fontFamily={"Montserrat"}
              className="content"
              sx={{
                marginLeft: "auto",
                marginRight: "auto",
                textDecoration: "none",
              }}
            >
              Welcome to my Ecommerce App
            </Typography>
            <Box
              sx={{
                display: "flex",
                backgroundColor: "#979797",
                borderRadius: "10px",
                flexDirection: "column",
                alignItems: "center",
                width: "75%",
                justifyContent: "center",
                marginBottom: "1rem",
                marginTop: "1rem",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  marginTop: "2rem",
                  maxWidth: "60%",
                  alignContent: "center",
                  justifyContent: "center",
                  textAlign: "justify",
                  fontSize: "1rem",
                }}
              >
                This is a simple Ecommerce App that allows you to search for
                products and view the details of the product. You can also add
                products to your cart and checkout. In order to do this you need
                to create an account and login. This app was built using React,
                Material UI, and the Mercado Libre API. Click on the search icon
                to get started.
              </Typography>
              <img
                src={ecomm}
                alt="ecommerce"
                style={{
                  width: "20rem",
                  height: "20rem",
                  marginTop: "2rem",
                }}
              />
            </Box>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default SearchResult;
