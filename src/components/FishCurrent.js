import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import ExtensionIcon from "@material-ui/icons/Extension";
import { useAnmialCrossingContext } from "../contexts/AnimalCrossingContext";


const CurrentFish = () => {
  const fishesData = useAnmialCrossingContext();

  let month = new Date().getMonth() + 1;
  let hour = new Date().getHours()

  console.log(hour)

  const currentFishData = fishesData.fishes.filter((fish) =>
    fish.availability["month-array-northern"].includes(month) && fish.availability["time-array"].includes(hour)
  );

  const currentFish = currentFishData.map((fish) => {
    return {
      id: fish.id,
      img: fish.icon_uri,
      name: fish.name["name-USen"],
      price: fish.price,
      time: fish.availability.time === "" ? "All Day" : fish.availability.time,
      location: fish.availability.location,
      rarity: fish.availability.rarity,
      shadow: fish.shadow,
    };
  });

  return (
    <div className="fish">
      <h1>{currentFish.length} Fish Availible Now</h1>
      <div className="list">
        {currentFish.map((fish) => {
          return (
            <div key={fish.id} className="listItem">
              <div className="listItemContentFish listItemContent">
                <div>
                  <img alt="" src={fish.img} />
                  <p>{fish.name}</p>
                  <p>
                    <AttachMoneyIcon />
                    {fish.price}
                  </p>
                </div>
                <div className="attributes">
                  <div className="attribute">
                    <LocationOnIcon /> <p>{fish.location}</p>
                  </div>
                  <div className="attribute">
                    <QueryBuilderIcon />
                    <p>{fish.time} </p>
                  </div>
                  <div className="attribute">
                    <ExtensionIcon />
                    <p>{fish.shadow} </p>
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

export default CurrentFish;
