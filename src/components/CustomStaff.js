
import React from 'react';

export default function CustomStaff(props) {

    return(
        <div id="staff">
            <div className="staff-line">
                {props.note === 'F'?(<div className="staffNote f"><img src='https://i.imgur.com/EToiP8v.png' className="stafficon" /></div>):""}
                {props.note === 'F#'?(<div className="staffNote f">#<img src='https://i.imgur.com/EToiP8v.png' className="stafficon" /></div>):""}
            </div>
                
            {/* {props.note === 'E'?(<div className="staffNote e">E</div>):""}
            {props.note === 'E#'?(<div className="staffNote e">#E</div>):""} */}

            <div className="staff-line">
                {props.note === 'D'?(<div className="staffNote d"><img src='https://i.imgur.com/eb2qMJY.png' className="stafficon" /></div>):""}
                {props.note === 'D#'?(<div className="staffNote d">#<img src='https://i.imgur.com/eb2qMJY.png' className="stafficon" /></div>):""}
            </div>
                {props.note === 'C'?(<div className="staffNote c"><img src='https://i.imgur.com/hTn810D.png' className="stafficon"/></div>):""}
                {props.note === 'C#'?(<div className="staffNote c">#<img src='https://i.imgur.com/hTn810D.png' className="stafficon"/></div>):""}
            <div className="staff-line">
                {props.note === 'B'?(<div className="staffNote b"><img src='https://i.imgur.com/3CbRb0M.png' className="stafficon" /></div>):""}
            </div>
                {props.note === 'A'?(<div className="staffNote a"><img src='https://i.imgur.com/AvLq4aP.png' className="stafficon"/></div>):""}
                {props.note === 'A#'?(<div className="staffNote a">#<img src='https://i.imgur.com/AvLq4aP.png' className="stafficon"/></div>):""}
            <div className="staff-line">
                {props.note === 'G'?(<div className="staffNote g"><img src='https://i.imgur.com/whLPx2N.png' className="stafficon" /></div>):""}
                {props.note === 'G#'?(<div className="staffNote g">#<img src='https://i.imgur.com/whLPx2N.png' className="stafficon" /></div>):""}
            </div>

                {/* {props.note === 'F'?(<div className="staffNote f"><img src='https://i.imgur.com/EToiP8v.png' className="stafficon" /></div>):""}
                {props.note === 'F#'?(<div className="staffNote f">#<img src='https://i.imgur.com/EToiP8v.png' className="stafficon" /></div>):""} */}

            <div className="staff-line">
                {props.note === 'E'?(<div className="staffNote e"><img src='https://i.imgur.com/1G7H6cv.png' className="stafficon" /></div>):""}
                {props.note === 'E#'?(<div className="staffNote e">#<img src='https://i.imgur.com/1G7H6cv.png' className="stafficon" /></div>):""}
            </div>
        </div>
    )
}