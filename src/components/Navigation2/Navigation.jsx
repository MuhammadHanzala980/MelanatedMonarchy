import React, { Component } from "react";

class Navigation2 extends Component {
  render() {
    return (
      <div className={classes.list}>
        <Grid item xs={6} sm={6} md={12} lg={12}>
          <div className={classes.listItem}>
            <div className={classes.listContent + " " + classes.selected}>
              <span className={classes.listIcon}>
                <img className={classes.icon} src={follow} />
              </span>
              <span className={classes.listText}>Listing</span>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} sm={6} md={12} lg={12}></Grid>
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
        <Grid item xs={6} sm={6} md={12} lg={12}></Grid>
        <div className={classes.listItem}>
          <div className={classes.listContent}>
            <span className={classes.listIcon}>
              <img className={classes.icon} src={follow} />
            </span>
            <span className={classes.listText}>Rating</span>
          </div>
        </div>
        <Grid item xs={6} sm={6} md={12} lg={12}></Grid>
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
        <Grid item xs={6} sm={6} md={12} lg={12}></Grid>
        <div className={classes.listItem}>
          <div className={classes.listContent}>
            <span className={classes.listIcon}>
              <img className={classes.icon} src={follow} />
            </span>
            <span className={classes.listText}>Following</span>
          </div>
          <div className={classes.badge}>
            <span>12</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation2;
