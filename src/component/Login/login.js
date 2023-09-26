import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import React, { useContext } from 'react'
import tempContext from "../TempContext";

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const context = useContext(tempContext);
    const {userName, setUserName } = context
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:4000/api/users/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json)
        if (json.userExists) {
            // Save the auth token and redirect
            setUserName(json.name);
            const name = userName;
            console.log(userName);
            localStorage.setItem('token', json.authtoken)
            navigate('/student');
        }
        else {
            alert("Please Enter Valid Credentials")
            setCredentials({ email: "", password: "" });
            console.log("internal error")
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }


    return (
        <section className="vh-100">
            <div className="container-fluid h-custom mt-3">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid"
                            alt="Sample"
                        />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form>

                            {/* Email input */}
                            <div className="form-outline mb-4">
                                <input
                                    name='email'
                                    type="email"
                                    id="email"
                                    className="form-control form-control-lg"
                                    placeholder="Enter a valid email address"
                                    onChange={onChange}
                                    value={credentials.email}
                                />
                                <label className="form-label" htmlFor="form3Example3">
                                    Email address
                                </label>
                            </div>

                            {/* Password input */}
                            <div className="form-outline mb-3">
                                <input
                                    name='password'
                                    type="password"
                                    id="password"
                                    className="form-control form-control-lg"
                                    placeholder="Enter password"
                                    onChange={onChange}
                                    value={credentials.password}
                                />
                                <label className="form-label" htmlFor="form3Example4">
                                    Password
                                </label>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button
                                    type="button"
                                    className="btn btn-primary btn-lg"
                                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                                    onClick={handleSubmit}
                                >
                                    Login
                                </button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">
                                    Don't have an account?           <Link to="/register" className="">register</Link>

                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Right */}
        </section>
    );
};

export default Login;



