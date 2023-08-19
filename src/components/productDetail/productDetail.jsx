import React, { useState, useEffect } from "react";
import "../productDetail/productDetail.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Grid, Stack, CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import { getData } from "../../utils/httpsClient";

const ProductDetail = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
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
            <p>{data?.product?.title || ""}</p>
            <h4>{data?.product?.seller_address?.state?.name || ""}</h4>
            <h3>
              {Number(data?.product?.price).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}{" "}
            </h3>
            <hr />
            <Button>Add to cart</Button>
          </Stack>

          <Stack item className="pdeet">
            <h1>Descripción del producto</h1>
            <p>{data?.description?.plain_text || ""}</p>
          </Stack>
        </Grid>
      </div>
    </Container>
  );
};

export default ProductDetail;
