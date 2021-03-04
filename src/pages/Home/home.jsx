import React, { Component } from "react";
import { homeSliderItems } from "../../data";
import { Slider, PrimaryTemplate, CardDetails } from "../../components";
import shoe from "../../assets/images/home/shoe1.png";
// import bluetooth from "../../assets/images/home/bluetooth.png";
import Grid from "@material-ui/core/Grid";
import { Activities } from "../../data/cardDetails";
import classes from "./home.module.css";
import { NavLink } from "react-router-dom";
import { bindActionCreators } from "redux";
import { getBidding, likeListing, viewLikedPsts } from "../../store/action";
import { connect } from "react-redux";

export class home extends Component {
  constructor(props) {
    super(props);
    this.state = { prodList: [] };
  }
  componentDidMount() {
    this.props.actions.getBidding().then((res) => {
      if (res.data.length > 0) {
        this.setState({
          prodList: res.data.data,
        });
      }
    });
  }
  render() {
    const { prodList } = this.state;
    return (
      <PrimaryTemplate history={this.props.history}>
        <br />

        <Slider items={homeSliderItems} />
        <div>{/* <img className={classes.ad} alt="ads" src={Amazonad} /> */}</div>
        <br />
        <br />
        <div>
          {/* <h1 style={{ textAlign: "center", textDecoration: "underline", padding: "20px 0px 0px", borderTop: "solid 1px", marginTop: "-37px" }}>Bidding</h1> */}
          {/* <NavLink to="/BiddingSection">
            <h3 className={classes.seemore} style={{ textAlign: "right", padding: "0px 0px" }}>
              See more Bidding
            </h3>
          </NavLink> */}
          <Grid container spacing={2} justify="space-around">
            {/* <Grid item xs={12} sm={5} md={3}>
              <Bidding Img={shoe} bar="active" bar_value={80} />
            </Grid>
            <Grid item xs={12} sm={5} md={3}>
              <Bidding Img={bluetooth} bar="active" bar_value={30} />
            </Grid>
            <Grid item xs={12} sm={5} md={3}>
              <Bidding Img={bluetooth} bar="sold" />
            </Grid>
            <Grid item xs={12} sm={5} md={3}>
              <Bidding Img={bluetooth} bar="sold" />
            </Grid> */}

            {/* {prodList.map((item, key) => {
              return (
                <Grid key={key} item xs={12} sm={5} md={3}>
                  <Bidding Img={shoe} item={item} bar="active" bar_value={80} />
                </Grid>
              );
            })} */}
          </Grid>
        </div>

        <h1 style={{ textAlign: "center", textDecoration: "underline", padding: "50px 0px 0px", borderTop: "solid 1px", marginTop: "37px" }}>Categories</h1>
        <NavLink to="/categoriesSection">
          <h3 className={classes.seemore} style={{ padding: "1em 19px 0px", textAlign: "right" }}>
            See more Categories
          </h3>
        </NavLink>
        <Grid className={classes.card} container spacing={2}>
          {/* <Grid></Grid> */}
          {Activities.map((activities, i) => (
            <Grid key={i} item xs={12} sm={6} md={4}>
              <CardDetails Categories={activities.Categories} id={activities.id}  pic={activities.pic} heading={activities.heading} />
            </Grid>
          ))}
        </Grid>
      </PrimaryTemplate>
    );
  }
}

const mapDispatchToProps = (dispatchEvent) => {
  return {
    actions: bindActionCreators(
      {
        getBidding,
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
export default connect(mapStateToProps, mapDispatchToProps)(home);
