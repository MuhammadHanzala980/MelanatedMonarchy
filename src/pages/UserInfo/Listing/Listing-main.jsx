import { Typography, Grid } from "@material-ui/core";
import React, { useState } from "react";
import classes from "./Listing.module.css";
import phone from "../../../assets/images/Draft/phone.png";
import { Listing } from "./Listing";

const ListingMain = () => {
  return (
    <>
      <Grid className={classes.Pmain} container>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <Typography className={classes.text}>Listing</Typography>
        </Grid>
      </Grid>
      <Grid className={classes.draft} container>
        <Grid item xs={12} sm={12} md={6}>
          <Listing Img={phone} />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Listing Img={phone} />
        </Grid>
      </Grid>
    </>
  );
};
export { ListingMain };
