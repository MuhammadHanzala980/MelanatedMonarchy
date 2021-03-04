import React from "react";
import { Grid } from "@material-ui/core";
import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import heart from "../../assets/images/my-Profile/heart.svg";
import posting from "../../assets/images/my-Profile/posting.svg";
import logout from "../../assets/images/my-Profile/logout.svg";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { Box } from "../ListingBoxNo/Box";
import user from "../../assets/images/my-Profile/user.svg";
import buy from "../../assets/images/my-Profile/buy.svg";
import dollar from "../../assets/images/my-Profile/dollar.svg";
const Navigation = ({ recentPostNumber }) => {
  return (
    <div>
      <Grid container xs={12} sm={12} md={12} className={classes.select1}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <NavLink className={classes.link} to="/BiddingPost">
            <div className={classes.createlisting}>
              <h4 className={classes.createtext}>Create Bidding </h4>
            </div>
          </NavLink>

          <NavLink className={classes.link} to="/create_listing_1">
            <div className={classes.createlisting}>
              <h4 className={classes.createtext}>Post an Item </h4>
            </div>
          </NavLink>
        </Grid>
        <Grid item xs={6} sm={6} md={12} lg={12}>
          <NavLink className={classes.link} to="/my_profile">
            <div className={classes.createprofile}>
              <img src={user} alt={user} />
              <h4 className={classes.createprofiletext}>My Profile</h4>
            </div>
          </NavLink>
        </Grid>
        <Grid item xs={6} sm={6} md={12} lg={12}>
          <Accordion style={{ backgroundColor: "black", display: "flow-root", padding: "0px 5px" }}>
            <AccordionSummary>
              {/* <NavLink className={classes.link} to="/listing"> */}
              <div className={classes.createprofile1}>
                <img src={posting} alt={posting} />
                <h4 className={classes.createprofiletext}>My Posting</h4>
              </div>
              {/* </NavLink> */}
            </AccordionSummary>
            <AccordionDetails style={{ display: "flow-root", padding: "0px 28px 18px" }}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <NavLink className={classes.link} to="/listing">
                  <div className={classes.createposting}>
                    <h4 className={classes.createpostingtext}>All Posting</h4>
                  </div>
                </NavLink>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <NavLink className={classes.link} to="/most_recent">
                  <div className={classes.createposting}>
                    <h4 className={classes.createpostingtext}>
                      Most Recent <Box num={recentPostNumber}></Box>{" "}
                    </h4>
                  </div>
                </NavLink>
              </Grid>
              {/* <Grid item xs={12} sm={12} md={12} lg={12}> */}
              {/* <NavLink className={classes.link} to="/Active"> */}
              {/* <div className={classes.createposting}>
                  <h4 className={classes.createpostingtext}>
                    Active <Box num={"0"}></Box>{" "}
                  </h4>
                </div> */}
              {/* </NavLink> */}
              {/* </Grid> */}
              {/* <Grid item xs={12} sm={12} md={12} lg={12}> */}
              {/* <NavLink className={classes.link} to="/InActive"> */}
              {/* <div className={classes.createposting}>
                  <h4 className={classes.createpostingtext}>
                    In Active <Box num={"0"}></Box>{" "}
                  </h4>
                </div> */}
              {/* </NavLink> */}
              {/* </Grid> */}
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={6} sm={6} md={12} lg={12}>
          {/* <NavLink className={classes.link} to="/draft">
            <div className={classes.createprofile}>
              <img src={posting} alt={posting} />
              <h4 className={classes.createprofiletext}>
                Draft <Box num={"02"}></Box>
              </h4>
            </div>
          </NavLink> */}
        </Grid>
        <Grid item xs={6} sm={6} md={12} lg={12}>
          <NavLink className={classes.link} to="/my_likes">
            <div className={classes.createprofile}>
              <img src={heart} alt={heart} />
              <h4 className={classes.createprofiletext}>
                My Like's <Box num={'0'}></Box>{" "}
              </h4>
            </div>
          </NavLink>
        </Grid>
        <Grid item xs={6} sm={6} md={12} lg={12}>
          <NavLink className={classes.link} to="/my_purchase">
            <div className={classes.createprofile}>
              <img src={buy} alt={buy} />
              <h4 className={classes.createprofiletext}>My Purchase</h4>
            </div>
          </NavLink>
        </Grid>
        <Grid item xs={6} sm={6} md={12} lg={12}>
          <NavLink className={classes.link} to="/billing_form">
            <div className={classes.createprofile}>
              <img src={dollar} alt={dollar} />
              <h4 className={classes.createprofiletext}>Billing</h4>
            </div>
          </NavLink>
        </Grid>
        <Grid item xs={6} sm={6} md={12} lg={12}>
          {/* <NavLink className={classes.link} to="/"> */}
          <div className={classes.createprofile}>
            <img src={logout} alt={logout} />
            <h4 className={classes.createprofiletext}>Logout</h4>
          </div>
          {/* </NavLink> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default Navigation;
