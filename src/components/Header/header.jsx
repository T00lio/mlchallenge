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
} from "@mui/material";
import {
  ShoppingCart as ShoppingCartIcon,
  AccountCircle as AccountCircleIcon,
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

  const handleOpenCartModal = () => setOpenCartModal(true);
  const handleCloseCartModal = () => setOpenCartModal(false);
  const handleProfileMenuOpen = () => {};

  return (
    <>
      <AppBar position="static" className="header">
        <Toolbar className="toolbar">
          <RouterLink to="/">
            <img
              src={Logo}
              width={30}
              height={30}
              className="logo"
              alt="logo"
            ></img>
            <p className="title">Ecommerce</p>
          </RouterLink>
          <SearchBar />
          {user?.uid ? (
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                onClick={handleOpenCartModal}
              >
                <Badge badgeContent={cartItems.length} color="error">
                  <ShoppingCartIcon color="primary" />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="primary"
              >
                <AccountCircleIcon />
              </IconButton>

              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Button sx={{ color: "#000000" }} onClick={logout}>
                  Logout
                </Button>
              </Box>
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
