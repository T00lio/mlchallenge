import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import {
  AppBar,
  Toolbar,
  Badge,
  IconButton,
  Link,
  Button,
  Typography,
  Grid,
  Hidden,
  Drawer,
  ListItem,
  ListItemText,
  List,
} from "@mui/material";
import {
  AccountCircle as AccountCircleIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { UserAuth } from "../../context/authContext";
import { useCart } from "../../context/useCart";
import SearchBar from "../searchBar";
import CartModal from "../cartModal/cartModal";
import "./header.css";

const Header = () => {
  const [openCartModal, setOpenCartModal] = useState(false);
  const { user, logout } = UserAuth();
  const { cartItems } = useCart();

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const handleOpenCartModal = () => setOpenCartModal(true);
  const handleCloseCartModal = () => setOpenCartModal(false);
  const handleProfileMenuOpen = () => {};

  const handleMobileDrawerOpen = () => setMobileDrawerOpen(true);
  const handleMobileDrawerClose = () => setMobileDrawerOpen(false);

  return (
    <>
      <AppBar
        position="static"
        className="header"
        style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}
      >
        <Toolbar sx={{ height: "6rem" }} display="flex">
          <Hidden smDown>
            <Grid item xs={1} sm={1}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={handleMobileDrawerOpen}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
          </Hidden>
          <Grid container>
            <Grid item mt={2} xs={1} sm={2}>
              <RouterLink
                style={{ textDecoration: "none", color: "#000000" }}
                to="/"
                sx={{ marginLeft: "auto" }}
              >
                <Typography
                  marginLeft={1}
                  color={"#000"}
                  variant="h5"
                  fontFamily={"Montserrat"}
                >
                  Ecommerce
                </Typography>
              </RouterLink>
            </Grid>
            <Grid item xs={6} sm={6}>
              <SearchBar />
            </Grid>
            {user?.uid ? (
              <Hidden xsDown>
                <Grid
                  item
                  display={"flex"}
                  marginLeft={"auto"}
                  xs={1}
                  sm={3}
                  gap={2}
                >
                  <Button
                    radius={10}
                    size="small"
                    aria-label="show 17 new notifications"
                    color="primary"
                    onClick={handleOpenCartModal}
                    variant="text"
                    startIcon={<ShoppingCartOutlinedIcon color="primary" />}
                  >
                    <Badge
                      badgeContent={cartItems.length}
                      color="primary"
                      size="small"
                    >
                      <Typography fontFamily={"Montserrat"}>
                        {cartItems.length > 0 ? "Cart" : "Empty Cart"}
                      </Typography>
                    </Badge>
                  </Button>
                  <Button
                    size="small"
                    className="wishlist"
                    variant="text"
                    startIcon={<FavoriteBorderOutlinedIcon color="primary" />}
                  >
                    <Typography fontFamily={"Montserrat"}>Wishlist</Typography>
                  </Button>
                  <IconButton
                    size="small"
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="#333333"
                  >
                    <AccountCircleIcon
                      aria-label="account"
                      fontSize="inherit"
                    />

                    <Button
                      sx={{ color: "#000000" }}
                      onClick={logout}
                      variant="outlined"
                      size="small"
                      style={{ borderRadius: 24 }}
                    >
                      <Typography fontFamily={"Montserrat"}>
                        {user.email}
                      </Typography>
                    </Button>
                  </IconButton>
                </Grid>
              </Hidden>
            ) : (
              <Hidden smDown>
                <Grid
                  item
                  mt={1}
                  gap={1}
                  display={"flex"}
                  sx={{ marginLeft: "auto" }}
                >
                  <Link href="/signup">
                    <Button
                      variant="outlined"
                      sx={{ color: "#000000" }}
                      style={{ borderRadius: 24 }}
                    >
                      <Typography fontFamily={"Montserrat"}>Sign up</Typography>
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button
                      variant="outlined"
                      sx={{ color: "#000000" }}
                      style={{ borderRadius: 24 }}
                    >
                      <Typography fontFamily={"Montserrat"}>Log in</Typography>
                    </Button>
                  </Link>
                </Grid>
              </Hidden>
            )}{" "}
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        onClose={handleMobileDrawerClose}
        open={mobileDrawerOpen}
      >
        <List>
          <ListItem button component={RouterLink} to="/">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={RouterLink} to="/wishlist">
            <ListItemText primary="Wishlist" />
          </ListItem>
          <ListItem button component={RouterLink} to="/login">
            <ListItemText primary="Log In" />
          </ListItem>
          <ListItem button component={RouterLink} to="/signup">
            <ListItemText primary="Sign Up" />
          </ListItem>
        </List>
      </Drawer>
      <CartModal open={openCartModal} onClose={handleCloseCartModal} />
    </>
  );
};

export default Header;
