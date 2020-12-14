// import React, { useState, useContext } from "react";
import React from "react"
// import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { FaFish } from "react-icons/fa";
import { IoIosBug } from "react-icons/io";
import { FaPaw } from 'react-icons/fa';
import { GiSadCrab } from 'react-icons/gi';
import { BsFillPersonFill } from 'react-icons/bs'
import Login from "./Login";
// import { AuthContext } from '../contexts/AuthContext'


const useStyles = makeStyles((theme) => ({
  root: {
    padding: 30,
    textAlign: "left",
  },

}));

const Home = () => {
  const classes = useStyles()

  // export default function ButtonAppBar() {
  //   const classes = useStyles()
  //   const [loginOpen, setLoginOpen] = useState(false)

  //   const authContext = useContext(AuthContext)

  //   const handleAuth = () => {
  //     if (authContext.isAuthenticated) {
  //       authContext.logout()
  //       setLoginOpen(false)
  //       return
  //     }
  //     if (!authContext.isAuthenticated) {
  //       if (!loginOpen) {
  //         setLoginOpen(true)
  //         return
  //       }
  //       setLoginOpen(false)
  //     }
  //   }

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
