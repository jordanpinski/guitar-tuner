import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TuningLoop from './tuningLoop';
import TuningSelect from './tuningSelect';
import LogoSVG from '../../assets/logo.svg';
import './Header.css';

interface HeaderProps {
  setIsLooping: any
  isLooping: boolean
  setCurrentTuning: any
  currentTuning: any
  options: any
}

const Header: React.FC<HeaderProps> = (props) => {

  return (
    <header id="main-header">

      <div className="container">
        <div className="row">
          <div className="logo">
            <a href="/" title="Guitar Tuner"></a>
            <object type="image/svg+xml" data={LogoSVG}></object>

          </div>

          <div className="menu">

            <FormControl>
              <TuningLoop setIsLooping={props.setIsLooping} isLooping={props.isLooping} />
            </FormControl>

            <FormControl>
              <TuningSelect
                setCurrentTuning={props.setCurrentTuning}
                currentTuning={props.currentTuning}
                options={props.options}
              />
            </FormControl>

          </div>
        </div>
      </div>

    </header>
  )
}

export default Header;