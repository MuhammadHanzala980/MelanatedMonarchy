import classes from './List.module.css';
import React from 'react';
import { Grid } from "@material-ui/core";
import img from '../../assets/images/select/Arrow.svg'
const List = () => {
    return (
        <div className={classes.tableContainer} >
            <Grid container className={classes.table} >
                <Grid className={classes.tableHeader} container direction='row' >
                    <Grid xs={2} sm={2} xs={2} sm={2} md={2} lg={2} >Order ID</Grid>
                    <Grid xs={4} sm={4} md={4} lg={4} >Order Placed Date</Grid>
                    <Grid xs={2} sm={2} md={2} lg={2} >Total Price </Grid>
                    <Grid xs={2} sm={2} md={2} lg={2} >Status</Grid>
                    <Grid xs={2} sm={2} md={2} lg={2} >Action</Grid>
                </Grid>

                <Grid className={classes.tableItems} container direction='row' >
                    <Grid xs={2} sm={2} md={2} lg={2} >10876</Grid>
                    <Grid xs={4} sm={4} md={4} lg={4} >Aug 10, 2020</Grid>
                    <Grid xs={2} sm={2} md={2} lg={2} >$19</Grid>
                    <Grid xs={2} sm={2} md={2} lg={2} >Delivered</Grid>
                    <Grid xs={2} sm={2} md={2} lg={2} >Get Detail <img src={img} alt='arrow' width='10' /> </Grid>
                </Grid>

                <Grid className={classes.tableItems} container direction='row' >
                    <Grid xs={2} sm={2} md={2} lg={2} >40476</Grid>
                    <Grid xs={4} sm={4} md={4} lg={4} >Jun 23, 2020</Grid>
                    <Grid xs={2} sm={2} md={2} lg={2} >$23</Grid>
                    <Grid xs={2} sm={2} md={2} lg={2} >Cancelled</Grid>
                    <Grid xs={2} sm={2} md={2} lg={2} >Get Detail <img src={img} alt='arrow' width='10' /></Grid>
                </Grid>

            </Grid>
        </div>
    );
};

export default List;