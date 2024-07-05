import SearchResult from "../components/searchresult";
import Header from "../components/Header";
import Footer from "../components/footer/Footer";
import Hero from "../components/Hero/Hero";

const HomePage = () => {
  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <SearchResult />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
