 
 import { Typography,Grid } from "@material-ui/core";
 import React from "react";
 import classes from "./Listing.module.css";
 import person from "../../../assets/images/Allposting/person.png";
 import likes from "../../../assets/images/Allposting/likes.svg";
 import { NavLink ,Link } from "react-router-dom";
 import location from "../../../assets/images/Allposting/location.svg";
 import share from "../../../assets/images/Allposting/share.svg";
 const Listing=({Img})=>{
    return(
        <>
 
 <div className={classes.Bidding} >
      <img alt={Img} src={Img} className={classes.img} />
        <Grid container xs={12}  >
         <Grid item xs={12} >
            <h5 className={classes.price}>Iphone7s 124gb
            <br></br><b>Rs. 77,900/-</b></h5>
          </Grid> 
        </Grid>
       
      
    </div>
</>
    )}
    export {Listing};