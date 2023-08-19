import { Navigate } from "react-router-dom";
import React from "react";
import { UserAuth } from "../context/authContext";

function ProptectedRoute({ children }) {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to="/signin" />;
  }
  return children;
}

export default ProptectedRoute;
