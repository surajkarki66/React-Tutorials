import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Navbar from "./components/NavBar";
import Posts from "./components/Posts";

function App() {
  return (
    <div>
      <AppBar color="primary" position="sticky">
        <Toolbar>
          <Typography variant="title" color="inherit">
            My Header
          </Typography>
          <Navbar />
        </Toolbar>
      </AppBar>
      <Posts />
    </div>
  );
}

export default App;
