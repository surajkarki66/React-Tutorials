import React from "react";
import { Button } from "@material-ui/core";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>This is my Button component</h1>
      <Button color="secondary" fullWidth="true" variant="outlined">
        Button
      </Button>
    </div>
  );
}

export default App;
