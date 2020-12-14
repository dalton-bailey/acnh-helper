// import React from "react";
// import { Button, makeStyles, List, ListItem } from "@material-ui/core";
// import { NavLink } from "react-router-dom";
// import Login from "./Login";
// import { AuthContext } from '../contexts/AuthContext'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-around",
//   },

//   nav: {
//     display: "flex",
//   },

//   button: {
//     paddingTop: 10,
//     paddingBottom: 10,
//     borderRadius: 10,
//     fontSize: 16,

//   },

//   buttonText: {
//     color: "#fff",
//     textDecoration: "none",
//   }
// }));

// export default function Layout() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <NavLink to="/" className={classes.buttonText}>
//       <h2>Animal Crossing</h2>
//       </NavLink>
//       <List className={classes.nav}>
//         {/* <ListItem>
//           <Button className={classes.button}>
//             <NavLink to="/fish" className={classes.buttonText}>Fish</NavLink>
//           </Button>
//         </ListItem>
//         <ListItem>
//           <Button className={classes.button}>
//             <NavLink to="/bugs" className={classes.buttonText}>Bugs</NavLink>
//           </Button>
//         </ListItem>
//         <ListItem>
//           <Button className={classes.button}>
//             <NavLink to="/seacreatures" className={classes.buttonText}>Sea Creatures</NavLink>
//           </Button>
//         </ListItem>
//         <ListItem>
//           <Button className={classes.button}>
//             <NavLink to="/villagers" className={classes.buttonText}>Villagers</NavLink>
//           </Button>
//         </ListItem> */}
//         <ListItem>
//           <Login />
//         </ListItem>
//       </List>
//     </div>
//   );
// }

import React, { useState, useContext } from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  makeStyles,
  Drawer,
  List,
  ListItem,
  Button,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { NavLink } from 'react-router-dom'

import Login from '../components/Login'
import { AuthContext } from '../contexts/AuthContext'

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
  dem: {
    color: 'blue',
  },
  repub: {
    color: 'red',
  },
  navSpacing: {
    marginRight: '5rem',
    color: '#fff',
    textDecoration: 'none',
  },
  list: {
    width: 250,
    backgroundColor: '#00f'
  },
}))

export default function ButtonAppBar() {
  const classes = useStyles()
  // const [drawerOpen, setDrawerOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)

  const authContext = useContext(AuthContext)

  // const handleDrawerToggle = () => {
  //   setDrawerOpen(!drawerOpen)
  // }

/*   const handleDialogToggle = () => {
    setLoginOpen(!loginOpen)
  } */

  const handleAuth = () => {
    if (authContext.isAuthenticated) {
      authContext.logout()
      setLoginOpen(false)
      return
    }
    if (!authContext.isAuthenticated) {
      if (!loginOpen) {
        setLoginOpen(true)
        return
      }
      setLoginOpen(false)
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          {/* <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
            // onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton> */}
          <NavLink to='/fish' className={classes.navSpacing}>
            Fish
          </NavLink>
          <NavLink to='/bugs' className={classes.navSpacing}>
            Bugs
          </NavLink>
          {
            authContext.isAuthenticated ? <Button color='inherit' onClick={handleAuth}>Logout</Button> :
            <Button color='inherit' onClick={handleAuth}>Login</Button>
          }
        </Toolbar>
      </AppBar>
      {/* <Drawer open={drawerOpen} onClose={handleDrawerToggle}>
        <List className={classes.list}>
          <ListItem>
          <NavLink to='/house' className={classes.navSpacing} onClick={handleDrawerToggle}>
            House
          </NavLink>
          </ListItem>
          <ListItem>
          <NavLink to='/senate' className={classes.navSpacing} onClick={handleDrawerToggle}>
            Senate
          </NavLink>
          </ListItem>
        </List>
      </Drawer> */}
      <Login open={loginOpen} onClose={handleAuth}/>
    </div>
  )
}

