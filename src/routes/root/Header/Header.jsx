import React from "react";
import SearchBar from "../../../components/searchBar/index";
import "./Header.css";
import logo from "../../../assets/images/MELI.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} width={30} height={30} className="logo" alt="logo"></img>
      <SearchBar />
    </header>
  );
};

export default Header;
