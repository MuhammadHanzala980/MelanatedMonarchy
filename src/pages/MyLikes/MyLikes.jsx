import React, { Component } from "react";
import classes from "./MyLikes.module.css";
import { Grid, Typography } from "@material-ui/core";
import phone from "../../assets/images/Draft/phone.png";
import { Post } from "../Post";
import { SecondaryTemplate } from "../../components/Template/Secondary-template";
import SideMenu from "../../components/Navigation/Navigation";
import { Box } from "../../components/ListingBoxNo/Box";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { viewLikedPsts } from "../../store/action";
import { IntroBox } from "../../components";

class MyLikes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mayLikesPosts: [],
      number: 0,
    };
  }

  componentDidMount() {
    this.props.actions.viewLikedPsts().then((res) => {
      console.log(res);
      if (res.status == 200) {
        this.setState({
          mayLikesPosts: res.data.likedData,
        });
      }
    });
  }

  render() {
    const { mayLikesPosts } = this.state;
    return (
      <>
        <SecondaryTemplate>
          <Grid className={classes.draft} container justify="space-evenly">
            <Grid item xs={12} sm={12} md={3} lg={3} style={{ marginTop: "1em", border: "1px solid" }}>
              <div>
                <IntroBox />
              </div>
              <SideMenu mayLikesNumber={this.state.number} />
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8} className={classes.select2}>
              <Grid className={classes.Pmain} container>
                <Grid item xs={6} sm={6} md={6} lg={6}>
                  <Typography className={classes.text}>
                    My Likes's <Box num={this.state.number} />
                  </Typography>
                </Grid>
              </Grid>
              <Grid className={classes.draft} container>
                {mayLikesPosts.length > 0 &&
                  mayLikesPosts.map((item, key) => {
                    return (
                      <Grid item xs={12} sm={12} md={6} key={key}>
                        <Post Img={phone} item={item} />
                      </Grid>
                    );
                  })}
              </Grid>
              {mayLikesPosts.length < 1 && (
                // <div>
                <p style={{ textAlign: "center", fontSize: "22px" }}> No Like Post </p>
                // </div>
              )}
            </Grid>
          </Grid>
        </SecondaryTemplate>
      </>
    );
  }
}

const mapDispatchToProps = (dispatchEvent) => {
  return {
    actions: bindActionCreators(
      {
        viewLikedPsts,
      },
      dispatchEvent
    ),
  };
};
const mapStateToProps = (state) => {
  return {
    item: state,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyLikes);
