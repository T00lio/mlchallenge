import Header from "./components/Header/index";
import { Route, Routes } from "react-router-dom";
import { SearchContextProvider } from "./context/searchContext";
import ResultList from "./pages/ResultList";
import HomePage from "./pages/HomePage";
import ResultNotFound from "./pages/ResultNotFound";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProfilePage from "./pages/ProfilePage";
import SignUp from "./pages/Login";
import { AuthContextProvider } from "./context/authContext";
import ProtectedRoute from "./utils/ProptectedRoute";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <SearchContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/items" element={<ResultList />}></Route>
            <Route path="/item/:id" element={<ProductDetailPage />}></Route>
            <Route path="*" element={<ResultNotFound />}></Route>
            <Route path="/signin" element={<SignUp />}></Route>
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
      </AuthContextProvider>
    </div>
  );
}

export default App;
