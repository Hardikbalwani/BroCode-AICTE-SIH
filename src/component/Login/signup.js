import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
    const [credentials, setCredentials] = useState({name:"", email:"", password:"", cpassword:""});
    const navigate = useNavigate();
  
    const handleSubmit =async (e) => {
      e.preventDefault();
      const {name, email, password} = credentials;
      const response = await fetch("http://localhost:4000/api/users/register", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({name, email, password})
        });
        const json = await response.json();
        console.log(json)

        if(!json.userExists)
            {
              // Save the auth token and redirect
              localStorage.setItem('token', json.authtoken)
              console.log("user registered successfully")
              navigate("/login")
            }
            else
            {
                console.log("internal error");
            }
        
  }
  const onChange = (e)=>{
      setCredentials({...credentials, [e.target.name]: e.target.value})
  }
    return (
        <section className="vh-100">
            <div className="container-fluid h-custom">
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
                                    name="name"
                                    type="name"
                                    id="name"
                                    className="form-control form-control-lg"
                                    placeholder="Enter your name"
                                    onChange={onChange}
                                />
                                <label className="form-label" htmlFor="form3Example3">
                                    {/* Name */}
                                </label>
                            </div>

                            <div className="form-outline mb-4">
                                <input
                                    name="email"
                                    type="email"
                                    id="email"
                                    className="form-control form-control-lg"
                                    placeholder="Enter a valid email address"
                                    onChange={onChange}
                                    
                                />
                                <label className="form-label" htmlFor="form3Example3">
                                    {/* Email address */}
                                </label>
                            </div>

                            {/* Password input */}
                            <div className="form-outline mb-3">
                                <input
                                name="password"
                                    type="password"
                                    id="password"
                                    className="form-control form-control-lg"
                                    placeholder="Enter password"
                                    onChange={onChange}

                                />
                               
                            </div>

                            <div className="form-outline mb-3">
                                <input
                                    type="password"
                                    id="password"
                                    className="form-control form-control-lg"
                                    placeholder="Confirm password"
                                />
                               
                            </div>


                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button
                                    type="button"
                                    className="btn btn-primary btn-lg"
                                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                                    onClick={handleSubmit}
                                >
                                    SignUp
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
           
        </section>
    );
};

export default Signup;
