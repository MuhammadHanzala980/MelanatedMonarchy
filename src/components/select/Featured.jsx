import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
// import classes from './select.module.css';
// import {ReactComponent as DownArrow} from '../../assets/images/select/Arrow.svg';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
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

const Featured = ({ onClick }) => {
  const Classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState("Select The Plan");

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
      <Button aria-controls="simple-menu" endIcon={<ExpandMoreIcon className={Classes.icon} />} className={Classes.account} style={{ fontSize: "11px" }} aria-haspopup="true" placeholder="Select Category Type" onClick={handleClick}>
        {value}
      </Button>
      <Menu className={Classes.menu} id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem data-my-value={"  Weekly/$5"} className={Classes.list} onClick={handleClose}>
          Weekly/$5
        </MenuItem>
        <MenuItem data-my-value={"Monthly/$25"} className={Classes.list} onClick={handleClose}>
          Monthly/$25
        </MenuItem>
        <MenuItem data-my-value={"Yearly/$240"} className={Classes.list} onClick={handleClose}>
          Yearly/$240
        </MenuItem>
      </Menu>
    </div>
  );
};
export { Featured };
