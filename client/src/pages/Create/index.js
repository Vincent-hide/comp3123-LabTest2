import React, {useState} from "react";
import {Paper, Grid, Typography, TextField, Button} from '@material-ui/core';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import {Form} from "../../components/Form"
import SaveIcon from '@material-ui/icons/Save';
import axios from "axios";

const fields = [{label: "First Name", name: "firstName"}, {label: "Last Name", name: "lastName"}, {label: "Email ID", name: "emailId"}];


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
  const [newEmp, setNewEmp] = useState({firstName: "", lastName: "", emailId: ""});

  const handleChange = e => {
    setNewEmp({
      ...newEmp,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log("submitted", newEmp);
    if(newEmp.firstName != "" && newEmp.lastName != "" && newEmp.emailId != "") {
      axios.post("http://localhost:9090/api/v1/employees", newEmp)
        .then(response => console.log("success"))
        .catch(err => console.log(err))
    }
  }

  return (
    <Grid container>
      <Grid container item alignItems="center" justify="center">
        <Paper elevation={10} className={classes.formContainer}>
          <Typography variant="h3">Add a New Employee</Typography>

          {
            fields.map((field, i) => (
              <Grid key={i} className={classes.inputBox}>
                <Form field={field} handleChange={handleChange}/>
              </Grid>
            ))
          }
          <Grid container item justify="center">
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit}
              startIcon={<SaveIcon/>}
            >Save</Button>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}