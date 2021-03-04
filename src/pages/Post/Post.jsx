import { Grid } from "@material-ui/core";
import React from "react";
import classes from "./Post.module.css";
import person from "../../assets/images/Allposting/person.png";
import likes from "../../assets/images/Allposting/likes.svg";
import location from "../../assets/images/Allposting/location.svg";
import share from "../../assets/images/Allposting/share.svg";
const Post = ({ Img, item }) => {
  console.log();
  return (
    <>
      <div className={classes.Bidding}>
        <img alt={Img} src={item.images[0].image} className={classes.img} />
        <Grid container xs={12} className={classes.border}>
          <Grid item xs={6}>
            <h5 className={classes.price}>
              {item.postingTitle}
              <br></br>
              <b>Rs. 77,900/-</b>
            </h5>
          </Grid>
          <Grid item xs={6}>
            <img className={classes.heart} alt="heart" src={likes} />
          </Grid>
        </Grid>
        <Grid container xs={12}>
          <Grid container xs={9}>
            <Grid item xs={3}>
              <img className={classes.profile} alt="heart" src={person} />
            </Grid>
            <Grid item xs={6} className={classes.follow}>
              <span className={classes.draftprice}>
                Kelly Williamson
                <br></br>
                <div className={classes.locate}>
                  <img alt="heart" src={location} />
                  <span className={classes.locate1}>{item.postCity}</span>
                </div>{" "}
              </span>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <img className={classes.share} alt="heart" src={share} />
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export { Post };
