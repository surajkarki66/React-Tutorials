import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

function App() {
  return (
    <div>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            My Header
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
