import React from "react";
import "./searchResultItem.css";
import { Card } from "react-bootstrap";
import { CardMedia } from "@mui/material";

const SearchResultItem = ({ id, imageUrl, price, title, location }) => {
  return (
    <Card className="searchResultItem" margin={2}>
      <CardMedia
        objectFit="contain"
        component="img"
        height="150"
        width="150"
        image={imageUrl}
        alt={title}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {Number(price).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </Card.Text>
        <Card.Text>{location}</Card.Text>
      </Card.Body>
    </Card>
    // <Grid container spacing={3} style={{ margin: "5px" }}>
    //   <Grid item xs>
    //     <img src={imageUrl} height={100} width={100} alt="Search" />
    //   </Grid>
    //   <Grid item xs={7}>
    //     <p>
    //       {" "}
    //       <strong>{title}</strong>
    //     </p>
    //     <p>
    //       {Number(price).toLocaleString("en-US", {
    //         style: "currency",
    //         currency: "USD",
    //       })}{" "}
    //     </p>
    //   </Grid>
    //   <Grid item xs>
    //     <p>
    //       <strong>{location}</strong>
    //     </p>
    //   </Grid>
    // </Grid>
  );
};

export default SearchResultItem;
