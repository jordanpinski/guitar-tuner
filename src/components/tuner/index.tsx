import React, { useState, useEffect } from 'react';
import TuningSelect from './tuningSelect';
import useSound from 'use-sound';
import GuitarSVG from '../../assets/guitar-head.svg';
import './Tuner.css';

interface TunerProps {
  setCurrentTuning: any
  currentTuning: any
  isLooping: boolean
  loopInterval: number
  options: any
}

const Tuner: React.FC<TunerProps> = (props) => {

  const [currentString, setCurrentString] = useState<any>(null);
  const [currentInterval, setCurrentInterval] = useState<any>();

  const [playString1] = useSound(`./sounds/${props.currentTuning.strings[0].value}.mp3`);
  const [playString2] = useSound(`./sounds/${props.currentTuning.strings[1].value}.mp3`);
  const [playString3] = useSound(`./sounds/${props.currentTuning.strings[2].value}.mp3`);
  const [playString4] = useSound(`./sounds/${props.currentTuning.strings[3].value}.mp3`);
  const [playString5] = useSound(`./sounds/${props.currentTuning.strings[4].value}.mp3`);
  const [playString6] = useSound(`./sounds/${props.currentTuning.strings[5].value}.mp3`);

  useEffect(() => {

    if (props.isLooping === false) {
      setCurrentString(null);
    }

    return () => {
      clearInterval(currentInterval);
    }

  }, [props, currentString])

  const onClick = (string: any, index: number) => {

    // If the current string is clicked again, turn it off.
    if (currentString === string && props.isLooping) {
      setCurrentString(null);
      return;
    }

    switch (index) {
      case 0:
        playString1();
        if (props.isLooping) {
          clearInterval(currentInterval);
          setCurrentInterval(setInterval(playString1, props.loopInterval));
        }
        break;

      case 1:
        playString2();
        if (props.isLooping) {
          clearInterval(currentInterval);
          setCurrentInterval(setInterval(playString2, props.loopInterval));
        }
        break;

      case 2:
        playString3();
        if (props.isLooping) {
          clearInterval(currentInterval);
          setCurrentInterval(setInterval(playString3, props.loopInterval));
        }
        break;

      case 3:
        playString4();
        if (props.isLooping) {
          clearInterval(currentInterval);
          setCurrentInterval(setInterval(playString4, props.loopInterval));
        }
        break;

      case 4:
        playString5();
        if (props.isLooping) {
          clearInterval(currentInterval);
          setCurrentInterval(setInterval(playString5, props.loopInterval));
        }
        break;

      case 5:
        playString6();
        if (props.isLooping) {
          clearInterval(currentInterval);
          setCurrentInterval(setInterval(playString6, props.loopInterval));
        }
        break;

      default:
        break;
    }
    
    setCurrentString(string);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="tuner">
          <ul className="tuner-buttons">
            {props?.currentTuning?.strings.map( (string: any, index: number) => {
              const classList = currentString === string && props.isLooping ? 'current-string' : '';
              return (
                <li key={index} className={classList}>
                  <a  
                    href="#"
                    title={string.text.toUpperCase()}
                    onClick={() => { onClick(string, index) }}
                  >{string.text}</a>
                </li>
              )
            })}
            <li className="guitar-svg">
            <object type="image/svg+xml" data={GuitarSVG}></object>
            </li>
          </ul>
          <div className="tuner-settings">
            <TuningSelect
              currentTuning={props.currentTuning}
              setCurrentTuning={props.setCurrentTuning}
              options={props.options}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tuner;