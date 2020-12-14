import React from "react";
import { Button, makeStyles, List, ListItem } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import { AuthContext } from '../contexts/AuthContext'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },

  nav: {
    display: "flex",
  },

  button: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    fontSize: 16,

  },

  buttonText: {
    color: "#fff",
    textDecoration: "none",
  }
}));

export default function Layout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavLink to="/" className={classes.buttonText}>
      <h2>Animal Crossing</h2>
      </NavLink>
      <List className={classes.nav}>
        {/* <ListItem>
          <Button className={classes.button}>
            <NavLink to="/fish" className={classes.buttonText}>Fish</NavLink>
          </Button>
        </ListItem>
        <ListItem>
          <Button className={classes.button}>
            <NavLink to="/bugs" className={classes.buttonText}>Bugs</NavLink>
          </Button>
        </ListItem>
        <ListItem>
          <Button className={classes.button}>
            <NavLink to="/seacreatures" className={classes.buttonText}>Sea Creatures</NavLink>
          </Button>
        </ListItem>
        <ListItem>
          <Button className={classes.button}>
            <NavLink to="/villagers" className={classes.buttonText}>Villagers</NavLink>
          </Button>
        </ListItem> */}
        <ListItem>
          <Login />
        </ListItem>
      </List>
    </div>
  );
}
