import { Typography, Grid } from "@material-ui/core";
import React from "react";
import classes from "./Draft.module.css";
import person from "../../assets/images/Allposting/person.png";
import likes from "../../assets/images/Allposting/likes.svg";
// import { NavLink, Link } from "react-router-dom";
import location from "../../assets/images/Allposting/location.svg";
import share from "../../assets/images/Allposting/share.svg";
import SideMenu from "../../components/Navigation/Navigation";
import { Box } from "../../components/ListingBoxNo/Box";
import { SecondaryTemplate } from "../../components/Template/Secondary-template";
import Img from "../../assets/images/Draft/phone.png";
import { IntroBox } from "../../components";

const Draft = () => {
  return (
    <>
      <SecondaryTemplate>
        <Grid className={classes.draft} container justify="space-evenly">
          <Grid item xs={12} sm={12} md={3} lg={3} style={{ border: "1px solid", marginTop: "1em" }}>
            <div >
              <IntroBox />
            </div>
            <SideMenu />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8} className={classes.select2}>
            <Grid className={classes.Pmain} container>
              <Grid item xs={6} sm={6} md={6} lg={6}>
                <Typography className={classes.text}>
                  Draft <Box num={"02"} />
                </Typography>
              </Grid>
            </Grid>

            <Grid className={classes.draft} container>
              <Grid item xs={12} sm={12} md={6}>
                <div className={classes.Bidding}>
                  <Grid container xs={12}>
                    <Grid item xs={12} className={classes.draftDate}>
                      <span>
                        {" "}
                        Date : <b>28 Aug 2020 13:46</b>{" "}
                      </span>
                    </Grid>
                    <Grid container xs={12} className={classes.statusContainer}>
                      <Grid item>
                        <div>Status</div>
                        <b>Draft</b>
                      </Grid>
                      <Grid item className={classes.follow}>
                        <button className={classes.publish}>Publish</button>
                      </Grid>
                    </Grid>
                  </Grid>
                  <img alt={Img} src={Img} className={classes.img} />
                  <Grid container xs={12}>
                    <Grid item xs={6}>
                      <h5 className={classes.price}>
                        Iphone7s 124gb
                        <br></br>
                        <b>Rs. 77,900/-</b>
                      </h5>
                    </Grid>
                    <Grid item xs={6}>
                      <img className={classes.heart} alt="heart" src={likes} />
                    </Grid>
                  </Grid>
                </div>
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <div className={classes.Bidding}>
                  <Grid container xs={12}>
                    <Grid item xs={12} className={classes.draftDate}>
                      <span>
                        {" "}
                        Date : <b>28 Aug 2020 13:46</b>{" "}
                      </span>
                    </Grid>
                    <Grid container xs={12} className={classes.statusContainer}>
                      <Grid item>
                        <div>Status</div>
                        <b>Draft</b>
                      </Grid>
                      <Grid item className={classes.follow}>
                        <button className={classes.publish}>Publish</button>
                      </Grid>
                    </Grid>
                  </Grid>
                  <img alt={Img} src={Img} className={classes.img} />
                  <Grid container xs={12}>
                    <Grid item xs={6}>
                      <h5 className={classes.price}>
                        Iphone7s 124gb
                        <br></br>
                        <b>Rs. 77,900/-</b>
                      </h5>
                    </Grid>
                    <Grid item xs={6}>
                      <img className={classes.heart} alt="heart" src={likes} />
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </SecondaryTemplate>
    </>
  );
};
export default Draft;
