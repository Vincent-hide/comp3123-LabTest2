import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, IconButton} from '@material-ui/core';
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

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <AppleIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          COMP3123 Labtest 2
        </Typography>
        {/*<Button color="inherit">*/}
        {/*  */}
        {/*</Button>*/}
        <NavLink to="/about">Add</NavLink>
        <NavLink to="/about">Show</NavLink>
        <NavLink to="/about">Add</NavLink>
        <NavLink to="/about">Add</NavLink>
      </Toolbar>
    </AppBar>
  );
};


