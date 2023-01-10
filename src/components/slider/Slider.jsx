import { Box } from "@mui/material";
import React from "react";

function Slider() {
  return (
    <Box>
      {/* Copy rights : https://www.freepik.com/free-vector/banner-with-fruits-theme-watercolor-with-elements-illustration-template_5435326.htm#query=fruit%20banner&position=36&from_view=search&track=sph */}
      <img
        src={require("../../assets/images/banner.jpg")}
        alt='fruits banner'
        style={{ width: "100%" }}
      />
    </Box>
  );
}

export default Slider;
