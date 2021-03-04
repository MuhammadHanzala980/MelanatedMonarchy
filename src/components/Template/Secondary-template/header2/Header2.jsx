import React, { useEffect } from "react";
import classes from "./Header2.module.css";
import { NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import logo from "../../../../assets/images/header/logo.png";
import chat from "../../../../assets/images/Header2/chat.svg";
import bell from "../../../../assets/images/Header2/bell.svg";
import downarrow from "../../../../assets/images/Header2/downarrow.svg";
import { Badge } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SendIcon from "@material-ui/icons/Send";
import { DropDownMenu } from "../../../select";
import Login from "../../../Login/login";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.primary,
      },
    },
  },
}))(MenuItem);

const Header2 = () => {
  const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [userName, setUserName] = React.useState("");
  const cruntUser = JSON.parse(localStorage.getItem("__user__"));

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  useEffect(() => {
    if (cruntUser === null) {
      setAuth(false);
    } else {
      setAuth(true);
      setUserName(cruntUser.name);
    }
  }, [cruntUser]);


  return (
    <>
      <Grid className={classes.main1} container justify="space-between" alignItems='center' spacing={1}>
        <Grid item xs={5} sm={6} md={7} lg={7}>
          <NavLink to="/">
            <img alt={logo} className={classes.image} src={logo} />
          </NavLink>
        </Grid>
        <Grid item container justify='flex-end' xs={5} sm={6} md={5} lg={5} >
          {/* <Badge color="secondary" variant="dot">
            <img alt={chat} src={chat} />
          </Badge> */}
          {/* </Grid> */}
          {/* <Grid item className={classes.margin1}> */}
          {/* <Badge color="secondary" variant="dot">
            <img alt={bell} src={bell} />
          </Badge> */}
          {/* <Button className={classes.text} style={{ marginLeft: "15px" }} aria-controls="customized-menu" aria-haspopup="true" onClick={handleClick}>
            {userName}
            <img alt={downarrow} src={downarrow} />
          </Button> */}
          {/* <Grid item xs={4} sm={3} md={5} lg={5}> */}
            {auth ? (
              <>
                <h4 className={classes.signup}>
                  <DropDownMenu userName={userName} setAuth={setAuth} onClick={handleClose} />
                </h4>{" "}
              </>
            ) : (
              <>
                <h4 className={classes.signup}>
                  <NavLink style={{ textDecoration: "none", color: "#E7C68E" }} to="/signup">
                    <span className={classes.loginsignup}> SignUp </span>
                  </NavLink>
                  <Login text="Login" />
                </h4>
              </>
            )}
          {/* </Grid> */}
        </Grid>
      </Grid>
    </>
  );
};
export { Header2 };
