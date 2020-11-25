import React, {useState, useEffect} from "react";
import axios from "axios";

import {Grid, Typography} from "@material-ui/core";

import {EmployeeCard} from "../../components/EmployeeCard/";

export const View = () => {
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState({});

  useEffect(() => {
    axios.get("http://localhost:9090/api/v1/employees")
      .then(res => {
        setEmployees(res.data);
        setLoading(false);
      })
      .catch(err => console.log(err))
  }, []);

  const handleDelete = id => {
    axios.delete("http://localhost:9090/api/v1/employees/" + id)
      .then(res => {
        console.log("delete success");
        // console.log(employees.filter(emp => emp.id !== id))
        setEmployees(employees.filter(emp => emp.id !== id))
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <Grid container>
        <Grid xs={12} style={{textAlign: "center"}}>
          <Typography variant="h3">Employee List</Typography>
        </Grid>
        {
          loading ? <h1>Data Loading</h1> : (
            <>
              {
                employees.map(employee => (
                  <Grid container key={employee.id} item sm={4} align="center" justify="center">
                    <EmployeeCard handleDelete={handleDelete} employee={employee}/>
                  </Grid>
                ))
              }
            </>
          )
        }
      </Grid>
    </div>
  );
};
