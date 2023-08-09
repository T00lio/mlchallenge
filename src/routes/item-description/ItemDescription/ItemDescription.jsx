import { useLoaderData } from "react-router";
import { Button } from "react-bootstrap";
import { Grid, Stack } from "@mui/material";
import { Logo } from "../../../assets/images/iphone.jpeg";
import "./ItemDescription.css";

const ItemDescription = () => {
  const queryResult = useLoaderData();
  console.log(queryResult.item, queryResult.Description);

  return (
    <div className="itemDescription">
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Stack direction="row" spacing={2}>
            <img src={Logo} width={680} height={680} alt="product" />
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack direction="row" spacing={2}>
            <h1>{queryResult.item.title}</h1>
            <h2>{queryResult.item.price}</h2>
            <Button variant="primary">Comprar</Button>
          </Stack>
        </Grid>
        <Grid item xs={12} md={8}>
          <Stack direction="row" spacing={2}>
            <h1>Descripción del producto</h1>
            <p>{queryResult.Description.plain_text}</p>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default ItemDescription;
