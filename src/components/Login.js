// import React, { useState, useContext } from "react";
// import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, makeStyles } from "@material-ui/core";
// import { Formik } from "formik";
// import * as Yup from "yup";
// import { AuthContext } from "../contexts/AuthContext";
// // import Hemisphere from "./Hemisphere";

// const useStyles = makeStyles((theme) => ({
//   // navStyle: {
//   //   color: "#000",
//   //   fontSize: 16,
//   //   textDecoration: "none",
//   //   '&:hover': {
//   //     color: "#000",
//   //   }
//   // },

//   button: {
//     color: "#fff",
//     paddingLeft: 40,
//     paddingRight: 40,
//     paddingTop: 10,
//     paddingBottom: 10,
//     borderRadius: 10,
//     fontSize: 16,
//   },

// }))

// const Login = (props) => {
//   const classes = useStyles()
//   const { open, onClose } = props

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const authContext = useContext(AuthContext);

//   const handleAuth = () => {
//     console.log(authContext.isAuth);
//     if (authContext.isAuth) {
//       authContext.logout();
//       setOpen(false);
//       return;
//     }
//     if (!authContext.isAuth) {
//       if (!open) {
//         setOpen(true);
//         return;
//       }
//       setOpen(false);
//     }
//   };

//   return (
//     <div>
//       {authContext.isAuth ? (
//         <Button className={classes.button} onClick={handleAuth}>
//           Logout
//         </Button>
//       ) : (
//         <Button className={classes.button} onClick={handleOpen}>
//           Signup
//         </Button>
//       )}
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="form-dialog-title"
//       >
//         <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
//         <DialogContent>
//           <Formik
//             initialValues={{
//               email: "",
//               password: "",
//               submit: null,
//             }}
//             validationSchema={Yup.object().shape({
//               email: Yup.string().email().max(50).required(),

//               password: Yup.string().min(8).max(50).required(),
//             })}
//             onSubmit={(values, { setErrors, setStatus, setSubmitting }) => {
//               try {
//                 authContext.login();
//                 console.log(values.email, values.password, values.name, values.hemisphere);
//                 handleClose();
//               } catch (err) {
//                 console.log(err);
//               }
//             }}
//           >
//             {({
//               values,
//               errors,
//               touched,
//               handleChange,
//               handleBlur,
//               handleSubmit,
//               isSubmitting,
//             }) => (
//               <form noValidate onSubmit={handleSubmit} autoComplete="off">
//                 <TextField
//                   autoFocus
//                   required
//                   fullWidth
//                   margin="normal"
//                   label="Email Address"
//                   type="email"
//                   name="email"
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   value={values.email}
//                   error={Boolean(touched.email && errors.email)}
//                   helperText={touched.email && errors.email}
//                 />
//                 <TextField
//                   required
//                   fullWidth
//                   margin="normal"
//                   label="Password"
//                   type="password"
//                   name="password"
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   value={values.password}
//                   error={Boolean(touched.password && errors.password)}
//                   helperText={touched.password && errors.password}
//                 />
//                 <TextField
//                   margin="normal"
//                   label="Island Name"
//                   id="name"
//                   name="name"
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   value={values.name}
//                 />
//                 {/* <Hemisphere /> */}

//                 <DialogActions>
//                   <Button
//                     onClick={handleClose}
//                     variant="contained"
//                     color="primary"
//                   >
//                     Cancel
//                   </Button>
//                   <Button
//                     color="primary"
//                     variant="contained"
//                     type="submit"
//                     disabled={Boolean(errors.email || errors.password)}
//                   >
//                     Signup
//                   </Button>
//                 </DialogActions>
//               </form>
//             )}
//           </Formik>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default Login;

import React, { useContext } from "react";
import { Dialog,  Box, TextField, Button, makeStyles } from "@material-ui/core";
import { Formik } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../contexts/AuthContext";
// import Hemisphere from "./Hemisphere";

