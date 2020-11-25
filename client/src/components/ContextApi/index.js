import React, {useState, useEffect, createContext} from 'react';
import axios from 'axios';

export const EmployeeContext = createContext({});

export const EmployeeProvider = props => {
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
    axios.delete(`http://localhost:9090/api/v1/employees/${id}`)
      .then(res => {
        console.log("DELETED");
        // setEmployees()
      })
      .catch(err => console.log("DELETED"))
  }

  return (
    <EmployeeContext.Provider value={{employees, setEmployees, loading, handleDelete}}>
      {props.children}
    </EmployeeContext.Provider>
  )
}