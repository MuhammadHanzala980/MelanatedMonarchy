import classes from "./Followers.module.css";
import { Grid } from "@material-ui/core";
import React, { useEffect,useState } from "react";
import { NavLink ,Link } from "react-router-dom";

const Follower=({Img, Name})=>{
  const [isToggleOn,setToggle]=useState(false);

  const handleClick=()=> {
    setToggle(state=>({
      isToggleOn:!state.isToggleOn

    }));

  
  }
  useEffect( () => {
    console.log(isToggleOn);
}, [isToggleOn]);

return(
    <>
<Grid container className={classes.Bidding}>
<Grid item xs={4} className={classes.box}>
<img className={classes.img} src={Img}/>
    </Grid>
    <Grid container xs={7}>
    <Grid item xs={12}>
<span className={classes.text}>{Name}</span>
</Grid>
    
    <Grid item xs={5} sm={6} md={6} lg={8}>
          <button 
          onClick={handleClick}
           className={classes.topbuttonright} >
             {isToggleOn ? "Unfollow":"Follow"}
            
          </button>
        </Grid>
        </Grid>
</Grid>
    



    </>
);
};
export {Follower};