import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <section className="vh-100 gradient-custom" style={{ backgroundImage: "radial-gradient(circle,#b9090b,#141414)" }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white">
                            <div className="card-body p-5 text-center">
                                <div className="mb-md-5 mt-md-4 pb-5">
                                    <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                                    <p className="text-white-50 mb-5">Please enter your email and password!</p>

                                    <div className="form-outline form-white mb-4">
                                        <label className="form-label" htmlFor="typeEmailX">
                                            Email
                                        </label>
                                        <input type="email" id="typeEmailX" className="form-control form-control-lg" />
                                    </div>

                                    <div className="form-outline form-white mb-4">
                                        <label className="form-label" htmlFor="typePasswordX">
                                            Password
                                        </label>
                                        <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                                    </div>

                                    <p className="small mb-5 pb-lg-2">
                                        <span className="text-white-50">{/* message here */}</span>
                                    </p>

                                    <button className="btn btn-outline-light btn-lg px-5" type="submit">
                                        Register
                                    </button>
                                </div>

                                <div>
                                    <p className="mb-0">
                                        Already have an account?{" "}
                                        <Link to={"/login"} className="text-white-50 fw-bold">
                                            Sign In
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

export default Register;
