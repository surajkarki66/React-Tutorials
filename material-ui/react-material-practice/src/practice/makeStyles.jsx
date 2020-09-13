import React from "react";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core";

const useStyles = makeStyles({
  buttonStyle: {
    color: "red",
    border: "none",
  },
});

export default function makeStylePractice() {
  const classes = useStyles();
  return <Button className={classes.buttonStyle}>Small Button</Button>;
}
