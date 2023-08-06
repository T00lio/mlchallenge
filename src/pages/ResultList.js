import Breadcrumbs from "../components/breadcrumb";
import SearchResult from "../components/searchresult";

function ResultList() {
  return (
    <>
      <Breadcrumbs current="/home" detail={true} />
      <SearchResult />
    </>
  );
}

export default ResultList;
