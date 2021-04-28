import { useQuery, useMutation, gql } from "@apollo/client";
import React, { useState } from "react";
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
import AddIcon from "@material-ui/icons/Add";
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
`;

const DELETE_HOLIDAY = gql`
  mutation deleteHoliday($id: Int!) {
    deleteHoliday(id: $id) {
      id
    }
  }
`;

const UPDATE_HOLIDAY = gql`
  mutation updateHoliday(
    $id: Int!
    $name: String!
    $date: String
    $month: String!
    $description: String
    $region: String
  ) {
    updateHoliday(
      id: $id
      data: {
        name: $name
        date: $date
        month: $month
        description: $description
        region: $region
      }
    ) {
      id
    }
  }
`;

const CREATE_HOLIDAY = gql`
  mutation createHoliday(
    $name: String!
    $date: String
    $month: String!
    $description: String
    $region: String
    ) {
      createHoliday(
        data: {name: $name, date: $date, month: $month, description: $description, region: $region }
        ) {
        id
      }
    }
`

const HolidayList = () => {
  const classes = useStyles();
  const [selectedHoliday, setSelectedHoliday] = useState({ name: "" });
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);

  const { loading, error, data } = useQuery(ALL_HOLIDAYS);
  const [updateHoliday] = useMutation(UPDATE_HOLIDAY);
  const [deleteHoliday] = useMutation(DELETE_HOLIDAY);
  const [createHoliday] = useMutation(CREATE_HOLIDAY)

  if (loading) {
    return (
      <Container className={classes.root}>
        <Typography className={classes.messages}>Loading...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Typography className={classes.messages}>{`${error.message}`}</Typography>
    );
  }

  const holidayList = data.allHolidays;

  const handleDelete = async () => {
    setDeleteOpen(false);
    console.log(selectedHoliday.id);
    try {
      deleteHoliday({ variables: { id: selectedHoliday.id } });
    } catch (err) {
      console.error(err);
    }
  };

  const handleClickEditOpen = (holiday) => {
    setSelectedHoliday(holiday.holiday);
    setEditOpen(true);
  };

  const handleCloseEdit = () => {
    setEditOpen(false);
  };

  const handleUpdate = async (values) => {
    updateHoliday({
      variables: {
        id: selectedHoliday.id,
        name: values.name,
        date: values.date,
        month: values.month,
        region: values.region,
        description: values.description,
      },
    });
  };

  const handleAdd = async (values) => {
    createHoliday({
      variables: {
        name: values.name,
        date: values.date,
        month: values.month,
        region: values.region,
        description: values.description,
      }
    })
  }

  const handleClickDeleteOpen = (holiday) => {
    setSelectedHoliday(holiday.holiday);
    setDeleteOpen(true);
  };

  const handleCloseDelete = () => {
    setDeleteOpen(false);
  };

  const handleClickAddOpen = () => {
    setAddOpen(true);
  };

  const handleCloseAdd = () => {
    setAddOpen(false);
  };

  return (
    <>
      <IconButton onClick={() => handleClickAddOpen()}>
        <AddIcon />
      </IconButton>
      <Container className={classes.root}>
        {holidayList.map((holiday) => {
          return (
            <div key={holiday.id} className="listItem">
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
              <div className="listItemContentHolidays listItemContent">
                <div className="holiday">
                  <h2>{holiday.name}</h2>
                  <p>
                    When: {holiday.month} {holiday.date}
                  </p>
                  <p>Description: {holiday.description}</p>
                  <p>Region: {holiday.region}</p>
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
      <Dialog open={addOpen} onClose={handleCloseAdd}>
        <Formik
          initialValues={{
            name: "New Holiday",
            date: "New Date",
            month: "Month",
            region: "Region",
            description: "Description",
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string("Enter holiday name.").required(
              "Name is required"
            ),
            date: Yup.string("Enter holiday date"),
            month: Yup.string("Enter holiday month").required(
              "Month is required"
            ),
            region: Yup.string("Enter region"),
            description: Yup.string("Enter description"),
          })}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
            try {
              await handleAdd(values);
              handleCloseAdd();
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
              <DialogTitle>Add Holiday</DialogTitle>
              <DialogContent>
                <DialogContentText>Add a New Holiday</DialogContentText>
                <TextField
                  autoFocus
                  id="name"
                  name="name"
                  label="Holiday Name"
                  type="text"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.name && errors.name)}
                  helperText={touched.name && errors.name}
                />
                <Box>
                  <TextField
                    id="date"
                    name="date"
                    label="Holiday Date"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={Boolean(touched.date && errors.date)}
                    helperText={touched.date && errors.date}
                  />

                  <TextField
                    id="month"
                    name="month"
                    label="Holiday Month"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={Boolean(touched.month && errors.month)}
                    helperText={touched.month && errors.month}
                  />
                </Box>

                <TextField
                  id="region"
                  name="region"
                  label="Holiday Region"
                  type="text"
                  fullWidth
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
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.description && errors.description)}
                  helperText={touched.description && errors.description}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseAdd}>Cancel</Button>
                <Button type="submit">Add</Button>
              </DialogActions>
            </form>
          )}
        </Formik>
      </Dialog>
    </>
  );
};

export default HolidayList;
