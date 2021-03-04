import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import classes from "./Profile.module.css";
import { NavLink, Route, Switch } from "react-router-dom";
import { SecondaryTemplate } from "../../components/Template/Secondary-template";
import user from "../../assets/images/my-Profile/user.svg";
import buy from "../../assets/images/my-Profile/buy.svg";
import dollar from "../../assets/images/my-Profile/dollar.svg";
import heart from "../../assets/images/my-Profile/heart.svg";
import posting from "../../assets/images/my-Profile/posting.svg";
import logout from "../../assets/images/my-Profile/logout.svg";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Billing from "./Billing/Billing";
import MyPurchase from './MyPurchase/MyPurchase';
import PurchaseDetail from './MyPurchase/PurchaseDetail';
import { MyLike } from './MyLike/MyLike';
import AllPosting from "../AllPosting/AllPosting";
import Form from "../../components/Form/Form";
import { Drafts } from "./Drafts/Drafts";
import { Box } from "../../components/ListingBoxNo/Box";

const SideMenu = () => {

  const [searchInput, setsearchInput] = useState("");

  console.log(searchInput);

  return (
    <>

      <SecondaryTemplate>
        <Grid container className={classes.main}>

          <Grid container xs={12} sm={4} md={3} className={classes.select1} >
            <Grid item xs={10} sm={10} md={10} lg={10}>
              <NavLink to="/BiddingSection">
                <div className={classes.createlisting}>
                  <h4 className={classes.createtext}>Go To Bidding Panel</h4>
                </div>
              </NavLink>
            </Grid>
            <Grid item xs={5} sm={10} md={10} lg={10}>
              <NavLink to="/my_profile">
                <div className={classes.createprofile}>
                  <img src={user} alt={user} />
                  <h4 className={classes.createprofiletext}>My Profile</h4>
                </div>
              </NavLink>
            </Grid>
            <Grid item xs={5} sm={10} md={10} lg={10}>
              <Accordion style={{ backgroundColor: "black", display: "flow-root", padding: "0px 5px" }}>
                <AccordionSummary
                >
                  <NavLink to="/my_profile">
                    <div className={classes.createprofile1}>
                      <img src={posting} alt={posting} />
                      <h4 className={classes.createprofiletext}>My Posting</h4>
                    </div>
                  </NavLink>
                </AccordionSummary>
                <AccordionDetails style={{ display: "flow-root", padding: "0px 28px 18px" }}>
                  <Grid item xs={5} sm={2} md={10} lg={10}>
                    <NavLink to="/listing">
                      <div className={classes.createposting}>
                        <h4 className={classes.createpostingtext}>All Posting</h4>
                      </div>
                    </NavLink>
                  </Grid>
                  <Grid item xs={5} sm={2} md={10} lg={10}>
                    <NavLink to="/MostRecent">
                      <div className={classes.createposting}>
                        <h4 className={classes.createpostingtext}>Most Recent</h4>
                      </div>
                    </NavLink>
                  </Grid>
                  <Grid item xs={5} sm={2} md={10} lg={10}>
                    <NavLink to="/Active">
                      <div className={classes.createposting}>

                        <h4 className={classes.createpostingtext}>Active</h4>
                      </div>
                    </NavLink>
                  </Grid>
                  <Grid item xs={5} sm={2} md={10} lg={10}>
                    <NavLink to="/InActive">
                      <div className={classes.createposting}>
                        <h4 className={classes.createpostingtext}>In Active</h4>
                      </div>
                    </NavLink>
                  </Grid>

                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={5} sm={10} md={10} lg={10}>
              <NavLink to="/Draft">
                <div className={classes.createprofile}>
                  <img src={posting} alt={posting} />
                  <h4 className={classes.createprofiletext}>Draft <Box num={"02"}></Box></h4>
                </div>
              </NavLink>
            </Grid>
            <Grid item xs={5} sm={10} md={10} lg={10}>
              <NavLink to="/My likes">
                <div className={classes.createprofile}>
                  <img src={heart} alt={heart} />
                  <h4 className={classes.createprofiletext}>My Like's</h4>
                </div>
              </NavLink>
            </Grid>
            <Grid item xs={5} sm={10} md={10} lg={10}>
              <NavLink to="/My Purchase">
                <div className={classes.createprofile}>
                  <img src={buy} alt={buy} />
                  <h4 className={classes.createprofiletext}>My Purchase</h4>
                </div>
              </NavLink>
            </Grid>
            <Grid item xs={5} sm={10} md={10} lg={10}>
              <NavLink to="/Billing">
                <div className={classes.createprofile}>
                  <img src={dollar} alt={dollar} />
                  <h4 className={classes.createprofiletext}>Billing</h4>
                </div>
              </NavLink>
            </Grid>
            <Grid item xs={5} sm={10} md={10} lg={10}>
              <NavLink to="/Logout">
                <div className={classes.createprofile}>
                  <img src={logout} alt={logout} />
                  <h4 className={classes.createprofiletext}>Logout</h4>
                </div>
              </NavLink>
            </Grid>
          </Grid>

          <Switch>
            <Route exact path='/MyProfile' component={Form} />
            <Route path='/MyPosting' component={AllPosting} />
            <Route path='/Draft' component={Drafts} />
            <Route path='/My likes' component={MyLike} />
            <Route path='/My Purchase' component={MyPurchase} />
            <Route path='/Billing' component={Billing} />
            <Route path='/PurchaseDetail' component={PurchaseDetail} />

          </Switch>

        </Grid>


      </SecondaryTemplate>
    </>
  );
};
export { SideMenu };