import { Box, CircularProgress, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductsService from "../../services/ProductsService";
import CategoryList from "../categories/CategoryList";
import ProductCard from "./ProductCard";

function ProductsList() {
  //-------------  States ------------//
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState(null);
  const [products, setProducts] = useState(null);

  //------------- Hooks -------------//
  useEffect(() => {
    async function getAllProducts() {
      setLoading(true);
      const response = await ProductsService.getProducts();
      if (response) {
        setProducts(response);
        setFilter(response);
      }
      setLoading(false);
    }
    getAllProducts();
  }, []);

  const filterProducts = (category_url) => {
    if (category_url === "all") {
      setFilter(products);
      return;
    }
    const updatedList = products.filter(
      (product) => product.category_url === category_url
    );
    setFilter(updatedList);
  };

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
      <CategoryList filterProducts={filterProducts} />
      {filter !== null ? (
        <Grid container spacing={4} style={{ padding: "20px" }}>
          {filter.map((product) => (
            <Grid item key={product.key}>
              <ProductCard
                name={product.name}
                price={product.price}
                photo={product.photo}
                category={product.category_url}
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
