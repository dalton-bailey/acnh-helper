import React from "react";
import LazyLoad from "react-lazyload";
import CakeIcon from '@material-ui/icons/Cake';
import FavoriteIcon from '@material-ui/icons/Favorite';
import WcIcon from '@material-ui/icons/Wc';
import PetsIcon from '@material-ui/icons/Pets';
import { useAnmialCrossingContext } from "../contexts/AnimalCrossingContext"


const Villagers = () => {
  const villagersData = useAnmialCrossingContext()

  return (
    <div className="villagers">
      <h1>Villagers</h1>
      <div className="list">
        {villagersData.villagers.map((villager) => {
          return (
            <div key={villager.id} className="listItem">
              <div>
              <LazyLoad>
                <img alt="" src={villager.icon_uri} />
              </LazyLoad>
              <p>{villager.name["name-USen"]}</p>
              <p>"{villager["catch-phrase"]}"</p>
              <p>{villager.saying}</p>
              </div>
              <div>
              <p><WcIcon /> {villager.gender}</p>
              <p><PetsIcon /> {villager.species}</p>
              <p><CakeIcon /> {villager["birthday-string"]}</p>
              <p><FavoriteIcon /> {villager.personality}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Villagers;
