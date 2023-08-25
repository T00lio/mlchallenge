import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const CartItem = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);

  return cart.map((product) => (
    <div>
      <h1 className="title">Shopping Cart</h1>
      <hr />
      <div className="cartItem">
        <div>{product.name}</div>
        <img src={product.image} width={100} height={100} alt="mock"></img>
        <div>{product.price}</div>
      </div>
    </div>
  ));
};

export default CartItem;
