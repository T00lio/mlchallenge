import { createContext, useState, useEffect } from "react";
import { UserAuth } from "./authContext";
import { db } from "../firebase";
import { doc, setDoc, onSnapshot, updateDoc } from "firebase/firestore";

export const CartContext = createContext({
  product: [],
  addToCart: () => {},
  getProductQuantity: () => {},
  getCartTotal: () => {},
  removeOneFromCart: () => {},
  clearCart: () => {},
  user: null,
});

const updateCartInFirestore = (cartItems, userId) => {
  const userCartRef = doc(db, "shoppingCart", userId);
  setDoc(userCartRef, { cartItems })
    .then(() => {})
    .catch((error) => {
      console.error("Error updating cart in Firestore: ", error);
    });
};
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
            // Create a new object with the modified "quantity" property
            return { ...item, quantity: item.quantity + 1 };
          }
          return item; // Keep unchanged objects
        }),
      });
    } else {
      updateCartInFirestore(cartItems, user.uid);
    }
  };

  const removeOneFromCart = ({ productId }) => {
    const userRef = doc(db, "shoppingCart", user.uid);

    // Find the index of the item to be modified
    const itemIndex = cartItems.findIndex((item) => item.id === productId);

    if (itemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      const currentItem = updatedCartItems[itemIndex];

      if (currentItem.quantity > 1) {
        // Reduce the quantity if it's greater than 1
        currentItem.quantity -= 1;
      } else {
        // Remove the item from the cart if the quantity is 1 or less
        updatedCartItems.splice(itemIndex, 1);
      }

      // Update the Firestore document with the updated cart items
      updateCartInFirestore(cartItems, user.uid);
    }
  };

  const clearCart = () => {
    setCartItems([]);
    updateCartInFirestore(cartItems, user.uid);
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
