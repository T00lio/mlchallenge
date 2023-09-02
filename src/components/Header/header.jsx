import { useState } from "react";
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
} from "@mui/material";
import { AccountCircle as AccountCircleIcon } from "@mui/icons-material";
import { UserAuth } from "../../context/authContext";
import { useCart } from "../../context/useCart";
import SearchBar from "../searchBar";
import CartModal from "../cartModal/cartModal";
import "./header.css";

const Header = () => {
  const [openCartModal, setOpenCartModal] = useState(false);
  const { user, logout } = UserAuth();
  const { cartItems } = useCart();

  const handleOpenCartModal = () => setOpenCartModal(true);
  const handleCloseCartModal = () => setOpenCartModal(false);
  const handleProfileMenuOpen = () => {};

  return (
    <>
      <AppBar position="static" className="header">
        <Toolbar sx={{ height: "6rem" }} display="flex">
          <Grid container>
            <Grid item mt={1}>
              <RouterLink
                style={{ textDecoration: "none", color: "#000000" }}
                to="/"
                sx={{ marginLeft: "auto" }}
              >
                <Typography
                  color={"#000"}
                  variant="h5"
                  fontFamily={"Montserrat"}
                >
                  Ecommerce
                </Typography>
              </RouterLink>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <SearchBar />
            </Grid>

            {user?.uid ? (
              <Grid item display={"flex"} marginLeft={"auto"} gap={2}>
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
                    margin={7}
                    color="error"
                    size="small"
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
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
                  <AccountCircleIcon aria-label="account" fontSize="inherit" />

                  <Button
                    sx={{ color: "#000000" }}
                    onClick={logout}
                    variant="outlined"
                    size="small"
                  >
                    {user.email}
                  </Button>
                </IconButton>
              </Grid>
            ) : (
              <Grid
                item
                mt={1}
                gap={1}
                display={"flex"}
                sx={{ marginLeft: "auto" }}
              >
                <Link href="/signup">
                  <Button variant="outlined" sx={{ color: "#000000" }}>
                    <Typography fontFamily={"Montserrat"}>Sign up</Typography>
                  </Button>
                </Link>
                <Link href="/login">
                  <Button variant="outlined" sx={{ color: "#000000" }}>
                    <Typography fontFamily={"Montserrat"}>Log in</Typography>
                  </Button>
                </Link>
              </Grid>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
      <CartModal open={openCartModal} onClose={handleCloseCartModal} />
    </>
  );
};

export default Header;
