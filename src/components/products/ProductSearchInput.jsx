import { Autocomplete, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

function ProductSearchInput(props) {
  const [value, setValue] = useState("");
  useEffect(() => {
    props.onChange(value);
  }, [value]);
  return (
    <Autocomplete
      sx={{ width: "20%" }}
      freeSolo
      id='products-search'
      disableClearable
      onChange={(event: any, newValue: FilmOptionType | null) => {
        setValue(newValue);
      }}
      options={props.products.map((product) => product.name)}
      renderInput={(params) => (
        <TextField
          value={value}
          onChange={(text) => setValue(text.target.value)}
          {...params}
          label='Search input'
          InputProps={{
            ...params.InputProps,
            type: "search",
          }}
        />
      )}
    />
  );
}

export default ProductSearchInput;
