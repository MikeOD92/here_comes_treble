import Keys from './Keys.js'
// import * as Tone from "tone";

export default function Octave(props) {

return (
    <div className="keyboard octave">

        <Keys keyType = "whiteKey" note="C" pitch={props.pitch} testNote={props.testNote} setNote={props.setNote}  iterator={props.iterator} setiterator={props.setiterator}/>
        <Keys keyType = "blackKey" note="C#" pitch={props.pitch} testNote={props.testNote} setNote={props.setNote} iterator={props.iterator} setiterator={props.setiterator}/>
        <Keys keyType = "whiteKey" note="D" pitch={props.pitch} testNote={props.testNote} setNote={props.setNote} iterator={props.iterator} setiterator={props.setiterator}/>
        <Keys keyType = "blackKey" note="D#" pitch={props.pitch} testNote={props.testNote} setNote={props.setNote} iterator={props.iterator} setiterator={props.setiterator}/>
        <Keys keyType = "whiteKey" note="E" pitch={props.pitch} testNote={props.testNote} setNote={props.setNote} iterator={props.iterator} setiterator={props.setiterator}/>
        <Keys keyType = "whiteKey" note="F" pitch={props.pitch} testNote={props.testNote} setNote={props.setNote} iterator={props.iterator} setiterator={props.setiterator}/>
        <Keys keyType = "blackKey" note="F#" pitch={props.pitch} testNote={props.testNote} setNote={props.setNote} iterator={props.iterator} setiterator={props.setiterator}/>
        <Keys keyType = "whiteKey" note="G" pitch={props.pitch} testNote={props.testNote} setNote={props.setNote} iterator={props.iterator} setiterator={props.setiterator}/>
        <Keys keyType = "blackKey" note="G#" pitch={props.pitch} testNote={props.testNote} setNote={props.setNote} iterator={props.iterator} setiterator={props.setiterator}/>
        <Keys keyType = "whiteKey" note="A" pitch={props.pitch} testNote={props.testNote} setNote={props.setNote} iterator={props.iterator} setiterator={props.setiterator}/>
        <Keys keyType = "blackKey" note="A#" pitch={props.pitch} testNote={props.testNote} setNote={props.setNote} iterator={props.iterator} setiterator={props.setiterator}/>
        <Keys keyType = "whiteKey" note="B" pitch={props.pitch} testNote={props.testNote} setNote={props.setNote} iterator={props.iterator} setiterator={props.setiterator}/>

    </div>
);
}