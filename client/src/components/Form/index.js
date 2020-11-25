import React from "react";
import {Grid, TextField} from "@material-ui/core";

export const Form = (props) => {
  const {field: {label, name}, handleChange, employee} = props;
  if (employee) {
    return (
      <Grid container item>
        <TextField fullWidth onChange={handleChange} value={employee} name={name} variant="outlined"/>
      </Grid>
    )
  }
  return (
    <Grid container item>
      <TextField fullWidth onChange={handleChange} label={label} name={name} variant="outlined"/>
    </Grid>
  );
};
