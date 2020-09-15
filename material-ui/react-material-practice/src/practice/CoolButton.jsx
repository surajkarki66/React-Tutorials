import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  buttonText: (props) => {
    // this is called conditional styling

    return {
      color: props.cool ? "black" : "red",
      [theme.breakpoints.up("sm")]: {
        // greater than 600px
        color: "pink",
      },
    };
  },
  buttonStyle: {
    backgroundColor: "blue",
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "black",
    },
  },
}));

// to apply both classes in a single component we use a library called classNames
export default function Hook(props) {
  const classes = useStyles(props);
  const theme = useTheme();
  return (
    <Button className={classNames(classes.buttonText, classes.buttonStyle)}>
      The Button
    </Button>
  );
}
