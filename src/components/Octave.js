import Keys from './Keys.js'
// import * as Tone from "tone";

export default function Octave(props) {
// const synth = new Tone.Synth().toDestination();

// const sound = (note) => {
//     synth.triggerAttackRelease(`${note}${props.pitch}`, "8n");
//     console.log(`you played ${note}`)
// };
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
    
        {/* <div id="C" className="wholeKey" onClick={() => sound("C")}>
            {props.showNote === true?('C'):("")}
        </div>

        <div id="Csharp" className="sharpkey" onClick={() => sound("C#")}>
            {props.showNote === true?('C#'):("")}
        </div>

        <div id="D" className="wholeKey" onClick={() => sound("D")}>
            {props.showNote === true?('D'):("")}
        </div>

        <div id="Dsharp" className="sharpkey" onClick={() => sound("D#")}>
            {props.showNote === true?('D#'):("")}
        </div>

        <div id="E" className="wholeKey" onClick={() => sound("E")}>
            {props.showNote === true?('E'):("")}
        </div>

        <div id="F" className="wholeKey" onClick={() => sound("F")}>
            {props.showNote === true?('F'):("")}
        </div>

        <div id="Fsharp" className="sharpkey" onClick={() => sound("F#")}>
            {props.showNote === true?('F#'):("")}
        </div>

        <div id="G" className="wholeKey" onClick={() => sound("G")}>
            {props.showNote === true?('G'):("")}
        </div>

        <div id="Gsharp" className="sharpkey" onClick={() => sound("G#")}>
            {props.showNote === true?('G#'):("")}
        </div>

        <div id="A" className="wholeKey" onClick={() => sound("A")}>
            {props.showNote === true?('A'):("")}
        </div>

        <div id="Asharp" className="sharpkey" onClick={() => sound("A#")}>
            {props.showNote === true?('A#'):("")}
        </div>

        <div id="B" className="wholeKey" onClick={() => sound("B")}>
            {props.showNote === true?('B'):("")}
        </div> */}
    </div>
);
}