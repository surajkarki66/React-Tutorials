import React from "react";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  helloStyles: {
    fontStyle: "oblique",
    color: "orange",
  },
  buttonStyles: {
    color: "black",
  },
});

function Practice() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography className={classes.helloStyles} variant="h1" color="primary">
        This is my Button component
      </Typography>
      <Button
        className={classes.buttonStyles}
        color="secondary"
        variant="outlined"
      >
        Button
      </Button>
    </React.Fragment>
  );
}

export default Practice;
