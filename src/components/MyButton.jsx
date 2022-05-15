import React from 'react'
import { ThemeProvider } from '@emotion/react';
import { Button } from '@mui/material'
import { createTheme } from '@mui/material/styles';

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


const MyButton = (props) => {
  return (
    <ThemeProvider theme={theme}>
        <Button className="btn" variant="outlined" color="neutral">
           {props.title}
        </Button>
    </ThemeProvider>
  )
}

export default MyButton