import React, { Component } from "react";
import classes from "./CategoryItems.module.css";
import { PrimaryTemplate, Bidding } from "../../components";
import { getBidding, likeListing, viewLikedPsts } from "../../store/action";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Grid } from "@material-ui/core";
import shoe from "../../assets/images/home/shoe1.png";
import group from "../../assets/images/card-details/group.png";
import house from "../../assets/images/card-details/house.png";
import job from "../../assets/images/card-details/job.png";
import service from "../../assets/images/card-details/service.svg";
import tag from "../../assets/images/card-details/tag.svg";

const Categories = [
  {
    heading: "Autos and Parts",
    pic: service,
    Categories: ["Cars", "Motorcycles - Scooters", "Motorhomes - Trailers", "Truck & Commercial Vehicles", "Caravans & Trailers", "Boats & Aviation", "Others"],
  },
  {
    heading: "Real Estate",
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
    pic: house,
    Categories: ["Furniture & Décor", "Homeware & Appliances", "Tools & DIY", "Garden & Braai", "Hand made Accessories", "Art, Product & Paintings", "Antiques", "Others"],
  },

  {
    heading: "Electronics, Cell Phones and Tablets",
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
    pic: group,
    Categories: ["Toys, Games & Remote Controls", "Musical Instruments", "Art, Collectibles & Rare Items", "Community Announcements", "Books, CDs & DVDs", "Others"],
  },

  {
    heading: "Sports and Outdoors",
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
    heading: "Baby and Kids",
    pic: house,
    Categories: ["Prams, Cots & Equipment", "Toddler's Clothing & Accessories", "Toys", "Health", "Cloth", "Others"],
  },

  {
    heading: "Pets",
    pic: tag,
    Categories: ["Pets for Adoption", "Pet Care & Accessories", "Farm Animals", "Dogs & Cats", "Birds, Horses & Fish", "Others"],
  },

  {
    heading: "Fashion and Beauty",
    pic: group,
    Categories: ["Clothing & Shoes", "Jewellery & Accessories", "Health, Beauty & Cosmetics", "Firness Products", "Bags & Accessories", "Watches & Glasses", "Others"],
  },

  {
    heading: "Office and Business",
    pic: group,
    Categories: ["Businesses for Sale", "Shop Equipment", "Catering Equipment", "Office Furniture & Equipment", "Inventory & Stock", "Others"],
  },

  {
    heading: "Farming & Industrial",
    pic: tag,
    Categories: ["Farming Equipment & Vehicles", "Livestock", "Business", "Industrial Equipment", "Feeds, Supplements & Seeds", "Others"],
  },

  {
    heading: "Other Services",
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



class CategoryItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prodList: [],
    };
    // this.postAlike.bind(this);
  }
  
  componentDidMount() {
    
    console.log(this.props.match)
    this.props.actions.getBidding().then((res) => {
      if (res.status === 200) {
        console.log(res);
        this.setState({
          prodList: res.data.data,
        });
      }
    });
  }

  render() {
    // let { category } = useParams();
    const { prodList } = this.state;
    console.log(this.props.location.aboutProps.activities);
    return (
      <PrimaryTemplate>
        <div>
          <h1 style={{ textAlign: "center", textDecoration: "underline", padding: "20px 0px 0px", borderTop: "solid 1px" }}>{this.props.location.aboutProps.activities}</h1>
        </div>
        <Grid container spacing={2} justify="space-around">
          {prodList.map((item, key) => {
            return (
              <Grid key={key} item xs={12} sm={5} md={3}>
                <Bidding Img={shoe} item={item} bar="active" bar_value={80} />
              </Grid>
            );
          })}
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItems);
