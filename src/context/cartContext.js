import { createContext, useState, useEffect } from "react";
import { UserAuth } from "./authContext";
import { db } from "../firebase";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";

export const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  getProductQuantity: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    if (user?.uid) {
      const unsubscribe = onSnapshot(
        doc(db, "shoppingCart", user.uid),
        (snapshot) => {
          const data = snapshot.data();

          if (data) {
            setCartItems(data.cartItems);
          }
        }
      );

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

  const removeFromCart = (productId) => {
    const userRef = doc(db, "shoppingCart", user.uid);

    // Find the index of the item with the given productId in the cartItems array
    const itemIndex = cartItems.findIndex((item) => item.id === productId);

    if (itemIndex !== -1) {
      // Remove the item from cartItems by creating a new array without the item
      const updatedCartItems = [
        ...cartItems.slice(0, itemIndex),
        ...cartItems.slice(itemIndex + 1),
      ];

      // Update the cart in Firestore with the updated cartItems
      updateDoc(userRef, {
        cartItems: updatedCartItems,
      });

      // Update the local state with the updated cartItems
      setCartItems(updatedCartItems);
    }
  };

  const clearCart = () => {
    const userRef = doc(db, "shoppingCart", user.uid);
    setCartItems([]);
    updateDoc(userRef, {
      cartItems: [],
    });
  };

  const contextValue = {
    cartItems,
    addToCart,
    getProductQuantity,
    removeFromCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
