import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import logo from "../../../../assets/images/header/logo.png";
import Plus from "../../../../assets/images/header/Plus.svg";
import Login from "../../../Login/login";
import classes from "./header.module.css";
// import { Addtocart } from "../../../../pages/AddtoCart/Addtocart";
// import { PostDetail } from "../../../Bidding-Post-Detail";


class SimpleHeader extends Component {
  render() {
    return (
      <div>
        <Grid className={classes.main} container spacing={1}>
          <Grid item xs={3} sm={8} md={9} lg={8}>
            <NavLink to="/">
              <img alt={logo} className={classes.image} src={logo} />
            </NavLink>
          </Grid>
   
          <Grid item xs={4} sm={4} md={3} lg={4}>
            <h4 className={classes.signup}>
              {" "}
              <NavLink style={{ textDecoration: "none", color: "#E7C68E" }} to="/signup">
                <span className={classes.loginsignup}> SignUp </span>
              </NavLink>{" "}
              <Login text="Login" />
            </h4>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default SimpleHeader 
