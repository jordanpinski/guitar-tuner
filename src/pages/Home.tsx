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
    <>
      <Header />
      <Tuner
        setCurrentTuning={props.setCurrentTuning}
        currentTuning={props.currentTuning}
        isLooping={props.isLooping}
        loopInterval={props.loopInterval}
        options={props.options}
      />
      <Footer />
    </>
  );
}

export default Home;