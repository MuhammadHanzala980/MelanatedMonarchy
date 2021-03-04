import { Grid } from "@material-ui/core";
import React from "react";
import order from "../../assets/images/Allposting/order.png";
import bag from "../../assets/images/bidding/bag.png";
import classes from "./OrderDetail.module.css"

const OrderDetail=({Img,Info,quantity,colors})=>{
return(
    <>
<Grid container className={classes.main} >
    <Grid item xs={4} sm={2}>
<img className={classes.img} src={Img}/>
    </Grid>
    <Grid item xs={6}>
        <span>
            <b>{Info}</b><br/>
            Color:{colors}
        </span>
        <h4 className={classes.text}>
            ${quantity}x 1
        </h4>
    </Grid>
</Grid>





    </>
)
};
export {OrderDetail};