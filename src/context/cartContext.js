import { createContext, useState, useEffect } from "react";
import { UserAuth } from "./authContext";
import { db } from "../firebase";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";

export const CartContext = createContext({
  product: [],
  addToCart: () => {},
  getProductQuantity: () => {},
  getCartTotal: () => {},
  removeOneFromCart: () => {},
  clearCart: () => {},
  user: null,
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    if (user?.uid) {
      const unsubscribe = onSnapshot(doc(db, "cart", user.uid), (snapshot) => {
        const data = snapshot.data();

        if (data) {
          setCartItems(data.cartItems);
        }
      });

      return () => {
        unsubscribe();
      };
    }
  }, [user?.uid]);

  const getProductQuantity = (id) => {
    const quantity = cartItems.find((product) => product.id === id)?.quantity;

    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  const addToCart = ({ productId, imageUrl, title, price }) => {
    const userRef = doc(db, "shoppingCart", user.uid);
    const isInCartItems = cartItems.find((obj) => obj.id === productId);

    if (isInCartItems) {
      updateDoc(userRef, {
        cartItems: cartItems.map((item) => {
          if (item.id === productId) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        }),
      });
    } else {
      updateDoc(userRef, {
        cartItems: cartItems.concat({
          id: productId,
          imageUrl,
          title,
          quantity: 1,
          price,
        }),
      });
    }
  };

  const removeOneFromCart = ({ productId }) => {
    const userRef = doc(db, "shoppingCart", user.uid);

    const itemIndex = cartItems.findIndex((item) => item.id === productId);

    if (itemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      const currentItem = updatedCartItems[itemIndex];

      if (currentItem.quantity > 1) {
        currentItem.quantity -= 1;
      } else {
        updatedCartItems.splice(itemIndex, 1);
      }

      updateDoc(userRef, {
        cartItems: updatedCartItems,
      });
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const contextValue = {
    cartItems,
    addToCart,
    getProductQuantity,
    getCartTotal,
    removeOneFromCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
