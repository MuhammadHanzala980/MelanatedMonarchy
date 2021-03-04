import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  margin: {
    width: "100%",
  },
}));

const InputWithIcon = ({ ImgLeft, onChange, value, color, placeholder, type, ImgRight, name }) => {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.margin}>
        <Input
          style={{ color: color }}
          onChange={(e) => onChange(e)}
          value={value}
          name={name}
          placeholder={placeholder}
          type={type}
          endAdornment={
            <InputAdornment position="start">
              <img style={{ paddingLeft: "0.5rem", cursor: "pointer" }} alt={ImgRight} src={ImgRight} />
            </InputAdornment>
          }
          startAdornment={
            <InputAdornment position="start">
              <img style={{ paddingLeft: "0.5rem" }} alt={ImgLeft} src={ImgLeft} />
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
};

const InputPwdWithIcon = ({ ImgLeft, onChange, value, color, placeholder, name }) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    console.log("show");
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <FormControl className={classes.margin}>
        <Input
          style={{ color: color }}
          onChange={(e) => onChange(e)}
          value={value}
          name={name}
          placeholder={placeholder}
          type={values.showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="start">
              <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          startAdornment={
            <InputAdornment position="start">
              <img style={{ paddingLeft: "0.5rem" }} alt={ImgLeft} src={ImgLeft} />
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
};

export { InputWithIcon, InputPwdWithIcon };
