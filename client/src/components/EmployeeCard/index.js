import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";

// icons
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export const EmployeeCard = (props) => {
  const {employee: {id, firstName, lastName, emailId}} = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {firstName} {lastName}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {emailId}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <Link to={{pathname: '/edit/' + id, employee: props.employee}}>
            <IconButton aria-label="update">
              <SettingsApplicationsIcon/>
            </IconButton>
          </Link>
          <Link to={{pathname: '/details/' + id, employee: props.employee}}>
            <IconButton aria-label="details">
              <SystemUpdateAltIcon/>
            </IconButton>
          </Link>
          <Link to={{pathname: '/delete/' + id, employee: props.employee}}>
            <IconButton aria-label="delete">
              <DeleteOutlineIcon color="secondary"/>
            </IconButton>
          </Link>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image="https://images.vexels.com/media/users/3/147102/isolated/preview/082213cb0f9eabb7e6715f59ef7d322a-instagram-profile-icon-by-vexels.png"
        title="Live from space album cover"
      />
    </Card>
  );
}
