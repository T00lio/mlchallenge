import SearchResult from './pages/SearchResult';
import Header from './components/header';
import Breadcrumb from './components/Breadcumb';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Breadcrumb/>
        <SearchResult />
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
