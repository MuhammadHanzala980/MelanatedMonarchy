import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import classes from "./location.css";
import { GeoLocation } from "./GeoLocation";
// import {ReactComponent as DownArrow} from '../../assets/images/select/Arrow.svg';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const useStyles = makeStyles((theme) => ({
  account: {
    // width: "100%",
    paddingLeft: "1.5rem",
    paddingRight: ".5rem",
    color: "#E7C68E",
    "&hover:": {},
  },
  icon: {
    fontSize: "1.5rem",
    // width: '10px'
  },
  menu: {
    marginTop: "50px",
    background: "rgba(0,0,0,0.5)",
    fontWeight: "600",
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

const Location = ({ onClick }) => {
  const Classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState("Walterboro");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    const { myValue } = event.currentTarget.dataset;
    if (myValue) {
      setValue(myValue);
      onClick(myValue);
    }
  };

  return (
    <div>
      <Button aria-controls="simple-menu" endIcon={<ExpandMoreIcon className={Classes.icon} />} className={Classes.account} aria-haspopup="true" placeholder="Select Category Type" onClick={handleClick}>
        {value}
      </Button>
      <Menu className={Classes.menu} id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem data-my-value={"Walterboro"} className={Classes.list} onClick={handleClose}>
          Walterboro{" "}
        </MenuItem>
        <MenuItem data-my-value={"New York"} className={Classes.list} onClick={handleClose}>
          New York{" "}
        </MenuItem>
        <MenuItem data-my-value={"Chigago"} className={Classes.list} onClick={handleClose}>
          Chigago
        </MenuItem>
        <MenuItem data-my-value={"San Francisco"} className={Classes.list} onClick={handleClose}>
          San Francisco
        </MenuItem>

        <MenuItem data-my-value={"Miami"} className={Classes.list} onClick={handleClose}>
          Miami{" "}
        </MenuItem>
      </Menu>
    </div>
  );
};
export { Location };
