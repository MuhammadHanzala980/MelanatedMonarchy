import React from "react";
import classes from './AllPosting.module.css';
import { Grid, Typography } from "@material-ui/core";
import phone from "../../assets/images/Draft/phone.png";
import { Post } from "../Post";
import { SecondaryTemplate } from "../../components/Template/Secondary-template";
import SideMenu from '../../components/Navigation/Navigation';
import { Box } from "../../components/ListingBoxNo/Box";

const AllPosting = () => {

  return (
    <>
      <SecondaryTemplate>
        <Grid className={classes.draft} container justify="space-evenly" >
          <Grid item xs={12} sm={12} md={3} lg={3} >
            <SideMenu />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8} className={classes.select2}>
            <Grid className={classes.Pmain} container  >
              <Grid item xs={6} sm={6} md={6} lg={6} >
                <Typography className={classes.text} >All Posting     <Box num={'56'} /></Typography>
              </Grid>
            </Grid>

            <Grid className={classes.draft} container  >
              <Grid item xs={12} sm={12} md={6} >
                <Post Img={phone} />
              </Grid>
              <Grid item xs={12} sm={12} md={6} >
                <Post Img={phone} />
              </Grid>
              <Grid item xs={12} sm={12} md={6} >
                <Post Img={phone} />
              </Grid>
              <Grid item xs={12} sm={12} md={6} >
                <Post Img={phone} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

      </SecondaryTemplate>
    </>
  );
};

export default AllPosting;