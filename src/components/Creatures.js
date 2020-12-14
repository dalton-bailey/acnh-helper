import React from "react";
import SpeedIcon from "@material-ui/icons/Speed";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import ExtensionIcon from "@material-ui/icons/Extension";
import { useAnmialCrossingContext } from "../contexts/AnimalCrossingContext";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles({
  searchDiv: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "black",
    width: 340,
    padding: 8,
    borderRadius: 10,
  },

  searchBar: {
    color: "white",
    backgroundColor: "black",
    border: "none",
    width: 340,
    padding: 8,
  },
});

const Creatures = () => {
  const creaturesData = useAnmialCrossingContext();
  const [searchValue, setSearchValue] = React.useState("");
  const classes = useStyles();

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const showCreatures = creaturesData.creatures
    .filter((creature) => {
      return  (
      creature.name["name-USen"]
        .toLowerCase()
        .includes(searchValue.toLowerCase()) ||
        creature.speed
          .toLowerCase()
          .includes(searchValue.toLowerCase()) 
      )
    })

    .map((creature) => {
      return (
        <div key={creature.id} className="listItem">
          <div className="listItemContentSeaCreatures listItemContent">
            <div>
              <img alt={creature.name["name-USen"]} src={creature.icon_uri} />
              <p>{creature.name["name-USen"]}</p>
              <p>
                <AttachMoneyIcon /> {creature.price}
              </p>
            </div>
            <div className="attributes">
              <div className="attribute">
                <SpeedIcon /> <p>{creature.speed}</p>
              </div>
              <div className="attribute">
                <QueryBuilderIcon />
                <p> {creature.availability.time === "" ? "All Day" : creature.availability.time} </p>
              </div>
              <div className="attribute">
                <ExtensionIcon /> <p>{creature.shadow}</p>
              </div>
            </div>
          </div>
        </div>
      );
    });

  return (
    <div className="creatures">
      <h1> {creaturesData.creatures.length} Sea Creatures</h1>
      <div className={classes.searchDiv}>
        <div className={classes.search}>
          <SearchIcon />

          <input
            className={classes.searchBar}
            placeholder="Search name or location"
            onChange={handleChange}
            value={searchValue}
          />
        </div>
        <div className="list">{showCreatures}</div>
      </div>
    </div>
  );
};

export default Creatures;
