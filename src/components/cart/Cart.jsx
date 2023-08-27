import React from "react";
import { useId } from "react";
import "./Cart.css";
import { createContext, useState } from "react";
import iphone from "../../assets/images/iphone.jpeg";

export const CartContext = createContext();

export const Cart = () => {
  return (
    <>
      <label className="cart-button" htmlFor="cartCheckboxId">
        carrito
      </label>
      <input type="checkbox" hidden />
      <aside className="cart">
        <ul>
          <li>
            <img src={iphone} height={100} width={100} alt="products" />
            <h1>Iphone</h1>
          </li>
          <footer>
            <small>Quantity: 1</small>
            <p>Price</p>
          </footer>
          <button>Remove</button>
        </ul>
      </aside>
    </>
  );
};

export default Cart;
