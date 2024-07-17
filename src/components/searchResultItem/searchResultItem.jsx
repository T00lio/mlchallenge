import React from "react";
import { useCart } from "../../context/useCart";
import { useNavigate } from "react-router-dom";

const SearchResultItem = ({ id, imageUrl, price, title }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  console.log(id, imageUrl, price, title);

  const handleClick = () => {
    navigate(`/item/${id}`);
  };

  const handleAddToCart = () => {
    if (id) {
      addToCart({
        productId: id,
        imageUrl: imageUrl,
        title: title,
        price: price,
      });
    }
  };

  return (
    <>
      <div
        to={`/item/${id}`}
        className="flex flex-col rounded-2xl w-80 h-auto ml-3 mr-3 mb-3 bg-[#ffffff] shadow-xl hover:shadow-indigo-100 hover:scale-105 transition ease-in-out"
      >
        <figure className="flex justify-center items-center rounded-xl bg-cover bg-center">
          <img
            src={imageUrl}
            alt={title}
            className="rounded-t-2xl bg-fit h-72 w-72"
          ></img>
        </figure>
        <div className="flex flex-col p-8">
          <h5 className="text-l font-bold   text-black pb-4 line-clamp-2 overflow-hidden">
            {title}
          </h5>
          <div className=" text-base   text-[#000000]">
            {Number(price).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </div>

          <div className="flex justify-start pt-4 font-white">
            <button
              onClick={handleClick}
              className="border-2 font-black text-white bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-indigo-700 via-indigo-500 to-indigo-300 p-4 rounded-xl :hover:bg-[#000000] :hover:text-white"
            >
              more details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResultItem;
