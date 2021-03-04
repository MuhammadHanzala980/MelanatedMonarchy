
import { Typography,Grid } from "@material-ui/core";
import React,{useState} from "react";
import classes from "./Sold.module.css";
import phone from "../../../assets/images/Draft/phone.png";
import { Sold } from "./Sold";

const SoldMain=()=>{
    return(
        <>
<Grid className={classes.Pmain} container  >
<Grid item xs={6} sm={6} md={6} lg={6}>
          <Typography className={classes.text} ><b>Sold</b>
           </Typography>
        </Grid>
</Grid>
<Grid className={classes.draft} container  >
          <Grid item xs={12} sm={12} md={6} >
            <Sold Img={phone}></Sold>
          </Grid>
          <Grid item xs={12} sm={12} md={6} >
            <Sold Img={phone}></Sold>
          </Grid>
          </Grid>

</>
             );
         };
         export {SoldMain};