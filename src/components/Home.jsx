import React from 'react'
import { Link } from 'react-router-dom'
import MyButton from './MyButton'
// import Player from './Player'
// import sound from '../../assets/sound.mp3'

const Intro = (toggle) => {
  return (
    <>
    <h1 className="intro-title">FAMILIADA</h1>
      <Link to="/board" className="link">
        <MyButton title="GRAJ" onClick={() => toggle}/>
      </Link>
      {/* <Player src={sound}/> */}
    </>
  )
}

export default Intro