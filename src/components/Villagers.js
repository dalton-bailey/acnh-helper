import React, { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";
import CakeIcon from "@material-ui/icons/Cake";
import FavoriteIcon from "@material-ui/icons/Favorite";
import WcIcon from "@material-ui/icons/Wc";
import PetsIcon from "@material-ui/icons/Pets";
import { useAnmialCrossingContext } from "../contexts/AnimalCrossingContext";
import { SettingsSystemDaydreamOutlined } from "@material-ui/icons";

const Villagers = () => {
  const [myFavVillagers, setMyFavVillagers] = useState([]);
  const villagersData = useAnmialCrossingContext();

  useEffect(() => {
    if (villagersData.villagers.length > 0) {
      // console.log(villagersData);
      const temp = [];
      const daisy = villagersData.villagers.find(
        (villager) => villager.name["name-USen"] === "Daisy"
      );
      const rudy = villagersData.villagers.find(
        (villager) => villager.name["name-USen"] === "Rudy"
      );
      const goldie = villagersData.villagers.find(
        (villager) => villager.name["name-USen"] === "Goldie"
      );
      const nan = villagersData.villagers.find(
        (villager) => villager.name["name-USen"] === "Nan"
      );
      const stitches = villagersData.villagers.find(
        (villager) => villager.name["name-USen"] === "Stitches"
      );
      temp.push(daisy);
      temp.push(rudy);
      temp.push(goldie);
      temp.push(nan);
      temp.push(stitches);
      setMyFavVillagers(temp);
      // console.log(temp);
    }
  }, [villagersData]);

  return (
    <div className="villagers">
      <div>
        <label>Search for Villager:</label>
        <input label="search for villager" type="search" />
      </div>
      <h1>My Favorite Villagers</h1>
      <div className="list">
        {myFavVillagers.map((villager) => {
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
            </div>
          );
        })}
      </div>
      <h1>Villagers</h1>

      <div className="list">
        {villagersData.villagers.map((villager) => {
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Villagers;