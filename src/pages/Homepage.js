import React from 'react'
import { GameImageData } from '../components/GameImageData'
import GameImageSlider from '../components/GameImageSlider'


const Homepage = () => {
  return ( 
  <GameImageSlider slides={GameImageData} sample={GameImageData}/>
  )
}

export default Homepage
