import "./App.css";
import * as Tone from "tone";
import Octave from './components/Octave';

export default function App() {


  return (
    <div className="App">
      <h1>Piano App Hackathon</h1>
    <div className='bigBoard'> 
      <Octave pitch={4} showNote={true}/>
      <Octave pitch={5}/>
      {/* <Octave pitch={6}/> */}
    </div>
  
    </div>
  );
}
