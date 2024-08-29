import React from "react";
import BG from "../../assets/images/landing/3d/top.png";
import "./Hero.css";
import SearchBar from "../searchBar";
import AlternateHeader from "./AlternateHeader";

function Hero() {
  const scrollToNext = () => {
    if (window.scrollY >= 0) {
      window.scrollTo(0, window.innerHeight);
    }
  };
  return (
    <>
      {/* Floating Transparent Header */}
      <div className="fixed top-0 left-0 w-full z-10">
        <AlternateHeader />
      </div>

      {/* Hero Section */}
      <section
        style={{ backgroundImage: `url( ${BG} )` }}
        className="w-dvw h-dvh flex flex-col bg-cover bg-right bg-no-repeat hero-bg"
      >
        <div className="flex-grow flex items-center justify-center">
          <div className="p-5 text-center">
            <h1 className="hero-clamp tracking-wide bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-900 group-hover:via-violet-600 group-hover:to-slate-300 group-hover:bg-clip-text group-hover:text-transparent">
              TopShop
            </h1>
            <div className="rounded-2xl flex flex-col items-center">
              <div className="p-4 w-3/4 md:w-full">
                <h1 className="text-pretty font-extralight text-white rounded-2xl p-4 relative">
                  Your one 🛑 shop for all your needs,{" "}
                  <a className="font-black text-slate-300 hover:text-lime-400 transition-colors">
                    BEGIN
                  </a>{" "}
                  your shopping experience now!
                </h1>
                <span className="p-4 flex justify-center">
                  <SearchBar />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
