import React, { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";
import CakeIcon from "@material-ui/icons/Cake";
import FavoriteIcon from "@material-ui/icons/Favorite";
import WcIcon from "@material-ui/icons/Wc";
import PetsIcon from "@material-ui/icons/Pets";
import { useAnmialCrossingContext } from "../contexts/AnimalCrossingContext";


const Villagers = () => {  
  const villagersData = useAnmialCrossingContext();

  const [myFavVillagers, setMyFavVillagers] = useState([]);

  useEffect(() => {
    if (villagersData.villagers.length > 0) {
      const temp = [];

      const daisy = villagersData.villagers.find(
        (villager) => villager.name["name-USen"] === "Daisy"
      );
      const buck = villagersData.villagers.find(
        (villager) => villager.name["name-USen"] === "Buck"
      );
      const nan = villagersData.villagers.find(
        (villager) => villager.name["name-USen"] === "Nan"
      );
      const stitches = villagersData.villagers.find(
        (villager) => villager.name["name-USen"] === "Stitches"
      );
      const chevre = villagersData.villagers.find(
        (villager) => villager.name["name-USen"] === "Chevre"
      );
      const graham = villagersData.villagers.find(
        (villager) => villager.name["name-USen"] === "Graham"
      )
      const croque = villagersData.villagers.find(
        (villager) => villager.name["name-USen"] === "Croque"
      )
      const carmen = villagersData.villagers.find(
        (villager) => villager.name["name-USen"] === "Carmen"
      )
      const tank = villagersData.villagers.find(
        (villager) => villager.name["name-USen"] === "Tank"
      )
      const claudia = villagersData.villagers.find(
        (villager) => villager.name["name-USen"] === "Claudia"
      )

      temp.push(croque)
      temp.push(daisy);
      temp.push(buck);
      temp.push(nan);
      temp.push(stitches);
      temp.push(chevre);
      temp.push(graham)
      temp.push(carmen)
      temp.push(tank)
      temp.push(claudia)

      setMyFavVillagers(temp);
    }
  }, [villagersData]);

  return (
    <div className="villagers">
      <h1>My Villagers</h1>
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

    </div>
  );
};

export default Villagers;
