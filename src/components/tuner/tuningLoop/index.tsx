import React from 'react';
// import Select from 'react-select';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Switch from '@material-ui/core/Switch';

interface TuningLoopProps {
  setIsLooping(isLooping: boolean): any
  isLooping: boolean
}

const useStyles = makeStyles({
  inputLabel: {
    color: 'white !important',
    transform: 'translate(0, 0) scale(0.75)',
    fontFamily: '"Open Sans", sans-serif',
  },
  switch: {
    marginTop: '1rem',
    marginRight: '1rem',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
  },
});

const TuningLoop: React.FC<TuningLoopProps> = (props) => {

  const styles = useStyles();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setIsLooping(event.target.checked);
  }

  return(
    <>
      <InputLabel className={styles.inputLabel} id="tuning-select-label">Loop</InputLabel>
      <Switch
        checked={props.isLooping}
        color="primary"
        className={styles.switch}
        onChange={onChange}
      />
    </>
  )
}

export default TuningLoop;