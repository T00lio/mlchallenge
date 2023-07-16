import Header from "./components/Header/index";
import Breadcrumbs from "./components/breadcrumb/index";
// import SearchResultItem from './components/searchResultItem/searchResultItem';
import SearchResult from "./components/searchresult/index";
import busqueda from "./shared/endpoint";
import { SearchContextProvider } from "./contexts/searchContext";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchContextProvider>
          <Header />
          <Breadcrumbs />
          <SearchResult />
        </SearchContextProvider>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}
console.log(busqueda);
export default App;
