import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { PrimaryTemplate, BiddingBox, PostingTypeSelect, Select, Featured } from "../../components";
import { ImageUploder } from "../../components/ImageUploder";
import Grid from "@material-ui/core/Grid";
import { createBidding } from "../../store/action";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import classes from "./BiddingPost.module.css";
import { CustomCheckbox, RadioButton } from "../../components";

// const url = "https://................./listing/create_list"
// Authorization = "token";

// const body = {
//     postingType,
//     categoryType,
//     postingTitle,
//     postCity,
//     postal,
//     salary,
//     price,
//     shipment,
//     description,
//     employeeType,
//     employeeDetail,
//     compensation,
//     postEmail,
//     emailPrivacy,
//     postNumber,
//     number_detail,
//     contactNumber,
//     jobForDisable,
//     image
// }

class BiddingPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postingTitle: "",
      postCity: "",
      postal: "",
      price: "",
      shipment: null,
      postingType: null,
      categoryType: null,
      description: "",
      featured: "",
      featuredStatus: false,
      user: JSON.parse(localStorage.getItem("__user__")),
      images: [],

      no: {
        backgroundColor: "#E7C68E",
      },
      yes: {
        backgroundColor: "",
      },
    };
  }

  selectPostingType(val) {
    this.setState({
      postingType: val,
    });
  }

  selectCategoryType(val) {
    this.setState({
      categoryType: val,
    });
  }

  selectPkg() {}

  value(e) {
    this.setState({
      [e.target.name]: e.target.value,
      messageErr: "",
    });
  }

  handleChange(event) {
    let check = event.target.checked;
    let value = event.target.value;
    console.log(check);
    if (check) {
      this.setState({
        featured: 1,
        featuredStatus: true,
      });
    } else {
      this.setState({
        featured: 1,
        featuredStatus: false,
      });
    }
  }

  next() {
    const { user, featured, postingTitle, postCity, postal, price, shipment, postingType, categoryType, description, featuredStatus } = this.state;
    console.log(this.props.Images);
    if (postingType === null) {
      this.setState({
        messageErr: "Please select posting type !",
      });
    } else if (categoryType === null) {
      this.setState({
        messageErr: "Please select category type !",
      });
    } else if (postingTitle.length < 1) {
      this.setState({
        messageErr: "Please Inter posting title !",
      });
    } else if (postCity.length < 1) {
      this.setState({
        messageErr: "Please inter city !",
      });
    } else if (postal.length < 1) {
      this.setState({
        messageErr: "Please inter postal code !",
      });
    } else if (price < 5) {
      this.setState({
        messageErr: "Minimum Price Should Be $5 !",
      });
    } else if (shipment === null) {
      this.setState({
        messageErr: "Select shipment !",
      });
    } else if (description.length < 1) {
      this.setState({
        messageErr: "Please inter city !",
      });
    } else if (this.props.Images === undefined) {
      this.setState({
        messageErr: "Upload Images !",
      });
    } else {
      const body = {
        postType: postingType,
        categoryType: categoryType,
        title: postingTitle,
        cityOrNeighborhood: postCity,
        postalCode: postal,
        price: price,
        description: description,
        shipping: shipment,
        images: this.props.item.getImages,
        city: postCity,
        status: "GOING TWICE",
        user_id: user.id,
        featured: featured,
      };
      this.props.actions.createBidding(body).then((res) => {
        this.props.history.push("/");
      });

      // "postType":"2112jo232231qw2312",
      // "categoryType":"categoryType",
      // "title":"title",
      // "cityOrNeighborhood":"city",
      // "postalCode":"000 000 00",
      // "price":"$100",
      // "shipping":"No",
      // "description":"",
      // "user_id":"1",
      // "status":"GOING TWICE",
      // "images":["base64", "base64", "base64", "base64","base64"],
      // "city":"karachi"
    }
  }
  render() {
    const { messageErr, no, yes, postingTitle, postCity, postal, price, description, image, shipment, featuredStatus } = this.state;
    return (
      <div>
        <PrimaryTemplate history={this.props.history}>
          <div className={classes.createListing}>
            <div className={classes.topdiv}>
              {/* <BiddingBox num="1 / 2" /> */}
              <div>
                <h2 className={classes.heading}>Create Bidding </h2>
              </div>
              <p>
                <strong>What type of posting is this :</strong> [See prohibited list before posting]
              </p>
              <div className={classes.select}>
                <PostingTypeSelect onClick={this.selectPostingType.bind(this)} />
              </div>
            </div>
            <div className={classes.middiv}>
              <p>
                <strong>What type of category is this :</strong> [See prohibited list before posting]
              </p>
              <div className={classes.select}>
                <Select onClick={this.selectCategoryType.bind(this)} />
              </div>
            </div>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <div className={classes.textdiv}>
                  <label className={classes.chit}>Posting title</label>
                  <input className={classes.Input} name="postingTitle" value={postingTitle} onChange={this.value.bind(this)} type="text" />
                </div>
              </Grid>
              <Grid className={classes.grid} item xs={12} sm={4}>
                <label className={classes.chit}>City or Neighbourhood</label>
                <input className={classes.Input} name="postCity" value={postCity} onChange={this.value.bind(this)} type="text" />
              </Grid>
              <Grid className={classes.grid} item xs={12} sm={4}>
                <label className={classes.chit}>Postal Code</label>
                <input className={classes.Input} name="postal" value={postal} onChange={this.value.bind(this)} type="text" />
              </Grid>

              <Grid className={classes.grid} item xs={12} sm={3}>
                <label className={classes.chit}>Price (USD)</label>

                <input className={classes.Input} name="price" value={price} onChange={this.value.bind(this)} type="text" />
              </Grid>

              <Grid className={classes.left} item xs={12} sm={2}>
                <label className={classes.chit} style={{ marginLeft: ".5em", fontSize: "16px" }}>
                  Shipping Included?
                </label>
                <br />
                <div>
                  <button
                    style={yes}
                    className={classes.btn}
                    onClick={() => {
                      this.setState({
                        shipment: true,
                        yes: { backgroundColor: "#E7C68E" },
                        no: { backgroundColor: "" },
                      });
                    }}
                  >
                    Yes
                  </button>
                  <button
                    style={no}
                    className={classes.btn}
                    onClick={() => {
                      this.setState({
                        shipment: false,

                        no: { backgroundColor: "#E7C68E" },
                        yes: { backgroundColor: "" },
                      });
                    }}
                  >
                    No
                  </button>
                </div>
                {/* <div className={classes.chit} style={{ marginLeft: "1em", fontSize: "16px" }}>
                  Shipping Included?
                </div> */}
              </Grid>
              {shipment && (
                <Grid className={classes.grid} item xs={12} sm={1}>
                  <label className={classes.chit}>Price</label>
                  <input className={classes.Input} name="price" value={price} onChange={this.value.bind(this)} type="text" />
                  {/* <span className={classes.chit}> Minimum Price Should Be $5</span> */}
                </Grid>
              )}
            </Grid>
            <Grid container>
              <Grid item container direction="row" alignContent="center" xs={12} sm={12} md={12} className={classes.featured}>
                <Grid item sm={12} md={3}>
                  <CustomCheckbox text="I want to Featured this item." value={1} onChange={this.handleChange.bind(this)} />
                </Grid>
                {featuredStatus && (
                  <Grid className={classes.grid} item xs={12} sm={4} md={3}>
                    <div style={{ border: "1px solid" }}>
                      <Featured onClick={this.selectPkg.bind(this)} />
                    </div>
                  </Grid>
                )}
              </Grid>
            </Grid>
            <div>
              <p>Description</p>
              <textarea className={classes.textarea} name="description" value={description} onChange={this.value.bind(this)} />
              <p className={classes.endText}>Please see our FAQ for job posters.</p>
              <ImageUploder />
              {/* <NavLink to="/create_listing_2"> */}
              {messageErr && <p>{messageErr}</p>}
              <button className={classes.continuebutton} onClick={this.next.bind(this)}>
                Submit
              </button>
              {/* </NavLink> */}
            </div>
          </div>
        </PrimaryTemplate>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatchEvent) => {
  return {
    actions: bindActionCreators(
      {
        createBidding,
      },
      dispatchEvent
    ),
  };
};
const mapStateToProps = (state) => {
  return {
    item: state,
    Images: state.getImages,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BiddingPost);
