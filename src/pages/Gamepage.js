
import * as Tone from "tone";
import Octave from '../components/Octave';
import React from 'react';
import Piano from '../components/Piano.js'
import Keys from '../components/Keys.js'
import '../components/Piano.css'

export default function GamePage() {
return (
    <div>
    <h1>Piano App Hackathon</h1>

    <div className="newPiano">
    <Piano>
        {/* <Octave pitch="3"/> */}
        <Octave pitch="4"/>
        {/* <Octave pitch="5"/> */}
        <Keys keyType = "whiteKey" note="C" pitch="5"/>
    </Piano>
    </div>

    </div>
    )
}