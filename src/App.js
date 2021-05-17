import "./App.css";
import * as Tone from "tone";
import Octave from './components/Octave';

import Piano from './components/Piano.js'
import Keys from './components/Keys.js'
import './components/Piano.css'

export default function App() {


  return (
    <div className="App">
      <h1>Piano App Hackathon</h1>
      
      {/* <div className='bigBoard'> 
        <Octave pitch={4} showNote={true}/>
        <Octave pitch={5}/>
        <Octave pitch={6}/>
      </div> */}

      <div className="newPiano">
        <Piano>
          <Octave pitch="3"/>
          <Octave pitch="4"/>
          <Octave pitch="5"/>
          <Keys keyType = "whiteKey" note="C" pitch="6"/>
        </Piano>
      </div>

    </div>
  );
}
