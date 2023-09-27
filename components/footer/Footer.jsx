import React from "react";
import "./Footer.css";
import { useCart } from "../../context/useCart";

function Footer() {
  const { cart } = useCart();

  return (
    <footer className="footer">
      <small>{JSON.stringify(cart, null, 2)}</small>
    </footer>
  );
}

export default Footer;
