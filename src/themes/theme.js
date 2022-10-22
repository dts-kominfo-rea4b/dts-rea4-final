import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#2a4055',
      light: '#ffffff',
      dark: '#142636',
    },
    secondary: {
      main: '#4ccb70',
      dark: '#289b7f',
      contrastText: '#172b3d',
      light: '#ffffff',
    },
    background: {
      default: '#172b3d',
      paper: '#0f1f2e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#4ccb70',
      disabled: '#8a949d',
      hint: '#37b6e5',
    },
    error: {
      main: '#f74a2f',
    },
    warning: {
      main: '#fede4a',
    },
  },
  type: 'light',
  primary: {
    main: '#4ccb70',
  },
  secondary: {
    main: '#4ccb70',
    dark: '#289b7f',
    contrastText: '#172b3d',
    light: '#ffffff',
  },
  background: {
    default: '#fbfcf3',
    paper: '#eff6e9',
  },
  text: {
    secondary: '#289b7f',
    disabled: '#8a949d',
    hint: '#368be1',
    primary: '#172b3d',
  },
  error: {
    main: '#f74a2f',
  },
  warning: {
    main: '#fede4a',
  },
});

export default theme;
