import React from "react";
import { makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { FaFish } from "react-icons/fa";
import { IoIosBug } from "react-icons/io";
import {FaPaw} from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 1000,
    textAlign: "left",
  },

}));

const Welcome = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div className="homeMenu">
          <NavLink to="/fish" className="menuItem">
            <FaFish className="icon"/>
            <p>Fish</p>
          </NavLink>
          <NavLink to="/bugs" className="menuItem">
            <IoIosBug className="icon"/>
            <p>Bugs</p>
          </NavLink>
          <NavLink to="/villagers" className="menuItem">
            <FaPaw className="icon"/>
            <p>Villagers</p>
          </NavLink>
          <NavLink to="/seacreatures" className="menuItem">
            <p>Sea Creatures</p>
          </NavLink>
        </div>
    </div>
  );
};

export default Welcome;
