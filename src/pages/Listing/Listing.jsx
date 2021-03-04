import React, { Component } from "react";
import { Grid, Container } from "@material-ui/core";
import { IntroBox } from "../../components";
import classes from "./Listing.module.css";
import { SecondaryTemplate } from "../../components/Template/Secondary-template";
import follow from "../../assets/images/Follow/follow.svg";
import phone from "../../assets/images/Draft/phone.png";
import { NavLink } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { userProductList, recentPublished } from "../../store/action";
import Navigation from "../../components/Navigation/Navigation";
// const Boxes = () => {
//   return (
//     <>
//       <Grid container justify="space-between" className={classes.boxItems}>
//         <Grid item sx={12} sm={6} className={classes.box}>
//           <div>
//             <div className={classes.imgContainer}>
//               <img alt="listin img" className={classes.productImg} src={phone} />
//             </div>
//             <div>
//               <div className={classes.title}>Iphone 7s 124GB</div>
//               <div className={classes.price}>Rs. 89,999 </div>
//             </div>
//           </div>
//         </Grid>
//         <Grid item sx={12} sm={6} className={classes.box}>
//           <div>
//             <div className={classes.imgContainer}>
//               <img alt="listin img" className={classes.productImg} src={phone} />
//             </div>
//             <div>
//               <div className={classes.title}>Iphone 7s 124GB</div>
//               <div className={classes.price}>Rs. 89,999 </div>
//             </div>
//           </div>
//         </Grid>
//       </Grid>
//     </>
//   );
// };

class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userProductList: [],
    };
  }

  componentDidMount() {
    this.props.actions.userProductList().then((res) => {
      if (res.status === 200) {
        this.setState({
          userProductList: res.data.prodList,
        });
      }
    });

    this.props.actions.recentPublished().then((res) => {
      console.log("res");
    });
  }

  render() {
    const { userProductList } = this.state;
    return (
      <>
        <SecondaryTemplate>
          <Container className={classes.Application}>
            <Grid container justify="space-evenly" className={classes.divHeader}>
              <Grid item xs={12} sm={12} md={3} lg={3} style={{ border: "1px solid" }}>
                <div>
                  <IntroBox />
                </div>
                <Navigation />
              </Grid>

              <Grid item xs={12} sm={12} md={8} lg={8} className={classes.itemConatiner}>
                <Container>
                  <Grid direction="column" justify="center">
                    <Grid item xs={12} className={classes.listingHeader}>
                      <NavLink className={classes.link} to="/listing">
                        <div className={classes.listItem}>
                          <div className={classes.listContent + " " + classes.selected}>
                            <span className={classes.listIcon}>
                              <img className={classes.icon} src={follow} />
                            </span>
                            <span className={classes.listText}>Listing</span>
                          </div>
                        </div>
                      </NavLink>
                    </Grid>
                    <Grid item xs={12}>
                      <div>
                        {/* <Boxes /> */}
                        {userProductList.length > 0 && (
                          <Grid container justify="space-between" className={classes.boxItems}>
                            {userProductList.map((item, key) => {
                              return (
                                <Grid item sx={12} sm={6} key={key} className={classes.box}>
                                  <div>
                                    <div className={classes.imgContainer}>
                                      <img alt="listin img" className={classes.productImg} src={item.images[0].image} />
                                    </div>
                                    <div>
                                      <div className={classes.title}>Iphone 7s 124GB</div>
                                      <div className={classes.price}>Rs. 89,999 </div>
                                    </div>
                                  </div>
                                </Grid>
                              );
                            })}
                          </Grid>
                        )}
                      </div>
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
            </Grid>
          </Container>
        </SecondaryTemplate>
      </>
    );
  }
}

const mapDispatchToProps = (dispatchEvent) => {
  return {
    actions: bindActionCreators(
      {
        userProductList,
        recentPublished,
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

export default connect(mapStateToProps, mapDispatchToProps)(Listing);
