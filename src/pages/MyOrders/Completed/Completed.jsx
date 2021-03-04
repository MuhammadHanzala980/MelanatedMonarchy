import React from "react";
import classes from './Completed.module.css';
import { Grid, Typography } from "@material-ui/core";
import { SecondaryTemplate } from "../../../components/Template/Secondary-template";
import SideMenu from '../../../components/Navigation/Navigation';
import order from '../../../assets/images/Allposting/order.png'



import { Box } from "../../../components/ListingBoxNo/Box";








const Completed = () => {
    return (
        <div>
            <SecondaryTemplate>
                <Grid className={classes.draft} container justify="space-evenly" >
                    <Grid item xs={12} sm={12} md={3} lg={3} >
                        <SideMenu />
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={8} className={classes.select2}>
                        <Grid className={classes.Pmain} container justify='space-between' >
                            <Grid item xs={12}>
                                <Typography className={classes.text} >My Order’s  {' > '}  Completed   <Box num={'56'} />  </Typography>
                            </Grid>

                        </Grid>

                        <Grid className={classes.draft} container  >
                            <Grid container >
                                <Grid item xs={12} container className={classes.card}  >
                                    <Grid className={classes.imgContainer} >
                                        <img src={order} alt='order' className={classes.order} />
                                    </Grid>
                                    <Grid >
                                        <div className={classes.info} >
                                            iPhone 6s 256gb
                                            <br />
                                            <div className={classes.color} >
                                                Color :  <div className={classes.bol} >    </div>
                                            </div>
                                        </div>
                                        <div className={classes.price} >
                                            <b>$56</b>
                                            <span> x 1</span>
                                        </div>
                                        <div className={classes.status} >
                                            <button className={classes.statusBtn} >Total : 24.00  |  Closed</button> <button className={classes.buyagn} >Buy Again</button>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </SecondaryTemplate>
        </div>
    );
};

export default Completed;