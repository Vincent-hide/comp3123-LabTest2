import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, IconButton, Tab, Tabs} from '@material-ui/core';
import AppleIcon from '@material-ui/icons/Apple';
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const Nav = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <AppleIcon/>
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          COMP3123 Labtest 2
        </Typography>

        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="secondary"
          onChange={handleChange}
        >

          <Tab label={"home"}
               component={NavLink}
               to={"/"}
          />
          <Tab label={"add"}
               component={NavLink}
               to={"/add"}
          />
        </Tabs>

      </Toolbar>
    </AppBar>
  );
};


