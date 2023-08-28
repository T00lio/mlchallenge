import Breadcrumbs from "../components/breadcrumb/Breadcumb";
import SearchResult from "../components/searchresult";
import Header from "../components/Header";
import Subheader from "../components/subheader";

const HomePage = () => {
  return (
    <>
      <Header />
      <Subheader />
      <Breadcrumbs />
      <SearchResult />
    </>
  );
};

export default HomePage;
