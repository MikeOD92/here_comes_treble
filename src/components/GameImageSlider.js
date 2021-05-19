import React from 'react'
import { GameImageData } from './GameImageData'
const GameImageSlider = () => {
  return (
    <div>
      {GameImageData.map((slide, index) => {
        return (
          <img src={slide.image} alt="CHANGE THIS"></img>
        )
      })}
    </div>
  )
}

export default GameImageSlider
