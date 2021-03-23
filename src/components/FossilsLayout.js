import React, { useState, useEffect } from "react";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
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
import { Formik } from "formik";
import * as Yup from "yup";

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
  const [selectedFossil, setSelectedFossil] = useState(null);
  const [fossilsData, setFossilsData] = useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleDelete = async () => {
    setDeleteOpen(false);
    console.log(selectedFossil._id);
    try {
      await axios.delete(`http://localhost:5050/fossil/delete`, {
        data: {
          fossilId: selectedFossil._id,
        },
      });
      fetchFossils();
    } catch (err) {
      console.error(err);
    }
  };

  const handleClickEditOpen = (fossil) => {
    setSelectedFossil(fossil.fossil);
    setEditOpen(true);
  };

  const handleCloseEdit = () => {
    setEditOpen(false);
  };

  const handleUpdate = async (values) => {
    try {
      const result = await axios.put(`http://localhost:5050/fossil/update`, {
        data: {
          fossilId: values.id,
          name: values.name,
          image: values.image,
          price: values.price,
        },
      });
      if (result.status === 200) {
        fetchFossils();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleClickDeleteOpen = (fossil) => {
    setSelectedFossil(fossil.fossil);
    setDeleteOpen(true);
  };

  const handleCloseDelete = () => {
    setDeleteOpen(false);
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

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
              <IconButton
                className="editBtn btn"
                onClick={() => handleClickEditOpen({ fossil })}
              >
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
      <Dialog open={editOpen} onClose={handleCloseEdit}>
        <Formik
          initialValues={{
            id: selectedFossil?._id,
            name: selectedFossil?.name,
            image: selectedFossil?.image,
            price: selectedFossil?.price,
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string("Enter fossil name.").required("Name is required"),
            image: Yup.string("Image URL"),
            price: Yup.number("Price"),
          })}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
            try {
              await handleUpdate(values);
              handleCloseEdit();
            } catch (err) {
              console.error(err);
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
              className={classes.dialogContent}
            >
              <DialogTitle>Edit Fossil</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Make changes below to the data about this fossil
                </DialogContentText>
                <TextField
                  autoFocus
                  id="name"
                  name="name"
                  label="Fossil Name"
                  type="text"
                  fullWidth
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.name && errors.name)}
                  helperText={touched.name && errors.name}
                />
                  <TextField
                    autoFocus
                    id="image"
                    name="image"
                    label="Image URL"
                    type="text"
                    fullWidth
                    value={values.image}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={Boolean(touched.image && errors.image)}
                    helperText={touched.image && errors.image}
                  /> 
                   <TextField
                    autoFocus
                    id="price"
                    name="price"
                    label="Price"
                    fullWidth
                    value={values.price}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={Boolean(touched.price && errors.price)}
                    helperText={touched.price && errors.price}
                  />
              </DialogContent>
              <DialogActions>
                  <Button onClick={handleCloseEdit}>
                      Cancel
                  </Button>
                  <Button type="submit">
                      Save
                  </Button>
              </DialogActions>
            </form>
          )}
        </Formik>
      </Dialog>
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
