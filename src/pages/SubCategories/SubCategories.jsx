import React, { Component } from "react";
import { Grid, Container } from "@material-ui/core";
import { IntroBox } from "../../components";
import classes from "./SubCategories.module.css";
import { SecondaryTemplate } from "../../components/Template/Secondary-template";
import follow from "../../assets/images/Follow/follow.svg";
import phone from "../../assets/images/Draft/phone.png";
import { NavLink } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { userProductList, recentPublished } from "../../store/action";
import Navigation from "../../components/Navigation/Navigation";
import shoe from "../../assets/images/home/shoe1.png";
import group from "../../assets/images/card-details/group.png";
import house from "../../assets/images/card-details/house.png";
import job from "../../assets/images/card-details/job.png";
import service from "../../assets/images/card-details/service.svg";
import tag from "../../assets/images/card-details/tag.svg";

const Categories = [
  {
    heading: "Autos and Parts",
    id: "autos_and_parts",
    pic: service,
    Categories: ["Cars", "Motorcycles - Scooters", "Motorhomes - Trailers", "Truck & Commercial Vehicles", "Caravans & Trailers", "Boats & Aviation", "Others"],
  },
  {
    heading: "Real Estate",
    id: "real_estate",
    pic: house,
    Categories: [
      "Houses & Apartments for Rent",
      "Rooms for Rent & Shared",
      "Houses & Apartments for Sale",
      "Land for Sale",
      "Offices",
      "Vacation Rentals",
      "Garage & Parking for Sale",
      "Garage & Parking for Rent",
    ],
  },
  {
    heading: "Furniture, Home and Garden",
    id: "home_and_garden",
    pic: house,
    Categories: ["Furniture & Décor", "Homeware & Appliances", "Tools & DIY", "Garden & Braai", "Hand made Accessories", "Art, Product & Paintings", "Antiques", "Others"],
  },

  {
    heading: "Electronics, Cell Phones and Tablets",
    id: "electronics",
    pic: house,
    Categories: [
      "Cell Phones",
      "TV, Audio & Visual",
      "Computers & Laptops",
      "Gaming & Consoles",
      "Computer Hardware & Accessories",
      "Cameras",
      "iPads & Tablets",
      "Cell Phone Repair",
      "Computer Repair",
      "Others",
    ],
  },

  {
    heading: "Music and Hobbies",
    id: "music_and_hobbies",
    pic: group,
    Categories: ["Toys, Games & Remote Controls", "Musical Instruments", "Art, Collectibles & Rare Items", "Community Announcements", "Books, CDs & DVDs", "Others"],
  },

  {
    heading: "Sports and Outdoors",
    id: "sports",
    pic: group,
    Categories: [
      "Walking, Running & Athletics",
      "Bicycles",
      "Billiards",
      "Combat Sports",
      "Fishing & Diving",
      "Golf",
      "Hunting",
      "Futsal & Football",
      "Ski & Snowboard",
      "Surf & Bodyboard",
      "Bodybuilding & Fitness",
      "Camping",
      "Skates, Skateboards & Scooters",
    ],
  },

  {
    heading: "baby_kids",
    pic: house,
    Categories: ["Prams, Cots & Equipment", "Toddler's Clothing & Accessories", "Toys", "Health", "Cloth", "Others"],
  },

  {
    heading: "Pets",
    id: "pets",
    pic: tag,
    Categories: ["Pets for Adoption", "Pet Care & Accessories", "Farm Animals", "Dogs & Cats", "Birds, Horses & Fish", "Others"],
  },

  {
    heading: "Fashion and Beauty",
    id: "fashion",
    pic: group,
    Categories: ["Clothing & Shoes", "Jewellery & Accessories", "Health, Beauty & Cosmetics", "Firness Products", "Bags & Accessories", "Watches & Glasses", "Others"],
  },

  {
    heading: "Office and Business",
    id: "business",
    pic: group,
    Categories: ["Businesses for Sale", "Shop Equipment", "Catering Equipment", "Office Furniture & Equipment", "Inventory & Stock", "Others"],
  },

  {
    heading: "Farming & Industrial",
    id: "farming_&_industrial",
    pic: tag,
    Categories: ["Farming Equipment & Vehicles", "Livestock", "Business", "Industrial Equipment", "Feeds, Supplements & Seeds", "Others"],
  },

  {
    heading: "Other Services",
    id: "other_services",
    pic: house,
    Categories: [
      "Household",
      "Health & Beauty",
      "Event Services",
      "Repairs, Installations & Changes",
      "Travel & Tourist Categories",
      "Baby Sitters, Domestic Help & Cleaning",
      "Credit Repair Services",
      "Fitness Professionals",
      "Rentals",
      "Photography Services",
      "Free Items",
      "Financial Services",
      "Web Design",
      "Others",
    ],
  },

  {
    heading: "Jobs",
    id: "jobs",
    pic: job,
    Categories: [
      "Executive Positions",
      "Administrative / Secretarial / Finance",
      "Commercial / Sales",
      "Telecommunication / IT",
      "Customer Service / Call Center",
      "Bank / Insurance / Consultant / Legal",
      "Logistics / Distribution",
      "Tourism / Hospitality / Restaurant",
      "Education / Training",
      "Marketing / Communication",
      "Home Services / Cleaning",
      "Construction / Industrial",
      "Health / Medicine / Nursing",
      "Agriculture / Livestock / Gardening",
      "Engineering / Architecture / Design",
      "Telemarketing / Helpdesk",
      "Store Assistant / Cashier",
      "Manufacture / Textile",
      "Repair / Maintenance & Workshop",
      "Security & Surveillance",
      "Social Work & Volunteering",
      "Others",
    ],
  },
];

class SubCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userProductList: [],
      heading: "",
      catArr: [],
      found: false,
      listingHeading: 'Listings'
    };
  }

  componentDidMount() {
    const match = this.props.match;
    Categories.find((category) => {
      // console.log(category.id, match.params.category);
      const res = match.params.category === category.id;
      if (res) {
        this.setState({
          catArr: category.Categories,
          heading: category.heading,
          id: category.id,
          
        });
      }
    });
    
    let data = this.props.location.aboutProps;
    if (this.props.location.aboutProps) {
      this.setState({
        listingHeading: data.Categories,
      });
    }
  }

  render() {
    const { heading, catArr, id, listingHeading, subCatId } = this.state;
    console.log(listingHeading)
    return (
      <>
        <SecondaryTemplate>
          <Container className={classes.Application}>
            <Grid container justify="space-evenly" className={classes.divHeader}>
              <Grid item xs={12} sm={12} md={3} lg={3} style={{ border: "1px solid", padding: "20px" }}>
                <p className={classes.heading}>{heading}</p>
                <div>
                  {catArr.map((activities, k) => {
                    return (
                      <NavLink
                        key={k}
                        className={classes.link}
                        to={`/${id}/${activities}`}
                        onClick={() => {
                          this.setState({
                            listingHeading: activities,
                          });
                        }}
                      >
                        <p>{activities}</p>
                      </NavLink>
                    );
                  })}
                </div>
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
                            <span className={classes.listText}>{listingHeading}</span>
                          </div>
                        </div>
                      </NavLink>
                    </Grid>
                    <Grid item xs={12}>
                      <div>
                        {/* <Boxes /> */}
                        <Grid container justify="space-between" className={classes.boxItems}>
                          <Grid item sx={12} sm={6} className={classes.box}>
                            <div>
                              <div className={classes.imgContainer}>
                                <img alt="listin img" className={classes.productImg} src={phone} />
                              </div>
                              <div>
                                <div className={classes.title}>Iphone 7s 124GB</div>
                                <div className={classes.price}>USD 999 </div>
                              </div>
                            </div>
                          </Grid>

                          <Grid item sx={12} sm={6} className={classes.box}>
                            <div>
                              <div className={classes.imgContainer}>
                                <img alt="listin img" className={classes.productImg} src={phone} />
                              </div>
                              <div>
                                <div className={classes.title}>Iphone 7s 124GB</div>
                                <div className={classes.price}>USD 999 </div>
                              </div>
                            </div>
                          </Grid>

                          <Grid item sx={12} sm={6} className={classes.box}>
                            <div>
                              <div className={classes.imgContainer}>
                                <img alt="listin img" className={classes.productImg} src={phone} />
                              </div>
                              <div>
                                <div className={classes.title}>Iphone 7s 124GB</div>
                                <div className={classes.price}>USD 999 </div>
                              </div>
                            </div>
                          </Grid>

                          <Grid item sx={12} sm={6} className={classes.box}>
                            <div>
                              <div className={classes.imgContainer}>
                                <img alt="listin img" className={classes.productImg} src={phone} />
                              </div>
                              <div>
                                <div className={classes.title}>Iphone 7s 124GB</div>
                                <div className={classes.price}>USD 999 </div>
                              </div>
                            </div>
                          </Grid>
                        </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(SubCategories);
