import React, { useState, useEffect } from "react";
import "../productDetail/productDetail.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Grid, Stack, CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import { getData } from "../../utils/httpsClient";
import { useCart } from "../../context/useCart";

const ProductDetail = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const { addToCart, cart } = useCart();

  const params = useParams();
  console.log(params.id);

  useEffect(() => {
    const fetchItemData = async () => {
      setLoading(true);

      const [product, description] = await Promise.all([
        getData(`items/${params.id}`),
        getData(`items/${params.id}/description`),
      ]);
      setData({ product, description });
    };

    fetchItemData();
    setLoading(false);
  }, [params.id]);

  const handleAddToCart = (data) => {
    addToCart([...cart, data]);
  };
  return loading ? (
    <div className="loader">
      <CircularProgress size={80} />
    </div>
  ) : (
    <Container>
      <div className="pd">
        <Grid container>
          <Grid item xs={8}>
            <img
              src={data?.product?.thumbnail || ""}
              alt="productImage"
              width={500}
              height={500}
              className="pic"
            ></img>
          </Grid>
          <Stack xs={3} item className="pdes">
            <p className="name">{data?.product?.title || ""}</p>
            <h4>{data?.product?.seller_address?.state?.name || ""}</h4>
            <h3>
              {Number(data?.product?.price).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}{" "}
            </h3>
            <hr />
            <button
              className="add"
              onClick={() => handleAddToCart(data?.product)}
            >
              Add to cart
            </button>
          </Stack>
          <Stack item className="pdeet">
            <h2>Descripción del producto</h2>
            <p>{data?.description?.plain_text || ""}</p>
          </Stack>
        </Grid>
      </div>
    </Container>
  );
};

export default ProductDetail;
