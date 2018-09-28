import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import SvgIcon from '@material-ui/core/SvgIcon';
import NavigationIcon from '@material-ui/icons/Navigation';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

 class ButtonUp extends Component
{
	constructor(props){ 
    super(props)
  }

	render(){
		const { classes } = this.props; 
		return(
			          <div>
			          	<Button variant="extendedFab" aria-label="Delete" className={classes.button} onClick = {this.props.OnclickButton} data-section={this.props.NameSection}>
					        <SvgIcon data-section={this.props.NameSection}>
							    <path d="M21,19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19C20.11,3 21,3.9 21,5V19M13,18V9.5L16.5,13L17.92,11.58L12,5.66L6.08,11.58L7.5,13L11,9.5V18H13Z" />
						 	</SvgIcon>
					    </Button>
				     </div>
			);	
	}

}


export default withStyles(styles)(ButtonUp);