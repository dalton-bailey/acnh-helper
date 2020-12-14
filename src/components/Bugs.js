import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
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

const Bugs = () => {
  const bugsData = useAnmialCrossingContext();
  const [searchValue, setSearchValue] = React.useState("");
  const classes = useStyles();

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const showBugs = bugsData.bugs
  .filter((bug) => {
    return (
      bug.name["name-USen"]
      .toLowerCase()
      .includes(searchValue.toLowerCase()) ||
      bug.availability.location
      .toLowerCase()
      .includes(searchValue.toLowerCase()) 
    )
  })

  .map((bug) => {
            return (
              <div key={bug.id} className="listItem">
                <div  className="listItemContentBugs listItemContent">
                  <div>
                    <img alt={bug.name["name-USen"]} src={bug.icon_uri} />
                    <p>{bug.name["name-USen"]}</p>
                    <p>
                      <AttachMoneyIcon /> {bug.price}
                    </p>
                  </div>
                  <div className="attributes">
                    <div className="attribute">
                      <LocationOnIcon /> <p>{bug.availability.location}</p>
                    </div>
                    <div className="attribute">
                      <QueryBuilderIcon /> <p>{bug.availability.time === "" ? "All Day" : bug.availability.time}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })

  return (
    <div className="bugs">
      <h1> {bugsData.bugs.length} Bugs</h1>
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
        <div className="list">{showBugs}</div>
      </div>
    </div>
  );
};

export default Bugs;
