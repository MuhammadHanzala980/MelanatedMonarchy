import { Grid } from "@material-ui/core";
import React from "react";
import classes from "./SideMenu2.module.css";
import { Route,Switch,NavLink  } from "react-router-dom";
import { SecondaryTemplate } from "../../components/Template/Secondary-template";
import heart from "../../assets/images/my-Profile/heart.svg";
import posting from "../../assets/images/my-Profile/posting.svg";
import logout from "../../assets/images/my-Profile/logout.svg";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { Complete } from "./OrderComplete/Complete";
import AllPosting from "../AllPosting/AllPosting";
import { MyOrder } from "./MyOrder";
import { UnpaidMain } from "./unpaid/UnpaidMain";
import { ProgressMain } from "./InProgress";
import {Box} from "../../components/ListingBoxNo/Box";



const SideMenu2=()=>{
  
      return(
          <>
         
  <SecondaryTemplate>
      <Grid container  className={classes.main}>
          <Grid container  xs={12} sm={4} md={3}  className={classes.select1} >
          <Grid item xs={10} sm={10} md={10} lg={10}>
            <NavLink to="/Followers">
              <div className={classes.createlisting}>
                <h4 className={classes.createtext}>Go To User Panel</h4>
              </div>
            </NavLink>
          </Grid>
          
          <Grid item xs={5} sm={10} md={10} lg={10}>
            <Accordion  style={{backgroundColor:"black", display: "flow-root",padding: "0px 5px"}}>
          <AccordionSummary 
          >
             <NavLink to="/create_listing_1">
              <div className={classes.createprofile1}>
              <img src={posting} alt={posting} />
                <h4 className={classes.createprofiletext}>My Posting</h4>
              </div>
            </NavLink> 
             </AccordionSummary>
          <AccordionDetails   style={{ display: "flow-root", padding: "0px 28px 18px"}}>
          <Grid item xs={5} sm={2} md={10} lg={10}>
            <NavLink to="/listing">
              <div className={classes.createposting}>
                <h4 className={classes.createpostingtext}>All Posting</h4>
              </div>
            </NavLink>
          </Grid>
          <Grid item xs={5} sm={2} md={10} lg={10}>
            <NavLink to="/MostRecent">
              <div className={classes.createposting}>
             
                <h4 className={classes.createpostingtext}>Most Recent</h4>
              </div>
            </NavLink>
          </Grid>
          <Grid item xs={5} sm={2} md={10} lg={10}>
            <NavLink to="/Active">
              <div className={classes.createposting}>
             
                <h4 className={classes.createpostingtext}>Active</h4>
              </div>
            </NavLink>
          </Grid>
          <Grid item xs={5} sm={2} md={10} lg={10}>
            <NavLink to="/InActive">
              <div className={classes.createposting}>
                <h4 className={classes.createpostingtext}>In Active</h4>
              </div>
            </NavLink>
          </Grid>
       
          </AccordionDetails>
        </Accordion>
          </Grid>
          <Grid item xs={5} sm={10} md={10} lg={10}>
            <Accordion  style={{backgroundColor:"black", display: "flow-root",padding: "0px 5px"}}>
          <AccordionSummary 
          >
             <NavLink to="/MyOrder">
              <div className={classes.createprofile1}>
              <img src={posting} alt={posting} />
                <h4 className={classes.createprofiletext}>My Order's  </h4><Box num={"01"}></Box>
              </div>
            </NavLink> 
             </AccordionSummary>
          <AccordionDetails   style={{ display: "flow-root", padding: "0px 28px 18px"}}>
          <Grid item xs={5} sm={2} md={10} lg={10}>
            <NavLink to="/Unpaid">
              <div className={classes.createposting}>
                <h4 className={classes.createpostingtext}>Unpaid </h4> <Box num={"01"}></Box>
              </div>
            </NavLink>
          </Grid>
          <Grid item xs={5} sm={2} md={10} lg={10}>
            <NavLink to="/InProgress">
              <div className={classes.createposting}>
                <h4 className={classes.createpostingtext}>In Progress  </h4><Box num={"00"}></Box>
              </div>
            </NavLink>
          </Grid>
          <Grid item xs={5} sm={2} md={10} lg={10}>
            <NavLink to="/Completed">
              <div className={classes.createposting}>
                <h4 className={classes.createpostingtext}>Completed  </h4><Box num={"00"}></Box>
              </div>
            </NavLink>
          </Grid>
          </AccordionDetails>
        </Accordion>
          </Grid>
         
          <Grid item xs={5} sm={10} md={10} lg={10}>
            <NavLink to="/MyLike">
              <div className={classes.createprofile}>
              <img src={heart} alt={heart} />
                <h4 className={classes.createprofiletext}>My Like's</h4>
              </div>
            </NavLink>
          </Grid>
        
          <Grid item xs={5} sm={10} md={10} lg={10}>
            <NavLink to="/Logout">
              <div className={classes.createprofile}>
              <img src={logout} alt={logout} />
                <h4 className={classes.createprofiletext}>Logout</h4>
              </div>
            </NavLink>
          </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={8} lg={8} className={classes.select2}>
          <Switch>
         <Route exact path='/AllPosting' component={AllPosting}/> 
         <Route exact path='/MyOrder' component={MyOrder}/> 
         <Route exact path='/Unpaid' component={UnpaidMain}/>
         <Route exact path='/InProgress' component={ProgressMain}/>
         <Route exact path='/Complete' component={Complete}/> 
         </Switch>
        </Grid>
        </Grid>
  
</SecondaryTemplate>
        </>
    );
};
export {SideMenu2};