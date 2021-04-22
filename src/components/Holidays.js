// import React, { useState, useEffect, useCallback } from 'react'
// import axios from 'axios'
// import _ from 'lodash'
// import { useQuery, useMutation, gql } from '@apollo/client'
// import {
//   Container,
//   makeStyles,
//   Typography,
//   Card,
//   CardMedia,
//   CardActions,
//   CardContent,
//   Input,
//   IconButton,
//   Box,
//   Dialog,
//   DialogTitle, 
//   DialogContent,
//   DialogContentText,
//   TextField,
//   DialogActions,
//   Button,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
// } from '@material-ui/core'
// import SearchIcon from '@material-ui/icons/Search'
// import DeleteIcon from '@material-ui/icons/Delete'
// import EditIcon from '@material-ui/icons/Edit'
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
// import { Formik } from 'formik'
// import * as Yup from 'yup'

// const useStyles = makeStyles(() => ({
//   root: {
//     display: 'flex',
//     justifyContent: 'center',
//     flexWrap: 'wrap',
//   },
//   card: {
//     width: 345,
//     margin: 20,
//   },
//   content: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   typeWidth: {
//     width: '100%',
//   },
// }))

// const ALL_HOLIDAYS = gql`
//   query {
//     allHolidays {
//       id
//       name
//       date
//       month
//       description
//       region
//     }
//   }
// `

// const UPDATE_HOLIDAY = gql`
// mutation updateHoliday ($id: Int!, $title: String!, $description: String, $defaultCredits: String, $holidayCode: String) {
//   updateHoliday (id: $id,
//     data: { 
//     title: $title,
//     description: $description,
//     defaultCredits: $defaultCredits,
//     holidayCode: $holidayCode,
//     }
//   ) {
//       id
//   }
// }
// `

// const DELETE_HOLIDAY = gql`
// mutation deleteHoliday ($id: Int!) {
//   deleteHoliday (id: $id) {
//     id
//   }
// }
// `

// const HolidayList = () => {
//   const classes = useStyles()
//   const [selectedHoliday, setSelectedHoliday] = useState({ title: '' })
//   const [debouncedTitle, setDebouncedTitle] = useState('')
//   const [editOpen, setEditOpen] = useState(false)
//   const [deleteOpen, setDeleteOpen] = useState(false)

//   const handleInput = (event) => {
//     debounce(event.target.value)
//   }

//   const debounce = useCallback(
//     _.debounce((searchVal) => {
//       setDebouncedTitle(searchVal)
//     }, 1000),
//     [],
//   )

//   const { loading, error, data } = useQuery(ALL_HOLIDAYS)
//   const [updateHoliday] = useMutation(UPDATE_HOLIDAY);
//   const [deleteHoliday] = useMutation(DELETE_HOLIDAY)

//   if (loading) {
//     return (
//       <Container className={classes.root}>
//         <Typography className={classes.messages}>Loading...</Typography>
//       </Container>
//     )
//   }

//   if (error) {
//     return (
//       <Typography className={classes.messages}>{`${error.message}`}</Typography>
//     )
//   }

//   const holidayList = data.allHolidays

//   /*  const handleSearch = () => {
//     if (debouncedTitle) {
//       setHolidayList(holidayList.filter(holiday => holiday.title.includes(debouncedTitle)))
//     } else {
//       //fetchHolidays()
//     }
//   } */

//   const handleDelete = async () => {
//     setDeleteOpen(false)
//     console.log(selectedHoliday.id)
//     try {
//       deleteHoliday({ variables: { id: selectedHoliday.id } })
//     } catch (err) {
//       console.error(err)
//     }
//   }

//   const handleClickEditOpen = (holiday) => {
//     setSelectedHoliday(holiday.holiday)
//     setEditOpen(true)
//   }

//   const handleCloseEdit = () => {
//     setEditOpen(false)
//   }

//   const handleUpdate = async (values) => {
//       updateHoliday({
//         variables: {
//           id: selectedHoliday.id,
//           title: values.title,
//           defaultCredits: values.defaultCredits,
//           holidayCode: values.holidayCode,
//           description: values.description
//         }
//       })
//   }
  

//   const handleClickDeleteOpen = (holiday) => {
//     setSelectedHoliday(holiday.holiday)
//     setDeleteOpen(true)
//   }

//   const handleCloseDelete = () => {
//     setDeleteOpen(false)
//   }

