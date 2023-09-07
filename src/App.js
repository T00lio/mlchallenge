import { Route, Routes } from "react-router-dom";
import { SearchContextProvider } from "./context/searchContext";
import ResultList from "./pages/ResultList";
import HomePage from "./pages/HomePage";
import ResultNotFound from "./pages/ResultNotFound";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProfilePage from "./pages/ProfilePage";
import Login from "./pages/Login";
import SignUp from "./components/auth//signup/SignUp";
import { AuthContextProvider } from "./context/authContext";
import ProtectedRoute from "./utils/ProptectedRoute";
import CartProvider from "./context/cartContext";
import Cart from "./components/cart/index";
import "./firetest.js";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <CartProvider>
          <SearchContextProvider>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/items" element={<ResultList />}></Route>
              <Route path="/item/:id" element={<ProductDetailPage />}></Route>
              <Route path="*" element={<ResultNotFound />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                }
              ></Route>
            </Routes>
          </SearchContextProvider>
        </CartProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
