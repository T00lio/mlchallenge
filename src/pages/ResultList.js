import React from "react";
import Breadcrumbs from "../components/breadcrumb";
import SearchResult from "../components/searchresult";
import Header from "../components/Header";

function ResultList() {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <SearchResult />
    </>
  );
}

export default ResultList;
