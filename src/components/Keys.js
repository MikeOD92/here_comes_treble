import React from 'react'
import { Switch } from 'react-router';
import * as Tone from "tone";


export default function Keys(props){

   

    const {keyType, note, pitch} = props;
    let { iterator } = props;

    // const notesArr = ['C','C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    
    const sound = (e) => {
        e.preventDefault();
        const synth = new Tone.Synth().toDestination();
        
        synth.triggerAttack(`${note}${pitch}`);

        if(note === props.testNote){
                let keysW = document.getElementsByClassName('whiteKey');
                let keysB = document.getElementsByClassName('blackKey');

                let arrW = Array.from(keysW)

                arrW.map((key)=>{
                    key.style.backgroundColor="rgb(252,255,255)";
                })

                let arrB = Array.from(keysB)

                arrB.map((key)=>{
                    key.style.backgroundColor="rgb(0,0,0)";
                })

                props.setiterator(iterator += 1)
            }else{
                e.target.style.backgroundColor='rgb(252,104,104)';
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


