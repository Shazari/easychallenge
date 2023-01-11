import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductsService from "../../services/ProductsService";

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
      {products !== null ? (
        <ImageList>
          {products.map((item) => (
            <ImageListItem sx={{ width: 248 }} key={item.key}>
              {item.photo ? (
                <img
                  style={{ width: 248 }}
                  src={`${item.photo}`}
                  alt={item.name}
                  loading='lazy'
                />
              ) : (
                <img
                  style={{ width: 248 }}
                  src={`${require("../../assets/images/NoAvailable.jpg")}`}
                  alt={item.name}
                  loading='lazy'
                />
              )}
              <ImageListItemBar
                title={item.name}
                subtitle={<span>price: {item.price}$</span>}
                position='below'
              />
            </ImageListItem>
          ))}
        </ImageList>
      ) : (
        <></>
      )}
    </>
  );
}

export default ProductsList;
