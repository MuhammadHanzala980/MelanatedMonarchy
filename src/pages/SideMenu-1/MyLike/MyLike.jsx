import React from "react";
import classes from './MyLike.module.css';
import { Grid,Typography } from "@material-ui/core";
import { Like } from "./Like";
import phone from "../../../assets/images/Draft/phone.png";
import {Box} from "../../../components/ListingBoxNo/Box";
const MyLike = () => {
   
return (
     <>
     <Grid item xs={12} sm={6} md={8} lg={8} className={classes.select2}>
     <Grid className={classes.Pmain} container  >
<Grid item xs={6} sm={6} md={6} lg={6}>
          <Typography className={classes.text} >My Like's <Box num={"02"}></Box>
           </Typography>
        </Grid>
</Grid>
<Grid className={classes.draft} container  >
          <Grid item xs={12} sm={12} md={6} >
            <Like Img={phone} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} >
            <Like Img={phone} />
          </Grid>
          </Grid>
</Grid>
     </>
);
};

export {MyLike};