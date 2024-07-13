import React, { createContext, useContext, useEffect, useState } from "react";
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
  const [snackBarInfo, setSnackBarInfo] = useState(null);
  const navigate = useNavigate();

  const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((createdUser) => {
        if (createdUser && createdUser.user && createdUser.user.uid) {
          setDoc(doc(db, "shoppingCart", createdUser.user.uid), {
            cartItems: [],
          });
          navigate("/");
          setSnackBarInfo({
            message: "User created successfully!",
            severity: "success",
          });
        }
        if (createdUser && createdUser.user && !createdUser.user.uid) {
          setUser(null);
          setSnackBarInfo({
            message: "User creation failed. Please try again.",
            severity: "error",
          });
        }
      })
      .catch((error) => {
        setSnackBarInfo({ message: error.message, severity: "error" });
      });
  };

  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).catch((error) => {
      setSnackBarInfo({ message: error.message, severity: "error" });
    });
  };

  const logout = () => {
    signOut(auth).catch((error) => {
      setSnackBarInfo({ message: error.message, severity: "error" });
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

  const closeSnackBar = () => {
    setSnackBarInfo(null);
  };

  return (
    <UserContext.Provider value={{ createUser, user, logout, signIn }}>
      <>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={!!snackBarInfo}
          autoHideDuration={3000}
          message={snackBarInfo ? snackBarInfo.message : ""}
          onClose={closeSnackBar}
          severity={snackBarInfo ? snackBarInfo.severity : "info"}
        />
        {children}
      </>
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
