import React from "react";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  buttonText: (props) => {
    // this is called conditional styling

    return {
      color: props.cool ? "blue" : "red",
      [theme.breakpoints.up("sm")]: {
        // greater than 600px
        color: "pink",
        backgroundColor: "black",
      },
    };
  },
  buttonBackground: {
    backgroundColor: "red",
  },
}));

// to apply both classes in a single component we use a library called classNames
export default function Hook(props) {
  const classes = useStyles(props);
  return (
    <Button
      className={classNames(classes.buttonText, classes.buttonBackground)}
    >
      The Button
    </Button>
  );
}
