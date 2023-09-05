import React from "react";
import { Container, Grid, Stack, Typography, IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
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
          <Grid item xs={8}>
            <img
              src={product?.pictures?.[0]?.url || ""}
              alt="productImage"
              width={500}
              height={500}
              className="pic"
            ></img>
          </Grid>
          <Stack xs={3} item className="pdes">
            <Typography variant="h6" fontFamily={"Montserrat"}>
              {product?.title || ""}
            </Typography>
            <Typography variant="h5">
              {product?.seller_address?.state?.name || ""}
            </Typography>
            <Typography variant="h5" fontFamily={"Montserrat"}>
              {Number(product?.price).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}{" "}
            </Typography>
            <hr />
            <IconButton
              className="add"
              onClick={() => handleAddToCartClick(params.id)}
              startIcon={<AddShoppingCartIcon />}
              sx={{
                borderRadius: "1rem",
                background: "#1E65FF",
                display: "flex",
                width: "5rem",
                height: "3.375rem",
                color: "#ffffff",
              }}
            >
              <Typography fontFamily={"Montserrat"}>Add to cart</Typography>
            </IconButton>
          </Stack>
          <Stack item className="pdeet">
            <Typography variant="h4" fontFamily={"Montserrat"}>
              Descripción del producto
            </Typography>
            <Typography fontFamily={"Montserrat"} textAlign={"justify"}>
              {description?.plain_text || ""}
            </Typography>
          </Stack>
        </Grid>
      </div>
    </Container>
  );
};

export default ProductDetail;
