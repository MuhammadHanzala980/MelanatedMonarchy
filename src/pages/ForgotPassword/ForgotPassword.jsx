import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import classes from "./ForgotPassword.module.css";
import { InputWithIcon } from "../../components";

import mail from "../../assets/images/login/mail.svg";

// import { NavLink } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { ForgetPassword } from "../../store/action";

// import { makeStyles } from "@material-ui/core/styles";
import { SecondaryTemplate } from "../../components/Template/Secondary-template";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      validatedEmail: false,
      messageErr: "",
    };
  }

  validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      this.setState({ validatedEmail: true });
    }
  }
  value(e) {
    this.setState({
      [e.target.name]: e.target.value,
      messageErr: "",
    });
    if (e.target.name === "email") {
      this.validateEmail(e.target.value);
    }
  }
  signup() {
    const { validatedEmail, email } = this.state;
    if (!validatedEmail) {
      this.setState({
        messageErr: "Please Enter valid Email address.",
      });
    } else {
      const userdata = {
        email: email,
      };
      this.setState({
        loading: true,
      });
      this.props.actions
        .ForgetPassword(userdata)
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
    const { email, messageErr } = this.state;
    return (
      <SecondaryTemplate>
        <div className={classes.main}>
          <br />
          <br />

          <Grid container justify="center">
            <Grid item xs={12} sm={8} md={7} lg={6}>
              <div className={classes.rightdiv}>
                <p className={classes.changePwdText}>Forgot Password</p>

                <p>Email Address </p>
                <div className={classes.textbox}>
                  <InputWithIcon type="email" placeholder="Example@gmail.com " value={email} name="email" onChange={this.value.bind(this)} ImgLeft={mail} />
                </div>

                <div className={classes.messageErr}>{messageErr && <p>{messageErr}</p>}</div>
                <br />
                <button className={classes.changePwd} onClick={this.signup.bind(this)}>
                  Change Password
                </button>
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
        ForgetPassword,
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

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
