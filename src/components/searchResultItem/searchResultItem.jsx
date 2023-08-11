import { Container } from "reactstrap";
import "./searchResultItem.css";

const SearchResultItem = ({ id, imageUrl, price, title, location }) => {
  return (
    <Container className="productResult">
      <div className="fi1">
        <img src={imageUrl} height={100} width={100} alt="Search" />
      </div>
      <div className="fi2">
        <h5>{title}</h5>
        <p> {price} </p>
      </div>
      <div className="fi3">
        <h5>{location}</h5>
      </div>
    </Container>
  );
};

export default SearchResultItem;
