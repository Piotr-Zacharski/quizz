import React from 'react'
import { Link } from 'react-router-dom'
import MyButton from './MyButton'
// import Player from './Player'
// import sound from '../../assets/sound.mp3'
import { Howl } from 'howler';

const Intro = () => {
  const sound = new Howl({
    src: ['../../assets/sound.mp3'],
    html5: true,
    preload: true,
  });
  return (
    <>
    <h1 className="intro-title">FAMILIADA</h1>
      <Link to="/board" className="link">
        <MyButton title="Nowa gra" onClick={() => sound.play()}/>
      </Link>
      {/* <Player src={sound}/> */}
    </>
  )
}

export default Intro