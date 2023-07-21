import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar";
import Logo from "../../images/MELI.svg";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to='/'>
        <img src={Logo} width={30} height={30} className="logo" alt="logo"></img>
      </Link>
      <SearchBar />
    </header>
  );
};

export default Header;
