import React from 'react'
import classes from './listingBox.module.css'
const Box = ({num}) => {
    return (
        <span className={classes.div}>
        <b  className={classes.one}>{num}</b>
      </span>
    )
};

export {Box};