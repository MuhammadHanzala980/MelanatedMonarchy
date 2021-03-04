import React from "react";
import Grid from "@material-ui/core/Grid";
import classes from "./footer.module.css";
import { footerText } from "../../../../data";
import { RiInstagramLine, RiFacebookCircleLine, RiTwitterLine } from "react-icons/ri";
import { IconContext } from "react-icons";
import { NavLink } from "react-router-dom"; 

const Footer = () => { 
  return (
    <div className={classes.Footerdiv}>
      <Grid className={classes.footerfirst} container spacing={2}>
        <Grid item item xs={2} sm={1}>
          <IconContext.Provider value={{ color: "#E7C68E", size: "2.3em" }}>
            <RiFacebookCircleLine />
          </IconContext.Provider>
        </Grid>
        <Grid item item xs={2} sm={1}>
          <IconContext.Provider value={{ color: "#E7C68E", size: "2.3em" }}>
            <RiTwitterLine />
          </IconContext.Provider>
        </Grid>
        <Grid item item xs={2} sm={1}>
          <IconContext.Provider value={{ color: "#E7C68E", size: "2.3em" }}>
            <RiInstagramLine />
          </IconContext.Provider>
        </Grid>
      </Grid>
      <Grid className={classes.footer} container spacing={2}>
        {footerText.map((footerText, i) => (
          <Grid key={i} item xs={4} sm={3} md={1}>
            <NavLink to={footerText.url} className={classes.link} >
              <p className={classes.footertext}> {footerText.text}</p>
            </NavLink>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export { Footer };
