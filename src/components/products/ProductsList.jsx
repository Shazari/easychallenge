import { Grid, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductsService from "../../services/ProductsService";
import CategoryList from "../categories/CategoryList";
import Loader from "../loader/Loader";
import ProductCard from "./ProductCard";
import ProductSearchInput from "./ProductSearchInput";

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

  const filterProductByName = (name) => {
    const updatedList = products.filter((product) =>
      product.name.toLowerCase().includes(name.toLowerCase())
    );
    setFilter(updatedList);
  };
  return (
    <>
      {loading && <Loader />}
      {filter !== null ? (
        <>
          <Stack
            direction='row'
            spacing={2}
            alignItems={"center"}
            justifyContent={"center"}
            paddingTop={2}
          >
            <CategoryList products={products} filterProducts={filterProducts} />
            <ProductSearchInput
              onChange={filterProductByName}
              products={[
                ...new Map(
                  products.map((item) => [item["name"], item])
                ).values(),
              ]}
            />
          </Stack>
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
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default ProductsList;
