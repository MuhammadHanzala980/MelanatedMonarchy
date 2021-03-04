import React from "react";
import classes from './MyPurchase.module.css';
import { Grid,Typography } from "@material-ui/core";
import { OrderDetail, Total } from "../../../components/OrderDetail";
import order from "../../../assets/images/Allposting/order.png";
import bag from "../../../assets/images/bidding/bag.png";
const PurchaseDetail = () => {
   
return (
     <>
     <Grid item xs={12} sm={6} md={8} lg={8} className={classes.select2}>
     <Grid className={classes.Omain} container >
<Grid item xs={6} sm={6} md={6} lg={6}>
          <Typography className={classes.text} >Order ID:19860</Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} className={classes.link} >
        <Typography className={classes.text2} >Aug20,2020</Typography>
        </Grid>
</Grid>
<OrderDetail Img={order}  colors={"Purple"} Info={"Sun Glaas Multi Shades"} 
price={"18"} limit={"1"}  ></OrderDetail>
<OrderDetail Img={bag}  colors={"Grey"} Info={"Hand bag Multi Colors"} 
price={"18"} limit={"1"}  ></OrderDetail>
<Total tax={0}
quantity={"18"} Total={"19"}></Total>
    




</Grid>
</>
);
};

export default PurchaseDetail;