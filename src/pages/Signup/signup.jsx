import React, { Component, useEffect } from "react";
import { Footer } from "../../components/Template/Primary-template/footer";
import Grid from "@material-ui/core/Grid";
import logo from "../../assets/images/login/melanated.png";
import classes from "./signup.module.css";
import { InputWithIcon, InputPwdWithIcon } from "../../components";
import Login from "../../components/Login/login";
import SimpleHeader from "../../components/Template/Primary-template/header/SimpleHeader";
import mail from "../../assets/images/login/mail.svg";
import user from "../../assets/images/login/user.png";
import eye from "../../assets/images/login/eye.svg";
import pwd from "../../assets/images/login/password.svg";
import fblogin from "../../assets/images/login/fb_login.svg";
import googlelogin from "../../assets/images/login/google_login.svg";
import { NavLink } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { signUpUser } from "../../store/action";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Palau",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#E7C68E",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    // width: '100%'
  },
  heading: {
    color: "black",
  },
  message: {
    color: "black",
  },
  btn: {
    color: "black",
    width: "100%",
    padding: "10px",
    backgroundColor: "#E7C68E",

    border: "2px solid #000000bf",
    fontSize: "17px",
    outline: "none",
    borderRadius: "6px",
    fontWeight: "600",
    cursor: "pointer",
  },
}));

const Model = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(props.openModel);

  useEffect(() => {
    setOpen(props.openModel);
  }, [props]);

  const handleClose = () => {
    setOpen(false);
    props.history.push("/");
  };

  const body = (
    <Grid container item xs={11} sm={4} md={4} className={classes.paper}>
      <div>
        <h2 className={classes.heading}>Thanks For Signup With Melanated Monarchy! </h2>
        <p className={classes.message}>Check your email to complete signup process</p>
        <button className={classes.btn} onClick={handleClose}>
          Ok
        </button>
      </div>
    </Grid>
  );

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>{body}</Fade>
      </Modal>
    </div>
  );
};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmpwd: "",
      number: "",
      messageErr: "",
      validatedEmail: false,
      loading: false,
      open: false,
      city: "",
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

  selectState() {}
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
    const { name, email, password, confirmpwd, validatedEmail, number, user_type } = this.state;
    if (name.length < 1) {
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
    } else if (password.length < 8) {
      console.log("9876543");
      this.setState({
        messageErr: "Your password must be at least 8 characters long !",
      });
    } else if (confirmpwd !== password) {
      console.log("9876543");

      this.setState({
        messageErr: "Password does not match",
      });
    } else {
      const userdata = {
        name,
        email,
        password,
        confirmpwd,
        number,
        user_type,
        open: false,
      };
      this.setState({
        loading: true,
      });

      this.props.actions
        .signUpUser(userdata)
        .then((res) => {
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
    const { name, email, password, confirmpwd, number, messageErr, city } = this.state;
    return (
      <div>
        <SimpleHeader />
        <br />
        <br />
        <Grid container>
          <Grid className={classes.logo} item xs={12} sm={4} md={5} lg={6}>
            <img alt={logo} src={logo} />
            <p className={classes.melanated}>
              MELANATED
              <br />
              MONARCHY
            </p>
          </Grid>
          <Grid item xs={12} sm={8} md={7} lg={6}>
            <div className={classes.rightdiv}>
              <p className={classes.logintext}>SIGNUP</p>
              <p>Full Name</p>
              <div className={classes.textbox}>
                <InputWithIcon color="black" value={name} type="text" name="name" onChange={this.value.bind(this)} placeholder="Ex Brandon Baker" ImgLeft={user} />
              </div>
              <p>Email</p>
              <div className={classes.textbox}>
                <InputWithIcon color="black" value={email} type="text" name="email" onChange={this.value.bind(this)} placeholder="Ex BrandonBaker@gmail.com" ImgLeft={mail} />
              </div>
              <div>
                <Grid container justify="space-between">
                  <Grid item md={6}>
                    <p>Country</p>

                    <div className={classes.textbox}>
                      <InputWithIcon color="black" type="text" value="United State" onChange={this.value.bind(this)} />
                    </div>
                  </Grid>
                  <Grid item md={6}>
                    <p>State</p>

                    <div className={classes.textbox}>
                      <Select native defaultValue="none" fullWidth onChange={this.selectState.bind(this)} className={classes.select}>
                        <option value="none" disabled>
                          Select a state
                        </option>
                        {states.map((state, key) => {
                          return (
                            <option key={key} value={state} className={classes.list}>
                              {state}
                            </option>
                          );
                        })}
                      </Select>
                    </div>
                  </Grid>
                </Grid>
              </div>
              <p>City</p>
              <div className={classes.textbox}>
                <InputWithIcon color="black" value={city} type="text" name="city" onChange={this.value.bind(this)} placeholder="Ex New york" />
              </div>
              <p>Number</p>
              <div className={classes.textbox}>
                <PhoneInput disableDropdown country={"us"} name="number" value={number} onChange={(phone) => this.setState({ number: phone })} className={classes.PhoneInput} />
              </div>
              <p>Password</p>
              <div className={classes.textbox}>
                <InputPwdWithIcon type="password" placeholder="Ex Abcd123eg" value={password} name="password" onChange={this.value.bind(this)} ImgLeft={pwd} ImgRight={eye} />
              </div>
              <p>Password</p>
              <div className={classes.textbox}>
                <InputPwdWithIcon type="password" placeholder="Ex Abcd123eg" value={confirmpwd} name="confirmpwd" onChange={this.value.bind(this)} ImgLeft={pwd} ImgRight={eye} />
              </div>

              <div className={classes.messageErr}>{messageErr && <p>{messageErr}</p>}</div>

              <NavLink to="#">
                <button className={classes.signup} onClick={this.signup.bind(this)}>
                  SignUp
                </button>
              </NavLink>
              <Grid className={classes.bottomgrid} container>
                <Grid item className={classes.middleborder} xs={6}>
                  <p>SignUp with</p>
                  <Grid container>
                    <Grid item xs={12} sm={5}>
                      <img alt="fb" className={classes.loginicons} src={fblogin} />
                    </Grid>
                    <Grid item xs={12} sm>
                      <img alt="google" className={classes.loginicons} src={googlelogin} />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item className={classes.account} xs={6}>
                  <p>Have already account?</p>

                  <Login text={<h4>Login</h4>} />
                </Grid>
              </Grid>
              <Model openModel={this.state.open} history={this.props.history} />
            </div>
          </Grid>
        </Grid>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatchEvent) => {
  return {
    actions: bindActionCreators(
      {
        signUpUser,
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
