import { Container } from "reactstrap";
import "./searchResultItem.css";

const SearchResultItem = ({ id, imageUrl, price, title, location }) => {
  return (
    <Container className="productResult">
      <div className="fi1" key={id}>
        <img src={imageUrl} height={100} width={100} alt="Search" />
      </div>
      <div className="fi2">
        <h5>{title}</h5>
        <p>
          {Number(price).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}{" "}
        </p>
      </div>
      <div className="fi3">
        <h5>{location}</h5>
      </div>
    </Container>
  );
};

export default SearchResultItem;
