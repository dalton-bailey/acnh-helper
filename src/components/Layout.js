import React, { useState, useContext } from 'react'
import {
  AppBar,
  Toolbar,
  makeStyles,
  Button,
} from '@material-ui/core'
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
  const [loginOpen, setLoginOpen] = useState(false)

  const authContext = useContext(AuthContext)


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
      <Login open={loginOpen} onClose={handleAuth}/>
    </div>
  )
}

