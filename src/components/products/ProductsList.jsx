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
            <ImageListItem key={item.key}>
              {item.photo ? (
                <img
                  src={`data:image/jpeg;base64,${item.photo}`}
                  alt={item.name}
                  loading='lazy'
                />
              ) : (
                <img
                  src={`${require("../../assets/images/NoAvailable.jpg")}`}
                  alt={item.name}
                  width='100'
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
