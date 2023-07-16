import { Container } from "reactstrap";
import "../searchresult/searchresult.css";
import SearchResultItem from "../searchResultItem/searchResultItem";
import { useSearchContext } from "../../contexts/searchContext";

const SearchResult = () => {
  const { queryResult } = useSearchContext();

  console.log(queryResult);

  return (
    <div className="sr">
      <Container>
        {queryResult?.length > 0 ? (
          queryResult.map((result) => (
            <SearchResultItem
              key={result.id}
              imageUrl={result.thumbnail}
              price={result.price}
              title={result.title}
              location={result.address.state_name}
            />
          ))
        ) : (
          <p>No result found</p>
        )}
      </Container>
    </div>
  );
};

export default SearchResult;
