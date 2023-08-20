import React from "react";
import Iphone from "../../assets/images/iphone.jpeg";
import "./Cart.css";

function Cart() {
  return (
    <div>
      <h1 className="title">Shopping Cart</h1>
      <hr />
      <div className="cartItem">
        <div>{}name</div>
        <img src={Iphone} width={100} height={100} alt="mock"></img>
        <div>{}price</div>
        <div>
          <button className="add">+</button>quantity
          <button className="less">-</button>
        </div>
        <div>{}Total</div>
        <button className="remove">Remove</button>
      </div>
      <hr />
      <div className="cobtn">
        <button className="checkout">Check out</button>
      </div>
    </div>
  );
}

export default Cart;
