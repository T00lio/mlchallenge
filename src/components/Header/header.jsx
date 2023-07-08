import React from "react";
import SearchBar from "../searchBar/index";
import Logo from "/Users/tuliosalvatierra/mlchallenge/src/images/MELI.svg"
import "../Header/header.css";

const Header = () => {
    return (
        <header className="header">
            <img src={Logo} width={30} height={30} className="logo" alt='logo'></img>
            <SearchBar />
        </header>
    )
};

export default Header;