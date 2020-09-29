import villagerData from "./data/acnh.json";
import React from "react";
import LazyLoad from "react-lazyload";

const allVillagers = villagerData.map((villager) => {
  return {
    name: villager.name,
    personality: villager.personality,
    birthDay: villager.birthday_day === "" ? "No Birthday Data" : villager.birthday_day,
    birthMonth: villager.birthday_month,
    sign: villager.sign,
    quote: villager.quote,
    imagePath: villager.image_url,
    id: villager.id,
  };
});
console.log(allVillagers);

function Villagers() {
  return (
    <div className="villagers">
      <h1>Villagers</h1>
      <div className="list">
        {allVillagers.map((villager) => {
          return (
            <div className="listItem">
              <LazyLoad>
                <img alt="" src={villager.imagePath}></img>
              </LazyLoad>

              <p>{villager.name}</p>
              <p>Personality: {villager.personality}</p>
              <p>
                Birthday: {villager.birthDay} {villager.birthMonth}
              </p>
              <p>Sign: {villager.sign}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Villagers;
