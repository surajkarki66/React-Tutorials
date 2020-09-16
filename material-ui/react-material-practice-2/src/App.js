import React, { useState, useEffect } from "react";
import { Grid, Paper, Switch } from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";

import FullWidthGrid from "./Practice/Grid";
import Card from "./Practice/Card";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "20px",
    paddingRight: "20px",
  },
});
function App() {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(false);
  console.log(darkMode);

  // this is the process of overriding the default theming of material ui
  const darkTheme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light", //for dark mode
    },
  });
  const otherTheme = createMuiTheme({
    // make your own theme
  });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : otherTheme}>
      <Paper style={{ height: "100vh" }}>
        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        <Grid
          container
          spacing={4}
          className={classes.gridContainer}
          justify="center"
        >
          {/* <FullWidthGrid />*/}
          <Grid item xs={12} sm={6} md={4}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card />
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
