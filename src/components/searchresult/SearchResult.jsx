import { Container } from "reactstrap";
import "../searchresult/searchresult.css";
import SearchResultItem from "../searchResultItem/searchResultItem";
import { useSearchContext } from "../../context/searchContext";

const SearchResult = () => {
  const { queryResult } = useSearchContext();
  console.log(queryResult);

  return (
    <Container className="sr">
      {queryResult?.length > 0 ? (
        queryResult.map((result) => (
          <SearchResultItem
            key={result.id}
            id={result.id}
            imageUrl={result.thumbnail}
            price={result.price}
            title={result.title}
            location={result.address.state_name}
          />
        ))
      ) : (
        <h1>Type in search box to get result ...</h1>
      )}
    </Container>
  );
};

export default SearchResult;
