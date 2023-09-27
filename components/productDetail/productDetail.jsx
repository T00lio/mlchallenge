import React from "react";
import { Container, Grid, Stack, Typography, IconButton } from "@mui/material";
import StarRating from "../starRating.js";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/useCart";
import "../productDetail/productDetail.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductDetail = ({ data: { product, description } }) => {
  const { addToCart } = useCart();
  const params = useParams();

  const handleAddToCartClick = () => {
    addToCart({
      productId: params.id,
      imageUrl: product?.thumbnail,
      title: product?.title,
      price: product?.price,
    });
  };

  return (
    <Container>
      <div className="pd">
        <Grid container>
          <Grid item xs={12} sm={8}>
            <div
              className="pic"
              style={{
                backgroundImage: `url("${product?.pictures?.[0]?.url || ""}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "500px",
                height: "500px",
              }}
            ></div>
          </Grid>
          <Grid item xs={12} sm={4} className="pdes">
            <Typography nowrap="true" variant="h6" fontFamily={"Montserrat"}>
              {product?.title || ""}
            </Typography>
            <Typography variant="h5" fontFamily={"Montserrat"}>
              {product?.seller_address?.state?.name || ""}
            </Typography>
            <div className="buttons">
              <Typography variant="h5" fontFamily={"Montserrat"}>
                {Number(product?.price).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}{" "}
              </Typography>
              <Stack direction="row">
                <StarRating
                  rating={product?.seller?.seller_reputation?.level_id}
                />
              </Stack>
            </div>

            <hr />
            <IconButton
              className="add"
              onClick={() => handleAddToCartClick(params.id)}
              sx={{
                borderRadius: "1rem",
                background: "#1E65FF",
                display: "flex",
                width: "100%",
                height: "3.375rem",
                color: "#ffffff",
              }}
            >
              <Typography fontFamily={"Montserrat"}>Add to cart</Typography>
            </IconButton>
          </Grid>
          <Grid item xs={12} mt={3} className="pdeet">
            <Typography variant="h4" fontFamily={"Montserrat"}>
              Product Description
            </Typography>
            <Typography fontFamily={"Montserrat"} textAlign={"justify"} mt={3}>
              {description?.plain_text || ""}
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default ProductDetail;
