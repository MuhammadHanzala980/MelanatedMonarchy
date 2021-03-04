import React from "react";
import classes from './InProgress.module.css';
import { Grid, Typography } from "@material-ui/core";
import { SecondaryTemplate } from "../../../components/Template/Secondary-template";
import SideMenu from '../../../components/Navigation/Navigation';
import { Box } from "../../../components/ListingBoxNo/Box";
import progress from '../../../assets/images/Follow/laptop.svg'




const InProgress = () => {
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
                                <Typography className={classes.text} >My Order’s  {' > '}  In Progress   <Box num={'56'} />  </Typography>
                            </Grid>
                        </Grid>

                        <Grid className={classes.display} container justify='center' direction='column' alignItems='center'  >
                            <div>
                                <img src={progress} alt='progress' />
                            </div>
                            <div className={classes.msg} >No Transactions In Progress.</div>
                            <div><button className={classes.btn} >Continue Shopping</button></div>
                        </Grid>
                    </Grid>
                </Grid>

            </SecondaryTemplate>
        </div>
    );
};

export default InProgress;