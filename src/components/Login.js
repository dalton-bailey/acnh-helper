import React, { useContext } from "react";
import { Dialog,  Box, TextField, Button, makeStyles } from "@material-ui/core";
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

  providerIcon: {
    height: 40,
  },

  form: {
    margin: 15,
  }
}));

const Login = (props) => {
  const classes = useStyles();
  const { open, onClose } = props;

  const authContext = useContext(AuthContext);
  const { signInWithGoogle, signInWithEmailAndPassword } = authContext;

  const handleGoogleClick = async () => {
    try {
      await signInWithGoogle();
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    onClose(false);
  };


  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog">
      <Button
        className={classes.googleButton}
        fullWidth
        onClick={handleGoogleClick}
        size="large"
        variant="contained"
      >
        <img
          alt="Google"
          className={classes.providerIcon}
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
        />
      </Button>
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
          onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
            try {
              await signInWithEmailAndPassword(values.email, values.password);
              console.log(values.email, values.password)
              handleClose()
            } catch (err) {
              console.log(err);
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

              <Box>
                <Button
                  onClick={handleClose}
                  variant="contained"
                  color="primary"
                  className={classes.form}

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
              </Box>
            </form>
          )}
        </Formik>
    </Dialog>
  );
};

export default Login;
