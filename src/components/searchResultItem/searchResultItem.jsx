import { Container } from "reactstrap";
import "./searchResultItem.css";
import { useSearchContext } from "../../context/searchContext";
import { Link } from "react-router-dom";


const SearchResultItem = ({id, imageUrl, price, title, location}) => {
const {searchQuery} = useSearchContext();
 console.log(searchQuery);

  return (
    <Container className="productResult">

      <Link to={`/item/${id}`}>
        <div className="fi1">
          <img src={imageUrl} height={100} width={100} alt="Search" />
        </div>
        <div className="fi2">
          <h1>{price}</h1>
          <p> {title} </p>
        </div>
        <div className="fi3">
          <h1>{location}</h1>
        </div>
      </Link>
    </Container>
  );
};

export default SearchResultItem;
