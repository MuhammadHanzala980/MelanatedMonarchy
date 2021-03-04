import { Typography,Grid } from "@material-ui/core";
import React,{useState} from "react";
import classes from "./Followers.module.css";
import user4 from "../../../assets/images/Follow/user4.png";
import user3 from "../../../assets/images/Follow/user3.png";
import { Follower } from "./Follower";
const Followers=()=>{
    return(
        <>
 <Grid className={classes.Pmain} container  >
 <Grid item xs={6} sm={6} md={6} lg={6}>
           <Typography className={classes.text} >Followers
            </Typography>
         </Grid>
    
 </Grid>
 <Grid className={classes.draft} container  >
           <Grid item xs={12} sm={12} md={6} >
             <Follower Img={user4} Name={"Ronnie Murphy"}/>
           </Grid>
           <Grid item xs={12} sm={12} md={6} >
             <Follower Img={user3} Name={"Frank Mendoza"} />
           </Grid>
           </Grid>
                 
        
                 </>
             );
         };
         export {Followers};