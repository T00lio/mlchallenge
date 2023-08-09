import { Container } from "reactstrap";
import "./searchResultItem.css";
import { Link } from "react-router-dom";

const SearchResultItem = ({ id, imageUrl, price, title, location }) => {
  return (
    <Container className="productResult">
      <Link to={`/item/${id}`} className="link">
        <div className="fi1">
          <img src={imageUrl} height={100} width={100} alt="Search" />
        </div>
        <div className="fi2">
          <h3>{title}</h3>
          <p> {price} </p>
        </div>
        <div className="fi3">
          <h3>{location}</h3>
        </div>
      </Link>
    </Container>
  );
};

export default SearchResultItem;
