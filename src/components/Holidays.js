import React, { useState } from "react";
// import axios from "axios";
// import _ from 'lodash'
import { useQuery, useMutation, gql } from '@apollo/client'
import {
  Container,
  makeStyles,
  IconButton,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Formik } from "formik";
import * as Yup from "yup";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  card: {
    width: 345,
    margin: 20,
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  typeWidth: {
    width: "100%",
  },
}));

const ALL_HOLIDAYS = gql`
  query {
    allHolidays {
      id
      name
      date
      month
      description
      region
    }
  }
`

// const UPDATE_HOLIDAY = gql`
// mutation updateHoliday ($id: Int!, $name: String!, $date: String, $month: String, $region: String, $description: String) {
//   updateHoliday (id: $id,
//     data: {
//     name: $name,
//     date: $date,
//     month: $month,
//     region: $region,
//     description: $description,
//     }
//   ) {
//       id
//   }
// }
// `

const DELETE_HOLIDAY = gql`
mutation deleteHoliday ($id: Int!) {
  deleteHoliday (id: $id) {
    id
  }
}
`

const HolidayList = () => {
  const classes = useStyles();
  const [selectedHoliday, setSelectedHoliday] = useState({ name: "" });
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);


    const { loading, error, data } = useQuery(ALL_HOLIDAYS)
    // const [updateHoliday] = useMutation(UPDATE_HOLIDAY);
    const [deleteHoliday] = useMutation(DELETE_HOLIDAY)

    if (loading) {
      return (
        <Container className={classes.root}>
          <Typography className={classes.messages}>Loading...</Typography>
        </Container>
      )
    }

    if (error) {
      return (
        <Typography className={classes.messages}>{`${error.message}`}</Typography>
      )
    }

    const holidayList = data.allHolidays

  const handleDelete = async () => {
    setDeleteOpen(false);
    console.log(selectedHoliday.id)
    try {
      deleteHoliday({ variables: { id: selectedHoliday.id } })
    } catch (err) {
      console.error(err)
    }
  };

  const handleClickEditOpen = (holiday) => {
    setSelectedHoliday(holiday.holiday)
    setEditOpen(true);
  };

  const handleCloseEdit = () => {
    setEditOpen(false);
  };

    // const handleUpdate = async (values) => {
    //     updateHoliday({
    //       variables: {
    //         id: selectedHoliday.id,
    //         name: values.name,
    //         date: values.date,
    //         month: values.month,
    //         region: values.region,
    //         description: values.description
    //       }
    //     })
    // }

  const handleClickDeleteOpen = (holiday) => {
    setSelectedHoliday(holiday.holiday)
    setDeleteOpen(true);
  };

  const handleCloseDelete = () => {
    setDeleteOpen(false);
  };

  return (
    <>
      <Container className={classes.root}>
        {holidayList.map((holiday) => {
          return (
            <div key={holiday.id} className="listItem">
              <div className="listItemContentHolidays listItemContent">
                <div className="holiday">
                  <p>{holiday.name}</p>
                  <p>
                    When: {holiday.month} {holiday.date}
                  </p>
                  <p>Description:{holiday.description}</p>
                  <p>Region:{holiday.region}</p>
                </div>
                <div className="btnList">
                  <IconButton
                    className="editBtn btn"
                    onClick={() => handleClickEditOpen({ holiday })}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    className="deleteBtn btn"
                    onClick={() => handleClickDeleteOpen({ holiday })}
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
              </div>
            </div>
          );
        })}
      </Container>
      <Dialog
        open={editOpen}
        onClose={handleCloseEdit}
        aria-labelledby="edit-dialog-title"
      >
        <Formik
          initialValues={{
            name: selectedHoliday?.name,
            date: selectedHoliday?.date,
            month: selectedHoliday?.month,
            region: selectedHoliday?.region,
            description: selectedHoliday?.description,
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string("Enter holiday name.").required(
              "Name is required"
            ),
            date: Yup.string("Holiday date"),
            month: Yup.string("Holiday month").required("Month is required"),
            region: Yup.string("Holiday region"),
            description: Yup.string("Holiday description").nullable(),
          })}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
            try {
                // await handleUpdate(values)
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
              <DialogTitle id="edit-dialog-title">Edit Holiday</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Make changes below to the data about this holiday:
                </DialogContentText>
                <TextField
                  autoFocus
                  id="name"
                  name="name"
                  label="Holiday name"
                  type="text"
                  fullWidth
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.name && errors.name)}
                  helperText={touched.name && errors.name}
                />
                <Box className={classes.content}>
                  <TextField
                    id="date"
                    name="date"
                    label="Date"
                    type="text"
                    value={values.date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={Boolean(touched.date && errors.date)}
                    helperText={touched.date && errors.date}
                  />
                  <TextField
                    name="month"
                    id="month"
                    label="Month"
                    type="text"
                    value={values.month}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={Boolean(touched.month && errors.month)}
                    helperText={touched.month && errors.month}
                  />
                </Box>
                <TextField
                  name="region"
                  id="region"
                  label="Region"
                  type="text"
                  fullWidth
                  value={values.region}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.region && errors.region)}
                  helperText={touched.region && errors.region}
                />
                <TextField
                  id="description"
                  name="description"
                  label="Holiday Description"
                  type="text"
                  fullWidth
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.description && errors.description)}
                  helperText={touched.description && errors.description}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseEdit} color="primary">
                  Cancel
                </Button>
                <Button type="submit" color="primary">
                  Save
                </Button>
              </DialogActions>
            </form>
          )}
        </Formik>
      </Dialog>
      <Dialog open={deleteOpen} onClose={handleCloseDelete}>
        <DialogTitle>Delete Holiday</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete {selectedHoliday?.name}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDelete} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default HolidayList;
