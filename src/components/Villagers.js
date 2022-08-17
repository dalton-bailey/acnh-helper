import React, { useState, useEffect } from "react";
import LazyLoad from "react-lazyload";
import CakeIcon from "@material-ui/icons/Cake";
import FavoriteIcon from "@material-ui/icons/Favorite";
import WcIcon from "@material-ui/icons/Wc";
import PetsIcon from "@material-ui/icons/Pets";
// import { useAnmialCrossingContext } from "../contexts/AnimalCrossingContext";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import axios from 'axios';
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
  const classes = useStyles();
  // const villagersData = useAnmialCrossingContext();
  const [villagersData, setVillagersData] = useState([])
  const [searchValue, setSearchValue] = useState("");
  // const [isFavVillager, setIsFavVillger] = useState(false)

  const fetchFavVillagers = async () => {
    try {
      const favVillagers = await axios.get(`https://afternoon-temple-99772.herokuapp.com/fav-villager`);
      // const favVillagers = await axios.get(`localhost:5050/fav-villager`);
      setMyFavVillagers(favVillagers.data)
    } catch (err) {
      console.error(err);
    }
  };

  const fetchVillagers = async () => {
    try {
      const villagers = await axios.get(`https://afternoon-temple-99772.herokuapp.com/villagers`);
      // const villagers = await axios.get(`localhost:5050/villagers`);
      setVillagersData(villagers.data)
    } catch (err) {
      console.error(err)
    }
  }
  
  const handleAdd = async (villager) => {
    try {
      const result = await axios.post(`https://afternoon-temple-99772.herokuapp.com/fav-villager`, {
        // const result = await axios.post(`localhost:5050/fav-villager`, {
          name: villager.name,
          birthday: villager.birthday,
          image: villager.image,
          iconImage: villager.iconImage,
          catchPhrase: villager.catchPhrase,
          saying: villager.saying,
          gender: villager.gender,
          personality: villager.personality, 
          species: villager.species,
      });
      if (result.status === 200) {
        fetchFavVillagers()
        console.log(true)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchFavVillagers();
  });

  useEffect(() => {
    fetchVillagers();
  }, []);

  // const toggleIsFav = (villager) => {
  //   // setMyFavVillagers(current => !current);
  //   myFavVillagers.push(villager)
  //   console.log(villager._id)

  // }

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const showVillagers = villagersData
    .filter((villager) => {
      return (
        villager.name
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        villager.personality
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        villager.birthday
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        villager.species
        .toLowerCase()
        .includes(searchValue.toLowerCase())
      );
    })

    .map((villager) => {
      return (
        <div key={villager._id} className="listItem">
          <div className="listItemHeader">
            <LazyLoad>
              <img alt="" src={villager.iconImage} />
            </LazyLoad>
            <p>{villager.name}</p>
          </div>
          <div>
            <div className="listItemContent">
              <div>
                <LazyLoad>
                  <img alt="" src={villager.image} />
                </LazyLoad>
                <p>"{villager.catchPhrase}"</p>
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
                  <p>{villager.birthday}</p>
                </div>
                <div className="attribute">
                  <FavoriteIcon />
                  <p>{villager.personality}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Button variant="outlined" onClick={() => {setMyFavVillagers((prevVillagers) => [...prevVillagers, villager]); handleAdd(villager)}}>
            {/* <Button variant="outlined" onClick={() => setMyFavVillagers((prevVillagers) => [...prevVillagers, villager])}> */}
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
