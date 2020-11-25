import React, {useState, useContext, useEffect} from "react";
import axios from "axios";
import {EmployeeContext} from "../../components/ContextApi";

import {Grid, Typography} from "@material-ui/core";

import {EmployeeCard} from "../../components/EmployeeCard/";

export const View = () => {
  const {employees, loading} = useContext(EmployeeContext);

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
                    <EmployeeCard employee={employee}/>
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
