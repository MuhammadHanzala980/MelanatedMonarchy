import React from "react";
import Grid from "@material-ui/core/Grid";
import ad from "../../../assets/images/productapprove/ad.png";
import location from "../../../assets/images/productapprove/location.svg";
import classes from './productDetailsLeft.module.css';

const ProductDetailsLeft = () => {
  return (
    <>
      <p>Karachi &gt; Jobs &gt; Admin/office</p>
      <img className={classes.ad} src={ad} />
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={7}>
          <p className={classes.wfh}>
            compensation:{" "}
            <span className={classes.jobaim}>
              Work from home and earn money
            </span>
          </p>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <p className={classes.wfh}>
            employment type: <span className={classes.jobaim}>Part-time</span>
          </p>
        </Grid>
      </Grid>

      <p className={classes.makemoney}>MAKE MONEY ONLINE FROM HERE</p>
      <p className={classes.topmargin}>
        <img src={location} /> Karachi
      </p>

      <p>
        Make money online from home. Copy paste work . Share your own link and
        earn money. Trusted site . Link-
      </p>

      <p>https://zee.gl/ref/Djsyk</p>
      <p className={classes.topmargin}>Open this link in your browser</p>

      <li>
        Principals only. Recruiters, please don’t contact this job poster.
      </li>
      <li>do NOT contact us with unsolicited services or offers.</li>
      <li>OK to highlight this job opening for persons with disabilities.</li>
    </>
  );
};
export { ProductDetailsLeft };
