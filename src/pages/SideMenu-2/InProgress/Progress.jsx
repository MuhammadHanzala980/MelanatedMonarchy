import React,{useState} from "react";
import classes from "./InProgress.module.css";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { InProgress } from "./InProgress";
import {Box} from "../../../components/ListingBoxNo/Box";

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  const ProgressMain=()=>{
        return(
            <>
           
           <Grid className={classes.Omain} container >
<Grid item xs={12}  className={classes.crumb} >
        <Link  className={classes.links} to="/MyOrder" onClick={handleClick}>
          My Order's
        </Link>
        <span className={classes.tag}>></span>
        <Link  className={classes.links}  to="/InProgress" onClick={handleClick}>
          InProgress  <Box num={"00"}></Box>
        </Link>
        </Grid>
        
          </Grid>
          <InProgress></InProgress>
               </>
               );
           };
           export {ProgressMain};