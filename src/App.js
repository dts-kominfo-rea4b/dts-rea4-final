import request from "./api/Api";
import app from "./api/Axios";
import "./App.css";
import NavbarComp from "./components/NavbarComp";
import SliderComp from "./components/SliderComp";

function App() {
    return (
        <div className="App">
            <NavbarComp />
            <SliderComp url={app.getUri() + request.fetchNowPlaying} />
        </div>
    );
}

export default App;
