import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './ProfileCard.css';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
    width: 350,
    backgroundSize: 150,
  },
  action: 
  {
    justifyContent: 'center'
  }
};

class  MediaCard extends Component {

  constructor(props)
  {
    super(props)
  }
  render()
  {
    const { classes } = this.props;
      return (
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/img/profile.png"
              title="profile"
            />
            <CardContent>
              <Typography 
                gutterBottom 
                variant="headline"
                component="h2"
                align="center"
                className="timesnewroman">
                Beniro Vielma
              </Typography>
              <Typography 
                component="p"
                variant="subheading"
                align="center">
                Web developer
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.action}>
            <Button size="small" color="primary" className="timesnewroman" data-section="projects" onClick={this.props.OnClickSection}>
              Projects
            </Button>
            <Button 
            size="small" color="primary" className="timesnewroman" data-section="skill" onClick={this.props.OnClickSection}>
              Skill
            </Button>
            <Button size="small" color="primary" className="timesnewroman" data-section="contact" onClick={this.props.OnClickSection}>
              Contact
            </Button>
          </CardActions>
        </Card>
      );
  }
  
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
