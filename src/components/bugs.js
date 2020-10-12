import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';


const Bugs = () => {
  const [bugsData, setBugsData] = useState({
    bugs: [],
  });

  const fetchBugs = () => {
    axios.get("https://acnhapi.com/v1a/bugs").then(function (response) {
      console.log(response);
      setBugsData({
        bugs: response.data,
      });
    });
  };

  useEffect(() => {
    fetchBugs();
  }, []);

  return (
    <div className="bugs">
      <h1> {bugsData.bugs.length} Bugs</h1>
      <div className="list">
        {bugsData.bugs.map((bug) => {
          return (
            <div className="listItem">
              <div>
                <img alt={bug.name["name-USen"]} src={bug.icon_uri} />
                <p>{bug.name["name-USen"]}</p>
                <p><AttachMoneyIcon /> {bug.price} </p>
              </div>
              <div>
                <p><LocationOnIcon /> {bug.availability.location}</p>
                <p><QueryBuilderIcon /> {bug.availability.time}</p>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bugs;
