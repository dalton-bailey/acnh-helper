import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  MenuItem,
  Button,
} from "@material-ui/core";
import { Formik } from "formik";
import * as Yup from 'yup'

const hemispheres = [
  {
    label: "Northern",
    value: 1,
  },
  {
    label: "Southern",
    value: 2,
  },
];

const Login = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [hemisphere, setHemisphere] = useState("Northern");

  const handleChange = (event) => {
    setHemisphere(event.target.value);
  };

  return (
    <div>
      <Button color="inherit" onClick={handleOpen}>
        Signup
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Create an account to personalize your Animal Crossing New Horizons
            data.
          </DialogContentText>
          <Formik
          initialValues={{
            email: 'youremail@example.com',
            password: 'Yourpassword'
          }}
          >
          <form noValidate autoComplete="off">
            <TextField
              required
              margin="dense"
              label="Email Address"
              type="email"
              fullWidth
            />
            <TextField
              required
              margin="dense"
              label="Password"
              type="password"
              fullWidth
            />
            <TextField margin="dense" id="name" label="Island Name" />
            <TextField
              id="select-hemisphere"
              select
              margin="dense"
              label="Hemisphere"
              value={hemisphere}
              onChange={handleChange}
            >
              {hemispheres.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </form>
          </Formik>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button color="primary">Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Login;
