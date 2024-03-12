import React from "react";
import "./searchResultItem.css";
import { useCart } from "../../context/useCart";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import StarRating from "../starRating";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const SearchResultItem = ({ id, imageUrl, price, title, rating }) => {
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
      <Card className="searchResultItem" sx={{ maxWidth: 500 }}>
        <Link
          to={`/item/${id}`}
          className="link"
          elevation={3}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <CardMedia
            component="img"
            className="cardImage"
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
              fontFamily={"Montserrat"}
              gutterBottom
              variant="h"
              component="div"
              sx={{ overflow: "hidden" }}
            >
              {title}
            </Typography>

            <StarRating rating={rating} />
            <Typography
              variant="body2"
              color="text.secondary"
              fontFamily={"Montserrat"}
            >
              Rating
            </Typography>
          </Link>

          <div className="buttons">
            <Link
              to={`/item/${id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                variant="h6"
                color="#000000"
                fontFamily={"Montserrat"}
              >
                <strong>
                  {Number(price).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </strong>
              </Typography>
            </Link>
            <Button
              size="small"
              variant="outlined"
              onClick={handleAddToCart}
              sx={{
                fontFamily: "Montserrat, sans-serif",
                borderRadius: "0.5rem",
                color: "secondary",
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
