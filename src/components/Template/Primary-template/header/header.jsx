import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import logo from "../../../../assets/images/header/logo.png";
import Plus from "../../../../assets/images/header/Plus.svg";
import Search from "../../../../assets/images/header/search.svg";
import { Select, DropDownMenu } from "../../../select";
import { Location } from "../../../Location";
import { InputWithIcon } from "../../../Search";
import Login from "../../../Login/login";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import classes from "./header.module.css";
import { LoginBox } from "../../../Login/login";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import { signInUser } from "../../../../store/action";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";

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
}));

const Header = (props) => {
  const Classes = useStyles();
  const [searchInput, setsearchInput] = useState("");
  const [auth, setAuth] = useState(false);
  const [userName, setUserName] = useState("");
  const [open, setOpen] = React.useState(false);
  const cruntUser = JSON.parse(localStorage.getItem("__user__"));

  function handleChange() {}
  useEffect(() => {
    if (cruntUser === null) {
      setAuth(false);
    } else {
      setAuth(true);
      setUserName(cruntUser.name);
    }
  }, [cruntUser]);

  const handleOpen = () => {
    if (auth) {
      props.history.push("/create_listing_1");
    } else {
      setOpen(true);
    }
  };
 
  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <Grid container item sm={8} md={5} lg={4} className={Classes.paper}>
      <Grid item xs={12} md={12}>
        <LoginBox close={handleClose} props={props} />
      </Grid>
    </Grid>
  );
 
  return (
    <>
      <Grid className={classes.main} container spacing={1}>
        <Grid item xs={3} sm={5} md={7} lg={7}>
          <NavLink to="/">
            <img alt={logo} className={classes.image} src={logo} />
          </NavLink>
        </Grid>
        <Grid item xs={5} sm={4} md={3} lg={2}>
          {/* <NavLink to="/create_listing_1"> */}
          <div className={classes.createlisting} onClick={handleOpen}>
            <h4 className={classes.createtext}>Post An Item</h4>
            <img alt={Plus} className={classes.plus} src={Plus} />
          </div>
          {/* </NavLink> */}
        </Grid>
        <Grid item xs={4} sm={3} md={2} lg={3}>
          {auth ? (
            <>
              <h4 className={classes.signup}>
                <DropDownMenu userName={userName} setAuth={setAuth} onClick={handleClose} />
              </h4>{" "}
            </>
          ) : (
            <>
              <h4 className={classes.signup}>
                <NavLink style={{ textDecoration: "none", color: "#E7C68E" }} to="/signup">
                  <span className={classes.loginsignup}> SignUp </span>
                </NavLink>
                <Login text="Login" />
              </h4>
            </>
          )}
        </Grid>
      </Grid>
      <br />
      <Grid className={classes.maningrid} container>
        <Grid className={classes.grid} item xs={11} sm={2} md={2}>
          <Select onClick={handleChange} />
        </Grid>
        <Grid className={classes.grid} item xs={11} sm={5} md={6}>
          <Grid container>
            <Grid item container xs={4} sm={4} md={12}>
              <Location onClick={handleChange} />
              {/* </Grid> */}
              {/* <Grid item xs={8} sm={8} md={9}> */}
              <InputWithIcon onChange={setsearchInput} color="#E7C68E" type="text" placeholder="Search..." ImgLeft={Search} />
            </Grid>
          </Grid>
        </Grid>
        <Hidden only="xs">
          <Grid item xs={1}></Grid>
        </Hidden>
        {/* <Grid onClick={goforbidding} item xs={11} sm={3} md={2}>
          <div className={classes.createlisting} onClick={handleOpen}>
            <h4 className={classes.createtext}>Create Bidding</h4>
            <img alt={Plus} className={classes.plus} src={Plus} />
          </div>
        </Grid> */}
      </Grid>

      <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" className={Classes.modal} open={open} onClose={handleClose} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{ timeout: 500 }}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
