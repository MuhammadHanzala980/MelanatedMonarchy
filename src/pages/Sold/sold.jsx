import React from "react";
import { Typography, Grid, Container } from "@material-ui/core";
import { IntroBox } from "../../components";
import classes from "./sold.module.css";
import { SecondaryTemplate } from "../../components/Template/Secondary-template";
import follow from "../../assets/images/Follow/follow.svg";
import phone from "../../assets/images/Draft/phone.png";
import { NavLink } from "react-router-dom";

const Boxes = () => {
  return (
    <>
      <Grid container justify="space-between" className={classes.boxItems}>
        <Grid item sx={12} sm={6} className={classes.box}>
          <div>
            <div className={classes.imgContainer}>
              <img alt="listin img" className={classes.productImg} src={phone} />
            </div>
            <div>
              <div className={classes.title}>Iphone 7s 124GB</div>
              <div className={classes.price}>Rs. 89,999 </div>
            </div>
          </div>
        </Grid>
        <Grid item sx={12} sm={6} className={classes.box}>
          <div>
            <div className={classes.imgContainer}>
              <img alt="listin img" className={classes.productImg} src={phone} />
            </div>
            <div>
              <div className={classes.title}>Iphone 7s 124GB</div>
              <div className={classes.price}>Rs. 89,999 </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

const sold = () => {
  return (
    <>
      <SecondaryTemplate>
        <Container className={classes.Application}>
          <Grid container justify="space-evenly" className={classes.divHeader}>
            <Grid item xs={12} sm={12} md={3} lg={3} className={classes.sideMenu}>
              <div className={classes.IntroBox}>
                <IntroBox />
              </div>
              <div className={classes.list}>
                <Grid item xs={6} sm={6} md={12} lg={12}>
                  <NavLink className={classes.link} to="/listing">
                    <div className={classes.listItem}>
                      <div className={classes.listContent + " " + classes.selected}>
                        <span className={classes.listIcon}>
                          <img className={classes.icon} src={follow} />
                        </span>
                        <span className={classes.listText}>Listing</span>
                      </div>
                    </div>
                  </NavLink>
                </Grid>
                <Grid item xs={6} sm={6} md={12} lg={12}></Grid>

                <NavLink className={classes.link} to="/listing">
                  <div className={classes.listItem}>
                    <div className={classes.listContent}>
                      <span className={classes.listIcon}>
                        <img className={classes.icon} src={follow} />
                      </span>
                      <span className={classes.listText}>Sold</span>
                    </div>
                    <div className={classes.badge}>
                      <span>02</span>
                    </div>
                  </div>
                </NavLink>

                <Grid item xs={6} sm={6} md={12} lg={12}></Grid>
                <NavLink className={classes.link} to="/rating">
                  <div className={classes.listItem}>
                    <div className={classes.listContent}>
                      <span className={classes.listIcon}>
                        <img className={classes.icon} src={follow} />
                      </span>
                      <span className={classes.listText}>Rating</span>
                    </div>
                  </div>
                </NavLink>

                <Grid item xs={6} sm={6} md={12} lg={12}></Grid>
                <NavLink className={classes.link} to="/followers">
                  <div className={classes.listItem}>
                    <div className={classes.listContent}>
                      <span className={classes.listIcon}>
                        <img className={classes.icon} src={follow} />
                      </span>
                      <span className={classes.listText}>Followers</span>
                    </div>
                    <div className={classes.badge}>
                      <span>2K</span>
                    </div>
                  </div>
                </NavLink>

                <Grid item xs={6} sm={6} md={12} lg={12}></Grid>
                <NavLink className={classes.link} to="/followers">
                  <div className={classes.listItem}>
                    <div className={classes.listContent}>
                      <span className={classes.listIcon}>
                        <img className={classes.icon} src={follow} />
                      </span>
                      <span className={classes.listText}>Following</span>
                    </div>
                    <div className={classes.badge}>
                      <span>2K</span>
                    </div>
                  </div>
                </NavLink>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8} className={classes.itemConatiner}>
              <Container>
                <Grid direction="column" justify="center">
                  <Grid item xs={12} className={classes.listingHeader}>
                    <div className={classes.listItem}>
                      <div className={classes.listContent + " " + classes.selected}>
                        <span className={classes.listIcon}>
                          <img className={classes.icon} src={follow} />
                        </span>
                        <span className={classes.listText}>Sold</span>
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

export default sold;
