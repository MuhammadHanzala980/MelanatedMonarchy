import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

 const AntTabs = withStyles({
    indicator: {
      backgroundColor: ' #E7C68E',
      
    },
  })(Tabs);
  
  const AntTab = withStyles((theme) => ({
    root: {
      textTransform: 'none',
      minWidth: 20,
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing(0),
      fontFamily: [
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        color: '#E7C68E',
        opacity: 1,
      },
      '&$selected': {
        border: '2px solid #E7C68E',
        color: '#1890ff',
        fontWeight: theme.typography.fontWeightMedium,
      },
      '&:focus': {
        color: '#E7C68E',
      },
    },
    selected: {},
  }))((props) => <Tab disableRipple {...props} />);
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    padding: {
      padding: theme.spacing(1),
    },
    demo1: {
      backgroundColor: 'black',
    },
    demo2: {
      backgroundColor: '#2e1534',
    },
  }));
  const Filter=()=>{
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return(
        <div className={classes.root}>
      <div className={classes.demo1}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="All" />
          <AntTab label="Owner" />
          <AntTab label="Dealer" />
        </AntTabs>
        <Typography className={classes.padding} />
      </div>
      </div>
    )
  };
  export {Filter};