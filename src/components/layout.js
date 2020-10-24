import React from "react";
import {
  AppBar,
  Typography,
  Button,
  makeStyles,
  Drawer,
  Divider,
  CssBaseline,
  List,
  ListItem,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import Login from "./Login";

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },

  drawerPaper: {
    width: drawerWidth,
  },



  title: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 15,
    textAlign: "left",
  },

  navStyle: {
    color: "#000",
    textDecoration: "none",
    textTransform: "uppercase",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}></AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Typography variant="h6" className={classes.title}>
          Animal Crossing
        </Typography>
        <Divider />
        <List>
          <ListItem>
            <Button>
              <NavLink to="/fish" className={classes.navStyle}>
                Fish
              </NavLink>
            </Button>
          </ListItem>
          <ListItem>
            <Button>
              <NavLink to="/bugs" className={classes.navStyle}>
                Bugs
              </NavLink>
            </Button>
          </ListItem>
          <ListItem>
            <Button>
              <NavLink to="/villagers" className={classes.navStyle}>
                Villagers
              </NavLink>
            </Button>
          </ListItem>

          <Divider />
          <ListItem>
            <Login />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
