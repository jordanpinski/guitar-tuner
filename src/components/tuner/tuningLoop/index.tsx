import React from 'react';
import Toggle from 'react-toggle';
import "react-toggle/style.css"
import './TuningLoop.css';

interface TuningLoopProps {
  setIsLooping(isLooping: boolean): any
  isLooping: boolean
}

const TuningLoop: React.FC<TuningLoopProps> = (props) => {

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setIsLooping(event.target.checked);
  }

  return (
    <Toggle
      icons={false}
      onChange={onChange}
    />
  )
}

export default TuningLoop;