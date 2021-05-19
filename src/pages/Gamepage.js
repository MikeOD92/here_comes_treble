
import React from 'react';
import { useState, useEffect } from 'react';
import Octave from '../components/Octave';
import Piano from '../components/Piano.js'
import Keys from '../components/Keys.js'
import '../components/Piano.css'
import CustomStaff from "../components/CustomStaff";

export default function GamePage() {

    const mlittleLamb = ['A','G','F','G', 'A', 'A', 'A', 'G', 'G', 'G', 'A', 'A', 'A', 'A', 'G', 'F', 'G', 'A', 'A', 'A', 'A', 'G', 'G', 'A', 'G', 'F'];

    const [iterator, setiterator] = useState(0);

    useEffect(() => {
        setNote(mlittleLamb[iterator])//(props.song[iterator]) 
    }, [iterator])

    const [note, setNote] = useState(mlittleLamb[iterator]); // this will be props passed in for the song selected
    //useState(props.song[iterator]) 

return (
    <div>
    <h1>Piano App Hackathon</h1>

    <div className="newPiano">
        <CustomStaff note={note}/>
    <Piano>
        {/* <Octave pitch="3"/> */}
        <Octave pitch="4" testNote={note} setNote={setNote} iterator={iterator} setiterator={setiterator}/>
        {/* <Octave pitch="5"/> */}
        <Keys keyType = "whiteKey" note="C" pitch="5" testNote={note} setNote={setNote} iterator={iterator} setiterator={setiterator}/>
    </Piano>
    </div>

    </div>
    )
}