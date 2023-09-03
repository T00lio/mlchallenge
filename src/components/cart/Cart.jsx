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

const ShoppingCart = () => {
  const { cartItems, removeOneFromCart } = useCart();

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
                    {item.quantity} items
                    <IconButton
                      aria-label="delete"
                      size="small"
                      color="error"
                      onClick={() => removeOneFromCart()}
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

      <Typography style={{}}>
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
