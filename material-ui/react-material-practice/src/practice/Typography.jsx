import React from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  typographyStyle: {
    color: "blue",
  },

  // main css overriding
  gutterBottom: {
    // this gutter bottom exist in the css overriding in mu documentation
    marginBottom: "0.6em",
  },
  // main css overriding
  alignCenter: {
    textAlign: "center",
    color: "red",
  },
});
export default function TypoGraphy() {
  const classes = useStyles();

  return (
    <Typography
      // className={classes.typographyStyle}
      variant="h1"
      variantMapping={{
        h1: "p",
      }}
      gutterBottom
      align="center"
      classes={{
        gutterBottom: classes.gutterBottom,
        alignCenter: classes.alignCenter,
      }}
    >
      Hello World
    </Typography>
  );
}
