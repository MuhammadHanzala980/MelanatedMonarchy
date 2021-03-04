import { Grid, Container } from "@material-ui/core";
import { Bidding, PrimaryTemplate } from "../../components";
import shoe from "../../assets/images/home/shoe1.png";
import { PostDetail } from "../../components/Bidding-Post-Detail";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getBidding, likeListing, viewLikedPsts } from "../../store/action";
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
    this.props.actions.getBidding().then((res) => {
      if (res.status === 200) {
        console.log(res);
        this.setState({
          prodList: res.data.data,
        });
      }
    });
  }

  postAlike(id) {
    this.props.actions.likeListing(id).then((res) => console.log(res, "Done"));
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
          {/* <Container>
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
          </Container> */}
        </PrimaryTemplate>
      </>
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

export default connect(mapStateToProps, mapDispatchToProps)(BiddingSection);
