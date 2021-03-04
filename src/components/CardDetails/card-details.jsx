import React from "react";
import classes from "./card-details.module.css";
import { NavLink } from "react-router-dom";

const CardDetails = ({ heading, pic, Categories, id }) => {
  return (
    <div className={classes.card}>
      <div className={classes.heading}>
        <h3 style={{ fontWeight: "700" }}>{heading}</h3>
        <img src={pic} />
      </div>

      <NavLink to={{ pathname: `/${id}/${Categories[0]}`, aboutProps: { Categories: Categories[0] } }} className={classes.link}>
        <p className={classes.list}>{Categories[0]}</p>
      </NavLink>

      <NavLink to={{ pathname: `/${id}/${Categories[1]}`, aboutProps: { Categories: Categories[1] } }} className={classes.link}>
        <p className={classes.list}>{Categories[1]}</p>
      </NavLink>

      <NavLink to={{ pathname: `/${id}/${Categories[2]}`, aboutProps: { Categories: Categories[2] } }} className={classes.link}>
        <p className={classes.list}>{Categories[2]}</p>
      </NavLink>

      <NavLink to={{ pathname: `/${id}/${Categories[3]}`, aboutProps: { Categories: Categories[3] } }} className={classes.link}>
        <p className={classes.list}>{Categories[3]}</p>
      </NavLink>

      <NavLink to={{ pathname: `/${id}/${Categories[4]}`, aboutProps: { Categories: Categories[4] } }} className={classes.link}>
        <p className={classes.list}>{Categories[4]}</p>
      </NavLink>

      <NavLink to={{ pathname: `/${id}/${Categories[5]}`, aboutProps: { Categories: Categories[5] } }} className={classes.link}>
        <p className={classes.list}>{Categories[5]}</p>
      </NavLink>
      {/* {Categories.map((Categories, i) => (
        <NavLink to={{ pathname: `/${Categories}`, aboutProps: { Categories } }} className={classes.link}>
          <p key={i} className={classes.list}>
            {Categories}
          </p>
        </NavLink>
      ))} */}
      <NavLink to={`/${id}`}>
        <p className={classes.seemorelist}>See more</p>
      </NavLink>
    </div>
  );
};

export { CardDetails };
