 
 import { Typography,Grid } from "@material-ui/core";
 import React from "react";
 import classes from "./MyLike.module.css";
 import like from "../../../assets/images/Allposting/like.svg";
 import { NavLink ,Link } from "react-router-dom";
 
 const Like=({Img})=>{
    return(
        <>
 
 <div className={classes.Bidding} >
      <img alt={Img} src={Img} className={classes.img} />
        <Grid container xs={12} >
         <Grid item xs={6} >
            <h5 className={classes.draftprice}>Iphone7s 124gb
            <br></br><b>Rs. 77,900/-</b></h5>
      
          </Grid>  <Grid item xs={6} >
          <img className={classes.heart} alt='heart' src={like}/>
        </Grid>
        </Grid>
    </div>
</>
    )}
    export {Like};