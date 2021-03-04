import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import {ReactComponent as Left} from '../../assets/images/select/Left.svg';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width:'100%',
  },
  selectEmpty: {
    color: '#E7C68E',
    margin:'0 1rem',
  }
}));

const PopularSeller = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    name: '',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <NativeSelect
          className={classes.selectEmpty}
          value={state.Category}
          IconComponent={()=><Left/>}
          onChange={handleChange}
        >
          <option value="" disabled>
            Angela
          </option>
          <option value={10}> Coin & Lequidator</option>
          <option value={20}>Arthup</option>
          <option value={30}>Yocili</option>
        </NativeSelect>
      </FormControl>

    </div>
  );
};

export {PopularSeller};