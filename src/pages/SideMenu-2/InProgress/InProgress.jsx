import { Container, Grid } from "@material-ui/core";
import React from "react";
import phone from "../../../assets/images/Draft/phone.png";
import laptop from "../../../assets/images/Follow/laptop.svg";
import classes from "./InProgress.module.css";
import { NavLink  } from "react-router-dom";
const InProgress=()=>{
return(
    <>
<Grid container className={classes.main} >

   
    <Grid item xs={12}>
    <div className={classes.create}>
    <div> <img src={laptop}/></div>
   
       
    </div>
    </Grid>
    <Grid item xs={12}>
    <h4 className={classes.create}>
     No transaction in Progress.</h4>
    </Grid>     
                <Grid item xs={5} sm={5} md={5} lg={3}>
              
            <NavLink to="/InProgress">
              <div className={classes.createlisting}>
                <h4 className={classes.createtext1}>Continue Shopping</h4>
              </div>
            </NavLink>
          
          
      
            
         
         
    </Grid>
    
</Grid>

    </>

)
}
export {InProgress};