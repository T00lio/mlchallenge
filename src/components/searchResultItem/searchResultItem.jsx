import React from "react";
import "./searchResultItem.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/useCart";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IconButton } from "@mui/material";
import StarRating from "../starRating";
import Button from "@mui/material/Button";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const SearchResultItem = ({ id, imageUrl, price, title, location, rating }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id });
  };

  const navigate = useNavigate();
  const handleViewDetails = () => {
    navigate(`/item/${id}`);
  };
  return (
    <Card className="searchResultItem" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        width="150"
        image={imageUrl}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {location}
        </Typography>
        <StarRating rating={rating} />
        <Typography variant="body2" color="text.secondary">
          Rating
        </Typography>
        <Typography variant="h6" color="#000000">
          Price:{" "}
          {Number(price).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}{" "}
        </Typography>
        <IconButton
          variant="outlined"
          color="primary"
          onClick={handleAddToCart}
        >
          <AddShoppingCartIcon />
        </IconButton>
        <Button
          variant="primary"
          endIcon={<NavigateNextIcon />}
          onClick={handleViewDetails}
        >
          Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default SearchResultItem;
