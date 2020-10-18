import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  // IconButton,
  makeStyles,
} from "@material-ui/core";
// import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navStyle: {
    color: "#fff",
    textDecoration: "none",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
          <Button>
            <NavLink to="/fish" className={classes.navStyle}>
              Fish
            </NavLink>
          </Button>
          <Button>
            <NavLink to="/bugs" className={classes.navStyle}>
              Bugs
            </NavLink>
          </Button>
          <Button>
            <NavLink to="/villagers" className={classes.navStyle}>
              Villagers
            </NavLink>
          </Button>
          <Typography variant="h6" className={classes.title}>
            Animal Crossing
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
