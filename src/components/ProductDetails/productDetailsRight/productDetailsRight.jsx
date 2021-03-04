import React from "react";
import Grid from "@material-ui/core/Grid";
import star from "../../../assets/images/productapprove/star.svg";
import flag from "../../../assets/images/productapprove/flag.svg";
import hide from "../../../assets/images/productapprove/hide.svg";
import print from "../../../assets/images/productapprove/print.svg";
import reply from "../../../assets/images/productapprove/reply.svg";
import email from "../../../assets/images/productapprove/email.svg";
import classes from "./productDetailsRight.module.css";

const ProductDetailsRight = () => {
  return (
    <>
      <p>
        Post Id :<span className={classes.jobaim}> 7170716678 </span> | Posted :{" "}
        <span className={classes.jobaim}>10 Days Ago</span>
      </p>
      <Grid container>
        <Grid className={classes.picturebox} item xs={4}>
          <img src={hide} />
          <h3 className={classes.heading}>Hide</h3>
        </Grid>
        <Grid className={classes.picturebox} item xs={4}>
          <img src={star} />
          <h3 className={classes.heading}>Favourite</h3>
        </Grid>
        <Grid className={classes.picturebox} item xs={4}>
          <img src={flag} />
          <h3 className={classes.heading}>Flag</h3>
        </Grid>
        <div className={classes.rightendbuttons}>
          <button className={classes.twobuttons}>
            <img className={classes.Img} src={print} />
            Print
          </button>
          <button className={classes.twobuttons}>
            <img className={classes.Img} src={email} />
            Email to Friend
          </button>
          <button className={classes.lastbutton}>
            <img className={classes.Img} src={reply} />
            Reply
          </button>
        </div>
      </Grid>
    </>
  );
};

export { ProductDetailsRight };
