import React from 'react'
import { GameImageData } from '../components/GameImageData'
import GameImageSlider from '../components/GameImageSlider'


const Homepage = () => {
  return ( 
  <GameImageSlider slides={GameImageData}/>
  )
}

export default Homepage
