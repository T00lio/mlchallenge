import Header from "./components/Header/index";
import {Route, Routes } from 'react-router-dom';
import { SearchContextProvider } from "./context/searchContext";
import  ProductDetail from './components/productDetail/index';
import ResultList from './pages/ResultList';
import HomePage from "./pages/HomePage";
import ResultNotFound from "./pages/ResultNotFound";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchContextProvider>
          <Header /> 
          <Routes>
             
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/home' element={<ResultList/>}></Route>
            <Route path='/item/:id' element={<ProductDetail/>}></Route>
            <Route path='*' element={<ResultNotFound/>}></Route>
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
