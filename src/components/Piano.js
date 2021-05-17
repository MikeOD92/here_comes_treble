import React from 'react'
import Keys from './Keys.js'
// import './Piano.css'

class Piano extends React.Component{

    render(){
        return (
            <div class="piano">
                <Keys keyType = "whiteKey" note="C" pitch="4"/>
                <Keys keyType = "blackKey" note="C#" pitch="4"/>
                <Keys keyType = "whiteKey" note="D" pitch="4"/>
                <Keys keyType = "blackKey" note="D#" pitch="4"/>
                <Keys keyType = "whiteKey" note="E" pitch="4"/>
                <Keys keyType = "whiteKey" note="F" pitch="4"/>
                <Keys keyType = "blackKey" note="F#" pitch="4"/>
                <Keys keyType = "whiteKey" note="G" pitch="4"/>
                <Keys keyType = "blackKey" note="G#" pitch="4"/>
                <Keys keyType = "whiteKey" note="A" pitch="4"/>
                <Keys keyType = "blackKey" note="A#" pitch="4"/>
                <Keys keyType = "whiteKey" note="B" pitch="4"/>

                <Keys keyType = "whiteKey" note="C" pitch="5"/>
                <Keys keyType = "blackKey" note="C#" pitch="5"/>
                <Keys keyType = "whiteKey" note="D" pitch="5"/>
                <Keys keyType = "blackKey" note="D#" pitch="5"/>
                <Keys keyType = "whiteKey" note="E" pitch="5"/>
                <Keys keyType = "whiteKey" note="F" pitch="5"/>
                <Keys keyType = "blackKey" note="F#" pitch="5"/>
                <Keys keyType = "whiteKey" note="G" pitch="5"/>
                <Keys keyType = "blackKey" note="G#" pitch="5"/>
                <Keys keyType = "whiteKey" note="A" pitch="5"/>
                <Keys keyType = "blackKey" note="A#" pitch="5"/>
                <Keys keyType = "whiteKey" note="B" pitch="5"/>

                <Keys keyType = "whiteKey" note="C" pitch="6"/>
                <Keys keyType = "blackKey" note="C#" pitch="6"/>
                <Keys keyType = "whiteKey" note="D" pitch="6"/>
                <Keys keyType = "blackKey" note="D#" pitch="6"/>
                <Keys keyType = "whiteKey" note="E" pitch="6"/>
                <Keys keyType = "whiteKey" note="F" pitch="6"/>
                <Keys keyType = "blackKey" note="F#" pitch="6"/>
                <Keys keyType = "whiteKey" note="G" pitch="6"/>
                <Keys keyType = "blackKey" note="G#" pitch="6"/>
                <Keys keyType = "whiteKey" note="A" pitch="6"/>
                <Keys keyType = "blackKey" note="A#" pitch="6"/>
                <Keys keyType = "whiteKey" note="B" pitch="6"/>
            </div>
        )
    }

}

export default Piano;