import { Container, Grid } from '@material-ui/core';
import { Filter } from '../../components/Filter';
import React from 'react';
import { CustomCheckbox, PrimaryTemplate } from '../../components';
import { PriceSlider } from '../../components/PriceSlider';
import { NavLink } from 'react-router-dom';
import classes from './Product-list-1.module.css';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import downarrow from "../../assets/images/Header2/downarrow.svg";
import Kelly from "../../assets/images/bidding/Kelly.png";
import Samsung from "../../assets/images/bidding/Samsung.png";
import Winston from "../../assets/images/bidding/Winston.png";
import phone from "../../assets/images/Draft/phone.png";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
const ProductList=(props)=>{
return(
    <>
<PrimaryTemplate history={props.history}>
<Container>
<Grid container>
<Grid container xs={12} sm={4} md={3} className={classes.Filterbox}>
   
<Grid item xs={12} >
   <p className={classes.Filter}>Filter</p> 
</Grid>
<Grid container xs={10}>
<Filter></Filter>

</Grid>
<Grid container xs={12}>
    <PriceSlider></PriceSlider>
</Grid>
<Grid container>
<Grid item xs={12}>
    Make & Model
</Grid>
<Grid item xs={4} className={classes.box} >
          <NavLink to="/create_listing_1" className={classes.createtext}>
            <div className={classes.createbtn}>
              <h4 className={classes.createtext}>Min</h4>
            </div>
          </NavLink>
        </Grid>
        <Grid item xs={4} >
          <NavLink to="/create_listing_1" className={classes.createtext}>
            <div className={classes.createbtn}>
              <h4 className={classes.createtext}>Max</h4>
            </div>
          </NavLink>
        </Grid>
        <Grid container>
            <Grid item>
            <CustomCheckbox text="CryptoCurrency ok" />
            <CustomCheckbox text="delivery available" />
            </Grid>
        </Grid>
        <Grid item xs={5} sm={10} md={10} lg={12}>
          <Accordion  style={{backgroundColor:"black", display: "flow-root",padding: "0px 0px"}}>
        <AccordionSummary className={classes.own}
        >
           <span  className={classes.createtext}>
            <div className={classes.createlisting}>
              <h4 className={classes.createlisttext}>language of posting</h4>
              <img className={classes.img} alt={downarrow} src={downarrow} />
            </div>
          </span> 
           </AccordionSummary>
        <AccordionDetails   style={{ display: "flow-root", padding: "0px 0px 0px"}}>
        </AccordionDetails>
      </Accordion>
</Grid>
     <Grid item xs={5} sm={10} md={10} lg={12}>
          <Accordion  style={{backgroundColor:"black", display: "flow-root",padding: "0px 0px"}}>
        <AccordionSummary className={classes.own}
        >
           <span  className={classes.createtext}>
            <div className={classes.createlisting}>
              <h4 className={classes.createlisttext}>Condition</h4>
              <img className={classes.img} alt={downarrow} src={downarrow} />
            </div>
          </span> 
           </AccordionSummary>
        <AccordionDetails   style={{ display: "flow-root", padding: "0px 0px 0px"}}>
        </AccordionDetails>
      </Accordion>
</Grid>
<Grid container>
<Grid item xs={6} >
          <NavLink to="/ProductList" className={classes.createtext}>
            <div className={classes.reset}>
              <h4 className={classes.resettext}>Reset</h4>
            </div>
          </NavLink>
        </Grid>
        <Grid item xs={5} >
          <NavLink to="/ProductList" className={classes.createtext}>
            <div className={classes.createlisting1}>
              <h4 >Search</h4>
            </div>
          </NavLink>
        </Grid>
        <Grid container className={classes.box1}>
            <Grid xs={12}>
                <ul>
                    <li>
                        Safety tips
                    </li>
                    <li>
                        Prohibited item
                    </li>
                    <li>
                        Product recalls
                    </li>
                    <li>
                        avoiding recalls
                    </li>
                </ul>
            </Grid>
        </Grid>
</Grid>
</Grid>
</Grid>
    <Grid container  xs={12} sm={8} md={9} >
       <Container >
       <Grid container className={classes.main} >
           <Grid item  >
               <span className={classes.mainText}>Mobiles </span><span>Total result found(2)</span>
           </Grid>
       </Grid>
       <Grid container className={classes.main} >
    <Grid item xs={3} sm={3} className={classes.block} >
<img className={classes.image} src={phone}/>
    </Grid>
    <Grid item xs={3} sm={3} md={3} className={classes.Detail} >
        <span>
            Iphone 7s 124gb<br></br>
            <LocationOnIcon className={classes.icon}> </LocationOnIcon> 
            Tokoyo
        </span>
        <h4 className={classes.text}>
            $140.00
        </h4>
    </Grid>
    <Grid item xs={2} sm={2} md={2} className={classes.border}>
      <FavoriteBorderIcon className={classes.icon1}/>
       <ShareIcon className={classes.icon1}/>
    </Grid>
    <Grid item xs={5} sm={3} md={3} className={classes.info} >
    <img src={Kelly} className={classes.infoImg}/>
        <span className={classes.text}>
           Kelly Witson
        </span>
    </Grid>
   
</Grid>
    <Grid container className={classes.main} >
    <Grid item xs={3} sm={3} className={classes.block} >
<img className={classes.image} src={Samsung}/>
    </Grid>
    <Grid item xs={3} sm={3} md={3} className={classes.Detail} >
        <span>
            Iphone 7s 124gb<br></br>
            <LocationOnIcon className={classes.icon}></LocationOnIcon> 
             Tokoyo
        </span>
        <h4 className={classes.text}>
            $140.00
        </h4>
    </Grid>
    <Grid item xs={2} sm={2} md={2} className={classes.border}>
      <FavoriteBorderIcon className={classes.icon1}/>
       <ShareIcon className={classes.icon1}/>
    </Grid>
    <Grid item xs={5} sm={3} md={3} className={classes.info} >
    <img src={Winston} className={classes.infoImg}/>
        <span className={classes.text}>
           Ethan Cook
        </span>
    </Grid>
</Grid>


       </Container>

       
    </Grid>
</Grid>





   
    
</Container>

</PrimaryTemplate>

    </>
)
};
export {ProductList};