import Header from "./components/Header/index";
import { Route, Routes } from "react-router-dom";
import { SearchContextProvider } from "./context/searchContext";
import ResultList from "./pages/ResultList";
import HomePage from "./pages/HomePage";
import ResultNotFound from "./pages/ResultNotFound";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/items" element={<ResultList />}></Route>
            <Route path="/item/:id" element={<ProductDetailPage />}></Route>
            <Route path="*" element={<ResultNotFound />}></Route>
          </Routes>
        </SearchContextProvider>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          MELI Challenge
        </a>
      </header>
    </div>
  );
}

export default App;
