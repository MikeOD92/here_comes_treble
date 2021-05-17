import "./App.css";
import * as Tone from "tone";
import Octave from './components/Octave';

import Piano from './components/Piano.js'
import './components/Piano.css'

export default function App() {


  return (
    <div className="App">
      <h1>Piano App Hackathon</h1>
      
      <div className='bigBoard'> 
        <Octave pitch={4} showNote={true}/>
        <Octave pitch={5}/>
        <Octave pitch={6}/>
      </div>

      <div className="newPiano">
        <Piano/>
      </div>

    </div>
  );
}
