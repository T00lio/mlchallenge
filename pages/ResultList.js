import React from "react";
import Breadcrumbs from "../components/breadcrumb";
import SearchResult from "../components/searchresult";
import Header from "../components/Header";
import Footer from "../components/footer/Footer";

function ResultList() {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <SearchResult />
      <Footer />
    </>
  );
}

export default ResultList;
