import React from 'react';
import NavbarComp from './components/NavbarComp';
import SliderComp from './components/SliderComp';
import api from "../src/api/Api";
import CardComp from './components/CardComp';
import CardRankComp from './components/CardRankComp';
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
      <NavbarComp/>
      <SliderComp url={api.fetchTrending}/>
      <CardComp title="Now Playing" url={api.fetchNowPlaying}/>
      <CardComp title="Popular" url={api.fetchTrending}/>
      <CardRankComp title="Up Coming" url={api.fetchUpComing}/>
      <Footer />
    </div>
  )
}

export default App