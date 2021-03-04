import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios" ;
import logo from "./logo.png";
import Fade from "@material-ui/core/Fade";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { signInUser } from "../../store/action";
import Backdrop from "@material-ui/core/Backdrop";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { LoginBox } from "../../components/Login/login";
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
function Verication(props) {
  const Classes = useStyles();
  console.log(props);
  useEffect(() => {
    // request(() => {
    const method = "get";
    const headers = {
      Accept: "application/json",
      //   Authorization: token,
    };
    return axios({
      // url: `https://melanatedmonarchy.com/email_verify?verify=${token}`,
      method,
      headers,
    });
    // });
  }, []);

  const [auth, setAuth] = useState(false);
  const [open, setOpen] = React.useState(false);
  const cruntUser = JSON.parse(localStorage.getItem("__user__"));

  const hanldeOpen = () => {
    setOpen(true);
    // props.history.push("/");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <Grid container item sm={8} md={5} lg={4} className={Classes.paper}>
      <Grid item xs={12} md={12}>
        <LoginBox props={props} close={handleClose} />
      </Grid>
    </Grid>
  );

  return (
    <div>
      <body>
        <div className="main">
          <div className="mainContainer;">
            <div className="imgBox">
              <img className="img" src={logo} alt="logo" />
            </div> 

            <p className="text">Your Email Address has been verified!</p>

            <div className="btnBox" onClick={hanldeOpen}>
              <span className="link">LOGIN NOW</span>
            </div>
          </div>
        </div>
        <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" className={Classes.modal} open={open} onClose={handleClose} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{ timeout: 500 }}>
          <Fade in={open}>{body}</Fade>
        </Modal>
      </body>
    </div>
  ); 
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Verication);
