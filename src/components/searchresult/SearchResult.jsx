import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import "../searchresult/searchresult.css";
import SearchResultItem from "../searchResultItem/searchResultItem";
import Pagination from "../Pagination/Pagination";

import { useSearchContext } from "../../context/searchContext";
import { Typography, Box } from "@mui/material";
import ecomm from "../../assets/images/ecomm.svg";

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
                    maxWidth: "90%",
                    alignContent: "center",
                    justifyContent: "center",
                    textAlign: "justify",
                    fontSize: "1rem",
                    textShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
                  }}
                >
                  This is a simple Ecommerce App that allows you to search for
                  products and view the details of the product. You can also add
                  products to your cart and checkout. In order to do this you
                  need to create an account and login. This app was built using
                  React, Material UI, and the Mercado Libre API. Click on the
                  search icon to get started.
                </Typography>
                <img
                  src={ecomm}
                  alt="ecommerce"
                  style={{
                    width: "20rem",
                    height: "20rem",
                    marginTop: "1rem",
                  }}
                />
              </Box>
            </Grid>
          </>
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
      ) : null}
    </>
  );
};

export default SearchResult;
