import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import AcUnitRounded from "@material-ui/icons/AcUnitRounded";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles({
  typographyStyles: {
    flex: 1,
  },
});
const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>
          Suraj Karki
        </Typography>
        <AcUnitRounded />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
