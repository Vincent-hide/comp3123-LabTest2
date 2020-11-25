import React from "react";
import {Grid, TextField} from "@material-ui/core";

export const Form = ({field: {label, name}, handleChange}) => {
  return (
    <Grid container item>
      <TextField fullWidth onChange={handleChange} label={label} name={name} variant="outlined"/>
    </Grid>
  );
};
