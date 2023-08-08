import { Container } from "reactstrap";
import "./searchResultItem.css";
import { Link } from "react-router-dom";

const SearchResultItem = ({ id, imageUrl, price, title, location }) => {
  return (
    <Link to={`/product/${id}`}>
      <Container className="productResult">
        <div className="fi1">
          <img src={imageUrl} height={100} width={100} alt="Search" />
        </div>
        <div className="fi2">
          <h1>{title}</h1>
          <p> {price} </p>
        </div>
        <div className="fi3">
          <h1>{location}</h1>
        </div>
      </Container>
    </Link>
  );
};

export default SearchResultItem;
