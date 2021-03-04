import React from "react";
import classes from "./checkbox.module.css";

const CustomCheckbox = ({ text, name, value, onChange }) => {
  return (
    <div className={classes.div}>
      <input
        type="checkbox"
        onChange={(e) => onChange(e)}
        value={value}
        name={name}
        className={classes.checkbox} />
      <p className={classes.text}>{text}</p>
    </div>
  );
};
export { CustomCheckbox };
