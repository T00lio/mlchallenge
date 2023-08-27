import "./Cart.css";
import React from "react";

const CartItem = ({ thumbnail, price, title, quantity }) => {
  return (
    <div>
      <div className="cartItem">
        <img src={thumbnail} width={100} height={100} alt={title}></img>
        <div>{title}</div>
        <div>{price}</div>
        <div>{quantity}</div>
      </div>
    </div>
  );
};

export default CartItem;
