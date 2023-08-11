import { NavLink } from "react-bootstrap";
import { Container } from "reactstrap";
import "..SearchResultItem/SearchResultItem.css";

const SearchResultItem = ({ id, imageUrl, price, title, location }) => {
  return (
    <Container className="productResult">
      <div className="fi1">
        <img src={imageUrl} width={100} height={100} alt="product" />
      </div>
      <div className="fi2">
        <h1>{title}</h1>
        <NavLink href={`/items/${id}`}>Ver detalle</NavLink>
        <p>{location}</p>
      </div>
      <div className="fi3">
        <h2>{price}</h2>
      </div>
    </Container>
  );
};

export default SearchResultItem;
