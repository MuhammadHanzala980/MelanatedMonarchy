import { Typography, Grid, Container } from "@material-ui/core";
import classes from "./BiddingSection.module.css";
import { NavLink, Link } from "react-router-dom";
// import { PrimaryTemplate } from "../../components/Template/Third-template";
import { Select } from "../../components/select/select";
import play from "../../assets/images/bidding/play.svg";
import { Bidding, PrimaryTemplate } from "../../components";
import shoe from "../../assets/images/home/shoe1.png";
import bluetooth from "../../assets/images/home/bluetooth.png";  
import bag from "../../assets/images/bidding/bag.png";
import { PopularSeller } from "../../components/Selectors/PopularSeller";
import { PostDetail } from "../../components/Bidding-Post-Detail";
import { BiddingPost } from "../BiddingPost/BiddingPost";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getListing, likeListing, viewLikedPsts } from "../../store/action";
import React, { Component } from "react";

class BiddingSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prodList: [],
    };
    // this.postAlike.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
    this.props.actions.getListing().then((res) => {
      if (res.data.prodList) {
        this.setState({
          prodList: res.data.prodList,
        });
      }
    });
  }

  postAlike(id) {
    this.props.actions.likeListing(id).then((res) => console.log('Done'));
    this.props.actions.viewLikedPsts().then((res) => console.log(res));
  }

  render() {
    const { prodList } = this.state;
    return (
      <>
        <PrimaryTemplate history={this.props.history}>
          <PostDetail></PostDetail>

          <Container>
            <Grid item xs={12}>
              <h1 style={{ textAlign: "center", textDecoration: "underline", padding: "20px 0px 0px" }}>Bidding</h1>
              {/* <PostDetail text="bill"></PostDetail> */}
            </Grid>
            <Grid container spacing={2} justify="space-around">
              {prodList.map((item, key) => {
                return (
                  <Grid key={key} item xs={12} sm={5} md={3}>
                    <Bidding getId={this.postAlike.bind(this)} Img={shoe} item={item} bar="active" bar_value={80} />
                  </Grid>
                );
              })}
            </Grid>
           
          </Container>
          <Container>
            <Grid container>
              <Grid item xs={12}>
                <h3 className={classes.Seller}>Popular Seller</h3>
              </Grid>
            </Grid>
            <Grid container className={classes.content}>
              <Grid className={classes.grid1} item xs={11} sm={2} md={3}>
                <PopularSeller />
              </Grid>
              <Grid className={classes.grid1} item xs={11} sm={2} md={3}>
                <PopularSeller />
              </Grid>
              <Grid className={classes.grid1} item xs={11} sm={2} md={3}>
                <PopularSeller />
              </Grid>
              <Grid className={classes.grid1} item xs={11} sm={2} md={2}>
                <PopularSeller />
              </Grid>
            </Grid>
          </Container>
        </PrimaryTemplate>
      </>
    );
  }
}

const mapDispatchToProps = (dispatchEvent) => {
  return {
    actions: bindActionCreators(
      {
        getListing,
        likeListing,
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

export default connect(mapStateToProps, mapDispatchToProps)(BiddingSection);
