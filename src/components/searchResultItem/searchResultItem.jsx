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
        <div className="buttons">
          <IconButton
            variant="contained"
            onClick={handleAddToCart}
            sx={{
              alignSelf: "flex-start",
              borderRadius: "0.5rem",
              background: "#1E65FF",
              display: "flex",
              width: "2.5rem",
              height: "1.8rem",
              color: "#ffffff",
            }}
          >
            <AddShoppingCartIcon />
          </IconButton>
          <Button
            variant="primary"
            sx={{ alignSelf: "flex-end", marginLeft: "1rem" }}
            endIcon={<NavigateNextIcon />}
            onClick={handleViewDetails}
          >
            Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SearchResultItem;
