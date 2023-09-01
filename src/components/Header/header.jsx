import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../../assets/images/MELI.svg";
import {
  AppBar,
  Toolbar,
  Box,
  Badge,
  IconButton,
  Link,
  Button,
  Typography,
} from "@mui/material";
import {
  ShoppingCart as ShoppingCartIcon,
  AccountCircle as AccountCircleIcon,
} from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
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
        <Toolbar>
          <RouterLink to="/">
            <img
              src={Logo}
              width={30}
              height={30}
              className="logo"
              alt="logo"
            ></img>
            <Typography>
              <Box
                sx={{
                  display: { xs: "flex-row", sm: "flex-row" },
                  color: "#000000",
                }}
              >
                Ecommerce
              </Box>
            </Typography>
          </RouterLink>
          <SearchBar />
          {user?.uid ? (
            <Box sx={{ display: { xs: "flex", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                onClick={handleOpenCartModal}
              >
                <ShoppingCartIcon color="primary" />
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ color: "#000000" }}
                  margin={2}
                >
                  Cart
                </Typography>
                <Badge
                  badgeContent={cartItems.length}
                  margin={1}
                  color="error"
                ></Badge>
              </IconButton>
              <Box
                sx={{ display: { xs: "none", sm: "block" } }}
                className="wishlist"
              >
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <Link href="/wishlist">
                    <Typography>Wishlist</Typography>
                    <FavoriteIcon color="primary" />
                  </Link>
                </IconButton>
              </Box>

              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="primary"
              >
                <AccountCircleIcon />
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  <Button
                    sx={{ color: "#000000" }}
                    onClick={logout}
                    margin-top={10}
                  >
                    Signed in as: {user.email}
                  </Button>
                </Box>
              </IconButton>
            </Box>
          ) : (
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Link href="/signup">
                  <Button sx={{ color: "#000000" }}>Create your account</Button>
                </Link>
                <Link href="/login">
                  <Button sx={{ color: "#000000" }}>Log in</Button>
                </Link>
              </Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <CartModal open={openCartModal} onClose={handleCloseCartModal} />
    </>
  );
};

export default Header;
