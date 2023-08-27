import { Grid } from "@mui/material";
import "./searchResultItem.css";
import { useCart } from "../../context/useCart";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext.js";

const SearchResultItem = ({ id, imageUrl, price, title, location }) => {
  const { addToCart } = useCart();
  return (
    <Grid container spacing={3} style={{ margin: "5px" }}>
      <Grid item xs>
        <img src={imageUrl} height={100} width={100} alt="Search" />
      </Grid>
      <Grid item xs={7}>
        <p>
          {" "}
          <strong>{title}</strong>
        </p>
        <p>
          {Number(price).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}{" "}
        </p>
      </Grid>
      <Grid item xs>
        <p>
          <strong>{location}</strong>
        </p>
        <button className="buy-button" onClick={() => addToCart(id)}>
          Buy
        </button>
      </Grid>
    </Grid>
  );
};

export default SearchResultItem;
