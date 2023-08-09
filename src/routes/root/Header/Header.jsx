import React from "react";
import SearchBar from "../../../components/SearchBar/SearchBar";
import "./Header.css";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} width={30} height={30} className="logo" alt="logo"></img>
      <SearchBar />
    </header>
  );
};

export default Header;
