import { Container, Grid, Stack, CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/useCart";
import "../productDetail/productDetail.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductDetail = ({ data: { product, description } }) => {
  const params = useParams();
  const { addToCart } = useCart();

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
            <p className="name">{product?.title || ""}</p>
            <h4>{product?.seller_address?.state?.name || ""}</h4>
            <h3>
              {Number(product?.price).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}{" "}
            </h3>
            <hr />
            <button className="add" onClick={handleAddToCartClick}>
              Add to cart
            </button>
          </Stack>
          <Stack item className="pdeet">
            <h2>Descripción del producto</h2>
            <p>{description?.plain_text || ""}</p>
          </Stack>
        </Grid>
      </div>
    </Container>
  );
};

export default ProductDetail;
