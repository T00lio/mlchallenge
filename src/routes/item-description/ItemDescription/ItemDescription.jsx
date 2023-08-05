import { useLoaderData } from "react-router";
import { Button } from "reactstrap";
import { Grid, Stack } from "@mui/material";
import Logo from "images/iphone.jpeg";
import "./ItemDescription.css";

const ItemDescription = () => {
  const queryResult = useLoaderData();

  console.log(queryResult.item, queryResult.description);

  return (
    <div className="pd">
      <Grid container>
        <Grid item xs={8}>
          <img src={Logo} width={800} height={800}></img>
        </Grid>
        <Stack xs={4} item className="pdes">
          <p>Condition new/used</p>
          <h1>Product title</h1>
          <h1>Price</h1>
          <Button>Comprar</Button>
        </Stack>

        <Stack item className="pdeet">
          <h1>Product Description </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar tellus eu justo porta
            dignissim. Aenean vel quam at lacus ultrices accumsan et non nunc. Cras luctus libero vitae suscipit mattis.
            Phasellus mattis ante ut erat elementum ornare. Morbi dapibus ante mauris, nec consequat lacus aliquam eu.
            Proin quis congue neque. Aliquam convallis augue tortor, a bibendum nisi cursus eget. Donec varius aliquam
            diam, a euismod ipsum dictum nec. Donec hendrerit, lorem vel lacinia condimentum, justo elit blandit leo,
            non pretium nisl sem a ante. Pellentesque nunc odio, lobortis vitae sem quis, scelerisque tristique mauris.
            Donec sollicitudin justo nec magna iaculis ultrices a at lectus. Nullam feugiat tellus in metus sagittis
            ullamcorper.
          </p>
        </Stack>
      </Grid>
    </div>
  );
};

export default ItemDescription;
