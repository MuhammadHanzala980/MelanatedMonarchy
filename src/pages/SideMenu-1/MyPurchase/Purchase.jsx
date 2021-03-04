 
 import { Grid } from "@material-ui/core";
 import React from "react";
 import classes from "./MyPurchase.module.css";
 import { Link } from "react-router-dom";
 import chevron from "../../../assets/images/Allposting/chevron.svg"
 const Purchase=({Id,date,price,status})=>{
    return(
        <>
 

 <Grid container xs={12} className={classes.OrderDetail} >
         <Grid item xs={2}   >{Id}</Grid>
         <Grid item xs={3}   >{date}</Grid>
         <Grid item xs={2}   >${price}</Grid>
         <Grid item xs={2}   >{status}</Grid>
         <Grid item xs={2}   >
         <Link to="./PurchaseDetail" className={classes.link}>
            Get Detail<span ><img className={classes.li} src={chevron}></img></span> 
         </Link></Grid>

</Grid>  

</>
    )}
    export {Purchase};