import React from "react";
import Breadcrumbs from "../components/breadcrumb";
import SearchResult from "../components/searchresult";
import Header from "../components/Header";
import Subheader from "../components/subheader";

function ResultList() {
  return (
    <>
      <Header />
      <Subheader />
      <Breadcrumbs />
      <SearchResult />
    </>
  );
}

export default ResultList;
