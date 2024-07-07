import React from "react";
import Breadcrumbs from "../components/breadcrumb";
import SearchResult from "../components/searchresult";
import Header from "../components/Header";
import Footer from "../components/footer/Footer";

function ResultPage() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <SearchResult />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default ResultPage;
