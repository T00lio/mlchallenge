import { Form } from "react-router-dom";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <Form className="search-bar" action="/items">
      <input name="search" type="text" className="search-input" placeholder="Busqueda..." />
      <button type="submit" className="search-button">
        <i>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </i>
      </button>
    </Form>
  );
};

export default SearchBar;
