import Header from "./components/Header/index";
import Breadcrumbs from "./components/breadcrumb/index";
import SearchResultItem from './components/searchResultItem/searchResultItem';
import SearchResult from "./components/searchresult/index";
import { SearchContextProvider } from "./context/searchContext";
import  ProductDetail from './components/productDetail/index'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchContextProvider>
          <Header />
          <Breadcrumbs />
          {/* <ProductDetail /> */}
          <SearchResult />
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
