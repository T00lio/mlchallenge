import React from "react";
import "./Cart.css";
import { useCart } from "../../context/useCart";
import Iphone from "../../assets/images/iphone.jpeg";

const Cart = () => {
  const { cart } = useCart();

  console.log(cart);

  return (
    <>
      <div className="cartItem">
        <img src={Iphone} width={70} height={70} alt="ihpone"></img>
        <h5>{cart.id}</h5>
        <h5>price</h5>
        <button className="removebtn">Remove</button>
        <p>Qty: {cart.quantity}</p>
        <br />
      </div>
    </>
  );
};

export default Cart;
