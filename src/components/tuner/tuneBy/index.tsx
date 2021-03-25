import React, { useState } from 'react';
import { Dropdown } from 'semantic-ui-react';

interface TuneBy {
  setCurrentTuning: any
  currentTuning: any
  options: any
}

const TuneBy: React.FC<TuneBy> = (props) => {

  const onChange = (event: any, target: any) => {

  }

  const options = [
    {
      value: 'tune-by-ear',
      label: 'Tune By Ear'
    },
    {
      value: 'tune-by-tuner',
      label: 'Tune By Tuner'
    }
  ]

  return(
    <>
      <Dropdown
        selection
        options={options}
        onChange={onChange}
        placeholder="Tune By Ear"
        value="Tune By Ear"
        disabled={true}
      />
    </>
  )
}

export default TuneBy;