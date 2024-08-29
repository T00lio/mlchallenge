import { Link } from "react-router-dom";
import { getData } from "../../utils/httpsClient";
import { categories } from "./categories-data.js";
import { SearchContext } from "../../context/searchContext.js";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./categories.css";

export default function Categories() {
  const { setSearchQuery, setQueryResult } = useContext(SearchContext);
  const storedSearchQuery = sessionStorage.getItem("searchQuery");
  const searchQuery = storedSearchQuery ? storedSearchQuery : "";
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery) {
      setSearchQuery(searchQuery);
      navigate("/items");
    }
  }, [searchQuery, setSearchQuery, navigate]);

  const handleCategoryClick = async (category) => {
    setSearchQuery(category.name);
    const data = await getData(`sites/MLA/search?q=${category.name}`);
    setQueryResult(data?.results);
    navigate("/items");
  };

  return (
    <section className="bg-slate-100 h-auto">
      <div className="container-xl p-14">
        <h1 className="font-black text-4xl">Shop by categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {categories.map((category, index) => (
            <div
              key={`${index}+${category.id}`}
              className="relative overflow-hidden rounded-lg group"
            >
              <Link
                onClick={() => handleCategoryClick(category)}
                className="absolute inset-0 z-10 cursor-pointer"
              >
                <span className="sr-only">{category.name}</span>
              </Link>
              <img
                src={category.image}
                alt={category.name}
                width={400}
                height={300}
                className="object-cover w-full h-52 md:w-full md:h-auto group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white font-black text-lg opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                {category.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
