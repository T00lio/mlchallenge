import React from "react";
import SignIn from "../components/auth/signin/SignIn";
import { UserAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";

function Login() {
  const { user } = UserAuth();

  if (!user?.uid) {
    return <SignIn />;
  } else {
    return <Navigate to="/" />;
  }
}

export default Login;
