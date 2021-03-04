import React from "react";
import { Grid, Container } from "@material-ui/core";
import { IntroBox } from "../../components";
import classes from "./rating.module.css";
import { SecondaryTemplate } from "../../components/Template/Secondary-template";
import follow from "../../assets/images/Follow/follow.svg";
import phone from "../../assets/images/Draft/phone.png";
import chevron from "../../assets/images/ApplicationReview/correct.svg";
import { NavLink } from "react-router-dom";

const Boxes = () => {
  return (
    <>
      <Grid container direction="column" className={classes.boxItems}>
        <Grid item className={classes.box}>
          <div className={classes.lavel}>
            <div>
              {" "}
              <img src={chevron} alt="crown" />{" "}
            </div>
            <div>
              <p className={classes.title}>Lavel 3</p>
              <p className={classes.rating}>Positive Rating 100%</p>
            </div>
          </div>
        </Grid>
        <Grid item className={classes.box}>
          <div className={classes.reviewsContainer}>
            <div>
              <img alt="listin img" className={classes.userImg} src={phone} />
            </div>
            <div className={classes.reviews}>
              <div className={classes.reviewInfo}>
                <span className={classes.userName}>Anthony Hudson</span>
                <span className={classes.time}>Aug 10,2020 02:00am</span>
              </div>
              <span className={classes.feedback}>
                dui. Morbi mauris lacus, consequat eget justo in, semper gravida enim. Donec ultrices varius ligula. Ut non pretium augue. Etiam non rutrum metus. In varius sit amet lorem tempus sagittis. Cras sed maximus enim, vel ultricies tortor. Pellentesque consectetur
                tellus ornare
              </span>
            </div>
          </div>
          <div className={classes.reviewsContainer}>
            <div>
              <img alt="listin img" className={classes.userImg} src={phone} />
            </div>
            <div className={classes.reviews}>
              <div className={classes.reviewInfo}>
                <span className={classes.userName}>Anthony Hudson</span>
                <span className={classes.time}>Aug 10,2020 02:00am</span>
              </div>
              <span className={classes.feedback}>
                dui. Morbi mauris lacus, consequat eget justo in, semper gravida enim. Donec ultrices varius ligula. Ut non pretium augue. Etiam non rutrum metus. In varius sit amet lorem tempus sagittis. Cras sed maximus enim, vel ultricies tortor. Pellentesque consectetur
                tellus ornare
              </span>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

const rating = () => {
  return (
    <>
      <SecondaryTemplate>
        <Container className={classes.Application}>
          <Grid container justify="space-around" className={classes.divHeader}>
            <Grid item sx={12} sm={3.5} className={classes.sideMenu}>
              <div className={classes.IntroBox}>
                <IntroBox />
              </div>
              <div className={classes.list}>
                <Grid item xs={6} sm={6} md={12} lg={12}>
                  <NavLink className={classes.link} to="/listing">
                    <div className={classes.listItem}>
                      <div className={classes.listContent}>
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
                    <div className={classes.listContents}>
                      <span className={classes.listIcon}>
                        <img className={classes.icon} src={follow} />
                      </span>
                      <span className={classes.listText + " " + classes.selected}>Rating</span>
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
            <Grid item sx={12} sm={8} className={classes.itemConatiner}>
              <Container>
                <Grid direction="column" justify="center">
                  <Grid item xs={12} className={classes.listingHeader}>
                    <div className={classes.heading}>
                      <div className={classes.headingContent}>
                        <span className={classes.headingText}>Rating</span>
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

export default rating;
