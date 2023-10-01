import { createContext, useState, useEffect } from "react";
import { UserAuth } from "./authContext";
import { db } from "../firebase";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";

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
  const [snackBarInfo, setSnackBarInfo] = useState(null);

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
      return;
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

    setSnackBarInfo({
      message: "Item added to cart!",
      severity: "success",
    });
  };

  const removeFromCart = (productId) => {
    const userRef = doc(db, "shoppingCart", user.uid);

    const itemToRemove = cartItems.find((item) => item.id === productId);

    if (!itemToRemove) {
      return;
    }

    if (itemToRemove.quantity > 1) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });

      updateDoc(userRef, {
        cartItems: updatedCartItems,
      });

      setCartItems(updatedCartItems);
    } else {
      const updatedCartItems = cartItems.filter(
        (item) => item.id !== productId
      );

      updateDoc(userRef, {
        cartItems: updatedCartItems,
      });

      setCartItems(updatedCartItems);
    }

    setSnackBarInfo({
      message: "Item removed from cart!",
      severity: "success",
    });
  };

  const clearCart = () => {
    const userRef = doc(db, "shoppingCart", user.uid);
    setCartItems([]);
    updateDoc(userRef, {
      cartItems: [],
    });

    setSnackBarInfo({
      message: "Cart cleared!",
      severity: "success",
    });
  };

  const contextValue = {
    cartItems,
    addToCart,
    getProductQuantity,
    removeFromCart,
    clearCart,
  };

  const closeSnackBar = () => {
    setSnackBarInfo(null);
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={!!snackBarInfo}
        autoHideDuration={3000}
        message={snackBarInfo ? snackBarInfo.message : ""}
        onClose={closeSnackBar}
        severity={snackBarInfo ? snackBarInfo.severity : "info"}
      />
      <CartContext.Provider value={contextValue}>
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartProvider;
