import React from "react";
import { Button, makeStyles, List, ListItem, Card } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import { FaFish } from "react-icons/fa";
import { IoIosBug } from "react-icons/io";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "space-around",
    height: 1000,
    textAlign: "left",
  },

  nav: {
    // display: "flex",
    // flexWrap: "wrap",
  },

  fish: {
    width: 100,
    height: 100,
    backgroundColor: "gray",
  },

  //   button: {
  //     paddingTop: 10,
  //     paddingBottom: 10,
  //     borderRadius: 10,
  //     fontSize: 16,
  //   },

  //   buttonText: {
  //     color: "#fff",
  //     textDecoration: "none",
  //   },
}));

const Welcome = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2>Animal Crossing</h2>
        {/* <Button className={classes.fish}> */}
          <Card className={classes.fish}>
            <NavLink to="/fish">
              <FaFish />
              Fish
            </NavLink>
          </Card>
        {/* </Button> */}

        {/* <ListItem className={classes.listItem}>
            <Button className={classes.button}>
              <IoIosBug />
              <NavLink to="/bugs" className={classes.buttonText}>
                Bugs
              </NavLink>
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button className={classes.button}>
              <NavLink to="/villagers" className={classes.buttonText}>
                Villagers
              </NavLink>
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Login />
          </ListItem> */}
    </div>
  );
};

export default Welcome;
