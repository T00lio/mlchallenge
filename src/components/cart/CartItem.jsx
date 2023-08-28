import "./Cart.css";
import React, { useState, useEffect } from "react";
import Iphone from "../../assets/images/iphone.jpeg";
import { useCart } from "../../context/useCart";
import { CartContext } from "../../context/cartContext";

const CartItem = () => {
  const [data, setData] = useState(null);
  const { cart } = useCart();

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/items/${cart.id}`)
      .then((response) => response.json())
      .then((data) => setData(data));
    console.log(data);
  }, []);

  return (
    <div>
      <div className="cartItem">
        <img src={Iphone} width={100} height={100} alt="props.title"></img>
        <div>product.title</div>
        <div>price{cart.id}</div>
        <div>{cart.quantity}</div>
      </div>
    </div>
  );
};

export default CartItem;
