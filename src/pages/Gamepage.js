
import React from 'react';
import * as Tone from "tone";
import { useState, useEffect } from 'react';
import Octave from '../components/Octave';
import Piano from '../components/Piano.js'
import Keys from '../components/Keys.js'
import '../components/Piano.css'
import CustomStaff from "../components/CustomStaff";
import { Redirect } from 'react-router-dom'
import { getByPlaceholderText } from '@testing-library/dom';

export default function GamePage(props) {

    // const mlittleLamb = ['A','G','F','G', 'A', 'A', 'A', 'G', 'G', 'G', 'A', 'A', 'A', 'A', 'G', 'F', 'G', 'A', 'A', 'A', 'A', 'G', 'G', 'A', 'G', 'F'];

    const [iterator, setiterator] = useState(0);

    useEffect(() => {
        setNote((props.song[iterator]))
    }, [iterator])

    const [note, setNote] = useState((props.song[iterator])); // this will be props passed in for the song selected
    //useState(props.song[iterator]) 
    // let sortedOutput = [];
    // const songSort = (song) => {
    //     let time = [0]
    //     song.map((note)=>{
    //         sortedOutput.push({
    //             time: time.join(''),
    //             note: `${note}4`,
    //             velocity: 0.4
    //         })
    //         time.map((unit, index)=>{
    //             if(unit === Number && index !== 0){
    //                 unit +=2;
    //             }
    //         })
    //         time.push(":2");
    //     })
    //     return sortedOutput;
    // }

    if(iterator >= props.song.length){
        alert('You played the Song!');
        return <Redirect to='/play'/>
        window.location.assign('/');

        // songSort(mlittleLamb);

        // const synth = new Tone.Synth().toDestination();
        // mlittleLamb.forEach((note)=>{
        //     synth.triggerAttackRelease(note, '8n');
        // })
        
        // const part = new Tone.Part(((time, value) => {
        //     // the value is an object which contains both the note and the velocity
        //     synth.triggerAttackRelease(value.note, "8n", time, value.velocity);
        // }), sortedOutput).start(0);
        // Tone.Transport.start();

        // const timeouts = () =>{
        //     setiterator(0);
        //     Tone.Transport.stop()
        // }
        // console.log(sortedOutput); 
        // with this the time values in the array of obj is giving us a problem, 
        // this assumes this will take a variable at all. 
        // look on the documentation how its noted 0:2, 0:75 ... 
        
        // setTimeout(()=>timeouts(), 5000);

    }

    return (
    <div id="myGame">
    
    {props.songTitle?(<h1>{props.songTitle}</h1>):('')}

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