import React, {useState} from "react";
import classes from './MyPurchase.module.css';
import { Grid,Typography } from "@material-ui/core";
import { InputWithIcon } from "../../../components/Search";
import { Purchase } from "./Purchase";
import Search from "../../../assets/images/header/search.svg";
const MyPurchase = () => {
  const [searchInput, setsearchInput] = useState("");

  console.log(searchInput);
return (
     <>
     
     <Grid item xs={12} sm={6} md={8} lg={8} className={classes.select2}>
     <Grid className={classes.Pmain} container  >
<Grid item xs={6} sm={6} md={6} lg={7}>
          <Typography className={classes.text} >My Purchase
           </Typography>
           </Grid>
           <Grid item xs={6} sm={6} md={6} lg={4}>
              <InputWithIcon
                value={searchInput}
                onChange={setsearchInput}
                color="#E7C68E"
                type='text'
                placeholder='Search ID here'
                ImgLeft={Search}
              />
            </Grid>    
</Grid>
 <Grid container xs={12}className={classes.Order} >
         <Grid item xs={2}  >Order Id</Grid>
         <Grid item xs={3}  >Order Place Date</Grid>
         <Grid item xs={2}   >Total Price</Grid>
         <Grid item xs={2}   >Status</Grid>
         <Grid item xs={2}   >Action</Grid>
</Grid>
 <Purchase Id={"19860"} date={"Aug20,2020"} price={"19"} status={"Deliverd"}></Purchase>

 <Purchase Id={"8460"} date={"Sep06,2020"} price={"19"} status={"Cancelled"}></Purchase>
  </Grid>
     </>
);
};

export default MyPurchase;