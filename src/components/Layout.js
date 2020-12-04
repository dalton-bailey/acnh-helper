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


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around"
  },

  nav: {
    display: "flex",
    
  }

}));

export default function Layout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2>Animal Crossing</h2>
      <List className={classes.nav}>
        <ListItem>
          <Button>
            <NavLink to="/fish">Fish</NavLink>
          </Button>
        </ListItem>
        <ListItem>
          <Button>
            <NavLink to="/bugs">Bugs</NavLink>
          </Button>
        </ListItem>
        <ListItem>
          <Button>
            <NavLink to="/villagers">Villagers</NavLink>
          </Button>
        </ListItem>
        <ListItem>
          <Login />
        </ListItem>
      </List>
    </div>
  );

  // return (
  //   <div className={classes.root}>
  //     <CssBaseline />
  //     <AppBar position="fixed" className={classes.appBar}></AppBar>
  //     <Drawer
  //       className={classes.drawer}
  //       variant="permanent"
  //       classes={{
  //         paper: classes.drawerPaper,
  //       }}
  //       anchor="left"
  //     >
  //       <Typography variant="h6" className={classes.title}>
  //         Animal Crossing
  //       </Typography>
  //       <Divider />
  //       <List>
  //         <ListItem>
  //           <Button>
  //             <NavLink to="/fish" className={classes.navStyle}>
  //               Fish
  //             </NavLink>
  //           </Button>
  //         </ListItem>
  //         <ListItem>
  //           <Button>
  //             <NavLink to="/bugs" className={classes.navStyle}>
  //               Bugs
  //             </NavLink>
  //           </Button>
  //         </ListItem>
  //         <ListItem>
  //           <Button>
  //             <NavLink to="/villagers" className={classes.navStyle}>
  //               Villagers
  //             </NavLink>
  //           </Button>
  //         </ListItem>

  //         <Divider />
  //         <ListItem>
  //           <Login />
  //         </ListItem>
  //       </List>
  //     </Drawer>
  //   </div>
  // );
}
