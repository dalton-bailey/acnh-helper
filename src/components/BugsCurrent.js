import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import { useAnmialCrossingContext } from "../contexts/AnimalCrossingContext";

const CurrentBugs = () => {
  const bugsData = useAnmialCrossingContext();

  let month = new Date().getMonth() + 1;
  let hour = new Date().getHours()

  console.log(month, hour)

  const currentBugsData = bugsData.bugs.filter(bug => bug.availability["month-array-northern"].includes(month) && bug.availability["time-array"].includes(hour))

  const currentBugs = currentBugsData.map((bug) => {
    return {
      id: bug.id,
      img: bug.icon_uri,
      name: bug.name["name-USen"],
      price: bug.price,
      time: bug.availability.time === "" ? "All Day" : bug.availability.time,
      location: bug.availability.location,
    };
  })

  return (
    <div className="bugs">      
    <h1> {currentBugs.length} Bugs Availible Now</h1>
      <div className="list">
        {currentBugs.map((bug) => {
          return (
            <div key={bug.id} className="listItem">
              <div  className="listItemContentBugs listItemContent">
                <div>
                  <img alt={bug.name} src={bug.img} />
                  <p>{bug.name}</p>
                  <p>
                    <AttachMoneyIcon /> {bug.price}
                  </p>
                </div>
                <div className="attributes">
                  <div className="attribute">
                    <LocationOnIcon /> <p>{bug.location}</p>
                  </div>
                  <div className="attribute">
                    <QueryBuilderIcon /> <p>{bug.time}</p>
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

export default CurrentBugs;
