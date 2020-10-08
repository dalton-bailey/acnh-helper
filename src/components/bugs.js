import React, { useEffect, useState } from "react";
import axios from "axios";

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
              <img alt={bug.name["name-USen"]} src={bug.icon_uri} />
              <p>{bug.name["name-USen"]}</p>
              <p>Location: {bug.availability.location}</p>
              <p>Rarity: {bug.availability.rarity}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bugs;
