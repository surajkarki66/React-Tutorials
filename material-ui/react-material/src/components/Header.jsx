import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

import Navbar from "./NavBar";

const Header = () => {
  return (
    <AppBar color="primary" position="sticky">
      <Toolbar>
        <Typography variant="title" color="inherit">
          Suraj Karki
        </Typography>
        <Navbar />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
