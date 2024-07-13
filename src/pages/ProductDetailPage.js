import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import ProductDetail from "../components/productDetail";
import Header from "../components/Header";
import { getData } from "../utils/httpsClient";
import Footer from "../components/footer/Footer";

const ProductDetailPage = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const [categories, setCategories] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchItemData = async () => {
      setIsLoading(true);

      const [product, description] = await Promise.all([
        getData(`items/${params.id}`),
        getData(`items/${params.id}/description`),
      ]);
      const categoryDetails = await getData(
        `categories/${product.category_id}`
      );

      setData({ product, description });
      setCategories(categoryDetails.path_from_root);

      setIsLoading(false);
    };

    fetchItemData();
  }, [params.id]);

  return (
    <>
      <Header />

      {isLoading ? (
        <div
          className="loader"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress size={160} color="secondary" />
        </div>
      ) : (
        <>
          <ProductDetail data={data} categories={categories} />
        </>
      )}
      <Footer />
    </>
  );
};

export default ProductDetailPage;
