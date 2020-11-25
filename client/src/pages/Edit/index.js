import React, {useState} from 'react';
import {Button, Grid, Paper, Typography} from "@material-ui/core";
import {Form} from "../../components/Form";
import SaveIcon from "@material-ui/icons/Save";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import axios from "axios";

const fields = [{label: "First Name", name: "firstName"}, {label: "Last Name", name: "lastName"}, {
  label: "Email ID",
  name: "emailId"
}];


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
export const Edit = props => {
  console.log(props.location.employee)
  const classes = useStyles();
  const [newEmp, setNewEmp] = useState(props.location.employee);

  const handleChange = e => {
    setNewEmp({
      ...newEmp,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    if (newEmp.firstName != "" && newEmp.lastName != "" && newEmp.emailId != "") {
      axios.put(`http://localhost:9090/api/v1/employees/${newEmp.id}`, newEmp)
        .then(response => console.log("update success"))
        .catch(err => console.log("Error", err))
    }
  }
  if (props.location.employee)
    return (
      <Grid container>
        <Grid container item alignItems="center" justify="center">
          <Paper elevation={10} className={classes.formContainer}>
            <Typography variant="h3">Edit a Employee</Typography>

            {
              fields.map((field, i) => (
                <Grid key={i} className={classes.inputBox}>
                  <Form field={field} handleChange={handleChange} employee={newEmp[field.name]}/>
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
              >Update</Button>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    )

  return <div>Go Back To Home</div>
}
