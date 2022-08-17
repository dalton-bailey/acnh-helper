import React, { useEffect } from "react";
import LazyLoad from "react-lazyload";
import CakeIcon from "@material-ui/icons/Cake";
import FavoriteIcon from "@material-ui/icons/Favorite";
import WcIcon from "@material-ui/icons/Wc";
import PetsIcon from "@material-ui/icons/Pets";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import axios from 'axios';


const Villagers = ({ myFavVillagers, setMyFavVillagers }) => {  

  const fetchFavVillagers = async () => {
    try {
      const favVillagers = await axios.get(`https://afternoon-temple-99772.herokuapp.com/fav-villager`);
      // const favVillagers = await axios.get(`localhost:5050/fav-villager`);
      setMyFavVillagers(favVillagers.data)
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (villager) => {
    console.log(villager._id);
    try {
      await axios.delete(`https://afternoon-temple-99772.herokuapp.com/fav-villager/delete`, {
        // await axios.delete(`localhost:5050/fav-villager`, {
        data: {
          favVillagerId: villager._id,
        },
      });
      fetchFavVillagers();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchFavVillagers();
  });

  return (
    <div className="villagers">
      <h1>My Villagers</h1>
      <div className="list">
        {myFavVillagers.map((villager) => {
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
            <Button variant="contained" onClick={() => handleDelete(villager)}>
            <HomeIcon />
            </Button>
          </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Villagers;
