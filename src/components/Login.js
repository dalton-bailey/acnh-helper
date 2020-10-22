import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@material-ui/core";
import { Formik } from "formik";
import * as Yup from "yup";

// const hemispheres = [
//   {
//     label: "Northern",
//     value: 1,
//   },
//   {
//     label: "Southern",
//     value: 2,
//   },
// ];

const Login = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const [hemisphere, setHemisphere] = useState("Northern");

  // const handleHemisphere = (event) => {
  //   setHemisphere(event.target.value);
  // };

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
          <Formik
            initialValues={{
              email: "",
              password: "",
              submit: null,
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email().max(50).required(),

              password: Yup.string().min(8).max(50).required(),
            })}
            onSubmit={(values, { setErrors, setStatus, setSubmitting }) => {
              try {
                console.log(values.email, values.password);
              } catch (err) {
                console.log(err);
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
              <form noValidate onSubmit={handleSubmit} autoComplete="off">
                <TextField
                  autoFocus
                  required
                  fullWidth
                  margin="normal"
                  label="Email Address"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                />
                <TextField
                  required
                  fullWidth
                  margin="normal"
                  label="Password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  error={Boolean(touched.password && errors.password)}
                  helperText={touched.password && errors.password}
                />
                <TextField margin="normal" id="name" label="Island Name" />
                {/* <TextField
              id="select-hemisphere"
              select
              margin="dense"
              label="Hemisphere"
              value={values.hemisphere}
              onChange={handleHemisphere}
            >
              {hemispheres.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField> */}

                <DialogActions>
                  <Button
                    onClick={handleClose}
                    variant="contained"
                    color="primary"
                  >
                    Cancel
                  </Button>
                  <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    disabled={Boolean(errors.email || errors.password)}
                  >
                    Create
                  </Button>
                </DialogActions>
              </form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Login;
