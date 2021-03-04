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
    minWidth:'250px',
    fontWeight: 700,
    "&:hover:": {
      color: "black",
      borderLeft: "1px solid black",
    },
  },
}));

const PostingTypeSelect = ({ onClick }) => {
  const Classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState("Select Posting Type");
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    const { myValue } = event.currentTarget.dataset;
    if (myValue) {
      setValue(myValue);
      onClick(myValue);
    }
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" endIcon={<ExpandMoreIcon className={Classes.icon} />} className={Classes.account} aria-haspopup="true" onClick={handleClick}>
        {value}
      </Button>
      <Menu className={Classes.menu} id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem data-my-value={"Item"} className={Classes.list} onClick={handleClose}>
          Item
        </MenuItem>
      </Menu>
    </div>
  );
};
export { PostingTypeSelect };
