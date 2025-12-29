'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: 'var(--font-geist-sans)',
     body1: {
      fontFamily: 'var(--font-public-sans)',
    },
    body2: {
      fontFamily: 'var(--font-myanmar-khyay)',
    },
  },

});

export default theme;
