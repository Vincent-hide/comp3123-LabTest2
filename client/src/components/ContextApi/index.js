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
  }, [])

  return (
    <EmployeeContext.Provider value={[employees, setEmployees, loading]}>
      {props.children}
    </EmployeeContext.Provider>
  )
}