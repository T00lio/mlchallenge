import React from "react";
import SearchBar from "../SearchBar";
import Logo from "images/MELI.svg";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} width={30} height={30} className="logo" alt="logo"></img>
      <SearchBar />
    </header>
  );
};

export default Header;
