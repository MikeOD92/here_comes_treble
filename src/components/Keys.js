import React from 'react'
import { Switch } from 'react-router';
import * as Tone from "tone";


export default function Keys(props){

    const synth = new Tone.Synth().toDestination();

    const {keyType, note, pitch} = props;
    let { iterator } = props;

    const notesArr = ['C','C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    
    const sound = (e) => {
        e.preventDefault();
        synth.triggerAttack(`${note}${pitch}`);
        if(note === props.testNote){
                // setTimeout(() => alert('You Clicked the right note'), 300);
                props.setiterator(iterator += 1)
            }else{
                // setTimeout(() => alert('You Clicked the wrong note try again'), 300);
                // alert(e.target[0])
                console.log(e.target)
                
            }
            synth.triggerRelease("+0.25");
        
    }
    const img = (note) =>{
        switch(note){
            case "A":
                return(<img src='https://i.imgur.com/AvLq4aP.png' className="icon " />) 
                break;
            case "A#":
                return(<div><img src='https://i.imgur.com/AvLq4aP.png'className="icon sharpIcon "/>#</div>)
                break;
            case "C":
                return(<img src='https://i.imgur.com/hTn810D.png' className="icon "/>) 
                break;
            case "C#":
                return(<div><img src='https://i.imgur.com/hTn810D.png' className="icon sharpIcon"/>#</div>)
                break;
            case "D":
                return(<img src='https://i.imgur.com/eb2qMJY.png' className="icon" />) 
                break;
            case "D#":
                return(<div><img src='https://i.imgur.com/eb2qMJY.png' className="icon sharpIcon"/>#</div>)
                break;
            case "E":
                return(<img src='https://i.imgur.com/1G7H6cv.png' className="icon" />) 
                break;
            case "E#":
                return(<div><img src='https://i.imgur.com/1G7H6cv.png' className="icon sharpIcon"/>#</div>)
                break;
            case "F":
                return(<img src='https://i.imgur.com/EToiP8v.png' className="icon" />) 
                break;
            case "F#":
                return(<div><img src='https://i.imgur.com/EToiP8v.png' className="icon sharpIcon"/>#</div>)
                break;

            case "G":
                return(<img src='https://i.imgur.com/whLPx2N.png' className="icon" />) 
                break;
            case "G#":
                return(<div><img src='https://i.imgur.com/whLPx2N.png' className="icon sharpIcon" />#</div>)
                break;
            case "B":
                return(<img src='https://i.imgur.com/3CbRb0M.png' className="icon" />) 
                break;
        }
    }
    return(
        <div className={`key ${keyType}`} onClick={(e) => sound(e)}>{img(note)}</div>
    )
}


