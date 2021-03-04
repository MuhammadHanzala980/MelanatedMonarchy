import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { InputWithIcon, InputPwdWithIcon } from "../Search";
import Classes from "./login.module.css";
import Grid from "@material-ui/core/Grid";
import pwd from "../../assets/images/login/password.svg";
import mail from "../../assets/images/login/mail.svg";
import fblogin from "../../assets/images/login/fb_login.svg";
import googlelogin from "../../assets/images/login/google_login.svg";
import eye from "../../assets/images/login/eye.svg";
import { NavLink } from "react-router-dom";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { signInUser } from "../../store/action";
// import jwt from "jsonwebtoken";

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
  },
}));

class LoginBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      messageErr: "",
    };
  }

  value(e) {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
      messageErr: "",
    });
  }

  signin(event) {
    // var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNjExODI1MDcwLCJleHAiOjE2MTI2ODkwNzB9.NOIfR8P8d2Md1CDGZZIEWo5V-zw6Nka6yZ36W9nLvRw";
    event.preventDefault();
    const { email, password } = this.state;
    if (email.length < 2) {
      this.setState({
        messageErr: "Please Enter valid Email address.",
      });
    } else if (password.length < 8) {
      this.setState({
        messageErr: "Enter your password.",
      });
    } else {
      const userdata = { password, email };
      const props = this.props;
      props.props.actions
        .signInUser(userdata)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            props.close();
            localStorage.setItem("__user_token__", JSON.stringify(res.data.token));
            localStorage.setItem("__user__", JSON.stringify(res.data.user));
            // window.location.reload();
            props.props.history.push("/");
            // var decoded = jwt.decode(res.data.token);
            // console.log(decoded)

            // jwt.verify(res.data.token, "melanatedsecretpassword", function (err, decoded) {
            // });
          } else {
            this.setState({
              messageErr: "Password is incoorect. kindly check and enter again.",
            });
          }

          // this.props.history.push("/");
          // if (res.data.user !== undefined) {
          // } else {
          //   this.setState({
          //     messageErr: res.data.message,
          //   });
          // }
        })
        .catch((err) => {
          console.log(err);
          this.setState({
            messageErr: "Password is incoorect. kindly check and enter again.",
          });
        });
    }
  }

  render() {
    const { email, password, messageErr } = this.state;
    return (
      <div>
        <p className={Classes.logintext}>LOGIN</p>
        <p className={Classes.heading}>Email</p>
        <form onSubmit={this.signin.bind(this)}>
          <div className={Classes.textbox}>
            <InputWithIcon color="black" name="email" value={email} type="text" onChange={this.value.bind(this)} placeholder="Email" ImgLeft={mail} />
          </div>
          <p className={Classes.heading}>Password</p>
          <div className={Classes.textbox}>
            <InputPwdWithIcon name="password" placeholder="Password" value={password} onChange={this.value.bind(this)} ImgLeft={pwd} ImgRight={eye} />
          </div>
          <div className={Classes.messageErr}>{messageErr && <p>{messageErr}</p>} </div>
          <Grid className={Classes.Logindiv} container>
            <Grid item xs={6}>
              <NavLink to="forgot-password" className={Classes.link}>
                <h4 className={Classes.forgot}>Forgot Password?</h4>
              </NavLink>
            </Grid>
            <Grid item xs={6}>
              <button Classes={Classes.loginbutton} onClick={this.signin.bind(this)}>
                Login
              </button>
            </Grid>
          </Grid>
          <Grid className={Classes.bottomgrid} container>
            <Grid item className={Classes.middleborder} xs={6}>
              <p>Sign up with</p>
              <Grid container direction="row">
                <div style={{ marginRight: "5px" }}>
                  <img alt="fb" className={Classes.loginicons} src={fblogin} />
                </div>
                <div>
                  <img alt="google" className={Classes.loginicons} src={googlelogin} />
                </div>
              </Grid>
            </Grid>
            <Grid container justify="flex-end" item className={Classes.account} xs={5}>
              <p style={{ textDecoration: "none", color: "black" }}>Need an account?</p>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                onClick={() => {
                  const props = this.props;
                  props.close();
                }}
                to="/signup"
              >
                <h4 className={Classes.signup}>SignUp here</h4>
              </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

const Login = (props) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <Grid container item xs={11} sm={8} md={5} lg={4} className={classes.paper}>
      <Grid item xs={12} md={12}>
        <LoginBox props={props} close={handleClose} />
      </Grid>
    </Grid>
  );

  return (
    <>
      <span className={Classes.text} type="button" onClick={handleOpen}>
        {props.text}
      </span>

      <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" className={classes.modal} open={open} onClose={handleClose} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{ timeout: 500 }}>
        <Fade in={open}>{body}</Fade>
      </Modal>
    </>
  );
};

const mapDispatchToProps = (dispatchEvent) => {
  return {
    actions: bindActionCreators(
      {
        signInUser,
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
export { LoginBox };
