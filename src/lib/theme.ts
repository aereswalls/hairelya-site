'use client'

import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#a47864',
    },
    secondary: {
      main: '#fce6d6',
    },
    background: {
      default: '#fffaf5',
      paper: '#ffffff',
    },
    text: {
      primary: '#2E2E2E',
    },
  },
  typography: {
    fontFamily: 'Noto Sans JP, sans-serif',
  },
  shape: {
    borderRadius: 12,
  },
})

export default theme
