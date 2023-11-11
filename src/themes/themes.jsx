  
import { createTheme} from '@mui/material/styles';

export const customTheme = (outerTheme) =>
  createTheme({
    mode: outerTheme,
    palette: {
      mode: 'light',
      primary: {
        main: '#3e7b94',
        light: '#396275',
        dark: '#0e3341',
      },
      secondary: {
        main: '#ff5151',
        dark: '#f16161',
        light: '#ff8383',
      },
      divider: 'rgba(41,41,41,0.12)',
      warning: {
        main: '#ff0002',
      },
  
    },
    typography: {
      fontFamily: '"Quicksand", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 400,
      },
      h2: {
        fontSize: '3.9rem',
      },
      h3: {
        fontSize: '3.1rem',
      },
      h4: {
        lineHeight: 0.72,
        fontSize: '2.4rem',
      },
      h5: {
        fontWeight: 200,
        fontSize: '1.6rem',
      },
      body1: {
        fontSize: '1.2rem',
      },
      overline: {
        lineHeight: 2.51,
      },
      button: {
        fontWeight: 1000,
        fontSize: '1.2rem',
      },
      caption: {
        fontSize: '0.6rem',
        fontWeight: 500,
        lineHeight: 1.61,
      },
      body2: {
        fontSize: '1rem',
      },
    },
    container: {
      width: '100%',
    },
    transitions: {
      duration: {
        shortest: 150,
        shorter: 200,
        short: 250,
        // most basic recommended timing
        standard: 300,
        // this is to be used in complex animations
        complex: 375,
        // recommended when something is entering screen
        enteringScreen: 225,
        // recommended when something is leaving screen
        leavingScreen: 195,
      },
    },


  },);







