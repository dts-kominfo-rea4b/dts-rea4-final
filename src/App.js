import "./App.css";
import Login from "./containers/Login";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./containers/Register";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
                            <h1>Home Page</h1>
                            <Link to={"/login"}>to Login</Link>
                        </div>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    );
}

export default App;
