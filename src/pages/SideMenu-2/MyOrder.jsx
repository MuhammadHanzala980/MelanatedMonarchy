import React from "react";
import classes from "./SideMenu2.module.css";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Complete } from "./OrderComplete";
import {Box} from "../../components/ListingBoxNo/Box";
function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  const MyOrder=()=>{
        return(
            <>
           
<Grid className={classes.Omain} container >
<Grid item xs={12}  className={classes.crumb} >
        <Link  className={classes.links} to="/MyOrder" onClick={handleClick}>
          My Order's
        </Link>
        <span className={classes.tag}>></span>
        <Link  className={classes.links}  to="/Complete" onClick={handleClick}>
          Completed <Box num={"01"}></Box>
        </Link>
    
        </Grid>
        
          </Grid>
          <Complete></Complete>
               </>
               );
           };
           export {MyOrder};