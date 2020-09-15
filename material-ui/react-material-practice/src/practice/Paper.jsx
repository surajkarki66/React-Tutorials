import React from "react";
import { Paper, Typography } from "@material-ui/core";

export default function PaperPractice() {
  return (
    <Paper elevation="14">
      <Typography variant="h6">
        This component is inside a paper component.
      </Typography>
    </Paper>
  );
}
