import { Box, CircularProgress, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductsService from "../../services/ProductsService";
import ProductCard from "./ProductCard";

function ProductsList() {
  //-------------  States ------------//
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState();
  const [products, setProducts] = useState(null);

  //------------- Hooks -------------//
  useEffect(() => {
    async function getAllProducts() {
      setLoading(true);
      const response = await ProductsService.getProducts();
      if (response) {
        setProducts(response);
      }
      setLoading(false);
    }
    getAllProducts();
  }, []);

  return (
    <>
      {loading && (
        <Box
          alignContent={"center"}
          alignItems={"center"}
          alignSelf={"center"}
          textAlign={"center"}
        >
          <CircularProgress />
        </Box>
      )}
      {products !== null ? (
        <Grid container spacing={4} style={{ padding: "20px" }}>
          {products.map((item) => (
            <Grid item key={item.key}>
              <ProductCard
                name={item.name}
                price={item.price}
                photo={item.photo}
                category={item.category_url}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <></>
      )}
    </>
  );
}

export default ProductsList;
