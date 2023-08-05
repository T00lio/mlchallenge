import { NavLink } from "react-router-dom";
import { Container } from "reactstrap";
import "./SearchResultItem.css";

const SearchResultItem = ({ id, imageUrl, price, title, location }) => {
  return (
    <Container className="productResult">
      <div className="fi1">
        <img src={imageUrl} height={100} width={100} alt="Search" />
      </div>
      <div className="fi2">
        <h1>{price}</h1>
        <NavLink to={`/items/${id}`}>
          <p> {title} </p>
        </NavLink>
      </div>
      <div className="fi3">
        <h1>{location}</h1>
      </div>
    </Container>
  );
};

export default SearchResultItem;
