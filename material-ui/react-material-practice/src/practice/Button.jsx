import React from "react";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    color: "black",
  },
});

export default function Btn() {
  const classes = useStyles();

  return (
    <Button
      classes={{
        root: classes.root,
      }}
      variant="contained"
      color="secondary"
      size="small"
    >
      {" "}
      Small Button
    </Button>
  );
}
