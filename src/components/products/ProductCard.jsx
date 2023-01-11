import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

function ProductCard({ name, price, photo, category }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {photo ? (
        <CardMedia sx={{ height: 140 }} image={photo} title={name} />
      ) : (
        <CardMedia
          sx={{ height: 140 }}
          image={require("../../assets/images/NoAvailable.jpg")}
          title={name}
        />
      )}
      <CardContent>
        <Typography
          gutterBottom
          variant='h5'
          component='div'
          textOverflow='ellipsis'
          width={300}
          noWrap
        >
          {name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Price: ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Details</Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
