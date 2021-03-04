import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import classes from "./slider.module.css";
import { IconContext } from "react-icons"; 
import { NavLink } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Slider = ({ items }) => {
  return (
    <div className={classes.Slider}>
      <Carousel responsive={responsive} infinite={true}>
        {items.map((items, i) => (
          <NavLink to={`/${items.id}`} className={classes.link} >
            <div key={i} className={classes.box}>
              <IconContext.Provider value={{ color: "#E7C68E", size: "5.5em" }}>{items.icon}</IconContext.Provider>
              <div className={classes.teg}>{items.heading}</div>
            </div>
          </NavLink>
        ))}
      </Carousel>
    </div>
  );
};

export { Slider };
