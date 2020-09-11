import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TypoGraphy from "@material-ui/core/Typography";
import { Home, AccountBox } from "@material-ui/icons";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  return (
    <List component="nav">
      <ListItem component="div">
        <ListItemText inset>
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            activeStyle={{ color: "red" }}
            to="/posts"
          >
            {" "}
            <TypoGraphy color="inherit" variant="title">
              Posts
            </TypoGraphy>
            <Home />
          </NavLink>{" "}
        </ListItemText>
        <ListItemText inset>
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            activeStyle={{ color: "red" }}
            to="/contact"
          >
            <TypoGraphy color="inherit" variant="title">
              Contact
            </TypoGraphy>
            <AccountBox />
          </NavLink>{" "}
        </ListItemText>
      </ListItem>
    </List>
  );
}

export default Navbar;
