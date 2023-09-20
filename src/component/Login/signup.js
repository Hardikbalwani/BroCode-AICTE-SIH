import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
const Signup = () => {
    return (
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid"
                            alt="Sample image"
                        />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form>
                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                <p className="lead fw-normal mb-0 me-3">Sign up with</p>
                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                <FontAwesomeIcon icon={faFacebookF} />
                                </button>

                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                <FontAwesomeIcon icon={faTwitter} />
                                </button>

                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                                </button>
                            </div>

                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0">Or</p>
                            </div>

                            {/* Email input */}
                            <div className="form-outline mb-4">
                                <input
                                    type="name"
                                    id="form3Example3"
                                    className="form-control form-control-lg"
                                    placeholder="Enter your name"
                                />
                                <label className="form-label" htmlFor="form3Example3">
                                    {/* Name */}
                                </label>
                            </div>

                            <div className="form-outline mb-4">
                                <input
                                    type="email"
                                    id="form3Example3"
                                    className="form-control form-control-lg"
                                    placeholder="Enter a valid email address"
                                />
                                <label className="form-label" htmlFor="form3Example3">
                                    {/* Email address */}
                                </label>
                            </div>

                            {/* Password input */}
                            <div className="form-outline mb-3">
                                <input
                                    type="password"
                                    id="form3Example4"
                                    className="form-control form-control-lg"
                                    placeholder="Enter password"
                                />
                                <label className="form-label" htmlFor="form3Example4">
                                    {/* Enter Password */}
                                </label>
                            </div>

                            <div className="form-outline mb-3">
                                <input
                                    type="password"
                                    id="form3Example4"
                                    className="form-control form-control-lg"
                                    placeholder="Confirm password"
                                />
                                <label className="form-label" htmlFor="form3Example4">
                                    {/* Confirm Password */}
                                </label>
                            </div>


                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button
                                    type="button"
                                    className="btn btn-primary btn-lg"
                                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                                >
                                    SignUp
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
                {/* Copyright */}
                <div className="text-white mb-3 mb-md-0">
                    Copyright © 2020. All rights reserved.
                </div>
                {/* Right */}
                <div>
                    <a href="#!" className="text-white me-4">
                    <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="#!" className="text-white me-4">
                    <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="#!" className="text-white me-4">
                        <FontAwesomeIcon icon={faGoogle} />
                    </a>
                    <a href="#!" className="text-white">
                    <FontAwesomeIcon icon={faLinkedinIn} />

                    </a>
                </div>
                {/* Right */}
            </div>
        </section>
    );
};

export default Signup;