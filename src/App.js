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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Cart from "./components/cart/index";
import "./firetest.js";
import "./styles.css";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 999,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: "#001018",
    },
    secondary: {
      main: "#1e65ff",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
  button: {
    fontFamily: "Montserrat",
    borderRadius: "1rem",
  },
  spacing: 10,
  card: {
    borderRadius: "1rem",
    elevation: 50,
  },
  grid: {
    spacing: 4,
  },
  shape: {
    borderRadius: 10,
  },
});

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <CartProvider>
          <SearchContextProvider>
            <ThemeProvider theme={theme}>
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
            </ThemeProvider>
          </SearchContextProvider>
        </CartProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
