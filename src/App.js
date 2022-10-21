import "./App.css";
import Login from "./containers/Login";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./containers/Register";
import { auth } from "./configs/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { Button } from "react-bootstrap";

function App() {
    const [user] = useAuthState(auth);

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
                            <h1>Home {user ? user.email : "Page"}</h1>
                            {user ? (
                                <Button onClick={logout}>
                                    <h2>logout</h2>
                                </Button>
                            ) : (
                                <Link to="/login">
                                    <Button>
                                        <h2>login</h2>
                                    </Button>
                                </Link>
                            )}
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
