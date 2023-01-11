import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategoryService from "../../services/CategoryService";
import Loader from "../loader/Loader";

function CategoryList(props) {
  //-------------  States ------------//
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState(null);

  //------------- Hooks -------------//
  useEffect(() => {
    async function getCategories() {
      setLoading(true);
      const response = await CategoryService.getCategories();
      console.log(response);
      if (response) {
        setCategories(response.categories);
      }
      setLoading(false);
    }
    getCategories();
  }, []);

  const onCategoryClicked = (category_url) => {
    props.filterProducts(category_url);
  };

  return (
    <>
      {loading && <Loader />}
      <Button
        key={"all"}
        variant='outlined'
        onClick={() => onCategoryClicked("all")}
      >
        All
      </Button>
      {categories !== null ? (
        categories.map((category) => (
          <Button
            key={category.category_url}
            variant='outlined'
            onClick={() => onCategoryClicked(category.category_url)}
          >
            {category.name}
          </Button>
        ))
      ) : (
        <></>
      )}
    </>
  );
}

export default CategoryList;
