import React from "react";
import classes from "./Bidding.module.css";
import star from "../../assets/images/bidding/star.svg";
// import heart from "../../assets/images/bidding/heart.svg";
import Grid from "@material-ui/core/Grid";
import { ProgressBar } from "../ProgressBar";
// import { PostDetail } from "../Bidding-Post-Detail";

const Bidding = ({ bar_value, bar, Img, item, getId }) => {
  return (
    <div className={classes.Bidding}>
      <img
        onClick={() => {
          getId(item.list_id);
        }}
        className={classes.img}
        alt={Img}
        src={ Img}
      ></img>

      <ProgressBar bar={bar} bar_value={bar_value} />

      <Grid container>
        <Grid item xs={8} sm={8} className={classes.offwinner}>
          <Grid container>
            <Grid item xs={6}>
              <div className={classes.offprice}>
                <h5>70% Off</h5>
                {/* <h6 className={classes.topdec}>Off</h6> */}
              </div>
            </Grid>
            <Grid item xs={6}>
              <div>
                <h4>
                  <span>$180</span>
                </h4>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} sm={4}>
          <div className={classes.nobids}>
            <br />
            <h4>10 BIDs</h4>
            {/* <h5 className={classes.topdec}></h5> */}
          </div>
        </Grid>
      </Grid>
      <Grid container></Grid>
      <div className={classes.star}>
        <img src={star} />
        <h4 style={{ marginLeft: "0.5rem" }}>4.5</h4>
      </div>
    </div>
  );
};

export { Bidding };
