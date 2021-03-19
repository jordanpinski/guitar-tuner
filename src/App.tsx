import React, { useState } from 'react';
import Home from './pages/Home';
import tunings from './tunings.json';
import './App.css';

function App() {
  
  let tuningFromStorage: any = null;

  try {
    tuningFromStorage = JSON.parse(localStorage.getItem('current-tuning') || '');
  } catch (error) {
    console.log(error);
  }

  const [currentTuning, setCurrentTuning] = useState<any>(tuningFromStorage || tunings[0]);
  const [isLooping , setIsLooping] = useState<boolean>(true);
  const [loopInterval, setLoopInterval] = useState<number>(3000);

  const handleCurrentTuning = (tuning: any) => {
    setCurrentTuning(tuning);
    localStorage.setItem('current-tuning', JSON.stringify(tuning));
  }

  return (
    <div className="app">
      <Home 
        currentTuning={currentTuning}
        setCurrentTuning={handleCurrentTuning}
        setIsLooping={setIsLooping}
        isLooping={isLooping}
        loopInterval={loopInterval}
        setLoopInterval={setLoopInterval}
        options={tunings}
      />
    </div>
  );
}

export default App;
