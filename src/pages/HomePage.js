import React from "react";
import Footer from "../components/footer/Footer";
import Hero from "../components/Hero/Hero";
import "../index.css";

const HomePage = () => {
  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <main className="flex bg-gray-100 min-h-screen w-full">
        <Hero />
      </main>
      <footer className="bg-gray-800 text-white text-center p-4 relative">
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
