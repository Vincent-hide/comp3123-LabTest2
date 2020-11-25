import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Grid, Button, CardMedia, CardContent, CardActions, CardActionArea, Card} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


export const Details = (props) => {
  const {history, location, match} = props;
  console.log(location.employee);

  const classes = useStyles();

  return (
    <Grid container justify='center' alignItems='center'>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://images.vexels.com/media/users/3/147102/isolated/preview/082213cb0f9eabb7e6715f59ef7d322a-instagram-profile-icon-by-vexels.png"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {
                location.employee ? (<>{location.employee.firstName} {location.employee.lastName}</>) : <></>
              }
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {
                location.employee ? (<>{location.employee.emailId}</>) : <></>
              }
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>

  )
}
