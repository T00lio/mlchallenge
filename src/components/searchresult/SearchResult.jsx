import { useState } from "react";
import Breadcrumbs from "../breadcrumb/index";
import "../searchresult/searchresult.css";
import SearchResultItem from "../searchResultItem/searchResultItem";
import Pagination from "../Pagination/Pagination";
import { useSearchContext } from "../../context/searchContext";

const SearchResult = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { queryResult } = useSearchContext();
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = queryResult?.slice(firstIndex, lastIndex);
  const paginationLength = queryResult?.length;

  return (
    <section className="searchResult">
      <div className="container-xl">
        <h1>Search Result</h1>
        <Breadcrumbs />
        {records?.map((item) => (
          <SearchResultItem
            key={item.id}
            imageUrl={item.thumbnail}
            price={item.price}
            title={item.title}
            rating={3}
          />
        ))}

        <Pagination
          paginationLength={paginationLength}
          recordsPerPage={recordsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </section>
  );
};

export default SearchResult;
