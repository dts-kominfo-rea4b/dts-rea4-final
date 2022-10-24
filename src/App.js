import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Paper, ThemeProvider } from '@mui/material';
import theme from './themes/theme';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Paper className='container-background'>
        <Outlet />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
