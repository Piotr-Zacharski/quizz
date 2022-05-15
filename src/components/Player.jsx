import React, { useState, useEffect } from "react";
import sound from '../../assets/sound.mp3'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import { Button, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#0971f1',
        darker: '#053e85',
      },
      neutral: {
        main: '#D6AE19',
        contrastText: '#0971f1',
      },
      text: {
        main: '#0971f1',
      },
    },
  });

const useAudio = url => {


  const [audio] = useState(new Audio(sound));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};


const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
        <ThemeProvider theme={theme}>
      <Button onClick={toggle} color="neutral">{playing ? <PauseCircleOutlineIcon /> : <PlayCircleOutlineIcon />}</Button>
        </ThemeProvider>
    </div>
  );
};

export default Player;
