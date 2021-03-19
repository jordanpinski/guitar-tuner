import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Tuner from '../components/tuner';

interface HomeProps {
  setIsLooping: any
  isLooping: boolean
  setCurrentTuning: any
  currentTuning: any
  loopInterval: number
  setLoopInterval: any
  options: any
}

const Home: React.FC<HomeProps> = (props) => {
  return (
    <div>
      <Header
        currentTuning={props.currentTuning}
        setCurrentTuning={props.setCurrentTuning}
        setIsLooping={props.setIsLooping}
        isLooping={props.isLooping}
        options={props.options}
      />
      <Tuner
        currentTuning={props.currentTuning}
        isLooping={props.isLooping}
        loopInterval={props.loopInterval}
      />
      <Footer />
    </div>
  );
}

export default Home;