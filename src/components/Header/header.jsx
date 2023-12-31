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
  Box,
  useMediaQuery,
  useTheme,
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
import DrawerComponent from "./DrawerComponent";

const Header = () => {
  const [openCartModal, setOpenCartModal] = useState(false);
  const { user, logout } = UserAuth();
  const { cartItems } = useCart();
  const theme = useTheme();
  const handleOpenCartModal = () => setOpenCartModal(true);
  const handleCloseCartModal = () => setOpenCartModal(false);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <AppBar
        sx={{ backgroundColor: "#ffffff", placeContent: "space-between" }}
      >
        <Toolbar>
          {isMatch ? (
            <>
              <Box display={"flex"}>
                <DrawerComponent />
                <SearchBar />
              </Box>
            </>
          ) : (
            <>
              <Hidden mdUp>
                <IconButton onClick={handleCloseCartModal}>
                  <MenuIcon />
                </IconButton>
              </Hidden>
              <Grid
                container
                spacing={1}
                height={"6.75rem"}
                alignItems={"center"}
              >
                <Grid item sm={2} md={2}>
                  <RouterLink
                    to={"/"}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Typography variant="h5">Ecommerce</Typography>
                  </RouterLink>
                </Grid>
                <Grid
                  item
                  sm={4}
                  xs={4}
                  alignItems={"center"}
                  sx={{ margin: "auto" }}
                >
                  <SearchBar />
                </Grid>
                {user?.uid ? (
                  <Hidden mdDown>
                    <Box
                      item
                      mt={1}
                      sm={3}
                      xs={1}
                      display={"flex"}
                      sx={{ marginLeft: "auto" }}
                    >
                      <Button
                        sx={{ marginLeft: "1" }}
                        onClick={handleOpenCartModal}
                        variant="text"
                        startIcon={<ShoppingCartOutlinedIcon color="primary" />}
                      >
                        <Badge
                          badgeContent={cartItems.length}
                          margin={1}
                          color="error"
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
                      </Button>

                      <Button
                        sx={{ marginLeft: "1" }}
                        onClick={logout}
                        variant="text"
                        size="small"
                        startIcon={<AccountCircleIcon color="primary" />}
                      >
                        <Typography
                          fontFamily={"Montserrat"}
                          variant="p"
                          display={"inline"}
                        >
                          signed in
                        </Typography>
                      </Button>
                    </Box>
                  </Hidden>
                ) : (
                  <Hidden mdDown>
                    <Box
                      item
                      mt={1}
                      display={"flex"}
                      sx={{ marginLeft: "auto" }}
                    >
                      <Link href="/signup">
                        <Button
                          variant="outlined"
                          sx={{ color: "#000000", marginRight: 1 }}
                        >
                          <Typography>Sign up</Typography>
                        </Button>
                      </Link>
                      <Link href="/login">
                        <Button variant="outlined" sx={{ color: "#000000" }}>
                          <Typography>Log in</Typography>
                        </Button>
                      </Link>
                    </Box>
                  </Hidden>
                )}{" "}
              </Grid>
            </>
          )}
        </Toolbar>
      </AppBar>

      <CartModal open={openCartModal} onClose={handleCloseCartModal} />
    </>
  );
};

export default Header;
