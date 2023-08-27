import { createContext, useState } from "react";

export const CartContext = createContext({
  product: [],
  addToCart: () => {},
  getProductQuantity: () => {},
});

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function getProductQuantity(id) {
    const quantity = cart.find((product) => product.id === id)?.quantity;

    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  const addToCart = (id) => {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      setCart([
        ...cart,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      setCart(
        cart.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  };

  const contextValue = {
    cart,
    addToCart,
    getProductQuantity,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
