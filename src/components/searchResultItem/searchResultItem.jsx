import React from "react";
import "./searchResultItem.css";

import { useCart } from "../../context/useCart";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

import StarRating from "../starRating";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

const SearchResultItem = ({ id, imageUrl, price, title, location, rating }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (id) {
      addToCart({
        productId: id,
        imageUrl: imageUrl,
        title: title,
        price: price,
      });
    } else {
      console.error("Invalid 'id' value:", id);
    }
  };

  return (
    <>
      <Card className="searchResultItem" sx={{ maxWidth: 345 }}>
        <Link
          to={`/item/${id}`}
          className="link"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <CardMedia
            component="img"
            height="140"
            width="150"
            image={imageUrl}
            alt={title}
          />
        </Link>
        <CardContent>
          <Link
            to={`/item/${id}`}
            className="link"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ overflow: "hidden" }}
            >
              {title}
            </Typography>

            <StarRating rating={rating} />
            <Typography variant="body2" color="text.secondary">
              Rating
            </Typography>
          </Link>

          <div className="buttons">
            <Typography variant="h6" color="#000000">
              <strong>
                {Number(price).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}{" "}
              </strong>
            </Typography>
            <Button
              variant="outlined"
              onClick={handleAddToCart}
              sx={{
                fontFamily: "Montserrat, sans-serif",
                borderRadius: "0.5rem",
              }}
            >
              Add to Cart
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default SearchResultItem;
