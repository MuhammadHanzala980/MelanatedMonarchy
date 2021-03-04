import { Typography, Grid, Container } from "@material-ui/core";
import React, { useState } from "react";
import classes from "./Application.module.css";
import { SecondaryTemplate } from "../../components/Template/Secondary-template";
import user from "../../assets/images/ApplicationReview/user.svg";
import review from "../../assets/images/ApplicationReview/review.svg";
import check from "../../assets/images/ApplicationReview/check.svg";
import shop from "../../assets/images/ApplicationReview/shop.svg";
import correct from "../../assets/images/ApplicationReview/correct.svg";



const ApplicationReview = () => {

        const [searchInput, setsearchInput] = useState("");

        console.log(searchInput);

        return (
                <>

                        <SecondaryTemplate>
                                <Container className={classes.Application}>
                                        <Grid container className={classes.main}>
                                                <Grid item xs={4} className={classes.div}>
                                                        <img src={user} className={classes.check} /><span className={classes.text}>Account</span>
                                                        <img src={check} className={classes.check} />
                                                </Grid>
                                                <Grid item xs={4} className={classes.div}>
                                                        <img src={shop} className={classes.check} /><span className={classes.text}>Bussiness Information</span>
                                                        <img src={check} className={classes.check} />
                                                </Grid>
                                                <Grid item xs={4} className={classes.div}>
                                                        <img src={review} className={classes.check} /><span className={classes.text}>Application Review</span>
                                                </Grid>
                                        </Grid>
                                        <Grid container className={classes.content}>
                                                <Grid item xs={12} >
                                                        <img className={classes.img} src={correct} /> 
                                                </Grid>
                                                <Grid item xs={12} >
                                                        <h3 className={classes.head} >
                                                                Application Submitted!
</h3>
                                                </Grid>
                                                <Grid item xs={12} className={classes.detail}>
                                                        <span className={classes.textdet}>You will review and decide whether you sell on 5miles Dash</span><br />
                                                        <span className={classes.textdet}>Please check the email in 7 business days for details.</span>
                                                </Grid>
                                        </Grid>
                                </Container>
                        </SecondaryTemplate>


                </>
        );
};
export { ApplicationReview };