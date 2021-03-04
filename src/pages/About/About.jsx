import React, { Component } from "react";
import classes from "./About.module.css";
import { Grid } from "@material-ui/core";
import { PrimaryTemplate } from "../../components";
import logo from "../../assets/images/header/logo.png";
import { BiSupport } from "react-icons/bi";
import { IconContext } from "react-icons";
class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PrimaryTemplate history={this.props.history}>
        <Grid container>
          <Grid item xs={12} sm={12} container justify="center">
            <Grid item xs={12}>
              <h1 style={{ textAlign: "center", textDecoration: "underline", padding: "20px 0px 0px", borderTop: "solid 1px" }}>About</h1>
            </Grid>
            <Grid item xs={12} sm={12}>
              <h3 style={{ padding: "20px 0px 0px", fontWeight: "400", fontSize: "36px" }}>What is Lorem Ipsum?</h3>
            </Grid>
            <Grid item xs={11} sm={11} container direction="row" alignItems="center" justify="space-between">
              <Grid item xs={12} sm={12} md={5}>
                <p className={classes.text}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                  Aldus PageMaker including versions of Lorem Ipsum.
                </p>

                <p className={classes.text}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into.
                </p>
              </Grid>
              <Grid item xs={12} sm={12} md={7} className={classes.imgContainer}>
                <img src={logo} alt="logo" className={classes.img} />
              </Grid>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12} sm={12} container justify="center">
              <Grid item xs={12}>
                <h1 style={{ textAlign: "center", textDecoration: "underline", padding: "20px 0px 0px", borderTop: "solid 1px" }}>Why Choose Us</h1>
                <p className={classes.text} style={{ textAlign: "center" }}>
                  Lorem Ipsum is simply dummy text of the printing and type setting industry. It has survived not only <br />
                  dummy text of the five centuries, but also the leap into.{" "}
                </p>
              </Grid>

              <Grid item xs={12} sm={12} container justify="space-evenly">
                <Grid item xs={12} sm={4} md={3} container direction="column" alignItems="center" className={classes.card}>
                  <div className={classes.iconBox}>
                    <IconContext.Provider value={{ color: "#e0bd85", size: "2.3em" }}>
                      <BiSupport />
                    </IconContext.Provider>
                  </div>
                  <h2 style={{ color: "black" }}>24/7 Hours Support</h2>
                  <p className={classes.cardText}>We support the service providers to get registered with an easy process. they can contact us any time with any issue</p>
                </Grid>
                <Grid item xs={12} sm={4} md={3} container direction="column" alignItems="center" className={classes.card}>
                  <div className={classes.iconBox}>
                    <IconContext.Provider value={{ color: "#e0bd85", size: "2.3em" }}>
                      <BiSupport />
                    </IconContext.Provider>
                  </div>
                  <h2 style={{ color: "black" }}>24/7 Hours Support</h2>
                  <p className={classes.cardText}>We support the service providers to get registered with an easy process. they can contact us any time with any issue</p>
                </Grid>
                <Grid item xs={12} sm={4} md={3} container direction="column" alignItems="center" className={classes.card}>
                  <div className={classes.iconBox}>
                    <IconContext.Provider value={{ color: "#e0bd85", size: "2.3em" }}>
                      <BiSupport />
                    </IconContext.Provider>
                  </div>
                  <h2 style={{ color: "black" }}>24/7 Hours Support</h2>
                  <p className={classes.cardText}>We support the service providers to get registered with an easy process. they can contact us any time with any issue</p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </PrimaryTemplate>
    );
  }
}

export default About;
