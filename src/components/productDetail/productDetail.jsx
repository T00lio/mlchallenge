import React from "react";
import { Container, Grid, Stack, Typography, IconButton } from "@mui/material";
import StarRating from "../starRating.js";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/useCart";
import "../productDetail/productDetail.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Breadcrumbs from "../breadcrumb/Breadcumb.jsx";

const ProductDetail = ({ data: { product, description }, categories }) => {
  const { addToCart } = useCart();
  const params = useParams();
  console.log(params);

  const handleAddToCartClick = () => {
    addToCart({
      productId: params.id,
      imageUrl: product?.thumbnail,
      title: product?.title,
      price: product?.price,
    });
  };

  return (
    <Container className="pdGrid">
      <div className="pd">
        <Grid container>
          <Grid item xs={12} sm={12} className="breadcrumb">
            <Breadcrumbs categories={categories} />
          </Grid>

          <Grid item xs={12} sm={8}>
            <img
              className="pic"
              src={product?.pictures?.[0]?.url || ""}
              alt={product?.title}
            ></img>
          </Grid>
          <Grid item xs={12} sm={4} className="pdes">
            <Typography
              nowrap="true"
              variant="h4"
              fontWeight={500}
              fontFamily={"Montserrat"}
            >
              {product?.title || ""}
            </Typography>
            <Typography variant="h4" fontWeight={700} fontFamily={"Montserrat"}>
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

          <Grid item xs={12}>
            <Typography
              variant="h4"
              fontWeight="900"
              fontFamily={"Montserrat"}
              padding={1}
              className="description-title"
            >
              Product Description
            </Typography>
            <Typography mt={2} mb={2} lineHeight={2} padding={1}>
              {description?.plain_text || ""}
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default ProductDetail;
