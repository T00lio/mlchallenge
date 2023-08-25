import React from "react";
import "./Footer.css";
import { useCart } from "../../context/useCart";

function Footer() {
  const { cart } = useCart();

  return <footer className="footer">{JSON.stringify(cart, null, 2)}</footer>;
}

export default Footer;
