import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';  

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 600,
    padding: theme.spacing.unit * 2,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

class CoursesList extends Component{
  constructor(props)
  {
    super(props)
    this.state = {dataCourses: []}
  }

  componentWillMount()
  {
    fetch('/api/courses')
    .then(res => res.json())
    .then((Courses) =>
    {      
        this.setState({dataCourses: Courses})
    });
    

  }
  render()
  {
    const { classes } = this.props;
    {
      return(
      this.state.dataCourses.map((row, i) =>
      {
        return(
          <div className={classes.root}>
          <Grid container item xs={12} sm={12} justify="center">
            <Paper>
              <Grid container justify="center">
                <Grid container item xs={12} sm={6} justify="center" className="padding5">
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src={row.image} />
                  </ButtonBase>
                </Grid>
                <Grid container item xs={12} sm={6} justify="flex-start" className="padding5">
                  <Grid item container direction="column" spacing={16}>
                    <Grid container  item>
                      <Typography gutterBottom variant="title" className="timesnewroman">
                        {row.name}
                      </Typography>
                      <Typography gutterBottom className="timesnewroman">{row.description}</Typography>
                    </Grid>
                    <Grid container item>
                      <Typography style={{ cursor: 'pointer' }} variant="caption" className="timesnewroman">Url : <a href={row.url}>{row.url}</a></Typography>
                    </Grid>
                    <Grid container  item>
                    <Typography style={{ cursor: 'pointer' }} variant="caption" className="timesnewroman">Github: <a href={row.repository}>{row.repository}</a></Typography>
                  </Grid>
                  </Grid>
                  
                </Grid>
                </Grid>
            </Paper>
          </Grid>
          </div>
          )
      })
      )

    }
  }
  
}

CoursesList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CoursesList);
