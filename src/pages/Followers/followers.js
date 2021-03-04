import React from "react";
import { Grid, Container } from "@material-ui/core";
import { IntroBox } from "../../components";
import classes from "./followers.module.css";
import { SecondaryTemplate } from "../../components/Template/Secondary-template";
import follow from "../../assets/images/Follow/follow.svg";
import phone from "../../assets/images/Draft/phone.png";
import { NavLink } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";

const Boxes = () => {
  return (
    <>
      <Grid container justify="space-between" className={classes.boxItems}>
        <Grid item sx={12} sm={6} className={classes.box}>
          <div className={classes.followerCard}>
            <div className={classes.imgContainer}>
              <img alt="listin img" className={classes.productImg} src={phone} />
            </div>
            <div className={classes.cardContainer}>
              <div className={classes.titleBox}>
                {" "}
                <span className={classes.title}>Ronnai Murphay</span>
              </div>
              <div className={classes.cardContent}>
                <div>
                  <button className={classes.follow}>Follow</button>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item sx={12} sm={6} className={classes.box}>
          <div className={classes.followerCard}>
            <div className={classes.imgContainer}>
              <img alt="listin img" className={classes.productImg} src={phone} />
            </div>
            <div className={classes.cardContainer}>
              <div className={classes.titleBox}>
                {" "}
                <span className={classes.title}>Ronnai Murphay</span>
              </div>
              <div className={classes.cardContent}>
                <div>
                  <button className={classes.follow}>Follow</button>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item sx={12} sm={6} className={classes.box}>
          <div className={classes.followerCard}>
            <div className={classes.imgContainer}>
              <img alt="listin img" className={classes.productImg} src={phone} />
            </div>
            <div className={classes.cardContainer}>
              <div className={classes.titleBox}>
                {" "}
                <span className={classes.title}>Ronnai Murphay</span>
              </div>
              <div className={classes.cardContent}>
                <div>
                  <button className={classes.follow}>Follow</button>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

const followers = () => {
  return (
    <>
      <SecondaryTemplate>
        <Container className={classes.Application}>
          <Grid container justify="space-around" className={classes.divHeader}>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <div style={{ border: "1px solid" }}>
                <IntroBox />
              </div>
              <Navigation />
            </Grid>

            <Grid item sx={12} sm={8} className={classes.itemConatiner}>
              <Container>
                <Grid direction="column" justify="center">
                  <Grid item xs={12} className={classes.listingHeader}>
                    <div className={classes.heading}>
                      <div className={classes.headingContent + " " + classes.selected}>
                        <span className={classes.headingText}>Followers</span>
                      </div>
                      <div className={classes.badge}>
                        <span>12</span>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div>
                      <Boxes />
                    </div>
                  </Grid>
                </Grid>
              </Container>
            </Grid>
          </Grid>
        </Container>
      </SecondaryTemplate>
    </>
  );
};

export default followers;
