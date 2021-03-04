import React from "react";
import {
  PrimaryTemplate,
  ProductDetailsLeft,
  ProductDetailsRight,
} from "../../components";
import Grid from "@material-ui/core/Grid";
import classes from "./productdetail.module.css";

const ProductDetailApproval = (props) => {
  return (
    <PrimaryTemplate history={props.history}>
      <Grid className={classes.topgrid} container spacing={1}>
        <Grid item xs={12} sm={6} lg={9}>
          <h4>Attention: posting will expire in 45 days.</h4>
          <button className={classes.button}>Edit Post</button>
          <button className={classes.button}>Edit Images</button>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <h4 className={classes.unpublishedtext}>
            This is An Unpublished Draft.
          </h4>
          <button className={classes.topbuttonright}>Publish</button>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={7}>
          <ProductDetailsLeft />
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <ProductDetailsRight />
        </Grid>
      </Grid>
    </PrimaryTemplate>
  );
};

export { ProductDetailApproval };
