import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import { useAnmialCrossingContext } from "../contexts/AnimalCrossingContext";

const Creatures = () => {
  const creaturesData = useAnmialCrossingContext();

  const allCreatures = creaturesData.creatures.map((creature) => {
    return {
      id: creature.id,
      img: creature.icon_uri,
      name: creature.name["name-USen"],
      price: creature.price,
      time: creature.availability.time === "" ? "All Day" : creature.availability.time,
      location: creature.availability.location,
    };
  });

  return (
    <div className="creatures">      
      <h1> {creaturesData.creatures.length} Sea Creatures</h1>
      <div className="list">
        {allCreatures.map((creature) => {
          return (
            <div key={creature.id} className="listItem">
              <div  className="listItemContentSeaCreatures listItemContent">
                <div>
                  <img alt={creature.name} src={creature.img} />
                  <p>{creature.name}</p>
                  <p>
                    <AttachMoneyIcon /> {creature.price}
                  </p>
                </div>
                <div className="attributes">
                  <div className="attribute">
                    <LocationOnIcon /> <p>{creature.location}</p>
                  </div>
                  <div className="attribute">
                    <QueryBuilderIcon /> <p>{creature.time}</p>
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

export default Creatures;
