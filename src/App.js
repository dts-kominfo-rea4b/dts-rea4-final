import React from 'react';
import NavbarComp from './components/NavbarComp';
import SliderComp from './components/SliderComp';
import api from "../src/api/Api";


const App = () => {
  return (
    <div>
      <NavbarComp/>
      <SliderComp url={api.fetchTrending}/>
    </div>
  )
}

export default App