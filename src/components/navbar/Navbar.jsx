import React from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Colors } from "../../theme/Colors";

function Navbar() {
  //-------------  States ------------//
  const [mobileOpen, setMobileOpen] = React.useState(false);

  //------------- Variables ----------//
  const navItems = ["Home", "About", "Contact"];

  //------------- Functions ----------//
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <AppBar sx={{ background: Colors.yellow }} component='nav'>
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant='h6'
          component='div'
          sx={{
            flexGrow: 1,
            display: { xs: "none", sm: "block" },
            color: Colors.black,
          }}
        >
          Fruits Online Market
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems.map((item) => (
            <Button key={item} sx={{ color: Colors.black }}>
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
