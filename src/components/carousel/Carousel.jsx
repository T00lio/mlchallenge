import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";

const Carousel = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch top 20 items from your API
    axios
      .get("https://api.mercadolibre.com/trends/MLA")
      .then((response) => {
        setItems(response.data.slice(0, 20));
        console.log(setItems);
        // Assuming your API response is an array
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Top 20 Items
      </Typography>
      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Card>
              {/* You can customize this part with your item data */}
              <CardMedia
                component="img"
                height="200"
                image={item.imageUrl} // Replace with your item's image URL
                alt={item.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Carousel;
