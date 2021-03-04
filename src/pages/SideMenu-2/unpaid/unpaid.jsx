import { Container, Grid } from "@material-ui/core";
import React from "react";
import phone from "../../../assets/images/Draft/phone.png";
import classes from "./unpaid.module.css";
import { NavLink  } from "react-router-dom";
const Unpaid=()=>{
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
          RED Color 
        </span>
        <h4 className={classes.head} >
            $24.00 x 1
        </h4>
        </Grid>
        <Grid item xs={5} sm={5} md={4} >
            <NavLink to="/Unpaid">
              <div className={classes.createbtn}>
              <span className={classes.total}>Total : </span><h4 className={classes.createprice}>24.00</h4>
              </div>
            </NavLink>
            </Grid>
            <Grid item xs={1} sm={1} md={3}>

            </Grid>
            <Grid item xs={5} sm={5} md={5} lg={4}>
            <NavLink to="/Unpaid">
              <div className={classes.createlisting}>
                <h4 className={classes.createtext1}>Buy Again</h4>
              </div>
            </NavLink>
          </Grid>
         
         
    </Grid>
    <Container className={classes.border} >
     <Grid item xs={12} className={classes.border1}>
     <span className={classes.time}>Pay Before:</span>
     <span className={classes.timer}>23:44:16</span>
     </Grid>
    
    </Container>
</Grid>

    </>

)
}
export {Unpaid};