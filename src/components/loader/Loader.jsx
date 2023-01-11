import { Box, CircularProgress } from "@mui/material";
import React from "react";

function Loader() {
  return (
    <Box
      alignContent={"center"}
      alignItems={"center"}
      alignSelf={"center"}
      textAlign={"center"}
    >
      <CircularProgress />
    </Box>
  );
}

export default Loader;
