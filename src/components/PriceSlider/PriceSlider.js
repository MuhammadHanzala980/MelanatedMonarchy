import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
const useStyles = makeStyles((theme) => ({
    root: {
      width: 100 + theme.spacing(3) * 2,
    },
    margin: {
      height: theme.spacing(0),
    },
  }));


  function ValueLabelComponent(props) {
    const { children, open, value } = props;
  
    return (
      <Tooltip open={open}  enterTouchDelay={0} placement="bottom" title={value}>
        {children}
      </Tooltip>
    );
  }
  
  ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
  };
  

  
const AirbnbSlider = withStyles({
    root: {
      color: '#E7C68E',
      height: 3,
      padding: '10px 0',
    },
    thumb: {
      height: 12,
      width: 12,
      backgroundColor: '#E7C68E',
      border: '1px solid currentColor',
      marginTop: -4,
      marginLeft: 0,
      boxShadow: '0',
      '&:focus, &:hover, &$active': {
        boxShadow: '#E7C68E 0 ',
      },
      '& .bar': {
        // display: inline-block !important;
        height: 9,
        width: 1,
        backgroundColor: 'currentColor',
        marginLeft: 1,
        marginRight: 1,
      },
    },
    active: {},
    track: {
      height: 3,
    },
    rail: {
      color: '#9D7A54',
      opacity: 1,
      height: 3,
    },
  })(Slider);
  
  function AirbnbThumbComponent(props) {
    return (
      <span {...props}>
        
      </span>
    );
  }
  const PriceSlider=()=> {
    const classes = useStyles();
  
    return (
        <div className={classes.root}>
  <div className={classes.margin} />
  <Typography gutterBottom>Price</Typography>
  <AirbnbSlider
    ThumbComponent={AirbnbThumbComponent}
    valueLabelDisplay="auto"
    ValueLabelComponent={ValueLabelComponent}
    getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
    defaultValue={[0, 20]}
  />
  </div>
    );
}
export {PriceSlider};