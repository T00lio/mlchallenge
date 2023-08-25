import React from "react";
import Iphone from "../../assets/images/iphone.jpeg";
import "./Cart.css";
import IphoneMock from "../../assets/images/iphone.jpeg";
import { useId } from "react";

export const Cart = () => {
  const cartCheckboxId = useId();

  return (
    <>
      <label className="title" htmlFor={cartCheckboxId}>
        🛒
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />
      <aside className="cart">
        <ul>
          <li>
            <img src={IphoneMock} width={100} height={100} alt="mock"></img>
            <div>
              <strong>iPhone</strong> - $1000
            </div>
            <footer>
              <small>Quantity: 1</small>
              <button>+</button>
            </footer>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Cart;
