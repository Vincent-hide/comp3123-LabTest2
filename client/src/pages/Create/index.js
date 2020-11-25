import React from "react";
import {Paper, Grid, Typography, TextField, Button} from '@material-ui/core';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import {Form} from "../../components/Form"
import SaveIcon from '@material-ui/icons/Save';
const fields = ["First Name", "Last Name", "Email ID"];

const useStyles = makeStyles((theme) =>
  createStyles({
    formContainer: {
      padding: theme.spacing(4)
    },
    inputBox: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    }
  }),
);

export const Create = () => {
  const classes = useStyles();

  return (
    <Grid container >
      <Grid container item alignItems="center" justify="center">
        <Paper elevation={10} className={classes.formContainer}>
          <Typography variant="h3">Add a New Employee</Typography>

          {
            fields.map(field => (
              <Grid className={classes.inputBox}>
                <Form field={field} />
              </Grid>
            ))
          }
          <Grid container item justify="center">
            <Button
              variant="contained"
              color="primary"
              fullWidth
              startIcon={<SaveIcon />}
            >Save</Button>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}