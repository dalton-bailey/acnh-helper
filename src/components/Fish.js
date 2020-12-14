import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
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
    flexDirection:  "column",
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

const Fish = () => {
  const fishesData = useAnmialCrossingContext();
  const [searchValue, setSearchValue] = React.useState("");
  const classes = useStyles();

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const showFishes = fishesData.fishes
  .filter((fish) => {
    return (
      fish.name["name-USen"]
      .toLowerCase()
      .includes(searchValue.toLowerCase()) ||
      fish.availability.location
      .toLowerCase()
      .includes(searchValue.toLowerCase()) 
    )
  })

  .map((fish) => {
    return (
      <div key={fish.id} className="listItem">
        <div className="listItemContentFish listItemContent">
          <div>
            <img alt="" src={fish.icon_uri} />
            <p>{fish.name["name-USen"]}</p>
            <p>
              <AttachMoneyIcon />
              {fish.price}
            </p>
          </div>
          <div className="attributes">
            <div className="attribute">
              <LocationOnIcon /> <p>{fish.availability.location}</p>
            </div>
            <div className="attribute">
              <QueryBuilderIcon /> <p>{fish.availability.time === "" ? "All Day" : fish.availability.time} </p>
            </div>
            <div className="attribute">
              <ExtensionIcon /> <p>{fish.shadow}</p>
            </div>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className="fish">
      <h1>{fishesData.fishes.length} Fish</h1>
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
        <div className="list">{showFishes}</div>
      </div>
    </div>
  );
};

export default Fish;
