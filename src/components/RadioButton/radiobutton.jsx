import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    border: "1px solid #E7C68E",
    backgroundColor: "#000",
    "$root.Mui-focusVisible &": {
      outline: "2px auto black",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#E7C68E",
    },
  },
  checkedIcon: {
    backgroundColor: "black",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#E7C68E,#E7C68E 28%,transparent 32%)",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "black",
    },
  },
});

// Inspired by blueprintjs
function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

const RadioButton = ({ options , onChange}) => {
  return (
    <FormControl component="fieldset">
      <RadioGroup defaultValue="" aria-label="" name="customized-radios">
        {options.map((options) => (
          <FormControlLabel
            value={options.value}
            control={<StyledRadio />}
            label={options.label}
            onChange={(e) => onChange(e)}
            />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
export { RadioButton };
