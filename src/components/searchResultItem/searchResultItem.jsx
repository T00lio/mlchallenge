import React from "react";
import { useCart } from "../../context/useCart";
import StarRating from "../starRating";
import { Link } from "react-router-dom";

const SearchResultItem = ({ id, imageUrl, price, title, rating }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (id) {
      addToCart({
        productId: id,
        imageUrl: imageUrl,
        title: title,
        price: price,
      });
    } else {
      console.error("Invalid 'id' value:", id);
    }
  };

  return (
    <div className="border rounded-lg shadow-md overflow-hidden">
      <Link to={`/item/${id}`} className="no-underline text-inherit">
        <img src={imageUrl} alt={title} className="w-full h-64 object-cover" />
      </Link>
      <div className="p-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <StarRating rating={rating} />
        <p className="text-gray-500 mt-1">Rating</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-semibold">
            {Number(price).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </span>
          <button
            className="px-4 py-2 border rounded-md text-secondary hover:bg-gray-100"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchResultItem;
