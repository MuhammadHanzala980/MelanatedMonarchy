import React from "react";
import classes from './Form.module.css';
import { NavLink ,Link } from "react-router-dom";
import { Button,Container,Grid,Typography } from "@material-ui/core";

const Form = () => {
   
return (
     <>
     <Grid item xs={12} sm={6} md={8} lg={8} className={classes.select2}>
     <Grid className={classes.Pmain} container >
<Grid item xs={6} sm={6} md={6} lg={6}>
          <Typography className={classes.text} >My Profile</Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} className={classes.link} >
          <Link className={classes.text1} >Change Password</Link>
        </Grid>
</Grid>
<Container>
    <form className={classes.form} >
   <Grid container>
   <Grid item xs={3} sm={4}>
        <span className={classes.text} htmlFor="defaultFormRegisterNameEx" >
          Full name
        </span>
       </Grid>
       <Grid item xs={7}  sm={8}>
        <input className={classes.inputfield} type="text" id="defaultFormRegisterNameEx" />
        </Grid>
   </Grid> 
              
        <Grid container>
   <Grid item xs={3} sm={4}>
        <span className={classes.text} htmlFor="defaultFormRegisterNameEx" >
         Email
        </span>
        </Grid>
       <Grid item xs={7} sm={8}>
        <input className={classes.inputfield} type="email" id="defaultFormRegisterEmailEx"  />
        </Grid>
   </Grid>
        <Grid container>
   <Grid item xs={3} sm={4}>
        <span className={classes.text} htmlFor="defaultFormRegisterConfirmEx" >
          Number
        </span>
        </Grid>
       <Grid item xs={7} sm={8}>
        <input className={classes.inputfield} type="text" id="defaultFormRegisterConfirmEx"  />
        </Grid>
   </Grid>
      
        <Grid container>
   <Grid item xs={3} sm={4}>
        <span className={classes.text} htmlFor="defaultFormRegisterPasswordEx" >
          Country
        </span>
        </Grid>
       <Grid item xs={7} sm={8}>
        <input className={classes.inputfield} type="text" id="defaultFormRegisterPasswordEx"  />
        </Grid>
   </Grid>
   <Grid container>
   <Grid item xs={3} sm={4}>
        <span className={classes.text} htmlFor="defaultFormRegisterPasswordEx" >
          City
        </span>
        </Grid>
       <Grid item xs={7} sm={8}>
        <input className={classes.inputfield} type="text" id="defaultFormRegisterPasswordEx"  />
        </Grid>
   </Grid>
        <Grid container >
        <Grid item  xs={6} sm={8} md={8} lg={7}></Grid>
        <Grid item xs={6} sm={4} md={4} lg={3}>
          <NavLink to="/create_listing_1">
            <div className={classes.createlisting}>
              <h4 className={classes.createtext}>  Update</h4>
            </div>
          </NavLink>
        </Grid>
        </Grid>
      </form>
  
</Container>
</Grid>

</>
);
};

export default Form;