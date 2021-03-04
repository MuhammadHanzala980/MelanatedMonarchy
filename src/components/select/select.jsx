import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
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

let SubCategories = [];

const useStyles = makeStyles((theme) => ({
  account: {
    width: "100%",
    paddingLeft: ".5rem",
    paddingRight: ".5rem",
    color: "#E7C68E",
    "&hover:": {},
  },
  icon: {
    fontSize: "1.5rem",
  },
  menu: {
    marginTop: "50px",
    background: "rgba(0,0,0,0.5)",
    fontWeight: "600",
    overFlow: "hidden",
  },
  list: {
    background: "linear-gradient(60deg,#E7C68E 0%, #9D7A54 100%)",
    fontWeight: 700,
    "&:hover:": {
      color: "black",
      borderLeft: "1px solid black",
    },
  },
}));

const Select = ({ onClick }) => {
  const Classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState("Select Category Type");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    console.log(event);
    if (event) {
      setValue(event);
      onClick(event);
    }
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        endIcon={<ExpandMoreIcon className={Classes.icon} />}
        className={Classes.account}
        aria-haspopup="true"
        placeholder="Select Category Type"
        onClick={handleClick}
      >
        {value}
      </Button>
      <Menu
        className={Classes.menu}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => {
          handleClose();
        }}
      >
        {Categories.map((item, key) => {
          return (
            <MenuItem
              key={key}
              className={Classes.list}
              onClick={() => {
                handleClose(item.heading);
                SubCategories = item.Categories;
              }}
            >
              {item.heading}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

const SubCategory = ({ onClick }) => {
  const Classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState("Select Sub Category");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    console.log(event);
    setAnchorEl(null);
    if (event) {
      setValue(event);
      onClick(event);
    }
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        endIcon={<ExpandMoreIcon className={Classes.icon} />}
        className={Classes.account}
        aria-haspopup="true"
        placeholder="Select Category Type"
        onClick={handleClick}
      >
        {value}
      </Button>
      <Menu
        className={Classes.menu}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => {
          handleClose();
        }}
      >
        {SubCategories.map((item, key) => {
          return (
            <MenuItem
              key={key}
              className={Classes.list}
              onClick={() => {
                handleClose(item);
              }}
            >
              {item}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};
export { Select, SubCategory };
