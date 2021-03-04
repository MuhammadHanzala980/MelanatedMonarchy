import { Grid, Container } from "@material-ui/core";
import React from "react";
import order from "../../assets/images/Allposting/order.png";
import classes from "./Product.module.css";
import List from "../List/List";

const Product = () => {
  return (
    <>
      <Grid container className={classes.block}>
        <Grid item xs={12}>
          <div className={classes.header}>Cart</div>
        </Grid>

        <Grid item xs={12} sm={12} className={classes.select2}>
          <Grid className={classes.draft} container>
            <Grid container>
              <Grid item xs={12} container className={classes.card}>
                <Grid className={classes.imgContainer}>
                  <img src={order} alt="order" className={classes.order} />
                </Grid>
                <Grid>
                  <div className={classes.info}>
                    <b>Sun Glass Multi Shades</b>
                    <br />
                    <span>Color : Purple</span>
                  </div>
                  <div className={classes.price}>
                    <b>$56</b>
                    <span> x 1</span>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} container className={classes.card}>
              <Grid className={classes.imgContainer}>
                <img src={order} alt="order" className={classes.order} />
              </Grid>
              <Grid>
                <div className={classes.info}>
                  <b>Sun Glass Multi Shades</b>
                  <br />
                  <span>Color : Purple</span>
                </div>
                <div className={classes.price}>
                  <b>$56</b>
                  <span> x 1</span>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item sm={2} md={5}></Grid>

          <Grid item xs={6} sm={4} md={3} className={classes.border1}>
            <span>
              <p>
                Item Price
                <br />
                Shipping Fees
                <br />
                Estimated tax
              </p>
            </span>
          </Grid>
          <Grid item xs={6} sm={4} md={3} className={classes.border}>
            <span>
              <p>
                $18.00
                <br />
                $1.00
                <br />
                $0.00
              </p>
            </span>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item sm={2} md={5}></Grid>
          <Grid item xs={6} sm={4} md={3} className={classes.paytext}>
            <span>You Pay</span>
          </Grid>
          <Grid item xs={6} sm={4} md={3} className={classes.pay}>
            <span>$19.00</span>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export { Product };
