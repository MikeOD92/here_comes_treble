import React, {useState} from 'react';
import { GameImageData } from './GameImageData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const GameImageSlider = ({slides, sample, songPath}) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const previousSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  console.log(current)

  if(!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={previousSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {GameImageData.map((slide, index) => {
        return (
          <div className={index === current ? 'slide active' : 'slide'} key = {index}>
            {index === current && (
               <Link to={slide.songPath} >
               <img src={slide.image} alt={slide.alt} onMouseOver={slide.sample} className="image"></img>
               </Link>
            )}
          </div>
        )
      })}
    </section>
  )
}

export default GameImageSlider
