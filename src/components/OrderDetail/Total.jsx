

import { Grid } from "@material-ui/core";
import React from "react";
import order from "../../assets/images/Allposting/order.png";
import bag from "../../assets/images/bidding/bag.png";
import classes from "./OrderDetail.module.css"

const Total=({price,limit,tax,Total})=>{
return(
    <>
<Grid container  className={classes.total} >
    <Grid item xs={3} sm={5} md={8}>
    </Grid>
    
    <Grid item xs={4} sm={3} md={2} className={classes.border1}>
        <span>
        <p>Item Price
        <br/>
             Shipping Fees
           
            <br/>
            Estimated tax</p>
           
        </span>
        </Grid>
        <Grid item xs={4} sm={3} md={2} className={classes.border}>
        <span>
        <p> ${price}.00
         
            <br/>
           ${limit}.00
           
            <br/>
           {tax}.00</p>
        
        </span>
        </Grid>
        </Grid>
        <Grid container >
    <Grid item xs={3} sm={5} md={8}>
    </Grid>
        <Grid item xs={4} sm={3} md={2} className={classes.paytext}>
        <span>
        You Pay
         </span>
        </Grid>
        <Grid item xs={4} sm={3} md={2} className={classes.pay}>
        <span>
         ${Total}.00
         </span>
       
        </Grid>
        </Grid>

        



    </>
)
};
export {Total};