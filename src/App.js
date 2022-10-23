import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Paper, ThemeProvider } from '@mui/material';
import theme from './themes/theme';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { CookiesProvider } from 'react-cookie';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CookiesProvider>
        <Paper className='App'>
          <Navbar />
          <Outlet />
        </Paper>
      </CookiesProvider>
    </ThemeProvider>
  );
}

export default App;
