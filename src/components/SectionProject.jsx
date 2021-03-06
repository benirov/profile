import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import CoursesList from './CoursesList';
import ButtonUp from './ButtonUp';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

let AddProductToCar;

 class Projects extends Component
{
	constructor(props){ 
    super(props)
  }
  // componentDidMount() {
  //   AddProductToCar = this.AddProductToCar
  // }

  // AddProductToCar = ({ quantity }) => {
  // 	quantity = Number(quantity)+this.state.quantity
  // 	this.setState({quantity: quantity})
  // }

  

	render(){
		const { classes } = this.props; 
		return(
				
			          <Grid container xs={12} sm={12} className="heightmovil bgcolor2 poini" id="projects">
			          	<Grid container item xs={12} sm={12}  alignItems="center" justify="center">
				            <Typography variant="title" align="center" className="Slabo padding5 whitecolor">
				              Projects
				            </Typography>
			            </Grid>
			            <Grid container alignItems="center" justify="center">
			            	<CoursesList />
					     </Grid>
					     <Grid container>
					     	<Grid container item xs={12} sm={12} justify="flex-end"  alignItems="center" spacing="16">
					     		<ButtonUp OnclickButton = {this.props.OnClickUp} NameSection="home"/>
			      			</Grid>
					     </Grid>
				     </Grid>
		          
			);	
	}

}


export default withStyles(styles)(Projects);