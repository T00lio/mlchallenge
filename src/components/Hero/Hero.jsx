import React from "react";
import "../../index.css";
import SearchBar from "../searchBar";
import HeroImg from "../../assets/images/landing/landing.avif";
import { MENU_ITEMS } from "../../constants/index";

function Hero() {
  return (
    <>
      <section
        className="w-dvw h-dvh flex flex-col content-between bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${HeroImg})`,
        }}
      >
        <nav className="relative p-3 justify-between container-xl top-0">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-start">
              <a
                href="/"
                className="text-white text-2xl font-bold no-underline"
              >
                TopShop
              </a>
            </div>

            <nav className="hidden md:block">
              <div className="mr-auto flex items-end space-x-4">
                {MENU_ITEMS.map((item, index) => (
                  <a
                    key={`${item.id}+${index}`}
                    to={item.url}
                    className="text-white px-3 py-2 text-lg font-medium no-underline"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </nav>
            <div className="-mr-2 flex md:hidden">
              <button className="text-gray-900 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
        <div className="container p-4 content-end ">
          <div className="flex flex-col">
            <div className="bg-slate-700/75 p-5 rounded-xl">
              <h1 className="hero-clamp extra-wide">TopShop</h1>
              <h1 className="text-pretty font-extralight text-stone-100 pb-4">
                Your one 🛑 shop for all your needs, BEGIN your shopping
                experience now{" "}
              </h1>

              <SearchBar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
