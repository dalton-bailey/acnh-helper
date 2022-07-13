import React, { useState } from "react";
import LazyLoad from "react-lazyload";
import CakeIcon from "@material-ui/icons/Cake";
import FavoriteIcon from "@material-ui/icons/Favorite";
import WcIcon from "@material-ui/icons/Wc";
import PetsIcon from "@material-ui/icons/Pets";
import { useAnmialCrossingContext } from "../contexts/AnimalCrossingContext";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
// import CelebrationIcon from '@material-ui/icons/Celebration';

const useStyles = makeStyles({
  searchDiv: {
    display: "flex",
    alignItems: "center",
    flexDirection:  "column",
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "black",
    width: 340,
    padding: 8,
    borderRadius: 10,
  },

  searchBar: {
    color: "white",
    backgroundColor: "black",
    border: "none",
    width: 340,
    padding: 8,
  }
});

const Villagers = ({setMyFavVillagers, myFavVillagers}) => {
  const villagersData = useAnmialCrossingContext();
  const [searchValue, setSearchValue] = useState("");
  const classes = useStyles();
  // const [isFavVillager, setIsFavVilalger] = useState(false)

  const toggleIsFav = (villager) => {
    setMyFavVillagers(current => !current);
  }

  console.log(myFavVillagers)

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const showVillagers = villagersData.villagers
    .filter((villager) => {
      return (
        villager.name["name-USen"]
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        villager.personality
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        villager["birthday-string"]
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        villager.species
        .toLowerCase()
        .includes(searchValue.toLowerCase())
      );
    })

    .map((villager) => {
      return (
        <div key={villager.id} className="listItem">
          <div className="listItemHeader">
            <LazyLoad>
              <img alt="" src={villager.icon_uri} />
            </LazyLoad>
            <p>{villager.name["name-USen"]}</p>
          </div>
          <div>
            <div className="listItemContent">
              <div>
                <LazyLoad>
                  <img alt="" src={villager.image_uri} />
                </LazyLoad>
                <p>"{villager["catch-phrase"]}"</p>
                <p className="saying">{villager.saying}</p>
              </div>
              <div className="attributes">
                <div className="attribute">
                  <WcIcon /> <p>{villager.gender}</p>
                </div>
                <div className="attribute">
                  <PetsIcon /> <p>{villager.species}</p>
                </div>
                <div className="attribute">
                  <CakeIcon />
                  <p>{villager["birthday-string"]}</p>
                </div>
                <div className="attribute">
                  <FavoriteIcon />
                  <p>{villager.personality}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* <Button variant="outlined" onClick={() => setMyFavVillagers((prevVillagers) => [...prevVillagers, villager])}> */}
            <Button variant={`${ myFavVillagers === false ? 'outlined' : 'contained'}`} onClick={() => {setMyFavVillagers((prevVillagers) => [...prevVillagers, villager]); toggleIsFav(villager)}}>
            <HomeIcon />
            </Button>
          </div>
        </div>
      );
    });

  return (
    <div className="villagers">
      <h1>All Villagers</h1>
      <div className={classes.searchDiv}>
        <div className={classes.search}>
          <SearchIcon />

          <input
            className={classes.searchBar}
            placeholder="Search name, personality, birthday, species"
            onChange={handleChange}
            value={searchValue}
          />
        </div>
        <div className="list">{showVillagers}</div>
      </div>
    </div>
  );
};

export default Villagers;
