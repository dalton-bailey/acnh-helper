import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Villagers from "./Villagers";
import FavVillagers from "./VillagersFav";
import ScrollArrow from "./Scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [myFavVillagers, setMyFavVillagers] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <ScrollArrow />

      <AppBar position="static" className={classes.appBar}>
        <Tabs value={value} onChange={handleChange} centered>
        <Tab label="All Villagers" {...a11yProps(0)} />
        <Tab label="My Villagers" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <Villagers myFavVillagers={myFavVillagers} setMyFavVillagers={setMyFavVillagers}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FavVillagers myFavVillagers={myFavVillagers} setMyFavVillagers={setMyFavVillagers}/>
      </TabPanel>
    </div>
  );
}
