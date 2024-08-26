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
      <section
        style={{ backgroundImage: `url( ${BG} )` }}
        className="w-dvw h-dvh flex flex-col content-between bg-cover bg-right bg-no-repeat hero-bg "
      >
        <AlternateHeader />
        <div className="container p-4 h-full ">
          <div className="flex">
            <div className=" p-5 rounded-xl">
              <h1 className="hero-clamp tracking-wide bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-900 group-hover:via-violet-600 group-hover:to-slate-300 group-hover:bg-clip-text group-hover:text-transparent">
                TopShop
              </h1>
              <div className="rounded-2xl absolute justify-center items-center">
                <div className="p-4 flex-wrap w-3/4 md:[p-0 w-full]">
                  <h1 className="text-pretty font-extralight text-white rounded-2xl p-4 bg-indigo-500/25 relative ml-auto">
                    Your one 🛑 shop for all your needs,{" "}
                    <a className="font-black text-slate-300 hover:text-lime-100">
                      BEGIN
                    </a>{" "}
                    your shopping experience now!
                  </h1>
                  <span className="p-4">
                    <SearchBar />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            onClick={scrollToNext}
          >
            <svg
              className="w-8 h-8 animate-bounce text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
