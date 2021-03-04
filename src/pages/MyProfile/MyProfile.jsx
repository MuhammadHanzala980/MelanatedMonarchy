import React, { Component } from "react";
import classes from "./myprofile.module.css";
import { Grid, Typography } from "@material-ui/core";
import { SecondaryTemplate } from "../../components/Template/Secondary-template";
import SideMenu from "../../components/Navigation/Navigation";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { upDateProfile } from "../../store/action";
import { IntroBox } from "../../components";

class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      city: "",
      country: "",
      number: "",
      messageErr: "",
      validatedEmail: true,
    };
  }

  validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      this.setState({ validatedEmail: true });
    }
  }
  value(e) {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
      messageErr: "",
    });
    if (e.target.name === "email") {
      this.validateEmail(e.target.value);
    }
  }

  componentDidMount() {
    const cruntUser = JSON.parse(localStorage.getItem("__user__"));
    if (cruntUser) {
      this.setState({
        fullName: cruntUser.name,
        email: cruntUser.email,
        number: cruntUser.number,
        city: cruntUser.city,
        country: cruntUser.country,
      });
    }
  }

  upDate() {
    const { fullName, email, number, country, city, validatedEmail } = this.state;
    if (fullName.length < 1) {
      this.setState({
        messageErr: "Please Inter full name !",
      });
    } else if (!validatedEmail) {
      this.setState({
        messageErr: "Please inter valide email !",
      });
    } else if (number.length < 10) {
      this.setState({
        messageErr: "Please inter valide Phone number !",
      });
    } else if (country.length < 2) {
      this.setState({
        messageErr: "Please inter your country !",
      });
    } else if (city.length < 2) {
      this.setState({
        messageErr: "Please inter your city !",
      });
    } else {
      const body = {
        name: fullName,
        email: email,
        number: number,
        city: city,
        country: country,
      };

      this.props.actions.upDateProfile(body).then((res) => {
        console.log(res.data.message);
        if (res.status === 200) {
          this.setState({
            successMsg: res.data.message,
          });
        }
      });
    }
  }

  render() {
    const { fullName, email, number, country, city, messageErr, successMsg } = this.state;
    return (
      <SecondaryTemplate>
        <Grid className={classes.draft} container justify="space-evenly">
          <Grid item xs={12} sm={12} md={3} lg={3} style={{ border: "1px solid", marginTop: "1em" }} >
            <div >
              <IntroBox />
            </div>
            <SideMenu />
          </Grid>
          <Grid xs={12} sm={12} md={8} lg={8} className={classes.select2}>
            <Grid className={classes.Pmain} container>
              <Grid item xs={6} sm={6} md={6} lg={6}>
                <Typography className={classes.text}>My Profile </Typography>
              </Grid>
            </Grid>

            <Grid className={classes.draft} container justify="center">
              <Grid item xs={12} sm={12} md={10} lg={10} className={classes.formGroup}>
                <Grid item xs={12} sm={12}>
                  {successMsg && <Typography>{successMsg}</Typography>}
                </Grid>
                <Grid className={classes.inpBox} container justify="center">
                  <Grid item xs={12} sm={2} md={2} lg={2} className={classes.label}>
                    <label className={classes.labelTe}>Full Name</label>
                  </Grid>
                  <Grid item xs={12} sm={8} md={6} lg={6} className={classes.input}>
                    <input type="text" className={classes.inpFeild} onChange={this.value.bind(this)} value={fullName} name="fullName" placeholder="Full Name" />
                  </Grid>
                </Grid>

                <Grid className={classes.inpBox} container justify="center">
                  <Grid item xs={12} sm={2} md={2} lg={2} className={classes.label}>
                    <label className={classes.labelTe}>Email</label>
                  </Grid>
                  <Grid item xs={12} sm={8} md={6} lg={6} className={classes.input}>
                    <input type="text" className={classes.inpFeild} onChange={this.value.bind(this)} value={email} name="email" placeholder="Email" />
                  </Grid>
                </Grid>
 
                <Grid className={classes.inpBox} container justify="center">
                  <Grid item xs={12} sm={2} md={2} lg={2} className={classes.label}>
                    <label className={classes.labelTe}>Number</label>
                  </Grid>
                  <Grid item xs={12} sm={8} md={6} lg={6} className={classes.input}>
                    <input type="text" className={classes.inpFeild} onChange={this.value.bind(this)} value={number} name="number" placeholder="Number" />
                  </Grid>
                </Grid>

                <Grid className={classes.inpBox} container justify="center">
                  <Grid item xs={12} sm={2} md={2} lg={2} className={classes.label}>
                    <label className={classes.labelTe}>Country</label>
                  </Grid>
                  <Grid item xs={12} sm={8} md={6} lg={6} className={classes.input}>
                    <input type="text" className={classes.inpFeild} onChange={this.value.bind(this)} value={country} name="country" placeholder="Country" />
                  </Grid>
                </Grid>

                <Grid className={classes.inpBox} container justify="center">
                  <Grid item xs={12} sm={2} md={2} lg={2} className={classes.label}>
                    <label className={classes.labelTe}>City</label>
                  </Grid>
                  <Grid item xs={12} sm={8} md={6} lg={6} className={classes.input}>
                    <input type="text" className={classes.inpFeild} onChange={this.value.bind(this)} value={city} name="city" placeholder="City" />
                  </Grid>
                </Grid>

                <Grid className={classes.inpBox} container justify="center">
                  <Grid item xs={12} sm={10} md={8} lg={8} container justify="flex-end" className={classes.input}>
                    {messageErr && <Typography>{messageErr}</Typography>}
                  </Grid>
                </Grid>

                <Grid className={classes.inpBox} container justify="center">
                  <Grid item xs={12} sm={2} md={2} lg={2} className={classes.label}>
                    <label className={classes.labelTe}></label>
                  </Grid>
                  <Grid item xs={12} sm={8} md={6} lg={6} container justify="flex-end" className={classes.input}>
                    <button className={classes.btn} onClick={this.upDate.bind(this)}>
                      Update
                    </button>{" "}
                  </Grid>
                </Grid>

                {/* <Grid className={classes.inpBox} container justify="center">
                  <Grid item xs={12} sm={10} md={7} lg={7} className={classes.input}>
                    <div className={classes.btnBox}>
                      <button className={classes.btn} onClick={this.upDate.bind(this)}>
                        Update
                      </button>
                    </div>
                  </Grid>
                </Grid> */}
              </Grid>
            </Grid>
          </Grid>
          {/* </Grid> */}
          {/* </Grid> */}
        </Grid>
      </SecondaryTemplate>
    );
  }
}

const mapDispatchToProps = (dispatchEvent) => {
  return {
    actions: bindActionCreators(
      {
        upDateProfile,
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

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
