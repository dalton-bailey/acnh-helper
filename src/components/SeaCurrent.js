import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import { useAnmialCrossingContext } from "../contexts/AnimalCrossingContext";

const CurrentSeas = () => {
  const seasData = useAnmialCrossingContext();

  let month = new Date().getMonth();
  let hour = new Date().getHours()

  const currentSeasData = seasData.seas.filter(sea => sea.availability["month-array-northern"].includes(month) && sea.availability["time-array"].includes(hour))

  const currentSeas = currentSeasData.map((sea) => {
    return {
      id: sea.id,
      img: sea.icon_uri,
      name: sea.name["name-USen"],
      price: sea.price,
      time: sea.availability.time === "" ? "All Day" : sea.availability.time,
      location: sea.availability.location,
    };
  })

  return (
    <div className="seas">      
    <h1> {currentSeas.length} Seas Availible Now</h1>
      <div className="list">
        {currentSeas.map((sea) => {
          return (
            <div key={sea.id} className="listItem">
              <div  className="listItemContentSeas listItemContent">
                <div>
                  <img alt={sea.name} src={sea.img} />
                  <p>{sea.name}</p>
                  <p>
                    <AttachMoneyIcon /> {sea.price}
                  </p>
                </div>
                <div className="attributes">
                  <div className="attribute">
                    <LocationOnIcon /> <p>{sea.location}</p>
                  </div>
                  <div className="attribute">
                    <QueryBuilderIcon /> <p>{sea.time}</p>
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

export default CurrentSeas;
