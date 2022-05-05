import React from 'react'
import img from '../../assets/quiz-night.jpg'

const Intro = () => {
  return (
    <img className="quiz-image" src={img} alt="intro" style={{objectFit: 'contain'}} />
  )
}

export default Intro