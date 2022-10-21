import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../configs/firebase";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);

            navigate("/");
        } catch (error) {
            setMessage("Wrong email or password");
        }
    };

    return (
        <section className="vh-100 gradient-custom" style={{ backgroundImage: "radial-gradient(circle,#b9090b,#141414)" }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white">
                            <div className="card-body p-5 text-center">
                                <div className="mb-md-5 mt-md-4 pb-5">
                                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                    <p className="text-white-50 mb-5">Please enter your email and password!</p>

                                    <div className="form-outline form-white mb-4">
                                        <label className="form-label" htmlFor="email">
                                            Email
                                        </label>
                                        <input type="email" id="email" className="form-control form-control-lg" onChange={({ target }) => setEmail(target.value)} />
                                    </div>

                                    <div className="form-outline form-white mb-4">
                                        <label className="form-label" htmlFor="password">
                                            Password
                                        </label>
                                        <input type="password" id="password" className="form-control form-control-lg" onChange={({ target }) => setPassword(target.value)} />
                                    </div>

                                    <p className="mb-5 pb-lg-2 text-danger">{message}</p>

                                    <button className="btn btn-outline-light btn-lg px-5" type="submit" onClick={handleSubmit}>
                                        Login
                                    </button>
                                </div>

                                <div>
                                    <p className="mb-0">
                                        Don't have an account?{" "}
                                        <Link to={"/register"} className="text-white-50 fw-bold">
                                            Sign Up
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
