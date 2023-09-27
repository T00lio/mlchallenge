import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/authContext";

function ProptectedRoute({ children }) {
  const { user } = UserAuth();

  if (!user?.uid) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default ProptectedRoute;
