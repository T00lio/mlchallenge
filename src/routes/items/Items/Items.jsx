import { useLoaderData } from "react-router";
import { Container } from "reactstrap";
import Breadcrumbs from "../Breadcrumb";
import SearchResultItem from "../SearchResultItem";
import "./Items.css";

function Items() {
  const queryResult = useLoaderData();

  return (
    <>
      <Breadcrumbs />
      <div className="sr">
        <Container>
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
            <p>no result found...</p>
          )}
        </Container>
      </div>
    </>
  );
}

export default Items;
