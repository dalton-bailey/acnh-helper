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
          <form noValidate autoComplete="off">
            <TextField
              error
              required
              autoFocus
              margin="dense"
              id="name"
              label="First Name"
            />
            <TextField required margin="dense" id="name" label="Last Name" />
            <TextField required label="User Name" margin="dense"></TextField>
            <TextField
              required
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Login;
