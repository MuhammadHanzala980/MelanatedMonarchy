import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import classes from "./UserInfo.module.css";
import { NavLink, Link } from "react-router-dom";
import { SecondaryTemplate } from "../../components/Template/Secondary-template";
import star from "../../assets/images/Follow/star.svg";
import posting from "../../assets/images/my-Profile/posting.svg";
import follow from "../../assets/images/Follow/follow.svg";
import user4 from "../../assets/images/Follow/user4.png";
import mail from "../../assets/images/Follow/mail.svg";
import Location from "../../assets/images/Follow/Location.svg";
import smartphone from "../../assets/images/Follow/smartphone.svg";
import { Route, Switch } from "react-router-dom";
import { SoldMain } from "./Sold";
import { Followers } from "./Followers/Followers";
import { ListingMain } from "./Listing/Listing-main";

const UserInfo = () => {
  const [searchInput, setsearchInput] = useState("");

  console.log(searchInput);

  return (
    <>
      <SecondaryTemplate>
        <Grid container className={classes.main}>
          <Grid container xs={12} sm={3} md={3} className={classes.select1}>
            <Grid item xs={11}>
              <Grid container className={classes.select}>
                <Grid item xs={10} sm={10} md={10} lg={10}>
                  <img className={classes.img} src={user4} />
                </Grid>
                <Grid item xs={10} sm={10} md={10} lg={10}>
                  <span className={classes.usertext}>Johny Pearson</span>
                </Grid>
                <Grid item xs={10} sm={10} md={10} lg={10}>
                  <span>
                    {" "}
                    Member since:<b className={classes.usertext}>Aug,2020</b>
                  </span>
                </Grid>
                <Grid item xs={5} sm={6} md={6} lg={6}>
                  <NavLink to="/">
                    <div className={classes.createlisting}>
                      <h4 className={classes.createtext}>Follow</h4>
                    </div>
                  </NavLink>
                </Grid>
                <Grid container className={classes.icon}>
                  <Grid item xs={4} md={3}>
                    <Link to="/">
                      <img src={mail} />
                    </Link>
                  </Grid>
                  <Grid item xs={4} md={3}>
                    <Link to="/">
                      <img src={smartphone} />
                    </Link>
                  </Grid>
                  <Grid item xs={4} md={3}>
                    <Link to="/">
                      <img src={Location} />
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={5} sm={10} md={10} lg={10}>
              <NavLink to="/user_info/Listing">
                <div className={classes.createprofile}>
                  <img src={posting} alt={posting} />
                  <h4 className={classes.createprofiletext}>Listing</h4>
                </div>
              </NavLink>
            </Grid>
            <Grid item xs={5} sm={10} md={10} lg={10}>
              <NavLink to="/Sold">
                <div className={classes.createprofile}>
                  <img src={posting} alt={posting} />
                  <h4 className={classes.createprofiletext}>Sold</h4>
                </div>
              </NavLink>
            </Grid>
            <Grid item xs={5} sm={10} md={10} lg={10}>
              <NavLink to="/Rating">
                <div className={classes.createprofile}>
                  <img src={star} alt={star} />
                  <h4 className={classes.createprofiletext}>Rating</h4>
                </div>
              </NavLink>
            </Grid>
            <Grid item xs={5} sm={10} md={10} lg={10}>
              <NavLink to="/Followers">
                <div className={classes.createprofile}>
                  <img src={follow} alt={follow} />
                  <h4 className={classes.createprofiletext}>Followers</h4>
                </div>
              </NavLink>
            </Grid>
            <Grid item xs={5} sm={10} md={10} lg={10}>
              <NavLink to="/Following">
                <div className={classes.createprofile}>
                  <img src={follow} alt={follow} />
                  <h4 className={classes.createprofiletext}>Following</h4>
                </div>
              </NavLink>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={8} lg={8} className={classes.select2}>
            {/*  */}

            <Switch>
              <Route exact path="/Listing" component={ListingMain} />
              <Route exact path="/Sold" component={SoldMain} />
              <Route exact path="/Followers" component={Followers} />
              <Route exact path="/Following" component={Followers} />
            </Switch>
          </Grid>
        </Grid>
      </SecondaryTemplate>
    </>
  );
};
export { UserInfo };
