import React from "react";
import LazyLoad from "react-lazyload";
import CakeIcon from "@material-ui/icons/Cake";
import FavoriteIcon from "@material-ui/icons/Favorite";
import WcIcon from "@material-ui/icons/Wc";
import PetsIcon from "@material-ui/icons/Pets";
import { useAnmialCrossingContext } from "../contexts/AnimalCrossingContext";

const Villagers = () => {
  const villagersData = useAnmialCrossingContext();
  const [searchValue, setSearchValue] = React.useState("");

  // this.handleChange = this.handleChange.bind(this)

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const showVillagers = villagersData.villagers
  .filter(villager => {
    return(
      villager.name["name-USen"].toLowerCase().includes(searchValue.toLowerCase()) ||
      villager.personality.toLowerCase().includes(searchValue.toLowerCase()) ||
      villager["birthday-string"].toLowerCase().includes(searchValue.toLowerCase()) ||
      villager.species.toLowerCase().includes(searchValue.toLowerCase())
      )
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
      </div>
    );
  });

  return (
    <div className="villagers">
      <h1>All Villagers</h1>

      <div>
        <label>Search for Villager:</label>
        <input
          label="search for villager"
          type="search"
          value={searchValue}
          onChange={handleChange}
        />
      </div>

      <div className="list">{showVillagers}</div>
    </div>
  );
};

export default Villagers;
