import React from "react";

const Educator = (props) => {
  const educator = {
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    dateOfBirth: 'May 20, 1980',
    gender: 'Female',
    address: '456 Elm Street, Townville, State, 67890',
    coursesTaught: [
      { courseId: 'course_id_1', courseName: 'Computer Science 101' },
      { courseId: 'course_id_2', courseName: 'Data Structures' },
    ],
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
            Welcome Rushikesh {props.userName}
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
      {/* Decreased the width to col-md-2 */}
      <div className="square-box p-3">
        <div className="btn-group-vertical w-100">
          <button className="btn btn-primary mb-2">
            Change Password
          </button>
          <button className="btn btn-danger mb-2">Logout</button>
          <button className="btn btn-success">Dashboard</button>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-10 mb-5 "> {/* Use col-md-10 for the educator details */}
      <div className="d-flex justify-content-center"> {/* Center the content */}
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{`${educator.firstName} ${educator.lastName}`}</h5>
            <p className="card-text">Email: {educator.email}</p>
            <p className="card-text">Date of Birth: {educator.dateOfBirth}</p>
            <p className="card-text">Gender: {educator.gender}</p>
            <p className="card-text">Address: {educator.address}</p>
            <h6 className="card-subtitle mt-3 mb-2 text-muted">Courses Taught:</h6>
            <ul className="list-group">
              {educator.coursesTaught.map((course) => (
                <li key={course.courseId} className="list-group-item">
                  {course.courseName}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Educator;
