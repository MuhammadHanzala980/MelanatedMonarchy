import React from "react";
import classes from "./BillingAddress.module.css";
import { NavLink } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";
import clsx from "clsx";
import { CustomCheckbox } from "../Checkbox";
import { InputWithIcon } from "../Search";
import calendar from "../../assets/images/select/calendar.svg";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";

const BillingAddress = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Grid container className={classes.block}>
      <Grid container>
        <Grid item xs={12}>
          <div className={classes.header}>Billing Address</div>
        </Grid>
      </Grid>
      <Container className={classes.container}>
        <form className={classes.form}>
          <Grid container>
            <Grid item xs={12} className={classes.check}>
              <CustomCheckbox text="Same as shopping Address" />
            </Grid>
          </Grid>
          <Grid container className={classes.main}>
            <Grid item xs={12} sm={12} md={12}>
              <span className={classes.text} htmlFor="defaultFormRegisterNameEx">
                Address
              </span>
              <input className={classes.inputfield} type="text" id="defaultFormRegisterNameEx" />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <span className={classes.text} htmlFor="defaultFormRegisterNameEx">
                City
              </span>
              <input className={classes.inputfield} type="text" id="defaultFormRegisterNameEx" />
            </Grid>
            <Grid container>
              <Grid item xs={5} sm={5} className={classes.colon}>
                <span className={classes.text} htmlFor="defaultFormRegisterNameEx">
                  State
                </span>
                <input className={classes.inputfield} type="email" id="defaultFormRegisterEmailEx" />
              </Grid>
              <Grid item xs={2} sm={2}></Grid>
              <Grid item xs={5} sm={5}>
                <span className={classes.text} htmlFor="defaultFormRegisterNameEx">
                  Zip Code
                </span>
                <input className={classes.inputfield} type="email" id="defaultFormRegisterEmailEx" />
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.check}>
              <CustomCheckbox text="Save Billing Address" />
            </Grid>
          </Grid>
          <Grid container style={{ marginTop: "1em" }}>
            <Grid item xs={12} sm={12}>
              <span className={classes.text} htmlFor="defaultFormRegisterNameEx">
                Card Number
              </span>
              <input className={classes.inputfield} type="text" placeholder="1234-1234-1234-4" id="defaultFormRegisterNameEx" />
            </Grid>
            <Grid container>
              <Grid item xs={12} sm={5} className={classes.colon}>
                <span className={classes.text} htmlFor="defaultFormRegisterNameEx">
                  Expiry Date
                </span>
                <div className={classes.input}>
                  <InputWithIcon type="date" placeholder="Mm/yy" onChange={selectedDate} ImgRight={calendar} />
                </div>
              </Grid>
              <Grid item xs={2} sm={2}></Grid>
              <Grid item xs={5} sm={5}>
                <span className={classes.text} htmlFor="defaultFormRegisterNameEx">
                  CVV
                </span>
                <input type="phonenumber" className={classes.inputfield} placeholder="1234" id="defaultFormRegisterNameEx" />
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.check}>
              <CustomCheckbox text="Save Card Detail" />
            </Grid>
            <Grid container style={{ borderTop: "1px solid" }}>
              <Grid item xs={8}></Grid>
              <Grid item xs={6} sm={4} md={4} lg={4}>
                <NavLink to="/create_listing_1">
                  <div className={classes.createlisting1}>
                    <h4 className={classes.createtext}>Pay</h4>
                  </div>
                </NavLink>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Grid>
  );
};

export default BillingAddress;
