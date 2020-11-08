import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import { useAnmialCrossingContext } from "../contexts/AnimalCrossingContext";

const Fish = () => {
  const fishesData = useAnmialCrossingContext();

  const allFish = fishesData.fishes.map((fish) => {
    return {
      id: fish.id,
      img: fish.icon_uri,
      name: fish.name["name-USen"],
      price: fish.price,
      time: fish.availability.time === "" ? "All Day" : fish.availability.time,
      location: fish.availability.location,
    };
  });

  return (
    <div className="fish">
      <h1>{fishesData.fishes.length} Fish</h1>
      <div className="list">
        {allFish.map((fish) => {
          return (
            <div key={fish.id} className="listItem">
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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Fish;
