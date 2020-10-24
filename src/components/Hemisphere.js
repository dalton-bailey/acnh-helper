import React, { useState } from "react";
import {
  MenuItem, 
  FormControl, 
  InputLabel, 
  Select,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: theme.spacing(1),
    minWidth: 120,
  }
}))

const Hemisphere = () => {
  const classes = useStyles()
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
      <FormControl className={classes.formControl}>
        <InputLabel id="select-hemisphere-label">Hemisphere</InputLabel>
        <Select
          labelId="hemisphere-label"
          id="hemisphere"
          open={open}
          label="Hemisphere"
          onClose={handleClose}
          onOpen={handleOpen}
          value={hemisphere}
          onChange={handleChange}
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={1}>Northern</MenuItem>
          <MenuItem value={2}>Southern</MenuItem>
        </Select>        
      </FormControl>
    </div>
  );
};

export default Hemisphere;
