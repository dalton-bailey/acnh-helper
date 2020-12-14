import React, { useState, useContext } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  makeStyles
} from "@material-ui/core";
import { Formik } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../contexts/AuthContext";

const useStyles = makeStyles((theme) => ({

  button: {
    color: "#fff",
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    fontSize: 16,
  },
}))

const Login = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    const authContext = useContext(AuthContext);

  const handleAuth = () => {
    console.log(authContext.isAuth);
    if (authContext.isAuth) {
      authContext.logout();
      setOpen(false);
      return;
    }
    if (!authContext.isAuth) {
      if (!open) {
        setOpen(true);
        return;
      }
      setOpen(false);
    }
  };

    return (
    <div>
      {authContext.isAuth ? (
        <Button className={classes.button} onClick={handleAuth}>
          Logout
        </Button>
      ) : (
        <Button className={classes.button} onClick={handleOpen}>
          Signup
        </Button>
      )}
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
                authContext.login();
                console.log(values.email, values.password, values.name, values.hemisphere);
                handleClose();
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
                <TextField
                  margin="normal"
                  label="Island Name"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {/* <Hemisphere /> */}

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
                    Signup
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