import React from 'react'
import { PrimaryTemplate, ListingBox, } from "../../components";
import DragandDropFiles from '../../components/DragandDropFiles/draganddropfiles'
import classes from './ImageUploder.module.css';
import { NavLink } from "react-router-dom";

const ImageUploder = () => {
    return (
            <div className={classes.maindiv}>
                <div className={classes.header}>
                    <p>Images</p>
                </div>
                <div className={classes.centerdiv}>
                    <DragandDropFiles />
                </div>
            </div>
    )
};
export { ImageUploder };
