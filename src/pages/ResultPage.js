import React, { useContext } from "react";
import SearchResult from "../components/searchresult";
import Header from "../components/Header";
import Footer from "../components/footer/Footer";
import { Navigate } from "react-router-dom";
import { SearchContext } from "../context/searchContext";

function ResultPage() {
  // if there is no query result, redirect to home page
  const { queryResult } = useContext(SearchContext);
  console.log(queryResult.length);

  // if there is no query result, redirect to home page
  if (queryResult.length === 0 || queryResult === undefined) {
    return <Navigate to="/" />;
  }
  //
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex flex-row">
        <Header />
      </header>

      <main className="flex-row p-4 bg-gray-100 mt-28">
        <SearchResult />
      </main>

      <footer className="bg-gray-800 text-white text-center p-4 relative">
        <Footer />
      </footer>
    </div>
  );
}

export default ResultPage;
