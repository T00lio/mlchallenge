import { createContext, useState, useEffect } from "react";
import { UserAuth } from "./authContext";
import { db } from "../firebase";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  getProductQuantity: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

export const CartProvider = ({ children }) => {
  const Navigate = useNavigate();
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

    if (!cartItems) {
      return 0;
    }
    return quantity;
  };

  const addToCart = ({ productId, imageUrl, title, price }) => {
    if (!user) {
      Navigate("/login");
    } else {
    }

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

    // Find the item with the specified productId in the cartItems array
    const itemToRemove = cartItems.find((item) => item.id === productId);

    if (!itemToRemove) {
      return; // If item not found, do nothing
    }

    // If the item has a quantity greater than 1, decrement the quantity
    if (itemToRemove.quantity > 1) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });

      // Update the document with the updated cartItems
      updateDoc(userRef, {
        cartItems: updatedCartItems,
      });

      // Update the local state with the updated cartItems
      setCartItems(updatedCartItems);
    } else {
      // If the item has a quantity of 1, remove it from the cart
      const updatedCartItems = cartItems.filter(
        (item) => item.id !== productId
      );

      // Update the document with the updated cartItems
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
