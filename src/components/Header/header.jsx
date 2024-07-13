import React, { useState } from "react";
import { MENU_ITEMS } from "../../constants/index";
import { Link as RouterLink } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

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

  const handleOpenCartModal = () => setOpenCartModal(true);
  const handleCloseCartModal = () => setOpenCartModal(false);

  return (
    <>
      <header className="w-screen text-black bg-white">
        <nav className="relative p-3 justify-between container-xl">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-start">
              <a
                href="/"
                className="text-slate-700 text-2xl font-bold no-underline"
              >
                TopShop
              </a>
            </div>
            <div>
              <SearchBar />
            </div>
            <nav className="hidden md:block">
              <div className="mr-auto flex items-end space-x-4">
                {MENU_ITEMS.map((item, index) => (
                  <a
                    key={`${item.id}+${index}`}
                    to={item.url}
                    className="text-gray-900 px-3 py-2 text-lg font-medium no-underline"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </nav>
            <div className="-mr-2 flex md:hidden">
              <button className="text-gray-900 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      <CartModal open={openCartModal} onClose={handleCloseCartModal} />
    </>
  );
};

export default Header;
