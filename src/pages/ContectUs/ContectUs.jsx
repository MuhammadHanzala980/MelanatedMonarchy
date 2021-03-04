import React, { Component } from "react";
import classes from "./ContectUs.module.css";
import { PrimaryTemplate } from "../../components";
import Grid from "@material-ui/core/Grid";
import { InputWithIcon, InputPwdWithIcon } from "../../components";
import mail from "../../assets/images/login/mail.svg";
import user from "../../assets/images/login/user.png";
import phone from "../../assets/images/login/phone.png";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IconContext } from "react-icons";
import { NavLink } from "react-router-dom";

class ContectUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
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
  render() {
    const { name, email } = this.state;
    return (
      <PrimaryTemplate>
        <Grid container justify="center">
          <Grid item xs={12} sm={12}>
            <h1 style={{ textAlign: "center", textDecoration: "underline", padding: "20px 0px 0px", }}>Contect Us</h1>
          </Grid>
          <Grid item xs={12} sm={12} md={10} container justify="space-evenly">
            <Grid item xs={12} sm={12} md={6} className={classes.contectForm}>
              <Grid item xs={12}>
                <h1 className={classes.heading}>Get in touch</h1>
              </Grid>
              <Grid item xs={12}>
                <p className={classes.label}>Full Name</p>
                <div className={classes.textbox}>
                  <InputWithIcon color="black" value={name} type="text" name="name" onChange={this.value.bind(this)} placeholder="Ex Brandon Baker" ImgLeft={user} />
                </div>
                <p className={classes.label}>Email</p>
                <div className={classes.textbox}>
                  <InputWithIcon color="black" value={email} type="email" name="email" onChange={this.value.bind(this)} placeholder="Ex BrandonBaker@gmail.com" ImgLeft={mail} />
                </div>

                <p className={classes.label}>Phone Number</p>
                <div className={classes.textbox}>
                  <InputWithIcon color="black" value={email} type="text" name="email" onChange={this.value.bind(this)} placeholder="Ex +123 XXX XXXX" ImgLeft={phone} />
                </div>
                <p className={classes.label}>Message</p>

                <div className={classes.textbox}>
                  <textarea className={classes.textarea} placeholder="Type Message Here" />
                </div>

                <div className={classes.textbox}>
                  <button className={classes.btn} >Send Message</button>
                </div>
              </Grid>
            </Grid>
{/* 
            <Grid item xs={12} sm={12} md={5} className={classes.quickContact}>
              <Grid item xs={12}>
                <h1 className={classes.heading2}>Quick contact</h1>
              </Grid>
              <Grid item xs={12} sm={12}>
                <p>
                  Feel free to send us an email with any questions or help needed. Its a great pleasure for us to help you with that. Sometimes we get a large number of emails from
                  our users so, it can take a while to reply in time. Thanks in advance for your patience.
                </p>
              </Grid>
              <Grid item xs={12} sm={12}>
                <IconContext.Provider value={{ color: "#E7C68E", size: "1.4em" }}>
                  <ImLocation2 />
                </IconContext.Provider>
                <span style={{ verticalAlign: "super" }}> Mr Smith. 132, My Street, Kingston, New York 121.</span>
              </Grid>

              <Grid item xs={12} sm={12}>
                <IconContext.Provider value={{ color: "#E7C68E", size: "1.4em" }}>
                  <MdEmail />
                </IconContext.Provider>
                <span style={{ verticalAlign: "super" }}> MelanatedSupportExample@gmail.com</span>
              </Grid>

              <Grid item xs={12} sm={12}>
                <IconContext.Provider value={{ color: "#E7C68E", size: "1.4em" }}>
                  <FiPhone />
                </IconContext.Provider>
                <span style={{ verticalAlign: "super" }}> +92 763420167.</span>
              </Grid>
            </Grid>
          */}
          </Grid>
        </Grid>
      </PrimaryTemplate>
    );
  }
}

export default ContectUs;