const useStyles = makeStyles((theme) => ({
  // navStyle: {
  //   color: "#000",
  //   fontSize: 16,
  //   textDecoration: "none",
  //   '&:hover': {
  //     color: "#000",
  //   }
  // },

  button: {
    color: "#fff",
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    fontSize: 16,
  },
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

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    onClose(false);
  };

  // const handleAuth = () => {
  //   console.log(authContext.isAuth);
  //   if (authContext.isAuth) {
  //     authContext.logout();
  //     setOpen(false);
  //     return;
  //   }
  //   if (!authContext.isAuth) {
  //     if (!open) {
  //       setOpen(true);
  //       return;
  //     }
  //     setOpen(false);
  //   }
  // };

  return (
    // {authContext.isAuth ? (
    //   <Button className={classes.button} onClick={handleAuth}>
    //     Logout
    //   </Button>
    // ) : (
    //   <Button className={classes.button} onClick={handleOpen}>
    //     Signup
    //   </Button>
    // )}
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
          src="/static/images/google.svg"
        />
      </Button>
      {/* <DialogTitle id="form-dialog-title">Sign Up</DialogTitle> */}
      {/* <DialogContent> */}
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
              // authContext.login();
              // console.log(
              //   values.email,
              //   values.password,
              //   values.name,
              //   values.hemisphere
              // );
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
      {/* </DialogContent> */}
    </Dialog>
  );
};

export default Login;

// import React, { useContext } from "react";
// import { Box, Dialog, TextField, Button, makeStyles } from "@material-ui/core";
// import { Formik } from "formik";
// import * as Yup from "yup";
// import { AuthContext } from "../contexts/AuthContext";

// const useStyles = makeStyles(() => ({
//   dialogContent: {
//     display: "flex",
//     flexDirection: "column",
//     minHeight: 300,
//     minWidth: 400,
//     padding: 20,
//   },
// }));

// const Login = (props) => {
//   const classes = useStyles();
//   const { open, onClose } = props;

//   const authContext = useContext(AuthContext);
//   const { signInWithGoogle, signInWithEmailAndPassword } = authContext;

//   const handleGoogleClick = async () => {
//     try {
//       await signInWithGoogle();
//       handleClose();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleClose = () => {
//     onClose(false);
//   };

//   return (
//     <Dialog open={open} onClose={handleClose} aria-labelledby="Login Dialog">
//       <Button
//         className={classes.googleButton}
//         fullWidth
//         onClick={handleGoogleClick}
//         size="large"
//         variant="contained"
//       >
//         <img
//           alt="Google"
//           className={classes.providerIcon}
//           src="/static/images/google.svg"
//         />
//       </Button>
//       <Formik
//         initialValues={{
//           email: "foo@example.com",
//           password: "dkj8u4(&#Ldljad",
//           submit: null,
//         }}
//         validationSchema={Yup.object().shape({
//           email: Yup.string()
//             .email("Must be a valid email")
//             .max(50)
//             .required("Email is required"),
//           password: Yup.string()
//             .min(8, "Password is too short!")
//             .max(50, "Password is too long!")
//             .required("Password is required"),
//         })}
//         onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
//           try {
//             await signInWithEmailAndPassword(values.email, values.password);
//             console.log(values.email, values.password);
//             handleClose();
//           } catch (err) {
//             console.error(err);
//             setStatus({ success: false });
//             setErrors({ submit: err.message });
//             setSubmitting(false);
//           }
//         }}
//       >
//         {({
//           values,
//           errors,
//           touched,
//           handleChange,
//           handleBlur,
//           handleSubmit,
//           isSubmitting,
//         }) => (
//           <form
//             noValidate
//             autoComplete="off"
//             onSubmit={handleSubmit}
//             className={classes.dialogContent}
//           >
//             <h2>Sign in</h2>
//             <TextField
//               autoFocus
//               label="Email Address"
//               type="email"
//               name="email"
//               variant="filled"
//               margin="normal"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.email}
//               error={Boolean(touched.email && errors.email)}
//               helperText={touched.email && errors.email}
//               required
//               fullWidth
//             />
//             <TextField
//               label="Password"
//               type="password"
//               variant="filled"
//               name="password"
//               margin="normal"
//               placeholder="********"
//               value={values.password}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               error={Boolean(touched.password && errors.password)}
//               helperText={touched.password && errors.password}
//               required
//               fullWidth
//             />
//             <Box>
//               <Button color="primary" variant="contained" onClick={handleClose}>
//                 Cancel
//               </Button>
//               <Button
//                 color="primary"
//                 variant="contained"
//                 type="submit"
//                 disabled={Boolean(errors.email || errors.password)}
//               >
//                 Login
//               </Button>
//             </Box>
//           </form>
//         )}
//       </Formik>
//     </Dialog>
//   );
// };

// export default Login;
