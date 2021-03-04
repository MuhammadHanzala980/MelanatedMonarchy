import React from 'react'
import { PrimaryTemplate, ListingBox,DragandDropFiles } from "../../components";
import classes from './createListing3.module.css';
import { NavLink } from "react-router-dom";

const CreateListing3 = (props) => {
    return (
        <PrimaryTemplate history={props.history}>
            <ListingBox num="4 / 4"/>
            <div className={classes.maindiv}>
                <div className={classes.header}>
                    <p>Images</p>
                </div>
                <div className={classes.centerdiv}>
                    <h5>This Posting Has 0 Images, Of A Maximum 24.</h5>
                    <h4>Upload Best Image First - It Will be Featured.</h4>
                    <DragandDropFiles/>
                </div>
                <NavLink to='/product_detail_approval'><button className={classes.continuebutton}>Continue</button></NavLink>
            </div>
        </PrimaryTemplate>
    )
};
export{CreateListing3};
