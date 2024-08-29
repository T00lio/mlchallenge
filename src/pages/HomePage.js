import React from "react";
import Footer from "../components/footer/Footer";
import Hero from "../components/Hero/Hero";
import "../index.css";
import Categories from "../components/categories/categories";
import CTA from "../components/CTA";

const HomePage = () => {
  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <main className="flex flex-col bg-gray-100 w-full">
        <Hero />
        <Categories />
        <CTA />
      </main>
      <footer className="bg-gray-800 text-white text-center p-4 relative">
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
