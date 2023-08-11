import React from "react";
import "../productDetail/productDetail.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Grid, Stack } from "@mui/material";

import Iphone from "../../assets/images/iphone.jpeg";

const ProductDetail = () => {
  return (
    <Container>
      <div className="pd">
        <Grid container>
          <Grid item xs={8}>
            <img src={Iphone} alt="productImage" width={500} height={500}></img>
          </Grid>
          <Stack xs={4} item className="pdes">
            <p>Condition</p>
            <h5>Location</h5>
            <h1>Title</h1>
            <h1>price</h1>
            <Button>Comprar</Button>
          </Stack>

          <Stack item className="pdeet">
            <h1>title </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse pulvinar tellus eu justo porta dignissim. Aenean vel
              quam at lacus ultrices accumsan et non nunc. Cras luctus libero
              vitae suscipit mattis. Phasellus mattis ante ut erat elementum
              ornare. Morbi dapibus ante mauris, nec consequat lacus aliquam eu.
              Proin quis congue neque. Aliquam convallis augue tortor, a
              bibendum nisi cursus eget. Donec varius aliquam diam, a euismod
              ipsum dictum nec. Donec hendrerit, lorem vel lacinia condimentum,
              justo elit blandit leo, non pretium nisl sem a ante. Pellentesque
              nunc odio, lobortis vitae sem quis, scelerisque tristique mauris.
              Donec sollicitudin justo nec magna iaculis ultrices a at lectus.
              Nullam feugiat tellus in metus sagittis ullamcorper.
            </p>
          </Stack>
        </Grid>
      </div>
    </Container>
  );
};

export default ProductDetail;
