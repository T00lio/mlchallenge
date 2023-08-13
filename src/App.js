import Header from "./components/Header/index";
import { Route, Routes } from "react-router-dom";
import { SearchContextProvider } from "./context/searchContext";
import ResultList from "./pages/ResultList";
import HomePage from "./pages/HomePage";
import ResultNotFound from "./pages/ResultNotFound";
import ProductDetailPage from "./pages/ProductDetailPage";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import AuthDetails from "./components/auth/AuthDetails";

function App() {
  return (
    <div className="App">
      <SearchContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/items" element={<ResultList />}></Route>
          <Route path="/item/:id" element={<ProductDetailPage />}></Route>
          <Route path="*" element={<ResultNotFound />}></Route>
          <Route
            path="/test"
            element={
              <div>
                <SignIn />
                <SignUp />
                <AuthDetails />
              </div>
            }
          ></Route>
        </Routes>
      </SearchContextProvider>
    </div>
  );
}

export default App;
