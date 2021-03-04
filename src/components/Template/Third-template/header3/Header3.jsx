import React from "react";
import classes from "./Header3.module.css";
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
import Plus from "../../../../assets/images/header/Plus.svg";
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

const Header3 = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Grid className={classes.main1} container justify="space-evenly" alignContent="center">
        <Grid item container alignContent="center" xs={12} sm={4} md={6} lg={4}>
          <NavLink to="/">
            <img alt={logo} className={classes.image} src={logo} />
          </NavLink>
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={5}>
          <Grid container justify="space-evenly" item sm={12} md={12} >
            <Grid item sm={5} md={4}>
         
            </Grid>
            <Grid container alignContent="center" item sm={5} md={4}>
              <Badge color="secondary" variant="dot">
                <img className={classes.img} alt={chat} src={chat} />
              </Badge>
              <Badge color="secondary" variant="dot" className={classes.margin2}>
                <img className={classes.img} alt={bell} src={bell} />
              </Badge>
              <Button className={classes.text} aria-controls="customized-menu" aria-haspopup="true" onClick={handleClick}>
                Basit
                <img alt={downarrow} src={downarrow} />
              </Button>
            </Grid>
          </Grid>
          {/* <Grid item className={classes.margin1}>
            <StyledMenu id="customized-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
              <StyledMenuItem>
                <ListItemIcon>
                  <SendIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Sent mail" />
              </StyledMenuItem>
            </StyledMenu>
          </Grid> */}
        </Grid>{" "}
      </Grid>
    </>
  );
};
export { Header3 };
