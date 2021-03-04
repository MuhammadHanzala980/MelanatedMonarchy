import React, { Component } from "react";
import classes from "./BillingForm.module.css";
import { Grid, Typography } from "@material-ui/core";
import { SecondaryTemplate } from "../../components/Template/Secondary-template";
import SideMenu from "../../components/Navigation/Navigation";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { billing } from "../../store/action";
import { IntroBox } from "../../components";

class BillingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  value(e) {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
      messageErr: "",
    });
  }

  submit() {
    const body = {};
    console.log(this.state);
    this.props.actions.billing(body);
  }

  render() {
    return (
      <>
        <SecondaryTemplate>
          <Grid className={classes.draft} container justify="space-evenly">
            <Grid item xs={12} sm={12} md={3} lg={3} style={{ border: "1px solid", marginTop: "1em" }}>
              <div>
                <IntroBox />
              </div>
              <SideMenu />
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8} className={classes.select2}>
              <Grid className={classes.Pmain} container>
                <Grid item xs={6} sm={6} md={6} lg={6}>
                  <Typography className={classes.text}>Billing</Typography>
                </Grid>
              </Grid>

              <Grid className={classes.draft} container>
                <Grid xs={12} sm={12}>
                  <div className={classes.secHeading}>
                    <span>User Information</span>
                  </div>
                </Grid>

                <Grid item xs={12} sm={5} md={5} lg={6} className={classes.inpBox}>
                  <Grid item xs={12} sm={12} className={classes.label}>
                    <label>Full Name</label>
                  </Grid>
                  <Grid item xs={12} sm={12} className={classes.input}>
                    <input type="text" onChange={this.value.bind(this)} name="fullName" value={this.state.fullName} className={classes.inpFeild} />
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={5} md={5} lg={6} className={classes.inpBox}>
                  <Grid item xs={12} sm={12} className={classes.label}>
                    <label>Email</label>
                  </Grid>
                  <Grid item xs={12} sm={12} className={classes.input}>
                    <input type="text" onChange={this.value.bind(this)} name="email" value={this.state.email} className={classes.inpFeild} />
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={5} md={5} lg={6} className={classes.inpBox}>
                  <Grid item xs={12} sm={12} className={classes.label}>
                    <label>Number</label>
                  </Grid>
                  <Grid item xs={12} sm={12} className={classes.input}>
                    <input type="text" onChange={this.value.bind(this)} name="number" value={this.state.number} className={classes.inpFeild} />
                  </Grid>
                </Grid>

                <Grid xs={12} sm={12}>
                  <div className={classes.secHeading}>
                    <span>Address</span>
                  </div>
                </Grid>

                <Grid item xs={12} sm={5} md={5} lg={6} className={classes.inpBox}>
                  <Grid item xs={12} sm={12} className={classes.label}>
                    <label>Country</label>
                  </Grid>
                  <Grid item xs={12} sm={12} className={classes.input}>
                    <input type="text" onChange={this.value.bind(this)} name="country" value={this.state.country} className={classes.inpFeild} />
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={5} md={5} lg={6} className={classes.inpBox}>
                  <Grid item xs={12} sm={12} className={classes.label}>
                    <label>State/City</label>
                  </Grid>
                  <Grid item xs={12} sm={12} className={classes.input}>
                    <input type="text" onChange={this.value.bind(this)} name="city" value={this.state.city} className={classes.inpFeild} />
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={10} md={9} className={classes.address}>
                  <Grid item xs={12} sm={12} className={classes.label}>
                    <label>Address</label>
                  </Grid>
                  <Grid item xs={12} sm={12} className={classes.input}>
                    <input type="text" onChange={this.value.bind(this)} name="address" value={this.state.address} className={classes.inpFeild} />
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={2} md={3} className={classes.zip}>
                  <Grid item xs={12} sm={12} className={classes.label}>
                    <label>ZipCode</label>
                  </Grid>
                  <Grid item xs={12} sm={12} className={classes.input}>
                    <input type="text" onChange={this.value.bind(this)} name="zipCode" value={this.state.zipCode} className={classes.inpFeild} />
                  </Grid>
                </Grid>

                <Grid xs={12} sm={12}>
                  <div className={classes.secHeading}>
                    <span>Card Details</span>
                  </div>
                </Grid>

                <Grid item xs={12} sm={5} md={5} lg={6} className={classes.inpBox}>
                  <Grid item xs={12} sm={12} className={classes.label}>
                    <label>Card Number</label>
                  </Grid>
                  <Grid item xs={12} sm={12} className={classes.input}>
                    <input type="text" onChange={this.value.bind(this)} name="cardNumber" value={this.state.cardNumber} className={classes.inpFeild} />
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={5} md={5} lg={6} className={classes.inpBox}>
                  <Grid item xs={12} sm={12} className={classes.label}>
                    <label>Expiry Date</label>
                  </Grid>
                  <Grid item xs={12} sm={12} className={classes.input}>
                    <input type="text" onChange={this.value.bind(this)} name="expiryDate" value={this.state.expiryDate} className={classes.inpFeild} />
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={5} md={5} lg={6} className={classes.inpBox}>
                  <Grid item xs={12} sm={12} className={classes.label}>
                    <label>CVV</label>
                  </Grid>
                  <Grid item xs={12} sm={12} className={classes.input}>
                    <input type="text" onChange={this.value.bind(this)} name="cvv" value={this.state.cvv} className={classes.inpFeild} />
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={5} md={5} lg={6} className={classes.btnBox}>
                  <Grid item xs={12} sm={12} className={classes.btn}>
                    <button type="text" className={classes.save}>
                      Save
                    </button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </SecondaryTemplate>
      </>
    );
  }
}

const mapDispatchToProps = (dispatchEvent) => {
  return {
    actions: bindActionCreators(
      {
        billing,
      },
      dispatchEvent
    ),
  };
};
const mapStateToProps = (state) => {
  return {
    item: state,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BillingForm);
