import React from "react"
import { makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { FaFish } from "react-icons/fa";
import { IoIosBug } from "react-icons/io";
import { FaPaw } from 'react-icons/fa';
import { GiSadCrab } from 'react-icons/gi';
import {GiDinosaurBones} from 'react-icons/gi'
import { BsFillPersonFill } from 'react-icons/bs'
import Login from "./Login";


const useStyles = makeStyles((theme) => ({
  root: {
    padding: 30,
    textAlign: "left",
  },

}));

const Home = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
    <div className="homeMenu">
      <NavLink to="/fish" className="menuItem">
        <FaFish className="icon"/>
        <p>FISH</p>
      </NavLink>
      <NavLink to="/bugs" className="menuItem">
        <IoIosBug className="icon"/>
        <p>BUGS</p>
      </NavLink>
      <NavLink to="/seacreatures" className="menuItem">
        <GiSadCrab className="icon"/>
        <p>SEA CREATURES</p>
      </NavLink>
      <NavLink to="/fossils" className="menuItem">
        <GiDinosaurBones className="icon"/>
        <p>FOSSILS</p>
      </NavLink>
      <NavLink to="/villagers" className="menuItem">
        <FaPaw className="icon"/>
        <p>VILLAGERS</p>
      </NavLink>
      <div className="menuItem signUp">   
      <BsFillPersonFill className="icon"/>       
      <Login />
      </div>

    </div>
</div>
  )
}

export default Home
