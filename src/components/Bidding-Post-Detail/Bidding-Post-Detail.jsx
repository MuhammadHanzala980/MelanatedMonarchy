import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { InputWithIcon } from "../Search";
import Classes from "./Bidding-Post-detail.module.css";
import Grid from "@material-ui/core/Grid";
import password from "../../assets/images/login/password.svg";
import mail from "../../assets/images/login/mail.svg";
import fblogin from "../../assets/images/login/fb_login.svg";
import googlelogin from "../../assets/images/login/google_login.svg";
import Band from "../../assets/images/bidding/Band.png";
import band2 from "../../assets/images/bidding/band2.png";
import bheart from "../../assets/images/bidding/bheart.svg";
import black from "../../assets/images/bidding/black.svg";
import red from "../../assets/images/bidding/red.svg";
import grey from "../../assets/images/bidding/grey.svg";
import blue from "../../assets/images/bidding/blue.svg";
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import { NavLink } from "react-router-dom";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "38%",
    backgroundColor: "#E7C68E",
    color: "black",
    padding: theme.spacing(2, 4, 3),
  },
  [theme.breakpoints.down("sm")]: {
    paper: {
      width: "62%",
    },
  },
}));

const PostDetail = ({ text }) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [Email, setEmail] = React.useState("");
  const [Password, setPassword] = React.useState("");
  console.log(Email);
  console.log(Password);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
    <Grid container>
<Grid container xs={5} className={Classes.div}>
  <Grid item xs={2} className={Classes.image}>
  <img className={Classes.image} src={band2}/>
  </Grid>
  <Grid item xs={12} >
  <img className={Classes.img} src={Band}/>
  </Grid>
  <Grid container>
    <Grid item xs={6} className={Classes.btnbox}>
      <div className={Classes.btn}>
         Brand New
      </div>
    </Grid>
    <Grid item>
      <img src={bheart}/>
    </Grid>
    <Grid item>
      <img src={black}/>
    </Grid>
  </Grid>
  <Grid container className={Classes.textborder}>
    <Grid item className={Classes.detail}>
    Outdoor riding patella belt, shock-absorbing,
breathable and pressurized protective
patella basketball protective gear
wear-resistant sports knee pads
    </Grid>
  </Grid>
  <Grid container>
    <Grid item>
      <span>Seller :</span><span><b>Andreea Wagner</b></span>
    </Grid>
  </Grid>
  </Grid>
  <Grid container xs={6} >
  <Grid container xs={12} className={Classes.box}>
   <Grid container className={Classes.textborder}>
   <Grid item  className={Classes.text}>
     <LocalShippingIcon className={Classes.icon}/>
      <b>Shipping</b>
    </Grid>
    </Grid>
    <Grid container className={Classes.textborder}>
   <Grid item xs={6}>
      Shipping
    </Grid>
    <Grid item xs={6} className={Classes.right} >
      Free
    </Grid>
    <Grid item xs={6}>
      Est Delivery
    </Grid>
    <Grid item xs={6} className={Classes.right}>
     Aug20,2020
    </Grid>
    <Grid item xs={12} className={Classes.text}>
    <b>Detail</b> 
    </Grid>
    </Grid>
    <Grid container>
   <Grid item xs={6}>
     Color
    </Grid>
    <Grid item xs={6}>
    <img src={red}/>
    <img src={blue}/>
    <img src={grey}/>
    </Grid>
    <Grid container className={Classes.textborder}>
   <Grid item xs={12} className={Classes.text}>
    Description
    </Grid>
    </Grid>
    <Grid container className={Classes.box3}>
<Grid item className={Classes.detail}>
Main material: diving material

Applicable people: Adult

Applicable sports: mountaineering

Product specifications: M, L

The product is suitable for basketball,
football, mountaineering, cycling, sliding,
dancing, running and other sports

Packing: pe band2

Product performance:

1. Breathable and dehumidifying can
maintain a comfortable effect

2. Prevent sports injuries
</Grid>
   </Grid>
  
  </Grid>
  </Grid>
  <Grid item>
  <b>Buyer Protection</b> 
   </Grid>
</Grid>
 
</Grid>
    </div>
  );

  return (
    <>
      <span className={Classes.text} type="button" onClick={handleOpen}>
        {text}
      </span>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </>
  );
};
export { PostDetail };
