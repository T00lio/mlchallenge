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
import { useCart } from "../../context/useCart";

const ShoppingCart = () => {
  const { cartItems } = useCart();

  return (
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
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </Fragment>
      ))}
    </List>
  );
};

export default ShoppingCart;
