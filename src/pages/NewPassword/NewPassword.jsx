import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import classes from "./NewPassword.module.css";
import { InputPwdWithIcon } from "../../components";

import eye from "../../assets/images/login/eye.svg";
import pwd from "../../assets/images/login/password.svg";

import { NavLink } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { newPassword } from "../../store/action";

// import { makeStyles } from "@material-ui/core/styles";
import { SecondaryTemplate } from "../../components/Template/Secondary-template";

class NewPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPwd: "",
      password: "",
      confirmpwd: "",
      messageErr: "",
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

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
  signup() {
    const { password, confirmpwd, newPwd } = this.state;
    if (password.length < 8) {
      console.log("9876543");
      this.setState({
        messageErr: "Your password must be at least 8 characters long !",
      });
    } else if (newPwd.length < 8) {
      console.log("9876543");
      this.setState({
        messageErr: "Your New password must be at least 8 characters long",
      });
    } else if (confirmpwd !== newPwd) {
      console.log("9876543");
      this.setState({
        messageErr: "Password does not match",
      });
    } else {
      const userdata = {
        oldpassword: password,
        newpassword: confirmpwd,
      };
      this.setState({
        loading: true,
      });

      this.props.actions
        .NewPassword(userdata)
        .then((res) => {
          console.log(res);
          if (res.data.message === "User Registered") {
            this.setState({
              open: true,
            });
          } else {
            this.setState({
              loading: false,
              messageErr: res.data.message,
            });
          }
        })
        .catch((err) => console.log(err));
    }
  }
  render() {
    const { password, newPwd, confirmpwd, messageErr } = this.state;
    return (
      <SecondaryTemplate>
        <div className={classes.main}>
          <br />
          <br />

          <Grid container justify="center">
            <Grid item xs={12} sm={8} md={7} lg={6}>
              <div className={classes.rightdiv}>
                <p className={classes.changePwdText}>New Password</p>

                <p>New Password</p>
                <div className={classes.textbox}>
                  <InputPwdWithIcon type="password" placeholder="Ex Abcd123eg" value={newPwd} name="newPwd" onChange={this.value.bind(this)} ImgLeft={pwd} ImgRight={eye} />
                </div>

                <p>Confirm Password</p>
                <div className={classes.textbox}>
                  <InputPwdWithIcon type="password" placeholder="Ex Abcd123eg" value={confirmpwd} name="confirmpwd" onChange={this.value.bind(this)} ImgLeft={pwd} ImgRight={eye} />
                </div>

                <div className={classes.messageErr}>{messageErr && <p>{messageErr}</p>}</div>

                <NavLink to="#">
                  <button className={classes.changePwd} onClick={this.signup.bind(this)}>
                    Change Password
                  </button>
                </NavLink>
              </div>
            </Grid>
          </Grid>
        </div>
      </SecondaryTemplate>
    );
  }
}

const mapDispatchToProps = (dispatchEvent) => {
  return {
    actions: bindActionCreators(
      {
        NewPassword,
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

export default connect(mapStateToProps, mapDispatchToProps)(NewPassword);
