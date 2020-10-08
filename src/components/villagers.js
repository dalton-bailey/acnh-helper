import React, { useEffect, useState } from "react";
import axios from "axios";
import LazyLoad from "react-lazyload";

const Villagers = () => {
  const [villagersData, setVillagersData] = useState({
    villagers: [],
  });

  const fetchVillagers = () => {
    axios.get("https://acnhapi.com/v1a/villagers").then(function (response) {
      console.log(response);
      setVillagersData({
        villagers: response.data,
      });
    });
  };

  useEffect(() => {
    fetchVillagers();
  }, []);

  return (
    <div className="villagers">
      <h1>Villagers</h1>
      <div className="list">
        {villagersData.villagers.map((villager) => {
          return (
            <div className="listItem">
              <LazyLoad>
                <img alt="" src={villager.icon_uri} />
              </LazyLoad>
              <p>{villager.name["name-USen"]}</p>
              <p>Birthday: {villager["birthday-string"]}</p>
              <p>Personality: {villager.personality}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Villagers;
