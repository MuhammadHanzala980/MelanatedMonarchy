import React from "react";
import {
  PrimaryTemplate,
  ProductDetailsLeft,
  ProductDetailsRight,
  IntroBox
} from "../../components";
import Grid from "@material-ui/core/Grid";
import classes from "./productDetail.module.css";

const ProductDetail = (props) => {
  return (
    <PrimaryTemplate history={props.history}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={7}>
          <ProductDetailsLeft />
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <ProductDetailsRight />
          <div style={{border: '1px solid'}} >

            <IntroBox />
          </div>
        </Grid>
      </Grid>
    </PrimaryTemplate>
  );
};

export { ProductDetail };


