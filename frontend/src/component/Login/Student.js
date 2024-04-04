import {  useNavigate } from "react-router-dom";
import React, { useContext } from 'react'
import tempContext from "../TempContext";


const Student = (props) => {
  const history = useNavigate();
  const context = useContext(tempContext);
  const {userName} = context
  
  const handleLogout = () => {
    // Perform any logout logic if needed
    // Then, navigate to the '/login' <route></route>
    history('/login');
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <span className="navbar-brand">
            <img
              style={{ width: "70px" }}
              src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
              alt=""
            />{" "}
            Welcome {userName} 
          </span>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <span className="nav-link">
                  | Application ID: {props.appId}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-1 mx-2">
        <div className="row">
          <div className="col-12 col-md-2">
            {" "}
            {/* Decreased the width to col-md-2 */}
            <div className="square-box p-3">
              <div className="btn-group-vertical w-100">
                <button className="btn btn-primary mb-2">
                  Change Password
                </button>
                <button className="btn btn-danger mb-2" onClick={handleLogout
                }>Logout</button>
                <button className="btn btn-success">Dashboard</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 mb-5">
            <div className="user-details p-3">
              <ul>
                <li>
                  <strong>Application ID:</strong> {props.appId}
                </li>
                <li>
                  <strong>Application Status:</strong> In Progress
                </li>
                <li>
                  <strong>Name:</strong> {userName}
                </li>
              </ul>
              <li>
                <strong>Account Status:</strong> Active
              </li>
              <li className="mb-4">
                <strong>Courses Enrolled</strong>
              </li>
              <div className="row">
                <div className="col-md-4">
                  <div className="card mb-3" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">Web Dev</h5>
                      <p className="card-text">

                        Dive into the world of web development with this comprehensive course. Learn HTML, CSS, and JavaScript to build interactive and responsive websites.
                        <br />
                        <strong>Instructor:</strong> "Instructor 3",
                        <br />
                        <strong>duration:</strong>  "12 weeks" <br />
                        <strong>startDate:</strong>
                        "September 1, 2023",

                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div
                    className="card mb-3"
                    style={{ width: "18rem", marginLeft: "10rem" }}
                  >
                    <div className="card-body">
                      <h5 className="card-title">Data Science</h5>
                      <p className="card-text">
                        Explore the fundamentals of data science and analytics. Gain insights into data manipulation, visualization, and predictive modeling.
                        <br />
                        <strong>Instructor:</strong> "Instructor 3",
                        <br />
                        <strong>duration:</strong>  "12 weeks" <br />
                        <strong>startDate:</strong>
                        "September 1, 2023",
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div
                    className="card mb-3"
                    style={{ width: "18rem", marginLeft: "20rem" }}
                  >
                    <div className="card-body">
                      <h5 className="card-title">JavaScript</h5>
                      <p className="card-text">
                        Take your JavaScript skills to the next level. Master advanced concepts like closures, asynchronous programming, and ES6 features.
                        <br />
                        <strong>Instructor:</strong> "Instructor 3",
                        <br />
                        <strong>duration:</strong>  "12 weeks" <br />
                        <strong>startDate:</strong>
                        "September 1, 2023",
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">



              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Student;
