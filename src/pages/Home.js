import React from "react";
import api from "../api/Api";
import CardComp from "../components/CardComp";
import SliderComp from '../components/SliderComp';
import CardRankComp from "../components/CardRankComp";

const Home = () => {
    return (
        <div>
        <SliderComp url={api.fetchTrending}/>
        <CardComp title="Now Playing" url={api.fetchNowPlaying} />
        <CardComp title="Popular" url={api.fetchTrending} />
        <CardRankComp title="Up Coming" url={api.fetchUpComing}/>
        </div>
    );
};

export default Home;
