import React from "react";
import classes from "./Billing.module.css";
import { NavLink, Link } from "react-router-dom";
import { Button, Container, Grid } from "@material-ui/core";

const Billing = () => {
  return (
    <Grid item xs={12} sm={6} md={8} lg={8} className={classes.select2}>
      <Container className={classes.own}>
        <form className={classes.form}>
          <Grid container>
            <Grid item xs={6}>
              <h4 className={classes.bill}>Billing</h4>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <div className={classes.createlisting}>
                <h4 className={classes.createtext1}>User Information</h4>
              </div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={10} sm={6}>
              <span className={classes.text} htmlFor="defaultFormRegisterNameEx">
                Full name
              </span>
              <input className={classes.inputfield} type="text" id="defaultFormRegisterNameEx" />
            </Grid>

            <Grid item xs={10} sm={6}>
              <span className={classes.text} htmlFor="defaultFormRegisterNameEx">
                Last name
              </span>
              <input className={classes.inputfield} type="text" id="defaultFormRegisterNameEx" />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={10} sm={6}>
              <span className={classes.text} htmlFor="defaultFormRegisterNameEx">
                Phone Number
              </span>
              <input className={classes.inputfield} type="email" id="defaultFormRegisterEmailEx" />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <div className={classes.createlisting}>
                <h4 className={classes.createtext1}>Address</h4>
              </div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={10} sm={6}>
              <span className={classes.text} htmlFor="defaultFormRegisterNameEx">
                Country
              </span>
              <input className={classes.inputfield} type="text" id="defaultFormRegisterNameEx" />
            </Grid>

            <Grid item xs={10} sm={6}>
              <span className={classes.text} htmlFor="defaultFormRegisterNameEx">
                State/City
              </span>
              <input className={classes.inputfield} type="text" id="defaultFormRegisterNameEx" />
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={10} sm={9}>
              <span className={classes.text} htmlFor="defaultFormRegisterNameEx">
                Address
              </span>
              <br /> <input className={classes.inputfield} type="email" id="defaultFormRegisterEmailEx" />
            </Grid>

            <Grid item xs={10} sm={3} md={2}>
              <span className={classes.text} htmlFor="defaultFormRegisterNameEx">
                Zip code
              </span>
              <input className={classes.inputfield} type="text" id="defaultFormRegisterNameEx" />
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <div className={classes.createlisting}>
                <h4 className={classes.createtext1}>Card Detail</h4>
              </div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={10} sm={6}>
              <span className={classes.text} htmlFor="defaultFormRegisterNameEx">
                Card Number
              </span>
              <input className={classes.inputfield} type="text" id="defaultFormRegisterNameEx" />
            </Grid>

            <Grid item xs={10} sm={6}>
              <span className={classes.text} htmlFor="defaultFormRegisterNameEx">
                Expiry Date
              </span>
              <input className={classes.inputfield} type="text" id="defaultFormRegisterNameEx"></input>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={10} sm={9}>
              <span className={classes.text} htmlFor="defaultFormRegisterNameEx">
                CVV
              </span>
              <br />
              <input className={classes.inputfield} type="text" id="defaultFormRegisterNameEx" />
            </Grid>
            <Grid item xs={6} sm={4} md={4} lg={2}>
              <NavLink to="/create_listing_1">
                <div className={classes.createlisting1}>
                  <h4 className={classes.createtext}> Update</h4>
                </div>
              </NavLink>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Grid>
  );
};

export default Billing;
