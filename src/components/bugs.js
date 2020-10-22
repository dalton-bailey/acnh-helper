import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import { useAnmialCrossingContext } from "../contexts/AnimalCrossingContext"

const Bugs = () => {
  const bugsData = useAnmialCrossingContext()


  return (
    <div className="bugs">
      <h1> {bugsData.bugs.length} Bugs</h1>
      <div className="list">
        {bugsData.bugs.map((bug) => {
          return (
            <div key={bug.id} className="listItem">
              <div>
                <img alt={bug.name["name-USen"]} src={bug.icon_uri} />
                <p>{bug.name["name-USen"]}</p>
                <p>
                  <AttachMoneyIcon /> {bug.price}
                </p>
              </div>
              <div>
                <p>
                  <LocationOnIcon /> {bug.availability.location}
                </p>
                <p>
                  <QueryBuilderIcon /> {bug.availability.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bugs;
