import React from 'react'
import * as Tone from "tone";


export default function Keys(props){

    const synth = new Tone.Synth().toDestination();

    const {keyType, note, pitch} = props;

    const sound = () => {
        synth.triggerAttackRelease(`${note}${pitch}`, "8n");
        console.log(`you played ${note}`)
    }

    return(
        <div className={`key ${keyType}`} onClick={() => sound()}>{note}</div>
    )
}


