import Header from "./components/Header/index";
import {Route, Routes } from 'react-router-dom';
import { SearchContextProvider } from "./context/searchContext";
import  ProductDetail from './components/productDetail/index';
import ResultList from './pages/ResultList';
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchContextProvider>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/result' element={<ResultList/>}></Route>
            <Route path='/item' element={<ProductDetail/>}></Route>
          </Routes>
        </SearchContextProvider>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
