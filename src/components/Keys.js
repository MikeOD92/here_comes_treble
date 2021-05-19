import React from 'react'
import * as Tone from "tone";


export default function Keys(props){

    const synth = new Tone.Synth().toDestination();

    const {keyType, note, pitch} = props;
    let { iterator } = props;

    const notesArr = ['C','C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    
    const sound = () => {
        synth.triggerAttackRelease(`${note}${pitch}`, "8n");
        if(note === props.testNote){
                // setTimeout(() => alert('You Clicked the right note'), 300);
                props.setiterator(iterator += 1)
            }else{
                setTimeout(() => alert('You Clicked the wrong note try again'), 300);
            }
        
    }

    return(
        <div className={`key ${keyType}`} onClick={() => sound()}>{note}</div>
    )
}


