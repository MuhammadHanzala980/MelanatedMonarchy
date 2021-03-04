import { Grid } from "@material-ui/core";
import React from "react";
import phone from "../../../assets/images/Draft/phone.png";
import color from "../../../assets/images/Allposting/color.svg";
import classes from "./Complete.module.css";
import { NavLink ,Link } from "react-router-dom";
const Complete=()=>{
return(
    <>
<Grid container className={classes.main} >
    <Grid item xs={4} sm={4}>
<img className={classes.img} src={phone}/>
    </Grid>
    <Grid container xs={8}>
    <Grid item xs={12}>
        <span>
            Iphone 6s 256gb<br/>
            Color: <img className={classes.svg}  src={color}/>
        </span>
        <h4 className={classes.head} >
            $24.00 x 1
        </h4>
        </Grid>
        <Grid item xs={8} sm={10} md={6} >
            <NavLink to="/create_listing_1">
              <div className={classes.createbtn}>
              <span className={classes.total}>Total : </span><h4 className={classes.createprice}>24.00</h4>|
                <h4 className={classes.createtext}>Closed</h4>
              </div>
            </NavLink>
            </Grid>
            <Grid item xs={5} sm={5} md={5} lg={4}>
            <NavLink to="/create_listing_1">
              <div className={classes.createlisting}>
                <h4 className={classes.createtext1}>Buy Again</h4>
              </div>
            </NavLink>
          </Grid>
          
    </Grid>
</Grid>

    </>

)
}
export {Complete};