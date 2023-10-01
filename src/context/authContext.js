import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import Snackbar from "@mui/material/Snackbar";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showSnackBar, setShowSnackbar] = useState("");
  const navigate = useNavigate();

  const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((createdUser) => {
        setDoc(doc(db, "shoppingCart", createdUser.user.uid), {
          cartItems: [],
        });
        navigate("/");
      })
      .catch((error) => {
        setShowSnackbar(error.message);
      });
  };

  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).catch((error) => {
      setShowSnackbar(error.message);
    });
  };

  const logout = () => {
    signOut(auth).catch((error) => {
      setShowSnackbar(error.message);
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ createUser, user, logout, signIn }}>
      <>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={!!showSnackBar}
          autoHideDuration={4000}
          message={showSnackBar}
        />
        {children}
      </>
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