//   return (
//     <>
//       <form>
//         <Input placeholder='Search' onChange={handleInput} />
//         <IconButton aria-label='search'>
//           <SearchIcon />
//         </IconButton>
//       </form>
//       <Container className={classes.root}>
//         {holidayList.map((holiday) => {
//           return (
//             <Card className={classes.card} key={holiday.id}>
//               <CardMedia
//                 component='img'
//                 height='300'
//                 className={classes.media}
//                 image='/static/images/UVUSquareGreen-0001.png'
//                 title={holiday.title}
//               />
//               <CardContent>
//                 <Typography gutterBottom variant='h5' component='h2'>
//                   {holiday.title}
//                 </Typography>
//                 <Box className={classes.content}>
//                   <Typography variant='subtitle1' color='textSecondary'>
//                     Holiday Code: {holiday.holidayCode}
//                   </Typography>
//                   <Typography variant='subtitle1' color='textSecondary'>
//                     Credits: {holiday.defaultCredits}
//                   </Typography>
//                 </Box>

//                 <Accordion>
//                   <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//                     <Typography>Description</Typography>
//                   </AccordionSummary>
//                   <AccordionDetails>
//                     <Typography variant='body2' color='textSecondary'>
//                       Description: {holiday.description}
//                     </Typography>
//                   </AccordionDetails>
//                 </Accordion>
//               </CardContent>
//               <CardActions>
//                 <IconButton
//                   aria-label='edit'
//                   onClick={() => handleClickEditOpen({ holiday })}
//                 >
//                   <EditIcon />
//                 </IconButton>
//                 <IconButton
//                   aria-label='delete'
//                   onClick={() => handleClickDeleteOpen({ holiday })}
//                 >
//                   <DeleteIcon />
//                 </IconButton>
//               </CardActions>
//             </Card>
//           )
//         })}
//       </Container>
//       <Dialog
//         open={editOpen}
//         onClose={handleCloseEdit}
//         aria-labelledby='edit-dialog-title'
//       >
//         <Formik
//           initialValues={{
//             title: selectedHoliday?.title,
//             defaultCredits: selectedHoliday?.defaultCredits,
//             description: selectedHoliday?.description,
//             holidayCode: selectedHoliday?.holidayCode,
//           }}
//           validationSchema={Yup.object().shape({
//             title: Yup.string('Enter holiday title.').required(
//               'Title is required',
//             ),
//             defaultCredits: Yup.string('Holiday credits number'),
//             description: Yup.string('Holiday description'),
//             holidayCode: Yup.string('Holiday code'),
//           })}
//           onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
//             try {
//               await handleUpdate(values)
//               handleCloseEdit()
//             } catch (err) {
//               console.error(err)
//               setStatus({ success: false })
//               setErrors({ submit: err.message })
//               setSubmitting(false)
//             }
//           }}
//         >
//           {({
//             values,
//             errors,
//             touched,
//             handleChange,
//             handleBlur,
//             handleSubmit,
//             isSubmitting,
//           }) => (
//             <form
//               noValidate
//               autoComplete='off'
//               onSubmit={handleSubmit}
//               className={classes.dialogContent}
//             >
//               <DialogTitle id='edit-dialog-title'>Edit Movie</DialogTitle>
//               <DialogContent>
//                 <DialogContentText>
//                   Make changes below to the data about this holiday:
//                 </DialogContentText>
//                 <TextField
//                   autoFocus
//                   id='title'
//                   name='title'
//                   label='Holiday Title'
//                   type='text'
//                   fullWidth
//                   value={values.title}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   error={Boolean(touched.title && errors.title)}
//                   helperText={touched.title && errors.title}
//                 />
//                 <Box className={classes.content}>
//                   <TextField
//                     autoFocus
//                     id='defaultCredits'
//                     name='defaultCredits'
//                     label='Credits'
//                     type='text'
//                     value={values.defaultCredits}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     error={Boolean(touched.defaultCredits && errors.defaultCredits)}
//                     helperText={touched.defaultCredits && errors.defaultCredits}
//                   />
//                   <TextField
//                     autoFocus
//                     name='holidayCode'
//                     id='holidayCode'
//                     label='Code'
//                     type='text'
//                     value={values.holidayCode}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     error={Boolean(touched.holidayCode && errors.holidayCode)}
//                     helperText={touched.holidayCode && errors.holidayCode}
//                   />
//                 </Box>
//                 <TextField
//                   autoFocus
//                   id='description'
//                   name='description'
//                   label='Holiday Description'
//                   type='text'
//                   fullWidth
//                   value={values.description}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   error={Boolean(touched.description && errors.description)}
//                   helperText={touched.description && errors.description}
//                 />
//               </DialogContent>
//               <DialogActions>
//                 <Button onClick={handleCloseEdit} color='primary'>
//                   Cancel
//                 </Button>
//                 <Button type='submit' color='primary'>
//                   Save
//                 </Button>
//               </DialogActions>
//             </form>
//           )}
//         </Formik>
//       </Dialog>
//       <Dialog open={deleteOpen} onClose={handleCloseDelete}>
//         <DialogTitle>Delete Holiday</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             Are you sure you want to delete the holiday {selectedHoliday?.title}?
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDelete} color='primary'>
//             Cancel
//           </Button>
//           <Button onClick={handleDelete} color='primary'>
//             Delete
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   )
// }

// export default HolidayList