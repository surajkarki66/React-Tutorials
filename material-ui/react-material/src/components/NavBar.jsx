import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TypoGraphy from "@material-ui/core/Typography";

function Navbar(props) {
  return (
    <List component="nav">
      <ListItem component="div">
        <ListItemText inset>
          <TypoGraphy color="inherit" variant="title">
            Home
          </TypoGraphy>
        </ListItemText>
        <ListItemText inset>
          <TypoGraphy color="inherit" variant="title">
            Posts
          </TypoGraphy>
        </ListItemText>
        <ListItemText inset>
          <TypoGraphy color="inherit" variant="title">
            Contact
          </TypoGraphy>
        </ListItemText>
      </ListItem>
    </List>
  );
}

export default Navbar;
