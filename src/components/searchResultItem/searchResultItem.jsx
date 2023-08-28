import { Grid } from "@mui/material";
import "./searchResultItem.css";

const SearchResultItem = ({ id, imageUrl, price, title, location }) => {
  return (
    <Grid container spacing={3} style={{ margin: "5px" }}>
      <Grid item xs>
        <img src={imageUrl} height={100} width={100} alt="Search" />
      </Grid>
      <Grid item xs={7}>
        <p>
          {" "}
          <strong>{title}</strong>
        </p>
        <p>
          {Number(price).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}{" "}
        </p>
      </Grid>
      <Grid item xs>
        <p>
          <strong>{location}</strong>
        </p>
      </Grid>
    </Grid>
  );
};

export default SearchResultItem;
