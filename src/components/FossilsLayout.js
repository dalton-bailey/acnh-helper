import React, { useState, useEffect } from "react";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  IconButton,
} from "@material-ui/core";
import axios from "axios";

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

const Fossils = () => {
  const classes = useStyles();
  const [fossilsData, setFossilsData] = useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedFossil, setSelectedFossil] = useState(null);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClickDeleteOpen = (fossil) => {
    setSelectedFossil(fossil.fossil);
    setDeleteOpen(true);
  };

  const handleCloseDelete = () => {
    setDeleteOpen(false);
  };


  const handleDelete =  async () => {
    setDeleteOpen(false)
    console.log(selectedFossil._id)
    try {
      await axios.delete(`http://localhost:5050/fossil/delete`, {
        data: {
          fossilId: selectedFossil._id
        }
      })
      fetchFossils()
    } catch (err) {
      console.error(err)
    }
  }

    const fetchFossils = async () => {
      try {
        const fossils = await axios.get(`http://localhost:5050/fossil`);
        setFossilsData(fossils.data);
        console.log(fossils.data);
      } catch (err) {
        console.error(err);
      }
    };

    useEffect(() => {
    fetchFossils();
  }, []);


  const showFossils = fossilsData
    .filter((fossil) => {
      return fossil.name.toLowerCase().includes(searchValue.toLowerCase());
    })
    .map((fossil) => {
      return (
        <div key={fossil._id} className="listItem">
          <div className="listItemContentFossils listItemContent">
            <div className="btnList">
              <IconButton className="editBtn btn">
                <EditIcon />
              </IconButton>
              <IconButton
                className="deleteBtn btn"
                onClick={() => handleClickDeleteOpen({ fossil })}
              >
                <DeleteIcon />
              </IconButton>
            </div>

            <div className="fossil">
              <img alt={fossil.name} src={fossil.image} />
              <p>{fossil.name}</p>
              <p>
                <AttachMoneyIcon /> {fossil.price}
              </p>
            </div>
          </div>
        </div>
      );
    });

  return (
    <div className="fossils">
      <h1> {fossilsData.length} Fossils</h1>
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
      </div>
      <IconButton>
          <AddIcon />
      </IconButton>
      <Dialog open={deleteOpen} onClose={handleCloseDelete}>
        <DialogTitle>Delete Fossil</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure want to delete this fossil?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDelete}>Cancel</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </DialogActions>
      </Dialog>
      <div className="list">{showFossils}</div>
    </div>
  );
};

export default Fossils;
