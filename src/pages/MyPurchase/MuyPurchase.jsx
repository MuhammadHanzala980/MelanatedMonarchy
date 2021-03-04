import React from "react";
import classes from "./MyPurchase.module.css";
import { Grid, Typography } from "@material-ui/core";
import { SecondaryTemplate } from "../../components/Template/Secondary-template";
import SideMenu from "../../components/Navigation/Navigation";
import Search from "../../assets/images/header/search.svg";
import { InputWithIcon } from "../../components/Search";
import List from "../../components/List/List";
import { IntroBox } from "../../components";

const MyPurchase = () => {
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
            <Grid className={classes.Pmain} container justify="space-between">
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <Typography className={classes.text}>My Purchase </Typography>
              </Grid>
              <Grid item xs={12} sm={5} md={5} lg={5}>
                <InputWithIcon color="#E7C68E" type="text" placeholder="Search..." ImgLeft={Search} />
              </Grid>
            </Grid>

            <Grid className={classes.draft} container>
              <Grid item xs={12} sm={12}>
                <List />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </SecondaryTemplate>
    </>
  );
};

export default MyPurchase;
