import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton'
import SvgIcon from '@material-ui/core/SvgIcon';
import ButtonUp from './ButtonUp';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

 class Contact extends Component
{
	constructor(props){ 
    super(props)
    this.openurl = this.openurl.bind(this)
  }

  openurl(e)
  {
  	let url = e.target.getAttribute('data-url')
  	if(e.target.tagName == 'path')
  	{
  		url = e.target.parentNode.getAttribute('data-url')
  	}
  	console.log(url)
  	window.open(url)
  }
	render(){
		const { classes } = this.props; 
		return(
			          <Grid container className="headerindex bgcolor4 poini" id="contact"> 
			          	<Grid container item xs={12} sm={12}  alignItems="center" justify="center">
				            <Typography variant="title" color="inherit" align="center" className="Slabo  padding25 whitecolor">
				              Contact
				            </Typography>
			            </Grid>
			            <Grid container alignItems="center" justify="center" className="padding120">
							<Paper elevation={7}>
								<Grid container justify="center" xs={12} sm={12} className="padding5">
									<Typography variant="title" color="textPrimary" className="Slabo" component="h2">
						              beniro_vielma@hotmail.com
						            </Typography>
								</Grid>
							</Paper>
						</Grid>
							<Grid container justify="center" xs={12} sm={12} className="padding5">
								<Grid container item justify="center" xs={12} sm={6} className="borderleft noneborderleft">
		                              <SvgIcon color="primary">
		                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
		                             </SvgIcon>
									<Typography variant="title" color="inherit" className="Slabo  whitecolor" component="h4">
						              +57 322 7009744
						            </Typography>
					            </Grid>
					            <Grid container item justify="center" xs={12} sm={6}>
					            	<SvgIcon color="primary">
		                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
		                             </SvgIcon>
									<Typography variant="title" color="inherit" className="Slabo  whitecolor" component="h4">
						              Bogota DC, Colombia
						            </Typography>
					            </Grid>
							</Grid>
							<Grid container justify="center"  xs={12} sm={12} className="padding5">
								<Grid container item xs={4} sm={3} justify="flex-start">
				            		<IconButton  variant="outlined" color="primary"  size="mediun" className={classes.button} aria-label="Git"  color="primary" data-url="https://github.com/benirov/" onClick={this.openurl}>
							       		<SvgIcon data-url="https://github.com/benirov/" color="primary">
										    <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" data-url="https://github.com/benirov/" />
									 	</SvgIcon>
							      	</IconButton>
				      			</Grid>
				      			<Grid container item xs={4} sm={3} justify="center" alignItems="center">
				            		<IconButton  variant="outlined" color="primary"  size="mediun" className={classes.button} aria-label="LinkedIn"  data-url="https://www.linkedin.com/in/beniro-vielma-592184126/" onClick={this.openurl}>
							       		<SvgIcon data-url="https://www.linkedin.com/in/beniro-vielma-592184126/">
										    <path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z" />
									 	</SvgIcon>
							      	</IconButton>
				      			</Grid>
				      			<Grid container item xs={4} sm={3} justify="flex-end"  alignItems="center">
				            		<IconButton  variant="outlined" color="primary"  size="mediun" className={classes.button} aria-label="Git"  data-url="https://github.com/benirov/profile" onClick={this.openurl}>
							       		<SvgIcon data-url="https://github.com/benirov/profile">
										    <path d="M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z" data-url="https://www.linkedin.com/in/beniro-vielma-592184126/" data-url="https://github.com/benirov/profile" />
									 	</SvgIcon>
							      	</IconButton>
				      			</Grid>
			      			</Grid>
					     
					     <Grid container>
					     	<Grid container item xs={12} sm={12} justify="flex-end"  alignItems="flex-end">
					     		<ButtonUp OnclickButton = {this.props.OnClickUp} NameSection="skill"/>
			      			</Grid>
					     </Grid>
				     </Grid>

			);	
	}

}


export default withStyles(styles)(Contact);