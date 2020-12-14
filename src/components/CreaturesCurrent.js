import React from "react";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import SpeedIcon from '@material-ui/icons/Speed';
import ExtensionIcon from "@material-ui/icons/Extension";
import { useAnmialCrossingContext } from "../contexts/AnimalCrossingContext";

const CurrentCreatures = () => {
  const creaturesData = useAnmialCrossingContext();

  let month = new Date().getMonth() + 1;
  let hour = new Date().getHours()

  const currentCreaturesData = creaturesData.creatures.filter(creature => creature.availability["month-array-northern"].includes(month) && creature.availability["time-array"].includes(hour))

  const currentCreatures = currentCreaturesData.map((creature) => {
    return {
      id: creature.id,
      img: creature.icon_uri,
      name: creature.name["name-USen"],
      price: creature.price,
      time: creature.availability.time === "" ? "All Day" : creature.availability.time,
      speed: creature.speed,
      shadow: creature.shadow
    };
  })

  return (
    <div className="creatures">      
    <h1> {currentCreatures.length} Sea Creatures Availible Now</h1>
      <div className="list">
        {currentCreatures.map((creature) => {
          return (
            <div key={creature.id} className="listItem">
              <div  className="listItemContentCreatures listItemContent">
                <div>
                  <img alt={creature.name} src={creature.img} />
                  <p>{creature.name}</p>
                  <p>
                    <AttachMoneyIcon /> {creature.price}
                  </p>
                </div>
                <div className="attributes">
                  <div className="attribute">
                     <SpeedIcon /> <p>{creature.speed}</p>
                  </div>
                  <div className="attribute">
                    <QueryBuilderIcon /> <p>{creature.time}</p>
                  </div>
                  <div className="attribute">
                <ExtensionIcon /> <p>{creature.shadow}</p>
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

export default CurrentCreatures;
