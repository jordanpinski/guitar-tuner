import React, { useState } from 'react';
import { Dropdown } from 'semantic-ui-react';

interface TuningSelectProps {
  setCurrentTuning: any
  currentTuning: any
  options: any
}

const TuningSelect: React.FC<TuningSelectProps> = (props) => {

  const [value, setValue] = useState<string>(props.currentTuning.text);

  const onChange = (event: any, target: any) => {

    // Set the currentTuning object.
    target.options.forEach((option: any) => {
      if (option.value === target.value) {
        setValue(option.text)
        props.setCurrentTuning(option);
      }
    });
  }

  return(
    <>
      <Dropdown
        selection
        options={props.options}
        onChange={onChange}
        placeholder={value}
        value={value}
      />
    </>
  )
}

export default TuningSelect;