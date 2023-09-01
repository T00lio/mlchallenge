import { Container } from "reactstrap";
import "../searchresult/searchresult.css";
import SearchResultItem from "../searchResultItem/searchResultItem";
import { useSearchContext } from "../../context/searchContext";
import { Link } from "react-router-dom";

const SearchResult = () => {
  const { queryResult } = useSearchContext();

  return (
    <Container className="sr">
      {queryResult?.length > 0 ? (
        queryResult.map((result) => (
          <Link
            to={`/item/${result.id}`}
            key={result.id}
            className="link"
            style={{ textDecoration: "none", color: "black" }}
          >
            <SearchResultItem
              key={result.id}
              id={result.id}
              imageUrl={result.thumbnail}
              price={result.price}
              title={result.title}
              location={result.address.state_name}
            />
          </Link>
        ))
      ) : (
        <h1>Type in search box to get result ...</h1>
      )}
    </Container>
  );
};

export default SearchResult;
