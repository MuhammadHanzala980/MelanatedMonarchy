 
 import { Typography,Grid } from "@material-ui/core";
 import React from "react";
 import classes from "./Drafts.module.css";
 import { NavLink ,Link } from "react-router-dom";
 
 const Draft=({Img})=>{
    return(
        <>
 
 <div className={classes.Bidding} >
 <Grid item xs={12} className={classes.main} spacing={1}>
   <h4 className={classes.dtext}>
     Date:2344/43
   </h4>
 </Grid>
 <Grid container xs={12} className={classes.smain} >
 <Grid item xs={6} sm={6} lg={6} className={classes.publish}>
   <span className={classes.drafttext}>
    Status <br></br> 
  <b> Draft</b>  </span>
    </Grid>
   <Grid item xs={6} sm={6} lg={6} className={classes.publish}>
          <button className={classes.topbuttonright}>Publish</button>
        </Grid>
 </Grid>
      <img alt={Img} src={Img} className={classes.img} />
     
        <Grid item xs={12} >
          <div >
            <h5 className={classes.draftprice}>Iphone7s 124gb
            <br></br>RS 77,900/-</h5>
          </div>
        </Grid>
    </div>
</>
    )}
    export {Draft};