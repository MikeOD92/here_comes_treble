
import React from 'react';

export default function CustomStaff(props) {

    return(
        <div id="staff">
            <div className="staff-line">
                {props.note === 'F'?(<div className="staffNote f">F</div>):""}
                {props.note === 'F#'?(<div className="staffNote f">#F</div>):""}
            </div>
                
            {props.note === 'E'?(<div className="staffNote e">E</div>):""}
            {props.note === 'E#'?(<div className="staffNote e">#E</div>):""}

            <div className="staff-line">
                {props.note === 'D'?(<div className="staffNote d">D</div>):""}
                {props.note === 'D#'?(<div className="staffNote d">#D</div>):""}
            </div>

            {props.note === 'C'?(<div className="staffNote c">C</div>):""}
            {props.note === 'C#'?(<div className="staffNote c">#C</div>):""}

            <div className="staff-line">
                {props.note === 'B'?(<div className="staffNote b">B</div>):""}
            </div>

            {props.note === 'A'?(<div className="staffNote a">A</div>):""}
            {props.note === 'A#'?(<div className="staffNote a">#A</div>):""}

            <div className="staff-line">
                {props.note === 'G'?(<div className="staffNote g">G</div>):""}
                {props.note === 'G#'?(<div className="staffNote g">#G</div>):""}
            </div>

                {props.note === 'F'?(<div className="staffNote f">F</div>):""}
                {props.note === 'F#'?(<div className="staffNote f">#F</div>):""}

            <div className="staff-line">
                {props.note === 'E'?(<div className="staffNote e">E</div>):""}
                {props.note === 'E#'?(<div className="staffNote e">#E</div>):""}
            </div>
        </div>
    )
}