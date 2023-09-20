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
            Welcome {educator.firstName}
          </span>
          
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
                <button className="btn btn-danger mb-2">Logout</button>
                <button className="btn btn-success">Dashboard</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 mb-5">
            <div className="user-details p-3">
              <ul>
                <li>
                  <strong>Application ID: </strong> PF21100341
                </li>
                <li>
                  <strong>Email:</strong> {educator.email}
                </li>
                <li>
                  <strong>Name:</strong> {educator.firstName} {educator.lastName}
                </li>
              </ul>
              <li>
                <strong>Account Status:</strong> Active
              </li>
              <li className="mb-4">
                <strong>Course Taught : </strong> Computer Science 101, Data Structures
              </li>
              <li className="mb-4">
                <strong>Total students enrolled</strong> 27
              </li>

            
</div>
     </div>
          </div>
        </div>
      
    </>
  );
};

export default Educator;
