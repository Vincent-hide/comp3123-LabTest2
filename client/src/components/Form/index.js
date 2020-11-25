import React from "react";
import {Grid, TextField} from "@material-ui/core";

export const Form = ({field}) => {
  return (
    <Grid container item>
      <TextField fullWidth label={field} variant="outlined"/>
    </Grid>
  );
};
