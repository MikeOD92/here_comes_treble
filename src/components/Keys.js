import React from 'react'
import * as Tone from "tone";
// import './Piano.css'

class Keys extends React.Component{
    static defaultProps={
        keyType: "whiteKey",
        note: "C"
    }

    sound = (note, pitch) => {
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease(`${note}${pitch}`, "8n");
        console.log(`you played ${note}`)
    };

    render(){
        const {keyType, note, pitch} = this.props
        return (
            <div className={`key ${keyType}`} onClick={()=> this.sound(note, pitch)}>{note}</div>
        )
    }
}

export default Keys