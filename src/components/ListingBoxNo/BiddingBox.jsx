import React from 'react'
import classes from './listingBox.module.css'
const BiddingBox = ({ num }) => {
    return (
        <div className={classes.topdiv}>
            <h3>Post a Bidding <p className={classes.oneistofour}>{num}</p></h3>
        </div>
    )
};

export { BiddingBox };
