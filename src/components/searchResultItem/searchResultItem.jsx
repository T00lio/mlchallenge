import { Container } from "reactstrap";
import "./searchResultItem.css";
import { Link } from "react-router-dom";

const SearchResultItem = ({ id, imageUrl, price, title, location }) => {
  return (
    <Container className="productResult">
      <Link to={`/home/item/${id}`}>
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
      </Link>
    </Container>
  );
};

export default SearchResultItem;
