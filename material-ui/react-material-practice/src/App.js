import React from "react";
import { Grid } from "@material-ui/core";

import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import CoolButton from "./practice/CoolButton";

function App() {
  const cool = true;
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid style={{ marginTop: "20px" }} item xs={12} sm={8}>
          <Content />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
      <CoolButton cool={cool} />
    </Grid>
  );
}

export default App;
