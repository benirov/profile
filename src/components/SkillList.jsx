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

class SkillList extends Component{
  constructor(props)
  {
    super(props)
    this.state = {dataSkill: []}
  }

  componentWillMount()
  {
    fetch('/api/skill')
    .then(res => res.json())
    .then((Skill) =>
    {
        this.setState({dataSkill: Skill})
    });
    

  }
  render()
  {
    const { classes } = this.props;
    {
      return(
        <div className={classes.root}>
            <Grid item xs={12} sm={12}>
              <Grid container justify="flex-start">
              {
              this.state.dataSkill.map((row, id) =>
                {
                  return(
                            <Grid container item xs={6} sm={4} justify="center" className="padding5">
                              <Grid container item  item xs={6} sm={6} justify="flex-start">
                                <Typography variant="title" color="inherit" className="timesnewroman whitecolor">
                                  {row.name}
                                </Typography>
                              </Grid>
                                <Grid container item  item xs={6} sm={6} justify="flex-end">
                                    <img className={classes.img} alt="complex" src={row.puntuation} />
                              </Grid>
                            </Grid>
                  )
                })
            }
            </Grid>
          </Grid>
        </div>
      )

    }
  }
  
}

SkillList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SkillList);
