import React from 'react'
import classes from './listingBox.module.css'
const ListingBox = ({num}) => {
    return (
        <div className={classes.topdiv}>
        <h3>Post Item <p className={classes.oneistofour}>{num}</p></h3>
      </div>
    )
};

export {ListingBox};
