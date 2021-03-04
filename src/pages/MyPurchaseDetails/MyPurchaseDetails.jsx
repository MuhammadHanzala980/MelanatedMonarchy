import React from "react";
import classes from './MyPurchaseDetails.module.css';
import { Grid, Typography } from "@material-ui/core";
import { SecondaryTemplate } from "../../components/Template/Secondary-template";
import SideMenu from '../../components/Navigation/Navigation';
import order from '../../assets/images/Allposting/order.png'

const MypurchaseDetails = () => {
    return (
        <div>
            <SecondaryTemplate>
                <Grid className={classes.draft} container justify="space-evenly" >
                    <Grid item xs={12} sm={12} md={3} lg={3} >
                        <SideMenu />
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={8} className={classes.select2}>
                        <Grid className={classes.Pmain} container justify='space-between' >
                            <Grid item xs={12} sm={4} md={4} lg={4} >
                                <Typography className={classes.text} >Order ID : 10987    </Typography>
                            </Grid>
                            <Grid item xs={12} sm={5} md={5} lg={5} justify='right' >
                                <Typography className={classes.date} >Aug 10, 2020</Typography>
                            </Grid>
                        </Grid>

                        <Grid className={classes.draft} container  >
                            <Grid container >
                                <Grid item xs={12} container className={classes.card}  >
                                    <Grid className={classes.imgContainer} >
                                        <img src={order} alt='order' className={classes.order} />
                                    </Grid>
                                    <Grid   >
                                        <div className={classes.info} >
                                            <b>Sun Glass Multi Shades</b>
                                            <br />
                                            <span>Color : Purple</span>
                                        </div>
                                        <div className={classes.price} >
                                            <b>$56</b>
                                            <span> x 1</span>
                                        </div>
                                    </Grid>
                                </Grid>

                            </Grid>
                            <Grid item xs={12} sm={12} container className={classes.card}  >
                                <Grid className={classes.imgContainer} >
                                    <img src={order} alt='order' className={classes.order} />
                                </Grid>
                                <Grid  >
                                    <div className={classes.info} >
                                        <b>Sun Glass Multi Shades</b>
                                        <br />
                                        <span>Color : Purple</span>
                                    </div>
                                    <div className={classes.price} >
                                        <b>$56</b>
                                        <span> x 1</span>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </SecondaryTemplate>
        </div>
    );
};

export default MypurchaseDetails;