import React from 'react';
// import Select from 'react-select';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

interface TuningSelectProps {
  setCurrentTuning: any
  currentTuning: any
  options: any
}

const useStyles = makeStyles({
  inputLabel: {
    color: 'white !important',
    transform: 'translate(0, 0) scale(0.75)',
    fontFamily: '"Open Sans", sans-serif',
  },
  select: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    fontFamily: '"Open Sans", sans-serif',
    height: 39,
  },
});

const TuningSelect: React.FC<TuningSelectProps> = (props) => {

  const onChange = (event: any, target: any) => {
    props.setCurrentTuning(target.props['data-value']);
  }

  const styles = useStyles();

  return(
    <>
      <InputLabel className={styles.inputLabel} id="tuning-select-label">Tuning</InputLabel>
      <Select
        labelId={'tuning-select-label'}
        id={'tuning-select'}
        value={props.currentTuning.value}
        onChange={onChange}
        className={styles.select}
        displayEmpty={true}
        color="primary"
      >
        {props.options.map( (option: any, index: number) => {
          return <MenuItem key={index} value={option.value} data-value={option}>{option.label}</MenuItem>
        })}
      </Select>
    </>
  )
}

export default TuningSelect;