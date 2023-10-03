import React, { useState } from "react";
import { useCart } from "../../context/useCart";
import { UserAuth } from "../../context/authContext";

import CartModal from "../cartModal/cartModal";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function DrawerComponent() {
  const { cartItems } = useCart();
  const [open, setOpen] = useState(false);
  const [openCartModal, setOpenCartModal] = useState(false);
  const handleOpenCartModal = () => setOpenCartModal(true);
  const handleCloseCartModal = () => setOpenCartModal(false);

  const { user, logout } = UserAuth();
  return (
    <>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <List>
          <ListItemButton>
            <ListItemText>
              <Typography variant="h5" sx={{ textDecoration: "none" }}>
                Ecommerce
              </Typography>
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            sx={{ marginLeft: "1" }}
            onClick={handleOpenCartModal}
            variant="text"
          >
            <ListItemText>
              <Badge
                badgeContent={cartItems.length}
                margin={1}
                size="small"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <Typography variant="p">
                  {cartItems.length > 0 ? "Cart" : "Empty Cart"}
                </Typography>
              </Badge>
            </ListItemText>
          </ListItemButton>

          <ListItemButton
            sx={{ marginLeft: "1" }}
            onClick={logout}
            variant="text"
            size="large"
          >
            <ListItemText>
              <Typography
                fontFamily={"Montserrat"}
                variant="p"
                display={"inline"}
              >
                {user?.displayName ? user.displayName : "Login"}
              </Typography>
            </ListItemText>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpen(!open)}>
        <MenuIcon open={open} onClose={() => setOpen(false)} />
      </IconButton>
      <CartModal open={openCartModal} onClose={handleCloseCartModal} />
    </>
  );
}

export default DrawerComponent;
