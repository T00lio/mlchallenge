import React from "react";
import SearchBar from "./searchBar/index";
import Logo from "../images/MELI.svg"
import "../components/header.css";

const Header = () => {
    return (
        <header className="header">
            <img src={Logo} width={30} height={30} className="logo"></img>
            <SearchBar />
        </header>
    )
};

export default Header;