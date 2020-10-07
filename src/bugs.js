import React, { useEffect, useState } from "react";
// import React from "react"
// import bugData from "./data/bugs.json";
import axios from "axios";

const Bugs = () => {
  const [bugsData, setBugsData] = useState({
    bugs: [],
  });

  const fetchBugs = () => {
    axios.get("http://acnhapi.com/v1/bugs").then(function (response) {
      console.log(response);
      setBugsData({
        bugs: response.data,
      })
    });
  };

  useEffect(() => {
    fetchBugs();
  }, []);

  console.log(bugsData.bugs)

  return (
    <div className="bugs">
      <h1>Bugs</h1>
      <div>
      {bugsData.bugs.map((bug) => {
          return (
            <img src={bug.image_uri}/>
          )
        })}
      </div>
        
    </div>
  );
};

export default Bugs;
