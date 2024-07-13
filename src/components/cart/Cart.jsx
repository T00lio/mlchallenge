import React from "react";
import { Fragment } from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  Divider,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "../../context/useCart";
import { useParams } from "react-router-dom";

const ShoppingCart = () => {
  const { cartItems, removeFromCart, addToCart } = useCart();
  const params = useParams();

  const handleRemoveOne = (productId) => {
    removeFromCart(productId);
  };

  const handleAddOne = () => {
    addToCart({
      productId: params.id,
    });
  };

  return (
    <div className="cart">
      <List>
        {cartItems.map((item) => (
          <Fragment key={item.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={item.title} src={item.imageUrl} />
              </ListItemAvatar>
              <ListItemText
                primary={item.title}
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
                      {Number(item.price).toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}{" "}
                    </Typography>
                    {" - "}
                    <IconButton
                      variant="outlined"
                      color="success"
                      size="large"
                      style={{ marginBottom: "5px" }}
                      onClick={() => handleAddOne(item.id)}
                    >
                      +
                    </IconButton>
                    {item.quantity} items
                    <IconButton
                      aria-label="delete"
                      size="small"
                      color="error"
                      style={{ marginBottom: "5px" }}
                      onClick={() => handleRemoveOne(item.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </Fragment>
        ))}
      </List>

      <Typography>
        Total:{" "}
        {Number(
          cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
        ).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </Typography>
    </div>
  );
};

export default ShoppingCart;
