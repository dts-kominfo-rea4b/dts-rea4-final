import './App.css';
import { Navbar } from './components/Navbar';
import { Container, Typography, Box } from '@mui/material'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xxl">
        <Outlet />
      </Container>
      <footer>
        <Box sx={{display: 'flex', backgroundColor: '#F8F8F8', justifyContent: 'center', alignItems: 'center', padding: '30px 0'}}>
        <Typography sx={{fontWeight: 700, color: '#949494', fontFamily: "'Playfair Display', serif" }}>Copyright {new Date().getFullYear()} News Portal</Typography>
        </Box>
      </footer>
    </div>
  );
}

export default App;
