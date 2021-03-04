import React from "react";
import { PrimaryTemplate, CardDetails } from "../../components";
import Grid from "@material-ui/core/Grid";
// import { Activities } from "../../data/cardDetails";
import classes from "./CategoriesSection.module.css";
// import { NavLink } from "react-router-dom";
import group from "../../assets/images/card-details/group.png";
import house from "../../assets/images/card-details/house.png";
import job from "../../assets/images/card-details/job.png";
import service from "../../assets/images/card-details/service.svg";
import tag from "../../assets/images/card-details/tag.svg";

const Activities = [
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

const CategoriesSection = (props) => {
  return (
    <PrimaryTemplate history={props.history}>
      <br />
      <br />
      <br />
      <h1 style={{ textAlign: "center", textDecoration: "underline", padding: "20px 0px 0px", borderTop: "solid 1px", marginTop: "-37px" }}>Categories</h1>

      <Grid className={classes.card} container spacing={2}>
        {/* <Grid></Grid> */}
        {Activities.map((activities, i) => (
          <Grid key={i} item xs={12} sm={6} md={4}>
            <CardDetails Categories={activities.Categories} id={activities.id} pic={activities.pic} heading={activities.heading} />
          </Grid>
        ))}
      </Grid>
    </PrimaryTemplate>
  );
};

export default CategoriesSection;
